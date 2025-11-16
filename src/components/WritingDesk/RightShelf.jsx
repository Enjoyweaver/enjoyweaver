import ToolsPanel from "./DeskComponents/ToolsPanel";

export default function RightShelf({ isOpen, onToggle }) {
  return (
    <div
      className={`right-shelf ${isOpen ? 'open' : ''}`}
      onClick={onToggle}
    >
      <div className="shelf-section">
        <h3>🛠️ Tools</h3>
        <ToolsPanel />
      </div>
    </div>
  );
}
