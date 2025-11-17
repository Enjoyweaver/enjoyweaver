import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

/**
 * MarkdownViewer Component
 *
 * Fetches and renders markdown files from the public folder
 */
export default function MarkdownViewer({ filePath, onClose }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) throw new Error("Failed to load document");
        return response.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [filePath]);

  if (loading) {
    return (
      <div className="markdown-viewer-overlay" onClick={onClose}>
        <div className="markdown-viewer" onClick={(e) => e.stopPropagation()}>
          <div className="markdown-loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="markdown-viewer-overlay" onClick={onClose}>
        <div className="markdown-viewer" onClick={(e) => e.stopPropagation()}>
          <button className="markdown-close" onClick={onClose}>✕</button>
          <div className="markdown-error">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="markdown-viewer-overlay" onClick={onClose}>
      <div className="markdown-viewer" onClick={(e) => e.stopPropagation()}>
        <button className="markdown-close" onClick={onClose}>✕</button>
        <div className="markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
