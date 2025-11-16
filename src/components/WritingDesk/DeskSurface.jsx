import { useState } from "react";
import WritingPad from "./DeskComponents/WritingPad";

export default function DeskSurface({ config, leftShelfOpen, rightShelfOpen }) {
  const [writingMode, setWritingMode] = useState("focused");
  const [padType, setPadType] = useState("paper");

  // Calculate dynamic margin based on shelf states
  const getStyle = () => {
    const style = {
      margin: '0 80px',
      transition: 'margin 0.3s ease',
    };

    if (leftShelfOpen) {
      style.marginLeft = '320px';
    }

    if (rightShelfOpen) {
      style.marginRight = '420px';
    }

    return style;
  };

  return (
    <div className="desk-surface" style={getStyle()}>
      <div className="desk-texture">
        <div className="writing-pad-container">
          <WritingPad
            mode={writingMode}
            padType={padType}
            onModeChange={setWritingMode}
          />
        </div>
      </div>
    </div>
  );
}
