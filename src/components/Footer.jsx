import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    {
      label: "thought",
      title: "systems",
      description: "articles & writing",
      link: "/articles",
      isExternal: false,
    },
    {
      label: "live",
      title: "projects",
      description: "deployed & active",
      sectionId: "projects",
    },
    {
      label: "work in",
      title: "progress",
      description: "building & testing",
      sectionId: "wip",
    },
    {
      label: "build",
      title: "stream",
      description: "github activity",
      sectionId: "data",
    },
  ];

  const handleSectionClick = (section) => {
    if (section.link) {
      navigate(section.link);
    } else if (section.sectionId) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(section.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        const element = document.getElementById(section.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <footer className="footer-professional">
      <div className="footer-container">
        {/* Section Navigation */}
        <div className="footer-sections">
          {sections.map((section, index) => (
            <div
              key={index}
              className="footer-section-card"
              onClick={() => handleSectionClick(section)}
              style={{ cursor: "pointer" }}
            >
              <div className="footer-section-icon">{section.icon}</div>
              <div className="footer-section-content">
                <div className="footer-section-label">{section.label}</div>
                <div className="footer-section-title">{section.title}</div>
                <div className="footer-section-description">
                  {section.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="footer-social-row">
          <a
            href="https://github.com/enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://bsky.app/profile/enjoyweaver.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="BlueSky"
          >
            <i className="fa-solid fa-square"></i>
          </a>
          <a
            href="https://www.tiktok.com/@enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Michael Weaver</p>
        </div>
      </div>
    </footer>
  );
}
