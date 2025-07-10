// src/components/ArticleManager.jsx
import { useState } from "react";
import { saveArticlesToLocal, loadArticlesFromLocal } from "../data/articles";

export default function ArticleManager({ onClose }) {
  const existingArticles = loadArticlesFromLocal() || [];
  const [articles, setArticles] = useState(existingArticles);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),
    category: "AI & Technology",
    preview: "",
    content: "",
    author: "Michael Weaver",
    readTime: "5 min",
    featured: false,
    tags: "",
    externalUrl: "",
  });

  const categories = [
    "AI & Technology",
    "Product Launch",
    "Productivity",
    "Web3 & Regulation",
    "DeFi & Risk",
    "Stablecoins",
    "Crypto Wallets",
    "Smart Contracts",
    "Blockchain Framework",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      ...formData,
      id: editingId || Date.now(),
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      image: null,
    };

    if (editingId) {
      setArticles((prev) =>
        prev.map((article) => (article.id === editingId ? newArticle : article))
      );
    } else {
      setArticles((prev) => [...prev, newArticle]);
    }

    saveArticlesToLocal(articles);
    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
      category: "AI & Technology",
      preview: "",
      content: "",
      author: "Michael Weaver",
      readTime: "5 min",
      featured: false,
      tags: "",
      externalUrl: "",
    });
  };

  const editArticle = (article) => {
    setEditingId(article.id);
    setFormData({
      ...article,
      tags: article.tags ? article.tags.join(", ") : "",
    });
  };

  const deleteArticle = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      const updatedArticles = articles.filter((article) => article.id !== id);
      setArticles(updatedArticles);
      saveArticlesToLocal(updatedArticles);
    }
  };

  return (
    <div className="article-manager">
      <div className="manager-container glass-effect">
        <header className="manager-header">
          <h2>Article Manager</h2>
          <button onClick={onClose} className="close-btn">
            <i className="fas fa-times"></i>
          </button>
        </header>

        <div className="manager-content">
          {/* Article Form */}
          <div className="article-form">
            <h3>{editingId ? "Edit Article" : "Add New Article"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="Article title..."
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Author name..."
                  />
                </div>
                <div className="form-group">
                  <label>Read Time</label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    placeholder="e.g., 5 min"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Preview</label>
                <textarea
                  name="preview"
                  value={formData.preview}
                  onChange={handleInputChange}
                  rows="3"
                  required
                  placeholder="Brief preview text..."
                />
              </div>

              <div className="form-group">
                <label>Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows="10"
                  required
                  placeholder="Full article content..."
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Tags (comma-separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="AI, Technology, Future..."
                  />
                </div>
                <div className="form-group">
                  <label>External URL (optional)</label>
                  <input
                    type="url"
                    name="externalUrl"
                    value={formData.externalUrl}
                    onChange={handleInputChange}
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                  />
                  Featured Article
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  {editingId ? "Update Article" : "Add Article"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Article List */}
          <div className="article-list">
            <h3>Existing Articles</h3>
            {articles.length === 0 ? (
              <p className="no-articles">
                No articles yet. Add your first article!
              </p>
            ) : (
              <div className="articles-scroll">
                {articles.map((article) => (
                  <div key={article.id} className="article-item">
                    <div className="article-info">
                      <h4>{article.title}</h4>
                      <p>
                        {article.category} • {article.date}
                      </p>
                    </div>
                    <div className="article-actions">
                      <button
                        onClick={() => editArticle(article)}
                        className="edit-btn"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => deleteArticle(article.id)}
                        className="delete-btn"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
        .article-manager {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          backdrop-filter: blur(5px);
        }

        .manager-container {
          width: 100%;
          max-width: 1200px;
          max-height: 90vh;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .manager-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .manager-header h2 {
          font-size: 1.75rem;
          color: var(--header-color);
          margin: 0;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: var(--header-color);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .manager-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: calc(90vh - 80px);
          overflow: hidden;
        }

        .article-form {
          padding: 2rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          overflow-y: auto;
        }

        .article-list {
          padding: 2rem;
          overflow-y: auto;
        }

        .article-form h3,
        .article-list h3 {
          font-size: 1.25rem;
          color: var(--header-color);
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--description-color);
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--content-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--effect-1);
          background: rgba(255, 255, 255, 0.08);
        }

        .checkbox-group {
          display: flex;
          align-items: center;
        }

        .checkbox-group label {
          display: flex;
          align-items: center;
          margin-bottom: 0;
          cursor: pointer;
        }

        .checkbox-group input[type="checkbox"] {
          width: auto;
          margin-right: 0.5rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .submit-btn,
        .cancel-btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn {
          background: var(--effect-1);
          color: white;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .cancel-btn {
          background: rgba(255, 255, 255, 0.1);
          color: var(--content-color);
        }

        .cancel-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .no-articles {
          text-align: center;
          color: var(--description-color);
          padding: 2rem;
          font-style: italic;
        }

        .articles-scroll {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .article-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .article-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
        }

        .article-info h4 {
          color: var(--header-color);
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }

        .article-info p {
          color: var(--description-color);
          font-size: 0.875rem;
          margin: 0;
        }

        .article-actions {
          display: flex;
          gap: 0.5rem;
        }

        .edit-btn,
        .delete-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edit-btn {
          background: rgba(99, 102, 241, 0.2);
          color: #6366f1;
        }

        .edit-btn:hover {
          background: rgba(99, 102, 241, 0.3);
        }

        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .manager-content {
            grid-template-columns: 1fr;
          }

          .article-form {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>
    </div>
  );
}
