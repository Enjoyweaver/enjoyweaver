// src/pages/Home.jsx
import { useEffect } from "react";
import "../App.css";

export default function Home() {
  // Set dark mode as default theme on component mount
  useEffect(() => {
    // Check if theme is already set
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
      document.documentElement.setAttribute("data-theme", "dark-mode");
    }
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="name-container">
          <h1 className="name-title">Michael Weaver</h1>
          <div className="title-separator"></div>
          <div className="title-roles">
            <span>Web3 Wanderer</span>
            <span className="role-divider">•</span>
            <span>Insurance Underwriter</span>
            <span className="role-divider">•</span>
            <span>Enterprise Risk Manager</span>
          </div>
        </div>

        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Original pillar exactly as it was */}
      <div className="pillar">
        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              I am
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              Michael Weaver
            </div>
          </div>
        </div>

        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              only a name
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              until my actions outweigh my words
            </div>
          </div>
        </div>

        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              my lips will speak of
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              pursuing my passions
            </div>
          </div>
        </div>

        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              the rest of my life
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              fueling my dreams
            </div>
          </div>
        </div>

        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              if my dreams are
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              not igniting my fire
            </div>
          </div>
        </div>

        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              burning without fuel
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              is failing to live.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              to create, build, and
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              fuel other fires
            </div>
          </div>
        </div>

        <div className="row">
          <div className="wrap">
            <div className="left" style={{ color: "var(--header-color)" }}>
              contribute to society
            </div>
            <div className="right" style={{ color: "var(--content-color)" }}>
              by inspiring others
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
