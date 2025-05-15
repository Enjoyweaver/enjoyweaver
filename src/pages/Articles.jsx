// src/pages/Articles.jsx
import { useState, useEffect } from "react";
import {
  allArticles,
  getAllCategories,
  getFeaturedArticles,
} from "../data/articles";
import ArticleManager from "../components/ArticleManager";

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [showManager, setShowManager] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // Set your admin password here
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_Intro;

  const categories = ["All", ...getAllCategories()];
  const featuredArticles = getFeaturedArticles();

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(allArticles);
    } else {
      setFilteredArticles(
        allArticles.filter((article) => article.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openArticle = (article) => {
    setSelectedArticle(article);
    setIsArticleOpen(true);
  };

  const closeArticle = () => {
    setIsArticleOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  };

  const handleAdminClick = () => {
    setShowPasswordPrompt(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setShowPasswordPrompt(false);
      setShowManager(true);
      setPassword("");
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setTimeout(() => setPasswordError(false), 3000);
    }
  };

  const closeManager = () => {
    setShowManager(false);
  };

  const closePasswordPrompt = () => {
    setShowPasswordPrompt(false);
    setPassword("");
    setPasswordError(false);
  };

  return (
    <div className="articles-page">
      {/* Clean Header */}
      <header className="articles-header">
        <h1>Articles & Insights</h1>
        <p>
          Exploring the intersection of technology, productivity, and innovation
        </p>
      </header>

      {/* Category Navigation */}
      <nav className="category-nav">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Articles Grid */}
      <section className="articles-grid">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="article-card"
            onClick={() => openArticle(article)}
          >
            <div className="article-card-header">
              <span className="article-category">{article.category}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-preview">{article.preview}</p>
            <div className="article-footer">
              <span className="article-author">{article.author}</span>
              <span className="article-readtime">{article.readTime}</span>
            </div>
          </article>
        ))}
      </section>

      {/* Admin Button (hidden but accessible) */}
      <button className="admin-button" onClick={handleAdminClick}>
        <i className="fas fa-cog"></i>
      </button>

      {/* Password Prompt */}
      {showPasswordPrompt && (
        <div className="password-modal">
          <div
            className="password-modal-overlay"
            onClick={closePasswordPrompt}
          ></div>
          <div className="password-modal-content">
            <h3>Admin Access</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <button type="submit">Access</button>
            </form>
            {passwordError && <p className="error">Incorrect password</p>}
          </div>
        </div>
      )}

      {/* Article Manager */}
      {showManager && <ArticleManager onClose={closeManager} />}

      {/* Article Modal */}
      {selectedArticle && (
        <div className={`article-modal ${isArticleOpen ? "open" : ""}`}>
          <div className="article-modal-overlay" onClick={closeArticle}></div>
          <div className="article-modal-content">
            <button className="close-article" onClick={closeArticle}>
              <i className="fas fa-times"></i>
            </button>

            <article className="full-article">
              <header className="full-article-header">
                <div className="article-meta-top">
                  <span className="article-category">
                    {selectedArticle.category}
                  </span>
                  <span className="article-date">{selectedArticle.date}</span>
                </div>
                <h1 className="full-article-title">{selectedArticle.title}</h1>
                <div className="article-meta-bottom">
                  <span className="article-author">
                    By {selectedArticle.author}
                  </span>
                  <span className="article-readtime">
                    {selectedArticle.readTime} read
                  </span>
                </div>
              </header>

              <div className="full-article-content">
                {selectedArticle.content
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              {selectedArticle.tags && (
                <footer className="full-article-footer">
                  <div className="article-tags">
                    {selectedArticle.tags.map((tag) => (
                      <span key={tag} className="article-tag">
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

      <style>
        {`
        .articles-page {
          min-height: 100vh;
          padding-top: 100px;
          background: var(--bac1);
          background-image: 
            radial-gradient(ellipse at top left, var(--bac2) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, var(--bac3) 0%, transparent 50%);
        }

        /* Header */
        .articles-header {
          text-align: center;
          padding: 3rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .articles-header h1 {
          font-size: 3rem;
          font-weight: 800;
          color: var(--header-color);
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--header-color), var(--effect-1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .articles-header p {
          font-size: 1.25rem;
          color: var(--description-color);
          font-weight: 300;
        }

        /* Category Navigation */
        .category-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .category-btn {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid var(--nav3);
          color: var(--nav3);
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .category-btn:hover {
          background: var(--nav3);
          color: white;
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: var(--nav3);
          color: white;
        }

        /* Articles Grid */
        .articles-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          padding: 0 2rem 4rem;
        }

        /* Article Card */
        .article-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--effect-1);
        }

        .article-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .article-category {
          color: var(--effect-1);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .article-date {
          color: var(--description-color);
          opacity: 0.8;
        }

        .article-title {
          font-size: 1.5rem;
          color: var(--header-color);
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .article-preview {
          color: var(--content-color);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          opacity: 0.9;
        }

        .article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          color: var(--description-color);
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
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
          padding: 2rem;
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
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
        }

        .article-modal-content {
          position: relative;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          background: var(--bac1);
          border-radius: 16px;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }

        .article-modal.open .article-modal-content {
          transform: scale(1);
        }

        .close-article {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: var(--header-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .close-article:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        /* Full Article */
        .full-article {
          padding: 3rem;
        }

        .full-article-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .article-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .full-article-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--header-color);
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .article-meta-bottom {
          display: flex;
          gap: 2rem;
          font-size: 1rem;
          color: var(--description-color);
        }

        .full-article-content {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--content-color);
        }

        .full-article-content p {
          margin-bottom: 1.5rem;
        }

        .full-article-footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .article-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: var(--description-color);
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .article-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .articles-header h1 {
            font-size: 2rem;
          }
          
          .articles-header p {
            font-size: 1rem;
          }
          
          .articles-grid {
            grid-template-columns: 1fr;
            padding: 0 1rem 3rem;
          }
          
          .article-modal-content {
            margin: 1rem;
          }
          
          .full-article {
            padding: 2rem 1.5rem;
          }
          
          .full-article-title {
            font-size: 1.75rem;
          }
          
          .article-meta-bottom {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
        `}
      </style>
    </div>
  );
}
