import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  // Section names for navigation
  const sections = [
    { name: "Intro", id: "intro" },
    { name: "Identity", id: "identity" },
    { name: "Projects", id: "projects" },
    { name: "WIP", id: "wip" },
    { name: "Thoughts", id: "thoughts" },
  ];

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
      const sectionElements = sections.map(s => document.getElementById(s.id));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (index) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav
        className={`navbar-floating ${scrolled ? "glass" : ""} ${
          hidden ? "hidden" : ""
        }`}
      >
        <NavLink to="/" className="navbar-logo">
          Michael Weaver
        </NavLink>

        <div className="navbar-nav">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`nav-item ${activeSection === index ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
            >
              <div className="nav-dot" />
              <span className="nav-label">{section.name}</span>
            </div>
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
