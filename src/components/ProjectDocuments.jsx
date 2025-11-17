import { useState } from "react";

/**
 * ProjectDocuments Component
 *
 * Displays available documents for a project (whitepaper, roadmap, pitch deck, etc.)
 * Only renders if the project has documents available.
 */
export default function ProjectDocuments({ project, type = "live" }) {
  const [activeTab, setActiveTab] = useState(null);

  // Check if project has any documents
  const hasAnyDocs = project.documents &&
    Object.values(project.documents).some(docs => docs && docs.length > 0);

  if (!hasAnyDocs) return null;

  const docTypes = {
    whitepaper: { label: "Whitepaper", icon: "📄" },
    roadmap: { label: "Roadmap", icon: "🗺️" },
    pitchDeck: { label: "Pitch Deck", icon: "📊" },
    technicalDocs: { label: "Tech Docs", icon: "⚙️" }
  };

  return (
    <div className="project-documents">
      <div className="project-documents-tabs">
        {Object.entries(docTypes).map(([key, { label, icon }]) => {
          const docs = project.documents[key];
          if (!docs || docs.length === 0) return null;

          return (
            <button
              key={key}
              className={`doc-tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(activeTab === key ? null : key)}
            >
              <span className="doc-tab-icon">{icon}</span>
              <span className="doc-tab-label">{label}</span>
              <span className="doc-tab-count">{docs.length}</span>
            </button>
          );
        })}
      </div>

      {activeTab && project.documents[activeTab] && (
        <div className="project-documents-list">
          {project.documents[activeTab].map((doc, index) => (
            <a
              key={index}
              href={`/projects/${type}/${project.id}/${activeTab}/${doc}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-document-link"
            >
              <span className="doc-icon">📎</span>
              <span className="doc-name">{doc}</span>
              <span className="doc-arrow">→</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
