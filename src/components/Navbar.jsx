// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Navbar() {
  const [showThemes, setShowThemes] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode is default

  // Set dark mode as default on component mount
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
      document.documentElement.setAttribute("data-theme", "dark-mode");
    } else {
      setIsDarkMode(currentTheme === "dark-mode");
    }
  }, []);

  const toggleThemes = () => {
    setShowThemes(!showThemes);
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "original");
      setIsDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark-mode");
      setIsDarkMode(true);
    }
  };

  const selectTheme = (selectedTheme) => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    setShowThemes(false);
    setIsDarkMode(selectedTheme === "dark-mode");
  };

  const handleClickOutside = (event) => {
    const toggleButtonElement = document.querySelector(
      ".theme-toggle-container"
    );
    if (toggleButtonElement && !toggleButtonElement.contains(event.target)) {
      setShowThemes(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div>
      <header className="w-full text-white p-4 fixed top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="nav-left flex items-center">
            {/* Dark Mode Toggle */}
            <button
              className="dark-mode-toggle mr-4"
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? (
                <i
                  className="fa-solid fa-sun"
                  style={{ color: "var(--header-color)" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-moon"
                  style={{ color: "var(--header-color)" }}
                ></i>
              )}
            </button>

            {/* Theme Selector */}
            <div className="theme-toggle-container relative">
              <button
                className="px-3 py-1 mr-4 rounded-md theme-toggle-button"
                onClick={toggleThemes}
                style={{
                  color: "var(--button-text)",
                  backgroundColor: "var(--button-background)",
                }}
              >
                Select Theme
              </button>
              {showThemes && (
                <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md shadow-lg theme-dropdown-options">
                  <button
                    className="block w-full py-2 text-left px-4 dark-mode-button-hover"
                    style={{ color: "#6366f1" }}
                    onClick={() => selectTheme("dark-mode")}
                  >
                    Dark Mode
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 original-button-hover"
                    style={{ color: "#067288" }}
                    onClick={() => selectTheme("original")}
                  >
                    Original
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 morning-button-hover"
                    style={{ color: "#076381" }}
                    onClick={() => selectTheme("morning")}
                  >
                    Morning
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 lemonade-button-hover"
                    style={{ color: "#0c6d2c" }}
                    onClick={() => selectTheme("lemonade")}
                  >
                    Lemonade
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 mountain-dew-button-hover"
                    style={{ color: "#336633" }}
                    onClick={() => selectTheme("mountain-dew")}
                  >
                    Mountain Dew
                  </button>

                  <button
                    className="block w-full py-2 text-left px-4 breezy-button-hover"
                    style={{ color: "#317988" }}
                    onClick={() => selectTheme("breezy")}
                  >
                    Breezy
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 summer-button-hover"
                    style={{
                      color: "#70a1ff",
                    }}
                    onClick={() => selectTheme("summer")}
                  >
                    Summer
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 ocean-city-button-hover"
                    style={{ color: "#90D1F9" }}
                    onClick={() => selectTheme("ocean-city")}
                  >
                    Ocean City
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 coffee-button-hover"
                    style={{
                      color: "#7a5f56",
                    }}
                    onClick={() => selectTheme("coffee")}
                  >
                    Coffee
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 halloween-button-hover"
                    style={{ color: "#FFB166" }}
                    onClick={() => selectTheme("halloween")}
                  >
                    Halloween
                  </button>

                  <button
                    className="block w-full py-2 text-left px-4 moonlit-button-hover"
                    style={{ color: "#99FFFF" }}
                    onClick={() => selectTheme("moonlit")}
                  >
                    Moonlit
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 street-light-button-hover"
                    style={{ color: "#def5b9" }}
                    onClick={() => selectTheme("street-light")}
                  >
                    Street Light
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 neon-night-button-hover"
                    style={{ color: "#00FF00" }}
                    onClick={() => selectTheme("neon-night")}
                  >
                    Neon Night
                  </button>
                  <button
                    className="block w-full py-2 text-left px-4 cyberpunk-button-hover"
                    style={{ color: "#00FF00" }}
                    onClick={() => selectTheme("cyberpunk")}
                  >
                    Cyberpunk
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="nav-links">
            <NavLink className="NavLink Navtext product" to="/">
              <span style={{ color: "var(--nav1)" }}>Home</span>
            </NavLink>
            <NavLink className="NavLink Navtext product" to="/About">
              <span style={{ color: "var(--nav2)" }}>About</span>
            </NavLink>
            <NavLink className="NavLink Navtext product" to="/Showcase">
              <span style={{ color: "var(--nav3)" }}>Showcase</span>
            </NavLink>
            <NavLink className="NavLink Navtext product" to="/data">
              <span style={{ color: "var(--nav3)" }}>Data Analysis</span>
            </NavLink>
            <NavLink className="NavLink Navtext product" to="/resume">
              <span style={{ color: "var(--nav3)" }}>Resume</span>
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <style>
        {`
        .dark-mode-toggle {
          padding: 8px;
          font-size: 1.2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .dark-mode-toggle:hover {
          transform: rotate(15deg) scale(1.2);
        }
        
        .theme-toggle-button {
          border: 1px solid var(--header-color);
          transition: all 0.3s ease;
        }
        
        .theme-toggle-button:hover {
          background-color: var(--hover-description-background);
        }
        
        .product {
          position: relative;
          padding: 0.5rem 1rem;
          margin-right: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 4px;
          font-weight: 500;
        }

        .product:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .product.active {
          background-color: rgba(255, 255, 255, 0.15);
        }
        
        .product span {
          transition: color 0.3s ease;
        }
        
        .product:hover span {
          color: var(--header-color) !important;
        }
        
        .dark-mode-button-hover:hover {
            background-color: #1F1B24;
            color: #e9ddff;
        }
        
        .original-button-hover:hover {
            background-color: #82c0d3;
        }
        
        .morning-button-hover:hover {
            background: linear-gradient(260deg, #f0f5ff, #afc9ff, #e0ecff);
            color: #067288;
        }
        
        /* Other theme button hover styles */
        
        .theme-dropdown-options {
            max-height: 400px;
            overflow-y: auto;
        }
        
        @media only screen and (max-width: 768px) {
            .Navtext {
                margin-right: 0.25rem;
                font-size: 0.8rem;
                padding: 0.25rem 0.5rem;
            }
            
            .dark-mode-toggle {
                font-size: 1rem;
                padding: 6px;
            }
            
            .theme-toggle-button {
                font-size: 0.8rem;
                padding: 0.5rem;
            }
            
            .nav-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
            }
        }
        `}
      </style>
    </div>
  );
}
