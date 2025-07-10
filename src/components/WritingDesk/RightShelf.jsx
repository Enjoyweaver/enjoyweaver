// src/components/WritingDesk/RightShelf.jsx
import ToolsPanel from "./DeskComponents/ToolsPanel";
import ProgressTracker from "./DeskComponents/ProgressTracker";

export default function RightShelf() {
  return (
    <div className="right-shelf">
      <div className="shelf-structure">
        {/* Writing Tools */}
        <div className="shelf-section tools">
          <h3>Writing Tools</h3>
          <ToolsPanel />
        </div>

        {/* Progress & Stats */}
        <div className="shelf-section progress">
          <h3>Progress</h3>
          <ProgressTracker />
        </div>

        {/* Desk Themes */}
        <div className="shelf-section themes">
          <h3>Desk Themes</h3>
          {/* Theme selector */}
        </div>

        {/* Writing Goals */}
        <div className="shelf-section goals">
          <h3>Session Goals</h3>
          {/* Goal tracking */}
        </div>
      </div>
    </div>
  );
}
