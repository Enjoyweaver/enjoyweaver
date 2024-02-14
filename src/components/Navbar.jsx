import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  const [showThemes, setShowThemes] = useState(false);

  const toggleThemes = () => {
    setShowThemes(!showThemes);
  };

  const selectTheme = (selectedTheme) => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    setShowThemes(false);
  };

  const handleClickOutside = (event) => {
    const toggleButtonElement = document.querySelector(".relative");
    if (!toggleButtonElement.contains(event.target)) {
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
          <div className="relative">
            <button
              className="px-3 py-1 mr-4 bg-gray-200 rounded-md"
              onClick={toggleThemes}
              style={{
                color: "var(--button-text)",
                backgroundColor: "var(--button-background)",
                fontSize: "1.2rem",
              }}
            >
              Select Theme
            </button>
            {showThemes && (
              <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md shadow-lg theme-dropdown-options">
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
          <div>
            <NavLink
              className="mr-10 NavLink product"
              to="/"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav1)", fontSize: "1.2rem" }}>
                Home
              </span>
            </NavLink>
            <NavLink
              className="mr-10 NavLink product"
              to="/About"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav2)", fontSize: "1.2rem" }}>
                About
              </span>
            </NavLink>
            <NavLink
              className="mr-10 NavLink product"
              to="/Showcase"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav3)", fontSize: "1.2rem" }}>
                Showcase
              </span>
            </NavLink>
            <NavLink
              className="mr-10 NavLink product"
              to="/data"
              activeClassName="active-link"
            >
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <span style={{ color: "var(--nav3)", fontSize: "1.2rem" }}>
                Data Analysis
              </span>
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <style>
        {`
        
        .product {
          position: relative;
        }
        
        .header {
          position: sticky;
          top: 0;
          z-index: 10; /* Make sure the header is above the content */
        }
        
    
        .product:hover .effect-1,
        .product:hover .effect-2 {
          display: block;
        }
        
        .effect-1 {
          border-radius: 30%;
          display: none;
          mix-blend-mode: multiply;
          height: 84%;
          opacity: 1;
          position: absolute;
          width: 84%;
          z-index: 3000;
        }

        .effect-2 {
          border-radius: 30%;
          display: none;
          mix-blend-mode: multiply;
          height: 84%;
          opacity: 1;
          position: absolute;
          width: 84%;
          z-index: 3000;
        }
        
        .effect-1 {
          animation: rotate 1.8s linear infinite;
          background: var(--effect-1);
        }
        
        .effect-2 {
          animation: rotate 1.2s linear reverse infinite;
          background: var(--effect-2);
        }
        
        @keyframes rotate {
          0% {
            top: 0;
            left: 8%;
          }
          25% {
            top: 8%;
            left: 0%;
          }
          50% {
            top: 16%;
            left: 8%;
          }
          75% {
            top: 38%;
            left: 16%;
          }
          100% {
            top: 0;
            left: 8%;
          }
        }
        
        .original-button-hover:hover {
            background-color: #82c0d3;
          }
          .morning-button-hover:hover {
            background: linear-gradient(260deg, #f0f5ff, #afc9ff, #e0ecff);
            color: #067288;
          }
          .lemonade-button-hover:hover {
            background: linear-gradient(264deg, #f3e598, #f5f5dc, #fff8dc);
            color: #f0e68c;
          }
            .mountain-dew-button-hover:hover {
            background: #2699bd;
            color: #f0e68c;
          }
          .breezy-button-hover:hover {
            background: linear-gradient(259deg, #EEF5FF, #9EB8D9, #7C93C3);
          }
          .summer-button-hover:hover {
            background: linear-gradient(264deg, #effad3, #70a1ff, #a4e2c6);
          }
          .coffee-button-hover:hover {
            background: linear-gradient(260deg, #54442b, #141204, #262a10);
          }
          .ocean-city-button-hover:hover {
            background: linear-gradient(260deg, #023E8A, #0077B6);

          }
          .halloween-button-hover:hover {
            background: linear-gradient(260deg, #000000, #3D0842);
          }
          .moonlit-button-hover:hover {
            background: linear-gradient(260deg, #000033, #191970);
          }
          .street-light-button-hover:hover {
            background: linear-gradient(260deg, #333333, #000000);
          }
          .neon-night-button-hover:hover {
            background: linear-gradient(260deg, #000000, #0D0D0D);
          }
          .cyberpunk-button-hover:hover {
            background: linear-gradient(260deg, #0A043C, #243B55);
          }
          .theme-dropdown-options {
            max-height: 400px; /* Set your desired max height */
            overflow-y: auto;
          }
          @media only screen and (max-width: 768px) {

            .header {
              padding: 1rem; /* Decrease padding */
            }

            .NavLink {
              margin-right: 0.5rem; /* Decrease margin between nav links */
            }

            .NavLink > span {
              font-size: 1rem; /* Decrease font size of nav link text */
            }

            .theme-dropdown-options {
              max-height: 200px; /* Decrease max height of theme dropdown */
            }
          }
          
        `}
      </style>
    </div>
  );
}
