// src/components/WritingDesk/DeskSurface.jsx
import { useState } from "react";
import WritingPad from "./DeskComponents/WritingPad";
import TheEditor from "./DeskComponents/TheEditor";
import AmbientControls from "./DeskComponents/AmbientControls";

export default function DeskSurface({ config }) {
  const [writingMode, setWritingMode] = useState("focused"); // focused, research, editing
  const [padType, setPadType] = useState("paper"); // paper, screen, typewriter

  return (
    <div className="desk-surface">
      {/* Desk texture and lighting */}
      <div className="desk-texture">
        {/* Main writing pad */}
        <div className="writing-pad-container">
          <WritingPad
            mode={writingMode}
            padType={padType}
            onModeChange={setWritingMode}
          />
        </div>

        {/* The Editor - slides up when activated */}
        <TheEditor
          isActive={writingMode === "editing"}
          position="bottom-right"
        />

        {/* Ambient controls - subtle, accessible */}
        <AmbientControls config={config} position="bottom-left" />

        {/* Desk accessories - pens, coffee, etc. */}
        <div className="desk-accessories">{/* Interactive desk items */}</div>
      </div>
    </div>
  );
}
