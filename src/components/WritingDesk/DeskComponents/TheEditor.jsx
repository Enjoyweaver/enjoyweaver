// src/components/WritingDesk/DeskComponents/TheEditor.jsx
import { useState, useEffect } from "react";

export default function TheEditor({ isActive, position }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [analysisData, setAnalysisData] = useState({
    topicDepth: 0,
    authority: 0,
    engagement: 0,
    conciseness: 0,
    voiceConsistency: 0,
    sourcesNeeded: 0,
    factsToVerify: 0,
    activeSources: 0,
  });
  const [suggestions, setSuggestions] = useState([]);
  const [citations] = useState([]);
  const [editorMode, setEditorMode] = useState("analysis"); // analysis, research, suggestions
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentContent, setCurrentContent] = useState("");

  // AI analysis function (empty for now, will be implemented with backend)
  const analyzeContent = async () => {
    setIsAnalyzing(true);

    // Get current content from localStorage
    const saved = localStorage.getItem("currentArticle");
    if (saved) {
      const data = JSON.parse(saved);
      setCurrentContent(data.content || "");

      // TODO: Replace with actual AI analysis
      // const analysisResult = await aiAnalyzeContent(data.content);
      // setAnalysisData(analysisResult.metrics);
      // setSuggestions(analysisResult.suggestions);

      // For now, just simulate analysis delay
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 2000);
    } else {
      setIsAnalyzing(false);
    }
  };

  // Auto-analyze when content changes
  useEffect(() => {
    if (isActive && isExpanded) {
      analyzeContent();
    }
  }, [isActive, isExpanded]);

  // Handle suggestion implementation (empty for backend integration)
  const implementSuggestion = (suggestion) => {
    // TODO: Implement suggestion using AI API
    console.log("Implementing suggestion:", suggestion);
    setSuggestions((prev) => prev.filter((s) => s.id !== suggestion.id));
  };

  // Handle citation insertion (empty for backend integration)
  const insertCitation = (citation) => {
    // TODO: Insert citation into the text using AI
    console.log("Inserting citation:", citation);
  };

  // Get progress bar color
  const getProgressColor = (value) => {
    if (value <= 2) return "#ef4444";
    if (value <= 3) return "#f59e0b";
    return "#10b981";
  };

  // Render progress bar
  const ProgressBar = ({ label, value, max = 5 }) => (
    <div className="progress-item">
      <div className="progress-label">
        <span>{label}</span>
        <span className="progress-value">
          {value}/{max}
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${(value / max) * 100}%`,
            backgroundColor: getProgressColor(value),
          }}
        />
      </div>
    </div>
  );

  return (
    <div className={`the-editor ${isActive ? "active" : ""} ${position}`}>
      {/* Editor Toggle Button */}
      <button
        className="editor-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        title="Toggle The Editor"
      >
        🤖
        {analysisData.sourcesNeeded > 0 && (
          <span className="notification-badge">
            {analysisData.sourcesNeeded}
          </span>
        )}
      </button>

      {/* Editor Panel */}
      {isExpanded && (
        <div className="editor-panel">
          <div className="editor-header">
            <h3>🤖 The Editor</h3>
            <div className="editor-tabs">
              <button
                className={editorMode === "analysis" ? "active" : ""}
                onClick={() => setEditorMode("analysis")}
              >
                Analysis
              </button>
              <button
                className={editorMode === "research" ? "active" : ""}
                onClick={() => setEditorMode("research")}
              >
                Research
              </button>
              <button
                className={editorMode === "suggestions" ? "active" : ""}
                onClick={() => setEditorMode("suggestions")}
              >
                Suggestions
              </button>
            </div>
            <button
              className="close-editor"
              onClick={() => setIsExpanded(false)}
            >
              ×
            </button>
          </div>

          <div className="editor-content">
            {isAnalyzing && (
              <div className="analyzing-indicator">
                <div className="spinner"></div>
                <span>Analyzing your content...</span>
              </div>
            )}

            {editorMode === "analysis" && !isAnalyzing && (
              <div className="analysis-tab">
                <h4>📊 Article Analysis</h4>
                <div className="analysis-metrics">
                  <ProgressBar
                    label="Topic Depth"
                    value={analysisData.topicDepth}
                  />
                  <ProgressBar
                    label="Authority"
                    value={analysisData.authority}
                  />
                  <ProgressBar
                    label="Engagement"
                    value={analysisData.engagement}
                  />
                  <ProgressBar
                    label="Conciseness"
                    value={analysisData.conciseness}
                  />
                  <ProgressBar
                    label="Voice Consistency"
                    value={analysisData.voiceConsistency}
                  />
                </div>

                <div className="quick-stats">
                  <div className="stat-card">
                    <span className="stat-number">
                      {analysisData.activeSources}
                    </span>
                    <span className="stat-label">Sources Found</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">
                      {analysisData.sourcesNeeded}
                    </span>
                    <span className="stat-label">Citations Needed</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">
                      {analysisData.factsToVerify}
                    </span>
                    <span className="stat-label">Facts to Verify</span>
                  </div>
                </div>

                <button
                  className="re-analyze-btn"
                  onClick={analyzeContent}
                  disabled={isAnalyzing}
                >
                  Re-analyze Content
                </button>
              </div>
            )}

            {editorMode === "research" && (
              <div className="research-tab">
                <h4>🔍 Research & Citations</h4>
                <div className="citations-list">
                  {citations.length === 0 ? (
                    <div className="empty-state">
                      <p>
                        No citations found yet. Start writing to get AI-powered
                        research suggestions.
                      </p>
                    </div>
                  ) : (
                    citations.map((citation) => (
                      <div key={citation.id} className="citation-item">
                        <div className="citation-type">
                          {citation.type === "academic" && "🎓"}
                          {citation.type === "news" && "📰"}
                          {citation.type === "data" && "📊"}
                        </div>
                        <div className="citation-details">
                          <h5>{citation.title}</h5>
                          <p>{citation.source}</p>
                        </div>
                        <button
                          className="insert-citation"
                          onClick={() => insertCitation(citation)}
                        >
                          Insert
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="research-actions">
                  <button
                    className="research-btn"
                    onClick={() => {
                      /* TODO: Find more sources */
                    }}
                  >
                    Find More Sources
                  </button>
                  <button
                    className="research-btn"
                    onClick={() => {
                      /* TODO: Fact check */
                    }}
                  >
                    Fact Check
                  </button>
                </div>
              </div>
            )}

            {editorMode === "suggestions" && (
              <div className="suggestions-tab">
                <h4>💡 Editorial Suggestions</h4>
                <div className="suggestions-list">
                  {suggestions.length > 0 ? (
                    suggestions.map((suggestion) => (
                      <div key={suggestion.id} className="suggestion-item">
                        <div className="suggestion-type">
                          {suggestion.type === "structure" && "🏗️"}
                          {suggestion.type === "evidence" && "📋"}
                          {suggestion.type === "clarity" && "💡"}
                        </div>
                        <div className="suggestion-text">
                          <p>{suggestion.text}</p>
                        </div>
                        <button
                          className="implement-suggestion"
                          onClick={() => implementSuggestion(suggestion)}
                        >
                          Apply
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="no-suggestions">
                      <p>No suggestions available yet.</p>
                      <p>
                        Start writing and The Editor will analyze your content
                        to provide personalized recommendations.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
