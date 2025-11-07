import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BuildStream from "../components/BuildStream";
import useIsMobile from "../hooks/useIsMobile";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        const progress = scrollTop / (scrollHeight - clientHeight);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const poemLines = [
    { left: "I am", right: "Michael Weaver" },
    { left: "only a name", right: "until my actions outweigh my words" },
    { left: "my lips will speak of", right: "pursuing my passions" },
    { left: "the rest of my life", right: "fueling my dreams" },
    { left: "if my dreams are", right: "not igniting my fire" },
    { left: "burning without fuel", right: "is failing to live." },
    { left: "to create, build, and", right: "fuel other fires" },
    { left: "contribute to society", right: "by inspiring people" },
  ];

  const projects = [
    {
      name: "MY CALENDY",
      description:
        "Cognitive productivity scheduling aligned with your brain's natural peaks",
      link: "https://mycalendy.fun",
      color: "cyan",
    },
    {
      name: "PRISM MEDIA",
      description: "Professional media solutions and content strategy",
      link: "https://prismmedia.pro",
      color: "purple",
    },
    {
      name: "DAOstination",
      description:
        "Airbnb killer with DAO governance and earnings distribution",
      link: "https://daostination.fun",
      color: "cyan",
    },
    {
      name: "SafeMemes",
      description:
        "Rugproof tokens with sniper-resistant launches, insurance, and creator earnings",
      link: "https://safememes.fun",
      color: "magenta",
    },
    {
      name: "Collaborating",
      description:
        "Connect, collaborate, collect — Web3 task marketplace paid in public tokens",
      link: "https://collaborating.fun",
      color: "purple",
    },
    {
      name: "DAOsigner Apparel",
      description:
        "Bridges designers with Web3 — earn royalties forever on every purchase",
      link: "https://daosignerapparel.com",
      color: "cyan",
    },
    {
      name: "CartoonMill",
      description:
        "Script to animation in minutes — automated video production",
      link: "https://cartoonmill.com",
      color: "magenta",
    },
    {
      name: "inDemniFi",
      description: "DeFi risk management platform with wallet security tools",
      link: "https://indemnifi.me",
      color: "purple",
    },
    {
      name: "CryptoPolicy",
      description: "Web3-friendly regulation framework and policy research",
      link: "https://cryptopolicy.center",
      color: "cyan",
    },
    {
      name: "NotYourBot",
      description: "Safe crypto trading on pump.fun & risk-based autonomous trading bots",
      link: "https://notyourbot.xyz",
      color: "purple",
    },
    {
      name: "BuildCamp",
      description: "Full-stack development through vibe-coding — learn by building",
      link: "https://buildcamp.pro",
      color: "magenta",
    },
  ];

  const identityFragments = [
    { text: "Insurance & Risk", size: "large", opacity: 0.3 },
    { text: "Web3 & DeFi", size: "huge", opacity: 0.2 },
    { text: "Cognitive Science", size: "large", opacity: 0.25 },
    { text: "Full-Stack Builder", size: "huge", opacity: 0.3 },
    { text: "Systems Thinker", size: "massive", opacity: 0.15 },
  ];

  const bodyStyle = {
    overflowY: "hidden",
  };

  const mobileRowStyle = isMobile ? { width: "100%" } : undefined;
  const mobileSideStyle = isMobile ? { width: "50%" } : undefined;

  return (
    <>
      <div style={bodyStyle}>
        <div className="pillar">
          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                I am
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                Michael Weaver
              </div>
            </div>
          </div>

          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                only a name
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                until my actions outweigh my words
              </div>
            </div>
          </div>

          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                my lips will speak of
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                pursuing my passions
              </div>
            </div>
          </div>

          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                the rest of my life
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                fueling my dreams
              </div>
            </div>
          </div>

          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                if my dreams are
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                not igniting my fire
              </div>
            </div>
          </div>

          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                burning without fuel
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                is failing to live.
              </div>
            </div>
          </div>

          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                to create, build, and
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                fuel other fires
              </div>
            </div>
          </div>

          <div className="row" style={mobileRowStyle}>
            <div className="wrap">
              <div
                className="left"
                style={{ color: "var(--header-color)", ...(mobileSideStyle || {}) }}
              >
                contribute to society
              </div>
              <div
                className="right"
                style={{ color: "var(--content-color)", ...(mobileSideStyle || {}) }}
              >
                by inspiring people
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={containerRef}>
      {/* LAYER 2: IDENTITY / WHO I AM */}
      <section
        className="float-layer float-layer-2"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-xl) var(--space-lg)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1400px",
            textAlign: "center",
          }}
        >
          <div
            className="float-text-massive"
            style={{
              marginBottom: "var(--space-xl)",
              opacity: 0.1,
            }}
          >
            I BRIDGE WORLDS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "var(--space-lg)",
              marginTop: "var(--space-lg)",
            }}
          >
            {identityFragments.map((fragment, index) => (
              <div
                key={index}
                className={`float-text float-text-${fragment.size} magnetic`}
                style={{
                  opacity: fragment.opacity,
                  transform: `translateZ(${(index - 2) * 30}px)`,
                }}
              >
                {fragment.text}
              </div>
            ))}
          </div>

          <div
            className="float-text-detail"
            style={{
              marginTop: "var(--space-xl)",
              maxWidth: "800px",
              margin: "var(--space-xl) auto 0",
              lineHeight: 1.8,
            }}
          >
            From traditional finance to decentralized innovation. From human
            cognition to artificial intelligence. From theory to execution. I
            build systems that bridge these worlds, creating tools that amplify
            human potential.
          </div>
        </div>
      </section>

      {/* LAYER 3: PROJECTS CONSTELLATION */}
      <section className="float-layer float-layer-3 project-constellation">
        <a
          href="https://github.com/enjoyweaver"
          target="_blank"
          rel="noopener noreferrer"
          className="github-ribbon"
        >
          Building daily on GitHub →
        </a>

        <div className="constellation-title">WHAT I BUILD</div>

        <div className="projects-space">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-float magnetic"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <div className={`project-name text-glow-${project.color}`}>
                {project.name}
              </div>
              <div className="project-details">
                <div>{project.description}</div>
                <span className="project-link">
                  Visit {project.name} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LAYER 4: THOUGHTS / ARTICLES PREVIEW */}
      <section
        className="float-layer float-layer-4"
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-xl) var(--space-lg)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            className="constellation-title"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            THOUGHT SYSTEMS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-lg)",
            }}
          >
            <div
              className="glass magnetic"
              style={{ padding: "var(--space-md)" }}
            >
              <div
                className="float-text-micro"
                style={{ marginBottom: "var(--space-sm)" }}
              >
                AI & TECHNOLOGY
              </div>
              <div
                className="float-text-large"
                style={{ fontSize: "var(--text-xl)" }}
              >
                AI is a Tool, Not the Solution
              </div>
              <div
                className="float-text-detail"
                style={{
                  marginTop: "var(--space-sm)",
                  fontSize: "var(--text-sm)",
                }}
              >
                Why treating AI as the answer instead of the accelerator is
                already costing companies their competitive edge.
              </div>
            </div>

            <div
              className="glass magnetic"
              style={{ padding: "var(--space-md)" }}
            >
              <div
                className="float-text-micro"
                style={{ marginBottom: "var(--space-sm)" }}
              >
                WEB3 & REGULATION
              </div>
              <div
                className="float-text-large"
                style={{ fontSize: "var(--text-xl)" }}
              >
                Principled Web3 Regulation
              </div>
              <div
                className="float-text-detail"
                style={{
                  marginTop: "var(--space-sm)",
                  fontSize: "var(--text-sm)",
                }}
              >
                A framework for regulating blockchain technology without
                stifling innovation—layer by layer.
              </div>
            </div>

            <div
              className="glass magnetic"
              style={{ padding: "var(--space-md)" }}
            >
              <div
                className="float-text-micro"
                style={{ marginBottom: "var(--space-sm)" }}
              >
                PRODUCTIVITY
              </div>
              <div
                className="float-text-large"
                style={{ fontSize: "var(--text-xl)" }}
              >
                Cognitive Scheduling Science
              </div>
              <div
                className="float-text-detail"
                style={{
                  marginTop: "var(--space-sm)",
                  fontSize: "var(--text-sm)",
                }}
              >
                How matching tasks to your brain&apos;s natural cognitive
                rhythms can reclaim hours of productive time each week.
              </div>
            </div>
          </div>

          <Link
            to="/articles"
            className="footer-link magnetic"
            style={{
              display: "inline-block",
              marginTop: "var(--space-xl)",
              fontSize: "var(--text-lg)",
              color: "var(--cyan)",
              textDecoration: "none",
            }}
          >
            Read All Articles →
          </Link>
        </div>
      </section>

      {/* LAYER 5: BUILD STREAM (GitHub Activity) */}
      <BuildStream />
      </div>
    </>
  );
}
