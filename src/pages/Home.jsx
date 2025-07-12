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
      }, 8000);
    }
  }, [revealedCount, showThirdPoem]);

  // Enhanced interaction handlers
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Mobile scroll reveal with Intersection Observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const thoughtLine = entry.target;
              const lineIndex = parseInt(thoughtLine.dataset.lineIndex);

              // Only reveal if this is the next line in sequence
              if (
                lineIndex === revealedCount &&
                !thoughtLine.classList.contains("mobile-revealed")
              ) {
                setTimeout(() => {
                  thoughtLine.classList.add("mobile-revealed");
                  setRevealedCount(lineIndex + 1);
                }, 600); // Contemplative delay
              }
            }
          });
        },
        { threshold: 0.7 }
      );

      const thoughtLines = document.querySelectorAll(".thought-line");
      thoughtLines.forEach((line) => {
        observerRef.current.observe(line);
      });
    } else {
      // Desktop hover handlers with sequential revelation
      const thoughtLines = document.querySelectorAll(".thought-line");
      thoughtLines.forEach((line, index) => {
        const handleMouseEnter = () => {
          // Only allow revelation if this is the next line in sequence
          if (
            index === revealedCount &&
            !line.classList.contains("desktop-revealed")
          ) {
            setTimeout(() => {
              line.classList.add("desktop-revealed");
              setRevealedCount(index + 1);
            }, 900); // Slower, more contemplative
          }
        };

        line.addEventListener("mouseenter", handleMouseEnter);

        // Store the handler for cleanup
        line._mouseEnterHandler = handleMouseEnter;
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Clean up desktop event listeners
      const thoughtLines = document.querySelectorAll(".thought-line");
      thoughtLines.forEach((line) => {
        if (line._mouseEnterHandler) {
          line.removeEventListener("mouseenter", line._mouseEnterHandler);
          delete line._mouseEnterHandler;
        }
      });
    };
  }, [revealedCount]);

  return (
    <div className="three-poem-interface">
      <div className="poem-container">
        {/* Enhanced instruction with breathing indicator */}
        <div className="journey-instruction">
          <p className="instruction-text">
            <span className="mobile-instruction">
              scroll to awaken each line
            </span>
          </p>
        </div>

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

        {/* The three poems with enhanced breathing zones */}
        <div
          className={`living-poems ${showThirdPoem ? "third-poem-mode" : ""}`}
        >
          <div className="thought-line" data-line-index="0">
            <div className="incomplete-thought">
              I am
              <div
                className={`breath-zone ${
                  revealedCount === 0 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">Michael Weaver</div>
          </div>

          <div className="thought-line" data-line-index="1">
            <div className="incomplete-thought">
              only a name
              <div
                className={`breath-zone ${
                  revealedCount === 1 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">
              until my actions outweigh my words
            </div>
          </div>

          <div className="thought-line" data-line-index="2">
            <div className="incomplete-thought">
              my lips will speak of
              <div
                className={`breath-zone ${
                  revealedCount === 2 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">pursuing my passions</div>
          </div>

          <div className="thought-line" data-line-index="3">
            <div className="incomplete-thought">
              the rest of my life
              <div
                className={`breath-zone ${
                  revealedCount === 3 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">fueling my dreams</div>
          </div>

          <div className="thought-line" data-line-index="4">
            <div className="incomplete-thought">
              if my dreams are
              <div
                className={`breath-zone ${
                  revealedCount === 4 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">not igniting my fire</div>
          </div>

          <div className="thought-line" data-line-index="5">
            <div className="incomplete-thought">
              burning without fuel
              <div
                className={`breath-zone ${
                  revealedCount === 5 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">is failing to live.</div>
          </div>

          <div className="thought-line" data-line-index="6">
            <div className="incomplete-thought">
              to create, build, and
              <div
                className={`breath-zone ${
                  revealedCount === 6 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">fuel other fires</div>
          </div>

          <div className="thought-line" data-line-index="7">
            <div className="incomplete-thought">
              contribute to society
              <div
                className={`breath-zone ${
                  revealedCount === 7 ? "next-breath" : ""
                }`}
              ></div>
            </div>
            <div className="complete-thought">by inspiring others</div>
          </div>
        </div>
        {/* Journey completion */}
        {showThirdPoem && (
          <div className="journey-complete">
            <div className="completion-text">three poems, one truth</div>
          </div>
        )}
      </div>
    </div>
  );
}
