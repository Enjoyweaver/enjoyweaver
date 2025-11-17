import { useState, useEffect } from "react";
import {
  allArticles,
  getAllCategories,
} from "../data/articles";

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const categories = ["All", ...getAllCategories()];

  // Map each article to a color
  const colorCycle = ["cyan", "purple", "magenta"];
  const getArticleColor = (index) => colorCycle[index % 3];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(allArticles);
    } else {
      setFilteredArticles(
        allArticles.filter((article) => article.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openArticle = (article) => {
    setSelectedArticle(article);
    setIsArticleOpen(true);
  };

  const closeArticle = () => {
    setIsArticleOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  };

  return (
    <div className="articles-page">
      {/* Floating Header */}
      <section
        className="articles-hero"
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-xl) var(--space-lg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="constellation-title"
          style={{ marginBottom: "var(--space-sm)" }}
        >
          THOUGHT STREAMS
        </div>

        <div
          className="float-text-detail"
          style={{
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "var(--space-xl)",
            opacity: 0.7,
          }}
        >
          Exploring the intersection of technology, productivity, and innovation
          — where ideas flow into reality
        </div>

        {/* Category Navigation - Floating Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "var(--space-sm)",
            maxWidth: "900px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-pill magnetic ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Stream - River Flow Layout */}
      <section
        className="articles-stream"
        style={{
          position: "relative",
          padding: "var(--space-xl) var(--space-lg)",
          minHeight: "100vh",
        }}
      >
        <div className="stream-container">
          {filteredArticles.map((article, articleIndex) => {
            // Alternate left/right like Build Stream
            const isLeft = articleIndex % 2 === 0;
            const depth = (articleIndex % 3) * 50;
            const articleColor = getArticleColor(articleIndex);

            return (
              <div
                key={article.id}
                className="article-current"
                onClick={() => openArticle(article)}
              >
                {/* Massive Article Title Background */}
                <div
                  className={`article-title-bg text-glow-${articleColor}`}
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: isLeft ? "5%" : "auto",
                    right: isLeft ? "auto" : "5%",
                    fontSize: "clamp(3rem, 12vw, 8rem)",
                    fontWeight: 900,
                    opacity: 0.15,
                    lineHeight: 0.9,
                    letterSpacing: "-0.05em",
                    textAlign: isLeft ? "left" : "right",
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    maxWidth: "90%",
                    zIndex: 0,
                  }}
                >
                  {article.title}
                </div>

                {/* Article Content Flow */}
                <div
                  className="article-flow"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-md)",
                    alignItems: isLeft ? "flex-start" : "flex-end",
                    paddingLeft: isLeft ? "10%" : "30%",
                    paddingRight: isLeft ? "30%" : "10%",
                    position: "relative",
                    zIndex: 1,
                    cursor: "pointer",
                  }}
                >
                  {/* Category Tag - Floating Micro Text */}
                  <div
                    className="float-text-micro"
                    style={{
                      color:
                        articleColor === "cyan"
                          ? "var(--cyan)"
                          : articleColor === "purple"
                          ? "var(--purple)"
                          : "var(--magenta)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontWeight: 700,
                      opacity: 0.9,
                    }}
                  >
                    {article.category}
                  </div>

                  {/* Article Title - Readable Size */}
                  <div
                    className={`text-glow-${articleColor}`}
                    style={{
                      fontSize: "clamp(var(--text-xl), 4vw, var(--text-3xl))",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      maxWidth: "650px",
                      transition: "all var(--transition-base)",
                    }}
                  >
                    {article.title}
                  </div>

                  {/* Article Preview */}
                  <div
                    className="float-text-detail"
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      maxWidth: "600px",
                      opacity: 0.8,
                    }}
                  >
                    {article.preview}
                  </div>

                  {/* Metadata Row */}
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-sm)",
                      alignItems: "center",
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      opacity: 0.7,
                    }}
                  >
                    <span className="article-pulse"></span>
                    <span>{article.author}</span>
                    <span style={{ opacity: 0.6 }}>•</span>
                    <span>{article.date}</span>
                    <span style={{ opacity: 0.6 }}>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Tags */}
                  {article.tags && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "var(--space-xs)",
                        marginTop: "var(--space-sm)",
                      }}
                    >
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="tag-pill"
                          style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--text-tertiary)",
                            opacity: 0.6,
                            fontWeight: 500,
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Flow Connector */}
                {articleIndex < filteredArticles.length - 1 && (
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
                        articleColor === "cyan"
                          ? "var(--cyan)"
                          : articleColor === "purple"
                          ? "var(--purple)"
                          : "var(--magenta)"
                      }, transparent)`,
                      opacity: 0.5,
                      boxShadow: `0 0 10px ${
                        articleColor === "cyan"
                          ? "var(--cyan-glow)"
                          : articleColor === "purple"
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
      </section>

      {/* Article Modal - Glass Morphism */}
      {selectedArticle && (
        <div className={`article-modal ${isArticleOpen ? "open" : ""}`}>
          <div className="article-modal-overlay" onClick={closeArticle}></div>
          <div className="article-modal-content glass">
            <button
              className="close-article magnetic-strong"
              onClick={closeArticle}
            >
              <i className="fas fa-times"></i>
            </button>

            <article className="full-article">
              <header className="full-article-header">
                <div
                  className="float-text-micro"
                  style={{
                    color: "var(--cyan)",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {selectedArticle.category}
                </div>

                <h1
                  className="full-article-title"
                  style={{
                    fontSize: "clamp(var(--text-2xl), 5vw, var(--text-4xl))",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  {selectedArticle.title}
                </h1>

                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-md)",
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    marginBottom: "var(--space-xl)",
                    paddingBottom: "var(--space-lg)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <span>By {selectedArticle.author}</span>
                  <span style={{ opacity: 0.6 }}>•</span>
                  <span>{selectedArticle.date}</span>
                  <span style={{ opacity: 0.6 }}>•</span>
                  <span>{selectedArticle.readTime} read</span>
                </div>
              </header>

              <div
                className="full-article-content"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                }}
              >
                {selectedArticle.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    style={{ marginBottom: "var(--space-md)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {selectedArticle.tags && (
                <footer
                  style={{
                    marginTop: "var(--space-xl)",
                    paddingTop: "var(--space-lg)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-sm)",
                    }}
                  >
                    {selectedArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill"
                        style={{
                          padding: "var(--space-xs) var(--space-sm)",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "20px",
                          fontSize: "var(--text-xs)",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </footer>
              )}
            </article>
          </div>
        </div>
      )}

      <style jsx>{`
        .articles-page {
          min-height: 100vh;
          padding-top: 80px;
        }

        .stream-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: calc(var(--space-xl) * 2);
        }

        .article-current {
          position: relative;
          width: 100%;
          min-height: 250px;
          margin-bottom: var(--space-lg);
        }

        .article-flow:hover {
          opacity: 1;
        }

        .article-flow:hover > div:nth-child(2) {
          transform: translateZ(20px);
        }

        .category-pill {
          padding: var(--space-xs) var(--space-md);
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
          border-radius: 30px;
          cursor: pointer;
          transition: all var(--transition-base);
          font-weight: 600;
          font-size: var(--text-sm);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .category-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--cyan);
          color: var(--cyan);
          transform: translateY(-2px);
        }

        .category-pill.active {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--space-black);
          box-shadow: 0 0 20px var(--cyan-glow);
        }

        .article-pulse {
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

        /* Article Modal */
        .article-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-lg);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .article-modal.open {
          opacity: 1;
          visibility: visible;
        }

        .article-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
        }

        .article-modal-content {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 16px;
          transform: scale(0.9);
          transition: transform 0.3s ease;
          scrollbar-width: thin;
          scrollbar-color: var(--cyan) rgba(255, 255, 255, 0.1);
        }

        .article-modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .article-modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .article-modal-content::-webkit-scrollbar-thumb {
          background: var(--cyan);
          border-radius: 10px;
        }

        .article-modal.open .article-modal-content {
          transform: scale(1);
        }

        .close-article {
          position: absolute;
          top: var(--space-lg);
          right: var(--space-lg);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-base);
          z-index: 1;
          font-size: var(--text-lg);
        }

        .close-article:hover {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--space-black);
          transform: rotate(90deg);
          box-shadow: 0 0 20px var(--cyan-glow);
        }

        .full-article {
          padding: calc(var(--space-xl) * 2);
        }

        @media (max-width: 768px) {
          .article-current {
            min-height: auto;
          }

          .article-flow {
            padding-left: 5% !important;
            padding-right: 5% !important;
            align-items: flex-start !important;
          }

          .article-title-bg {
            font-size: clamp(2rem, 15vw, 5rem) !important;
            left: 0 !important;
            right: auto !important;
            text-align: left !important;
          }

          .flow-connector {
            display: none;
          }

          .full-article {
            padding: var(--space-xl);
          }

          .close-article {
            top: var(--space-md);
            right: var(--space-md);
          }
        }
      `}</style>
    </div>
  );
}
