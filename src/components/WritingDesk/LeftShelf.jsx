// src/components/WritingDesk/LeftShelf.jsx
import SourcesPanel from "./DeskComponents/SourcesPanel";

export default function LeftShelf() {
  return (
    <div className="left-shelf">
      <div className="shelf-structure">
        {/* Research Books */}
        <div className="shelf-section research-books">
          <h3>Research Library</h3>
          <SourcesPanel />
        </div>

        {/* Active Citations */}
        <div className="shelf-section citations">
          <h3>Citations</h3>
          {/* Citation management */}
        </div>

        {/* Notes & Scratchpad */}
        <div className="shelf-section notes">
          <h3>Notes</h3>
          {/* Quick notes area */}
        </div>

        {/* Reference Materials */}
        <div className="shelf-section references">
          <h3>References</h3>
          {/* Saved references */}
        </div>
      </div>
    </div>
  );
}
