// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="w-full py-4 mt-8"
      style={{
        borderTop: "1px solid var(--nav3)",
        backdropFilter: "blur(10px)",
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
            className="transition-all duration-300 hover:scale-110"
          >
            <i
              className="fab fa-linkedin fa-lg"
              style={{ color: "var(--effect-1)" }}
            ></i>
          </a>
          <a
            href="https://bsky.app/profile/enjoyweaver.bsky.social"
            target="_blank"
            rel="noreferrer"
            aria-label="BlueSky"
            className="transition-all duration-300 hover:scale-110"
          >
            <i
              className="fab fa-square fa-lg"
              style={{ color: "var(--effect-1)" }}
            ></i>
          </a>
          <a
            href="https://www.tiktok.com/@enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="transition-all duration-300 hover:scale-110"
          >
            <i
              className="fab fa-tiktok fa-lg"
              style={{ color: "var(--effect-1)" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition-all duration-300 hover:scale-110"
          >
            <i
              className="fab fa-instagram fa-lg"
              style={{ color: "var(--effect-1)" }}
            ></i>
          </a>
          <a
            href="https://github.com/enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-all duration-300 hover:scale-110"
          >
            <i
              className="fab fa-github fa-lg"
              style={{ color: "var(--effect-1)" }}
            ></i>
          </a>
          <a
            href="https://www.youtube.com/@enjoyweaver"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="transition-all duration-300 hover:scale-110"
          >
            <i
              className="fab fa-youtube fa-lg"
              style={{ color: "var(--effect-1)" }}
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
              className="transition-all duration-300 hover:opacity-80"
              style={{
                color: "var(--effect-1)",
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
    </footer>
  );
}
