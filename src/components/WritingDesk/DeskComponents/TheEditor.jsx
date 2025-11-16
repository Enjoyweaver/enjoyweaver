import { useState, useRef, useEffect } from "react";
import { chatWithEditor } from "../../../services/editorAI";

export default function TheEditor({ isActive, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Get current article from localStorage
  const getCurrentArticle = () => {
    const saved = localStorage.getItem("currentArticle");
    if (!saved) return { title: "", content: "" };
    const data = JSON.parse(saved);
    return {
      title: data.title || "",
      content: data.content || "",
    };
  };

  // Send message to The Editor
  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend || isLoading) return;

    setInputValue("");

    // Add user message to chat
    const newMessages = [...messages, { role: "user", content: textToSend }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const article = getCurrentArticle();
      const response = await chatWithEditor(newMessages, article.title, article.content);

      // Add AI response to chat
      setMessages([...newMessages, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: `Error: ${error.message}. Please check your API configuration.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Send starter prompt
  const sendStarterPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  // Handle Enter key to send
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Clear chat
  const handleClearChat = () => {
    if (confirm("Clear all messages?")) {
      setMessages([]);
    }
  };

  return (
    <div className="the-editor-chat">
      <button
        className="editor-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with The Editor"
      >
        {isOpen ? "Close Editor" : "💬 The Editor"}
      </button>

      {isOpen && (
        <div className="editor-chat-panel">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-title">
              <span className="chat-icon">🤖</span>
              <h3>The Editor</h3>
            </div>
            <div className="chat-actions">
              {messages.length > 0 && (
                <button className="clear-btn" onClick={handleClearChat} title="Clear chat">
                  🗑️
                </button>
              )}
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="empty-chat">
                <div className="welcome-message">
                  <h4>👋 Hi! I'm The Editor</h4>
                  <p>I can help you improve your article with:</p>
                  <ul>
                    <li>Strategic feedback on your approach and mission</li>
                    <li>Tactical suggestions for clarity and conciseness</li>
                    <li>Research guidance and fact-checking</li>
                    <li>Voice consistency and engagement tips</li>
                  </ul>
                  <p className="tip">Get started:</p>
                  <div className="starter-prompts">
                    <button onClick={() => sendStarterPrompt("Analyze my article and provide strategic feedback")}>
                      📊 Analyze Article
                    </button>
                    <button onClick={() => sendStarterPrompt("Review my writing for clarity and conciseness")}>
                      ✨ Review Clarity
                    </button>
                    <button onClick={() => sendStarterPrompt("Check if my writing style is consistent and authentic")}>
                      🎯 Check Voice
                    </button>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message assistant">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chat-input-container">
            <textarea
              ref={inputRef}
              className="chat-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about your article..."
              rows={1}
              disabled={isLoading}
            />
            <button
              className="send-btn"
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
            >
              {isLoading ? "⏳" : "➤"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
