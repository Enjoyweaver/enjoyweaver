// src/pages/Writer.jsx
import { useState, useEffect } from "react";
import WritingDesk from "../components/WritingDesk/WritingDesk";
import "../styles/writing-desk.css";

export default function Writer() {
  const [isLoading, setIsLoading] = useState(true);
  const [userPreferences, setUserPreferences] = useState({
    theme: "modern-wood",
    view: "mountain-lake",
    lighting: "warm-evening",
    ambientSound: "forest-rain",
  });

  useEffect(() => {
    // Load user preferences from localStorage
    const savedPreferences = localStorage.getItem("writer-preferences");
    if (savedPreferences) {
      setUserPreferences(JSON.parse(savedPreferences));
    }

    // Initialize the writing environment
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handlePreferencesChange = (newPreferences) => {
    setUserPreferences(newPreferences);
    localStorage.setItem("writer-preferences", JSON.stringify(newPreferences));
  };

  if (isLoading) {
    return (
      <div className="writer-loading">
        <div className="loading-sanctuary">
          <div className="loading-text">
            Preparing your writing sanctuary...
          </div>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="writer-page">
      <WritingDesk
        preferences={userPreferences}
        onPreferencesChange={handlePreferencesChange}
      />

      <style>
        {`
.writer-page {
  width: 100%;
  min-height: 100vh;
  background: var(--bac1);
  overflow-x: hidden;
}


          .writer-loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, var(--bac1), var(--bac2));
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .loading-sanctuary {
            text-align: center;
            padding: 2rem;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .loading-text {
            font-size: 1.25rem;
            color: var(--header-color);
            margin-bottom: 1.5rem;
            font-weight: 500;
          }

          .loading-progress {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
          }

          .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--effect-1), var(--effect-2));
            border-radius: 2px;
            animation: progressLoad 2s ease-in-out infinite;
          }

          @keyframes progressLoad {
            0% { width: 0; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </div>
  );
}
