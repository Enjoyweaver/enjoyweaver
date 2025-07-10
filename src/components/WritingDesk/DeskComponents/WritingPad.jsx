// src/components/WritingDesk/DeskComponents/WritingPad.jsx
import { useState, useEffect, useRef } from "react";

export default function WritingPad({ mode, padType, onModeChange }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight] = useState(1.6);
  const [maxWidth] = useState(800);
  const [showStats, setShowStats] = useState(false);
  const [lastSaved, setLastSaved] = useState(new Date());

  const textareaRef = useRef(null);
  const titleRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const autoSaveTimeoutRef = useRef(null);

  // Auto-save functionality
  useEffect(() => {
    if (content || title) {
      clearTimeout(autoSaveTimeoutRef.current);
      autoSaveTimeoutRef.current = setTimeout(() => {
        // Save to localStorage for now (will be Supabase later)
        const articleData = {
          title,
          content,
          lastModified: new Date().toISOString(),
          wordCount,
          characterCount,
          readingTime,
        };
        localStorage.setItem("currentArticle", JSON.stringify(articleData));
        setLastSaved(new Date());
      }, 2000);
    }
  }, [content, title, wordCount, characterCount, readingTime]);

  // Load saved content on mount
  useEffect(() => {
    const saved = localStorage.getItem("currentArticle");
    if (saved) {
      const data = JSON.parse(saved);
      setContent(data.content || "");
      setTitle(data.title || "");
      setLastSaved(new Date(data.lastModified));
    }
  }, []);

  // Calculate stats
  useEffect(() => {
    const words = content
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const chars = content.length;
    const readTime = Math.ceil(words / 200); // 200 words per minute average

    setWordCount(words);
    setCharacterCount(chars);
    setReadingTime(readTime);
  }, [content]);

  // Handle typing state
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    setIsTyping(true);

    // Clear previous timeout
    clearTimeout(typingTimeoutRef.current);

    // Set typing to false after 1 second of no typing
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  // Handle title change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Keyboard shortcuts
  const handleKeyDown = (e) => {
    // Ctrl/Cmd + S to save
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      // Force save
      const articleData = {
        title,
        content,
        lastModified: new Date().toISOString(),
        wordCount,
        characterCount,
        readingTime,
      };
      localStorage.setItem("currentArticle", JSON.stringify(articleData));
      setLastSaved(new Date());
    }

    // Ctrl/Cmd + E to toggle editor mode
    if ((e.ctrlKey || e.metaKey) && e.key === "e") {
      e.preventDefault();
      onModeChange(mode === "editing" ? "focused" : "editing");
    }
  };

  // Get pad styling based on type
  const getPadStyling = () => {
    const baseStyle = {
      fontSize: `${fontSize}px`,
      lineHeight: lineHeight,
      maxWidth: `${maxWidth}px`,
      margin: "0 auto",
      padding: "2rem",
      minHeight: "400px",
      border: "none",
      outline: "none",
      resize: "none",
      fontFamily: 'var(--font-family, "Poppins", sans-serif)',
      color: "var(--content-color)",
      backgroundColor: "transparent",
      width: "100%",
      overflow: "auto",
    };

    switch (padType) {
      case "paper":
        return {
          ...baseStyle,
          background: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          color: "#333",
        };
      case "screen":
        return {
          ...baseStyle,
          background: "rgba(0, 0, 0, 0.8)",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)",
          borderRadius: "4px",
          color: "#00ff00",
          fontFamily: "monospace",
        };
      case "typewriter":
        return {
          ...baseStyle,
          background: "rgba(245, 245, 220, 0.95)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "0",
          color: "#2c3e50",
          fontFamily: "Courier New, monospace",
        };
      default:
        return baseStyle;
    }
  };

  const getTitleStyling = () => {
    const baseStyle = {
      fontSize: `${fontSize + 8}px`,
      lineHeight: 1.3,
      maxWidth: `${maxWidth}px`,
      margin: "0 auto 1rem",
      padding: "1rem 2rem",
      border: "none",
      outline: "none",
      fontFamily: 'var(--font-family, "Poppins", sans-serif)',
      fontWeight: "bold",
      color: "var(--header-color)",
      backgroundColor: "transparent",
      width: "100%",
      textAlign: "center",
    };

    switch (padType) {
      case "paper":
        return {
          ...baseStyle,
          color: "#2c3e50",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px 8px 0 0",
        };
      case "screen":
        return {
          ...baseStyle,
          color: "#00ffff",
          background: "rgba(0, 0, 0, 0.8)",
          fontFamily: "monospace",
        };
      case "typewriter":
        return {
          ...baseStyle,
          color: "#2c3e50",
          background: "rgba(245, 245, 220, 0.95)",
          fontFamily: "Courier New, monospace",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div className="writing-pad">
      {/* Quick Settings Bar */}
      <div className="pad-controls">
        <div className="pad-type-selector">
          <button
            className={padType === "paper" ? "active" : ""}
            onClick={() => onModeChange("paper")}
            title="Paper pad"
          >
            📄
          </button>
          <button
            className={padType === "screen" ? "active" : ""}
            onClick={() => onModeChange("screen")}
            title="Digital screen"
          >
            💻
          </button>
          <button
            className={padType === "typewriter" ? "active" : ""}
            onClick={() => onModeChange("typewriter")}
            title="Typewriter"
          >
            ⌨️
          </button>
        </div>

        <div className="text-controls">
          <button onClick={() => setFontSize((prev) => Math.max(12, prev - 1))}>
            A-
          </button>
          <span>{fontSize}px</span>
          <button onClick={() => setFontSize((prev) => Math.min(24, prev + 1))}>
            A+
          </button>
        </div>

        <div className="stats-toggle">
          <button onClick={() => setShowStats(!showStats)}>
            {showStats ? "Hide Stats" : "Show Stats"}
          </button>
        </div>
      </div>

      {/* Title Input */}
      <input
        ref={titleRef}
        type="text"
        placeholder="Article Title..."
        value={title}
        onChange={handleTitleChange}
        onKeyDown={handleKeyDown}
        style={getTitleStyling()}
        className="title-input"
      />

      {/* Main Content Area */}
      <textarea
        ref={textareaRef}
        placeholder="Start writing your article..."
        value={content}
        onChange={handleContentChange}
        onKeyDown={handleKeyDown}
        style={getPadStyling()}
        className="content-textarea"
      />

      {/* Stats Bar */}
      {showStats && (
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-label">Words:</span>
            <span className="stat-value">{wordCount}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Characters:</span>
            <span className="stat-value">{characterCount}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Reading Time:</span>
            <span className="stat-value">{readingTime} min</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Last Saved:</span>
            <span className="stat-value">{lastSaved.toLocaleTimeString()}</span>
          </div>
        </div>
      )}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="typing-indicator">
          <span className="typing-dot"></span>
          <span className="typing-dot"></span>
          <span className="typing-dot"></span>
        </div>
      )}
    </div>
  );
}
