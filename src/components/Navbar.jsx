// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Navbar() {
  const [showThemes, setShowThemes] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu when opening themes
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowThemes(false); // Close theme menu when opening mobile menu
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
    const mobileMenuElement = document.querySelector(".mobile-menu");
    const hamburgerElement = document.querySelector(".hamburger-menu");

    if (
      toggleButtonElement &&
      !toggleButtonElement.contains(event.target) &&
      mobileMenuElement &&
      !mobileMenuElement.contains(event.target) &&
      hamburgerElement &&
      !hamburgerElement.contains(event.target)
    ) {
      setShowThemes(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const themes = [
    { id: "dark-mode", name: "Dark Mode", color: "#6366f1" },
    { id: "original", name: "Original", color: "#067288" },
    { id: "morning", name: "Morning", color: "#076381" },
    { id: "lemonade", name: "Lemonade", color: "#0c6d2c" },
    { id: "mountain-dew", name: "Mountain Dew", color: "#336633" },
    { id: "breezy", name: "Breezy", color: "#317988" },
    { id: "summer", name: "Summer", color: "#70a1ff" },
    { id: "ocean-city", name: "Ocean City", color: "#90D1F9" },
    { id: "coffee", name: "Coffee", color: "#7a5f56" },
    { id: "halloween", name: "Halloween", color: "#FFB166" },
    { id: "moonlit", name: "Moonlit", color: "#99FFFF" },
    { id: "street-light", name: "Street Light", color: "#def5b9" },
    { id: "neon-night", name: "Neon Night", color: "#00FF00" },
    { id: "cyberpunk", name: "Cyberpunk", color: "#00FF00" },
  ];

  const navLinks = [
    { path: "/", label: "Home", color: "var(--nav1)" },
    { path: "/About", label: "About", color: "var(--nav2)" },
    { path: "/Showcase", label: "Showcase", color: "var(--nav3)" },
    { path: "/data", label: "Data Analysis", color: "var(--nav3)" },
    { path: "/articles", label: "Articles", color: "var(--nav3)" },
  ];

  return (
    <div>
      <header className="navbar-header">
        <nav className="navbar-container">
          {/* Left side controls */}
          <div className="nav-left">
            {/* Dark Mode Toggle */}
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </button>

            {/* Theme Selector */}
            <div className="theme-toggle-container">
              <button
                className="theme-toggle-button"
                onClick={toggleThemes}
                style={{
                  color: "var(--button-text)",
                  backgroundColor: "var(--button-background)",
                }}
              >
                Themes
              </button>
              {showThemes && (
                <div className="theme-dropdown-menu">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      className="theme-option"
                      style={{ color: theme.color }}
                      onClick={() => selectTheme(theme.id)}
                    >
                      {theme.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                className="nav-link"
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? "var(--header-color)" : link.color,
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              className="mobile-nav-link"
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? "var(--header-color)" : link.color,
              })}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />

      <style>
        {`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--header-color);
        }
        
        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .dark-mode-toggle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: transparent;
          border: 2px solid var(--header-color);
          color: var(--header-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }
        
        .dark-mode-toggle:hover {
          transform: rotate(15deg) scale(1.1);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .theme-toggle-container {
          position: relative;
        }
        
        .theme-toggle-button {
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          border: 2px solid var(--header-color);
          background: transparent;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .theme-toggle-button:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }
        
        .theme-dropdown-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid var(--header-color);
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          max-height: 400px;
          overflow-y: auto;
          min-width: 150px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .theme-option {
          display: block;
          width: 100%;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }
        
        .theme-option:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }
        
        .desktop-nav {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          position: relative;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          font-size: 0.95rem;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--effect-1);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .hamburger-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          position: relative;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
        }
        
        .hamburger-line {
          width: 25px;
          height: 2px;
          background: var(--header-color);
          transition: all 0.3s ease;
          transform-origin: center;
        }
        
        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translateY(8px);
        }
        
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translateY(-8px);
        }
        
        .mobile-menu {
          position: fixed;
          top: calc(100% - 1px);
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transform: translateY(-100vh);
          opacity: 0;
          transition: all 0.3s ease;
          border-top: 1px solid var(--header-color);
          max-height: calc(100vh - 80px);
          overflow-y: auto;
        }
        
        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
        }
        
        .mobile-nav-link {
          display: block;
          padding: 1.25rem 2rem;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }
        
        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(10px);
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
          .navbar-container {
            padding: 1rem;
          }
          
          .desktop-nav {
            display: none;
          }
          
          .hamburger-menu {
            display: flex;
          }
          
          .theme-toggle-button {
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
          }
          
          .dark-mode-toggle {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
          
          .theme-dropdown-menu {
            right: 0;
            left: auto;
          }
        }
        
        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-link {
            font-size: 0.9rem;
          }
          
          .desktop-nav {
            gap: 1.5rem;
          }
        }
        `}
      </style>
    </div>
  );
}
