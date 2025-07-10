// src/components/WritingDesk/ScenicView.jsx
import { useState } from "react";

export default function ScenicView({ config }) {
  const [selectedView, setSelectedView] = useState(config.view);

  const scenicViews = [
    {
      id: "mountain-lake",
      name: "Mountain Lake",
      image: "/scenic-views/mountain-lake.jpg",
    },
    {
      id: "city-skyline",
      name: "City Skyline",
      image: "/scenic-views/city-skyline.jpg",
    },
    {
      id: "ocean-sunset",
      name: "Ocean Sunset",
      image: "/scenic-views/ocean-sunset.jpg",
    },
    {
      id: "forest-cabin",
      name: "Forest Cabin",
      image: "/scenic-views/forest-cabin.jpg",
    },
    { id: "custom-upload", name: "Custom Image", image: null },
  ];

  return (
    <div className="scenic-view">
      <div className="view-background">
        {/* Main scenic background */}
        <div
          className="scenic-image"
          style={{
            backgroundImage: `url(${
              scenicViews.find((v) => v.id === selectedView)?.image
            })`,
          }}
        />

        {/* Atmospheric effects */}
        <div className="atmospheric-effects">
          {/* Subtle animations, weather effects */}
        </div>
      </div>

      {/* View selector - appears on hover */}
      <div className="view-selector">
        {scenicViews.map((view) => (
          <button
            key={view.id}
            onClick={() => setSelectedView(view.id)}
            className={`view-option ${
              selectedView === view.id ? "active" : ""
            }`}
          >
            {view.name}
          </button>
        ))}
      </div>
    </div>
  );
}
