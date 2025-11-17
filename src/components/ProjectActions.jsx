import { useState } from "react";
import { Link } from "react-router-dom";
import MarkdownViewer from "./MarkdownViewer";
import { getArticleById } from "../data/articles";

/**
 * ProjectActions Component
 *
 * Shows available actions for a project (visit site, view whitepaper, etc.)
 * ONLY appears when user hovers/clicks on the project
 */
export default function ProjectActions({ project, type = "live", isVisible }) {
  const [showMarkdown, setShowMarkdown] = useState(false);
  const [activeDoc, setActiveDoc] = useState(null);

  if (!isVisible) return null;

  const hasWebsite = project.link !== null && project.link !== undefined;
  const hasWhitepaper = project.documents?.whitepaper?.length > 0;
  const hasRoadmap = project.documents?.roadmap?.length > 0;
  const hasPitchDeck = project.documents?.pitchDeck?.length > 0;
  const hasTechnicalDocs = project.documents?.technicalDocs?.length > 0;
  const hasArticles = project.documents?.articles?.length > 0;

  const handleDocumentClick = (docType, filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    const docPath = `/projects/${type}/${project.id}/${docType}/${filename}`;

    if (ext === 'md') {
      // Show markdown viewer
      setActiveDoc(docPath);
      setShowMarkdown(true);
    } else {
      // Open PDF/other files in new tab
      window.open(docPath, '_blank');
    }
  };

  return (
    <>
      <div className="project-actions">
        {hasWhitepaper && project.documents.whitepaper.map((doc, idx) => (
          <button
            key={idx}
            className="project-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleDocumentClick('whitepaper', doc);
            }}
          >
            <span className="action-label">whitepaper</span>
          </button>
        ))}

        {hasRoadmap && project.documents.roadmap.map((doc, idx) => (
          <button
            key={idx}
            className="project-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleDocumentClick('roadmap', doc);
            }}
          >
            <span className="action-label">roadmap</span>
          </button>
        ))}

        {hasPitchDeck && project.documents.pitchDeck.map((doc, idx) => (
          <button
            key={idx}
            className="project-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleDocumentClick('pitch-deck', doc);
            }}
          >
            <span className="action-label">pitch deck</span>
          </button>
        ))}

        {hasTechnicalDocs && project.documents.technicalDocs.map((doc, idx) => (
          <button
            key={idx}
            className="project-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleDocumentClick('technical-docs', doc);
            }}
          >
            <span className="action-label">tech docs</span>
          </button>
        ))}

        {hasArticles && project.documents.articles.map((articleId, idx) => {
          const article = getArticleById(articleId);
          if (!article) return null;

          return (
            <Link
              key={idx}
              to="/articles"
              state={{ articleId }}
              className="project-action-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="action-label">{article.title}</span>
            </Link>
          );
        })}
      </div>

      {showMarkdown && activeDoc && (
        <MarkdownViewer
          filePath={activeDoc}
          onClose={() => {
            setShowMarkdown(false);
            setActiveDoc(null);
          }}
        />
      )}
    </>
  );
}
