// src/components/WritingDesk/ScenicView.jsx
import { useState, useRef, useEffect } from "react";

export default function ScenicView({ config }) {
  const [selectedView, setSelectedView] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("scenicView");
    return saved || "gradient-1";
  });
  const [customImage, setCustomImage] = useState(() => {
    const saved = localStorage.getItem("customScenicImage");
    return saved || null;
  });
  const fileInputRef = useRef(null);

  // Save selected view to localStorage
  useEffect(() => {
    localStorage.setItem("scenicView", selectedView);
  }, [selectedView]);

  const scenicViews = [
    {
      id: "gradient-1",
      name: "Ocean Sky",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: "gradient-2",
      name: "Sunset Glow",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: "gradient-3",
      name: "Forest Mist",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: "gradient-4",
      name: "Aurora Night",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      id: "gradient-5",
      name: "Desert Dusk",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: "gradient-6",
      name: "Deep Space",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
    {
      id: "custom-upload",
      name: "Upload Image",
      gradient: null,
    },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setCustomImage(imageData);
        setSelectedView("custom-upload");
        localStorage.setItem("customScenicImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleViewSelect = (viewId) => {
    if (viewId === "custom-upload") {
      fileInputRef.current?.click();
    } else {
      setSelectedView(viewId);
    }
  };

  const getBackgroundStyle = () => {
    if (selectedView === "custom-upload" && customImage) {
      return {
        backgroundImage: `url(${customImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    const view = scenicViews.find((v) => v.id === selectedView);
    if (view?.gradient) {
      return {
        background: view.gradient,
      };
    }

    return {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    };
  };

  return (
    <div className="scenic-view">
      <div className="view-background" style={getBackgroundStyle()}>
        {/* Atmospheric effects */}
        <div className="atmospheric-effects" />
      </div>

      {/* View selector - appears on hover */}
      <div className="view-selector">
        {scenicViews.map((view) => (
          <button
            key={view.id}
            onClick={() => handleViewSelect(view.id)}
            className={`view-option ${
              selectedView === view.id ? "active" : ""
            }`}
            title={view.name}
          >
            {view.id === "custom-upload" ? "📤" : view.name}
          </button>
        ))}
      </div>

      {/* Hidden file input for custom image upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
    </div>
  );
}
