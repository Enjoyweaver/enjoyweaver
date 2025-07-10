// src/components/WritingDesk/DeskComponents/ToolsPanel.jsx
import { useState } from "react";

export default function ToolsPanel() {
  const [activeTools, setActiveTools] = useState({
    spellCheck: true,
    grammarCheck: true,
    readabilityCheck: false,
    focusMode: false,
    typewriterMode: false,
    darkMode: false,
  });

  const [writingMode, setWritingMode] = useState("article"); // article, blog, social, technical
  const [targetAudience, setTargetAudience] = useState("general"); // general, expert, beginner

  const toggleTool = (toolName) => {
    setActiveTools((prev) => ({
      ...prev,
      [toolName]: !prev[toolName],
    }));
  };

  const writingModes = [
    { id: "article", name: "Article", description: "Long-form content" },
    { id: "blog", name: "Blog Post", description: "Casual, engaging" },
    { id: "social", name: "Social Media", description: "Short, punchy" },
    { id: "technical", name: "Technical", description: "Detailed, precise" },
  ];

  const audiences = [
    { id: "general", name: "General Public" },
    { id: "expert", name: "Industry Experts" },
    { id: "beginner", name: "Beginners" },
  ];

  // Empty functions for future backend integration
  const applyBoldFormatting = () => {
    // TODO: Apply bold formatting to selected text
  };

  const applyItalicFormatting = () => {
    // TODO: Apply italic formatting to selected text
  };

  const applyUnderlineFormatting = () => {
    // TODO: Apply underline formatting to selected text
  };

  const insertLink = () => {
    // TODO: Insert link at cursor position
  };

  const exportAsMarkdown = () => {
    // TODO: Export current content as markdown
  };

  const exportAsHTML = () => {
    // TODO: Export current content as HTML
  };

  const exportAsPDF = () => {
    // TODO: Export current content as PDF
  };

  const getTAISuggestions = () => {
    // TODO: Trigger AI suggestion system
  };

  const analyzeContentTone = () => {
    // TODO: Analyze tone of current content
  };

  const checkVoiceConsistency = () => {
    // TODO: Check voice consistency across content
  };

  return (
    <div className="tools-panel">
      <div className="tools-header">
        <h3>Writing Tools</h3>
      </div>

      <div className="writing-mode-section">
        <h4>Writing Mode</h4>
        <div className="mode-selector">
          {writingModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setWritingMode(mode.id)}
              className={`mode-btn ${writingMode === mode.id ? "active" : ""}`}
              title={mode.description}
            >
              {mode.name}
            </button>
          ))}
        </div>
      </div>

      <div className="audience-section">
        <h4>Target Audience</h4>
        <select
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          className="audience-select"
        >
          {audiences.map((audience) => (
            <option key={audience.id} value={audience.id}>
              {audience.name}
            </option>
          ))}
        </select>
      </div>

      <div className="writing-tools-section">
        <h4>Writing Assistance</h4>
        <div className="tools-grid">
          <div className="tool-item">
            <label className="tool-label">
              <input
                type="checkbox"
                checked={activeTools.spellCheck}
                onChange={() => toggleTool("spellCheck")}
              />
              <span>Spell Check</span>
            </label>
          </div>

          <div className="tool-item">
            <label className="tool-label">
              <input
                type="checkbox"
                checked={activeTools.grammarCheck}
                onChange={() => toggleTool("grammarCheck")}
              />
              <span>Grammar Check</span>
            </label>
          </div>

          <div className="tool-item">
            <label className="tool-label">
              <input
                type="checkbox"
                checked={activeTools.readabilityCheck}
                onChange={() => toggleTool("readabilityCheck")}
              />
              <span>Readability Analysis</span>
            </label>
          </div>
        </div>
      </div>

      <div className="focus-tools-section">
        <h4>Focus Tools</h4>
        <div className="tools-grid">
          <div className="tool-item">
            <label className="tool-label">
              <input
                type="checkbox"
                checked={activeTools.focusMode}
                onChange={() => toggleTool("focusMode")}
              />
              <span>Focus Mode</span>
            </label>
          </div>

          <div className="tool-item">
            <label className="tool-label">
              <input
                type="checkbox"
                checked={activeTools.typewriterMode}
                onChange={() => toggleTool("typewriterMode")}
              />
              <span>Typewriter Mode</span>
            </label>
          </div>
        </div>
      </div>

      <div className="formatting-tools-section">
        <h4>Formatting</h4>
        <div className="formatting-buttons">
          <button
            onClick={applyBoldFormatting}
            className="format-btn"
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={applyItalicFormatting}
            className="format-btn"
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            onClick={applyUnderlineFormatting}
            className="format-btn"
            title="Underline"
          >
            <u>U</u>
          </button>
          <button
            onClick={insertLink}
            className="format-btn"
            title="Insert Link"
          >
            🔗
          </button>
        </div>
      </div>

      <div className="export-tools-section">
        <h4>Export Options</h4>
        <div className="export-buttons">
          <button onClick={exportAsMarkdown} className="export-btn">
            Markdown
          </button>
          <button onClick={exportAsHTML} className="export-btn">
            HTML
          </button>
          <button onClick={exportAsPDF} className="export-btn">
            PDF
          </button>
        </div>
      </div>

      <div className="ai-tools-section">
        <h4>AI Assistance</h4>
        <div className="ai-buttons">
          <button onClick={getTAISuggestions} className="ai-btn">
            Get Suggestions
          </button>
          <button onClick={analyzeContentTone} className="ai-btn">
            Analyze Tone
          </button>
          <button onClick={checkVoiceConsistency} className="ai-btn">
            Voice Check
          </button>
        </div>
      </div>
    </div>
  );
}
