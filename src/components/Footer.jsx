import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-professional">
      <div className="footer-container">
        {/* Main Links Row */}
        <div className="footer-main-row">
          {/* Project Links - Horizontal */}
          <div className="footer-links-horizontal">
            <Link to="/writer" className="footer-link footer-link-editor">
              ✍️ The Editor
            </Link>
            <a
              href="https://mycalendy.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              My Calendy
            </a>
            <a
              href="https://prismmedia.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              Prism Media
            </a>
            <a
              href="https://daostination.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              DAOstination
            </a>
            <a
              href="https://safememes.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              SafeMemes
            </a>
            <a
              href="https://collaborating.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              Collaborating
            </a>
            <a
              href="https://daosignerapparel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              DAOsigner Apparel
            </a>
            <a
              href="https://cartoonmill.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              CartoonMill
            </a>
            <a
              href="https://indemnifi.me"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              inDemniFi
            </a>
            <a
              href="https://cryptopolicy.center"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              CryptoPolicy
            </a>
            <a
              href="https://notyourbot.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              NotYourBot
            </a>
            <a
              href="https://buildcamp.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link magnetic"
            >
              BuildCamp
            </a>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="footer-social-row">
          <a
            href="https://github.com/enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon magnetic-strong"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon magnetic-strong"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://bsky.app/profile/enjoyweaver.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon magnetic-strong"
            aria-label="BlueSky"
          >
            <i className="fa-solid fa-square"></i>
          </a>
          <a
            href="https://www.tiktok.com/@enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon magnetic-strong"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon magnetic-strong"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon magnetic-strong"
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
