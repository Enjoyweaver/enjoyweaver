// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="w-full py-4 mt-8"
      style={{
        borderTop: "1px solid var(--nav3)",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto px-4">
        <div
          className="flex justify-center gap-6 mb-4"
          style={{ color: "var(--content-color)" }}
        >
          <a
            href="https://www.linkedin.com/in/enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <i
              className="fa-brands fa-linkedin-in"
              style={{ color: "var(--nav1)" }}
            ></i>
          </a>
          <a
            href="https://bsky.app/profile/enjoyweaver.bsky.social"
            target="_blank"
            rel="noreferrer"
            aria-label="BlueSky"
            className="social-icon"
          >
            <i
              className="fa-solid fa-square"
              style={{ color: "var(--nav2)" }}
            ></i>
          </a>
          <a
            href="https://www.tiktok.com/@enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="social-icon"
          >
            <i
              className="fa-brands fa-tiktok"
              style={{ color: "var(--nav3)" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="social-icon"
          >
            <i
              className="fa-brands fa-instagram"
              style={{ color: "var(--nav1)" }}
            ></i>
          </a>
          <a
            href="https://github.com/enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <i
              className="fa-brands fa-github"
              style={{ color: "var(--nav2)" }}
            ></i>
          </a>
          <a
            href="https://www.youtube.com/@enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="social-icon"
          >
            <i
              className="fa-brands fa-youtube"
              style={{ color: "var(--nav3)" }}
            ></i>
          </a>
        </div>

        <div
          className="text-center"
          style={{ color: "var(--description-color)" }}
        >
          <span>
            a{" "}
            <a
              href="https://enjoyweaver.fun"
              target="_blank"
              rel="noreferrer"
              className="signature-link"
              style={{
                color: "var(--header-color)",
                fontSize: "1.8rem",
                fontFamily: "Allura, cursive",
              }}
            >
              Michael Weaver
            </a>{" "}
            build
          </span>
        </div>
      </div>

      <style>
        {`
          .social-icon {
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.05);
            font-size: 1.2rem;
          }
          
          .social-icon:hover {
            transform: translateY(-3px);
            background-color: rgba(255, 255, 255, 0.1);
          }
          
          .signature-link {
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
          }
          
          .signature-link:hover {
            transform: scale(1.1);
          }
          
          .signature-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: var(--nav2);
            transition: width 0.3s ease;
          }
          
          .signature-link:hover::after {
            width: 100%;
          }
        `}
      </style>
    </footer>
  );
}
