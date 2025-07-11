// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import "../App.css";

export default function Home() {
  const observerRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const [showThirdPoem, setShowThirdPoem] = useState(false);
  const totalLines = 8;

  // Set dark mode as default theme on component mount
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
      document.documentElement.setAttribute("data-theme", "dark-mode");
    }
  }, []);

  // Trigger third poem after all lines revealed with proper reading time
  useEffect(() => {
    if (revealedCount === totalLines && !showThirdPoem) {
      // Give 8 seconds to read and appreciate the complete second poem
      setTimeout(() => {
        setShowThirdPoem(true);
      }, 8000); // 8 seconds - enough time to read the full second poem
    }
  }, [revealedCount, showThirdPoem]);

  // Intersection Observer for mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              !entry.target.classList.contains("mobile-revealed")
            ) {
              const thoughtLine = entry.target;
              thoughtLine.classList.add("mobile-revealed");
              setRevealedCount((prev) => prev + 1);
            }
          });
        },
        { threshold: 0.6 }
      );

      const thoughtLines = document.querySelectorAll(".thought-line");
      thoughtLines.forEach((line) => {
        observerRef.current.observe(line);
      });
    } else {
      // Desktop hover handlers
      const thoughtLines = document.querySelectorAll(".thought-line");
      thoughtLines.forEach((line) => {
        line.addEventListener("mouseenter", () => {
          if (!line.classList.contains("desktop-revealed")) {
            setTimeout(() => {
              line.classList.add("desktop-revealed");
              setRevealedCount((prev) => prev + 1);
            }, 800); // Slower, more contemplative
          }
        });
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="three-poem-interface">
      <div className="poem-container">
        {/* Progress indicator */}
        <div className="journey-progress">
          <div className="progress-dots">
            <div
              className={`progress-dot ${revealedCount > 0 ? "active" : ""}`}
            >
              <span>poem of longing</span>
            </div>
            <div
              className={`progress-dot ${
                revealedCount >= totalLines ? "active" : ""
              }`}
            >
              <span>poem of wholeness</span>
            </div>
            <div className={`progress-dot ${showThirdPoem ? "active" : ""}`}>
              <span>poem of essence</span>
            </div>
          </div>
        </div>

        {/* The three poems */}
        <div
          className={`living-poems ${showThirdPoem ? "third-poem-mode" : ""}`}
        >
          <div className="thought-line">
            <div className="incomplete-thought">
              I am
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">Michael Weaver</div>
          </div>

          <div className="thought-line">
            <div className="incomplete-thought">
              only a name
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">
              until my actions outweigh my words
            </div>
          </div>

          <div className="thought-line">
            <div className="incomplete-thought">
              my lips will speak of
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">pursuing my passions</div>
          </div>

          <div className="thought-line">
            <div className="incomplete-thought">
              the rest of my life
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">fueling my dreams</div>
          </div>

          <div className="thought-line">
            <div className="incomplete-thought">
              if my dreams are
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">not igniting my fire</div>
          </div>

          <div className="thought-line">
            <div className="incomplete-thought">
              burning without fuel
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">is failing to live.</div>
          </div>

          <div className="thought-line">
            <div className="incomplete-thought">
              to create, build, and
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">fuel other fires</div>
          </div>

          <div className="thought-line">
            <div className="incomplete-thought">
              contribute to society
              <div className="breath-zone"></div>
            </div>
            <div className="complete-thought">by inspiring others</div>
          </div>
        </div>

        {/* Journey completion indicator */}
        {showThirdPoem && (
          <div className="journey-complete">
            <div className="completion-text">three poems, one truth</div>
          </div>
        )}
      </div>
    </div>
  );
}
