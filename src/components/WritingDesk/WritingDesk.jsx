import { useState } from "react";
import ScenicView from "./ScenicView";
import LeftShelf from "./LeftShelf";
import DeskSurface from "./DeskSurface";
import RightShelf from "./RightShelf";
import TheEditor from "./DeskComponents/TheEditor";
import "../../styles/writing-desk.css";

export default function WritingDesk() {
  const [deskConfig] = useState({
    theme: "modern",
    view: "gradient-1",
    lighting: "ambient",
  });

  const [leftShelfOpen, setLeftShelfOpen] = useState(false);
  const [rightShelfOpen, setRightShelfOpen] = useState(false);

  return (
    <div className="writing-desk-container">
      <ScenicView config={deskConfig} />

      <div className="desk-workspace">
        <LeftShelf isOpen={leftShelfOpen} onToggle={() => setLeftShelfOpen(!leftShelfOpen)} />
        <DeskSurface config={deskConfig} leftShelfOpen={leftShelfOpen} rightShelfOpen={rightShelfOpen} />
        <RightShelf isOpen={rightShelfOpen} onToggle={() => setRightShelfOpen(!rightShelfOpen)} />
      </div>

      {/* The Editor - Bottom Right Overlay */}
      <TheEditor isActive={true} position="bottom-right" />
    </div>
  );
}
