import { useState, useEffect } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { fetchRecentActivity, timeAgo } from "../services/github";

export default function BuildStream() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    loadActivity();

    // Auto-refresh every 5 minutes
    const interval = setInterval(loadActivity, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadActivity = async () => {
    try {
      setLoading(true);
      const data = await fetchRecentActivity(5); // 5 commits per project
      setProjects(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "var(--space-xl)" }}>
        <div className="float-text-detail" style={{ color: "var(--text-tertiary)" }}>
          Unable to load activity. {error}
        </div>
      </div>
    );
  }

  return (
    <section
      className="build-stream-section"
      style={{
        position: "relative",
        padding: "var(--space-xl) var(--space-lg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Section Title */}
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          marginBottom: "var(--space-xl)",
        }}
      >
        <div className="constellation-title" style={{ marginBottom: "var(--space-sm)" }}>
          THE BUILD STREAM
        </div>

        <div
          className="float-text-detail"
          style={{
            textAlign: "center",
            marginBottom: "calc(var(--space-xl) * 2)",
            opacity: 0.7,
          }}
        >
          A living river of creation — what flows from my mind into reality
        </div>

        {/* The Flowing Stream */}
        {loading && projects.length === 0 ? (
          <div style={{ textAlign: "center", padding: "var(--space-xl)" }}>
            <div className="float-text-detail" style={{ color: "var(--cyan)" }}>
              Loading the stream...
            </div>
          </div>
        ) : (
          <div className="stream-container">
            {projects.map((projectData, projectIndex) => {
              // Alternate left/right like a winding river
              const isLeft = projectIndex % 2 === 0;
              const depth = (projectIndex % 3) * 50;

              return (
                <div
                  key={projectData.repoPath}
                  className="stream-current"
                  style={{
                    transform: `translateX(${scrollY * (isMobile ? 0.004 : 0.01) * (isLeft ? 1 : -1)}px) translateZ(${depth}px)`,
                  }}
                >
                  {/* Huge Project Name Background */}
                  <div
                    className={`stream-project-bg text-glow-${projectData.projectColor}`}
                    style={{
                      position: "absolute",
                      top: isLeft ? "-20%" : "-10%",
                      left: isLeft ? "5%" : "auto",
                      right: isLeft ? "auto" : "5%",
                      fontSize: "clamp(4rem, 15vw, 10rem)",
                      fontWeight: 900,
                      opacity: 0.15,
                      lineHeight: 0.9,
                      letterSpacing: "-0.05em",
                      textAlign: isLeft ? "left" : "right",
                      pointerEvents: "none",
                      whiteSpace: "nowrap",
                      zIndex: 0,
                    }}
                  >
                    {projectData.project}
                  </div>

                  {/* Commits Flow */}
                  <div
                    className="commits-flow"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--space-md)",
                      alignItems: isLeft ? "flex-start" : "flex-end",
                      paddingLeft: isLeft ? "10%" : "30%",
                      paddingRight: isLeft ? "30%" : "10%",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {/* Project Header */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-xs)",
                        marginBottom: "var(--space-md)",
                      }}
                    >
                      <div
                        className={`text-glow-${projectData.projectColor}`}
                        style={{
                          fontSize: "clamp(var(--text-2xl), 5vw, var(--text-4xl))",
                          fontWeight: 800,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {projectData.project}
                      </div>
                      <div
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--text-secondary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontWeight: 600,
                        }}
                      >
                        {projectData.commits.length} recent commits
                      </div>
                    </div>

                    {/* Individual Commits */}
                    {projectData.commits.map((commit, commitIndex) => (
                      <a
                        key={commit.sha}
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="commit-item magnetic"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "var(--space-xs)",
                          maxWidth: "650px",
                          transform: `translateX(${commitIndex * (isLeft ? 5 : -5)}px) translateZ(${commitIndex * 10}px)`,
                          opacity: Math.max(0.6, 1 - commitIndex * 0.08),
                          transition: "all var(--transition-base)",
                        }}
                      >
                        {/* Commit Message */}
                        <div
                          style={{
                            fontSize: commitIndex === 0
                              ? "var(--text-xl)"
                              : commitIndex === 1
                              ? "var(--text-lg)"
                              : "var(--text-base)",
                            color: "var(--text-primary)",
                            fontWeight: commitIndex === 0 ? 600 : commitIndex === 1 ? 500 : 400,
                            lineHeight: 1.5,
                          }}
                        >
                          {commit.message}
                        </div>

                        {/* Commit Metadata */}
                        <div
                          style={{
                            display: "flex",
                            gap: "var(--space-sm)",
                            alignItems: "center",
                            fontSize: "var(--text-sm)",
                            color: "var(--text-secondary)",
                            fontWeight: 500,
                          }}
                        >
                          <span className="commit-pulse"></span>
                          <span>{timeAgo(commit.date)}</span>
                          <span style={{ opacity: 0.6 }}>•</span>
                          <span style={{ opacity: 0.8, fontFamily: "monospace" }}>
                            {commit.sha.substring(0, 7)}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Flow Connector (visual indicator) */}
                  {projectIndex < projects.length - 1 && (
                    <div
                      className="flow-connector"
                      style={{
                        position: "absolute",
                        bottom: "-var(--space-xl)",
                        left: isLeft ? "25%" : "auto",
                        right: isLeft ? "auto" : "25%",
                        width: "3px",
                        height: "var(--space-xl)",
                        background: `linear-gradient(to bottom, ${
                          projectData.projectColor === "cyan"
                            ? "var(--cyan)"
                            : projectData.projectColor === "purple"
                            ? "var(--purple)"
                            : "var(--magenta)"
                        }, transparent)`,
                        opacity: 0.5,
                        boxShadow: `0 0 10px ${
                          projectData.projectColor === "cyan"
                            ? "var(--cyan-glow)"
                            : projectData.projectColor === "purple"
                            ? "var(--purple-glow)"
                            : "var(--magenta-glow)"
                        }`,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* GitHub Link */}
        <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
          <a
            href="https://github.com/enjoyweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link magnetic"
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--cyan)",
            }}
          >
            Follow the stream on GitHub →
          </a>
        </div>
      </div>

      <style jsx>{`
        .stream-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          display: flex;
          flex-direction: column;
          gap: calc(var(--space-xl) * 2);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .stream-current {
          position: relative;
          width: 100%;
          min-height: 300px;
          transform-style: preserve-3d;
          transition: transform 0.1s linear;
          margin-bottom: var(--space-lg);
        }

        .commits-flow {
          transform-style: preserve-3d;
        }

        .commit-item:hover {
          opacity: 1 !important;
          transform: translateX(0) translateZ(20px) !important;
        }

        .commit-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            box-shadow: 0 0 8px var(--cyan-glow);
          }
          50% {
            opacity: 0.5;
            box-shadow: 0 0 16px var(--cyan-glow);
          }
        }

        @media (max-width: 768px) {
          .stream-container {
            padding-left: 6%;
            padding-right: 6%;
          }
          .stream-current {
            min-height: auto;
          }

          .commits-flow {
            padding-left: 6% !important;
            padding-right: 6% !important;
            align-items: flex-start !important;
          }

          .stream-project-bg {
            font-size: clamp(3rem, 20vw, 6rem) !important;
            left: 0 !important;
            right: auto !important;
            text-align: left !important;
          }

          .commit-item {
            max-width: 100%;
            transform: none !important;
          }

          .flow-connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
