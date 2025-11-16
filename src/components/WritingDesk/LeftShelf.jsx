import ProgressTracker from "./DeskComponents/ProgressTracker";
import SourcesPanel from "./DeskComponents/SourcesPanel";

export default function LeftShelf({ isOpen, onToggle }) {
  return (
    <div
      className={`left-shelf ${isOpen ? 'open' : ''}`}
      onClick={onToggle}
    >
      <div className="shelf-section">
        <h3>📊 Progress</h3>
        <ProgressTracker />
      </div>

      <div className="shelf-section">
        <h3>📚 Sources</h3>
        <SourcesPanel />
      </div>
    </div>
  );
}
