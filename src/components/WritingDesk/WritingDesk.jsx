// src/components/WritingDesk/WritingDesk.jsx
import { useState, useEffect } from "react";
import DeskSurface from "./DeskSurface";
import LeftShelf from "./LeftShelf";
import RightShelf from "./RightShelf";
import ScenicView from "./ScenicView";

export default function WritingDesk() {
  const [deskConfig] = useState({
    theme: "modern-wood",
    view: "mountain-lake",
    lighting: "warm-evening",
    ambientSound: "forest-rain",
  });

  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize desk environment
  useEffect(() => {
    // Load user preferences
    // Set up ambient environment
    // Initialize writing session
    setIsInitialized(true);
  }, []);

  return (
    <div className="writing-desk-container">
      <ScenicView config={deskConfig} />

      <div className="desk-workspace">
        <LeftShelf />
        <DeskSurface config={deskConfig} />
        <RightShelf />
      </div>

      {/* Ambient layer for sounds, lighting effects */}
      <div className="ambient-layer">
        {/* Particle effects, lighting, sound controls */}
      </div>
    </div>
  );
}
