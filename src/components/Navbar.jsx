import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  // Smart navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);

      // Determine active section based on scroll position
      const sections = [0, 0.25, 0.5, 0.75]; // 4 main sections
      const scrollPercent =
        currentScrollY / (document.documentElement.scrollHeight - window.innerHeight);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPercent >= sections[i]) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (index) => {
    const sections = [0, 0.25, 0.5, 0.75];
    const targetScroll =
      sections[index] * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className={`navbar-floating ${scrolled ? "glass" : ""} ${hidden ? "hidden" : ""}`}>
        <NavLink to="/" className="navbar-logo">
          Michael Weaver
        </NavLink>

        <div className="navbar-nav">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`nav-dot ${activeSection === index ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
              aria-label={`Navigate to section ${index + 1}`}
            />
          ))}
        </div>
      </nav>

      <main className="dimensional-space">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
