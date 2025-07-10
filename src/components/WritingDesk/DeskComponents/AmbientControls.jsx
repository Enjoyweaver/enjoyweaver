// src/components/WritingDesk/DeskComponents/AmbientControls.jsx
import { useState, useEffect, useRef } from "react";

export default function AmbientControls({ position }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSound, setCurrentSound] = useState("silence");
  const [soundVolume, setSoundVolume] = useState(0.3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightingMode, setLightingMode] = useState("warm");
  const [lightingIntensity, setLightingIntensity] = useState(0.7);
  const [focusMode, setFocusMode] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [sessionType, setSessionType] = useState("writing"); // writing, break, deep-focus
  const timerRef = useRef(null);

  // Available ambient sounds (user will be able to upload their own)
  const ambientSounds = [
    { id: "rain", name: "Rain", icon: "🌧️", color: "#4a90e2" },
    { id: "forest", name: "Forest", icon: "🌲", color: "#2d5a27" },
    { id: "cafe", name: "Café", icon: "☕", color: "#8b4513" },
    { id: "ocean", name: "Ocean", icon: "🌊", color: "#0077be" },
    { id: "fireplace", name: "Fireplace", icon: "🔥", color: "#ff6b35" },
    { id: "white-noise", name: "White Noise", icon: "📻", color: "#696969" },
    { id: "typing", name: "Typing", icon: "⌨️", color: "#2c3e50" },
    { id: "silence", name: "Silence", icon: "🔇", color: "#34495e" },
  ];

  // Lighting modes
  const lightingModes = [
    { id: "warm", name: "Warm", icon: "🔅", color: "#ffa500" },
    { id: "cool", name: "Cool", icon: "💡", color: "#87ceeb" },
    { id: "natural", name: "Natural", icon: "☀️", color: "#ffd700" },
    { id: "dim", name: "Dim", icon: "🕯️", color: "#8b4513" },
    {
      id: "blue-light",
      name: "Blue Light Filter",
      icon: "🔵",
      color: "#4169e1",
    },
    { id: "night", name: "Night", icon: "🌙", color: "#191970" },
  ];

  // Timer management
  useEffect(() => {
    if (timerActive && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setTimerActive(false);
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [timerActive, timeRemaining]);

  // Handle timer completion
  const handleTimerComplete = () => {
    // Show notification
    if (Notification.permission === "granted") {
      new Notification("Writing Session Complete!", {
        body:
          sessionType === "writing"
            ? "Time for a break!"
            : "Ready to write again?",
        icon: "⏰",
      });
    }

    // Auto-switch session type
    if (sessionType === "writing") {
      setSessionType("break");
      setTimerMinutes(5);
    } else {
      setSessionType("writing");
      setTimerMinutes(25);
    }
  };

  // Start/stop timer
  const toggleTimer = () => {
    if (timerActive) {
      setTimerActive(false);
    } else {
      setTimeRemaining(timerMinutes * 60);
      setTimerActive(true);
    }
  };

  // Reset timer
  const resetTimer = () => {
    setTimerActive(false);
    setTimeRemaining(0);
  };

  // Handle sound change (empty for backend integration)
  const handleSoundChange = (soundId) => {
    setCurrentSound(soundId);
    if (soundId === "silence") {
      setIsPlaying(false);
    } else {
      // TODO: Load and play the actual audio file when backend is integrated
      console.log(`Playing ${soundId} sound`);
    }
  };

  // Toggle sound playback (empty for backend integration)
  const toggleSound = () => {
    if (currentSound === "silence") return;
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback when backend is integrated
    console.log(`${isPlaying ? "Stopping" : "Starting"} ${currentSound} sound`);
  };

  // Handle lighting change (empty for backend integration)
  const handleLightingChange = (mode) => {
    setLightingMode(mode);
    // TODO: Apply lighting effects to the document when backend is integrated
    document.documentElement.style.setProperty("--ambient-lighting", mode);
  };

  // Toggle focus mode (empty for backend integration)
  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    // TODO: Implement focus mode effects when backend is integrated
    document.documentElement.classList.toggle("focus-mode", !focusMode);
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Get current sound info
  const getCurrentSound = () => {
    return ambientSounds.find((sound) => sound.id === currentSound);
  };

  // Get current lighting info
  const getCurrentLighting = () => {
    return lightingModes.find((mode) => mode.id === lightingMode);
  };

  return (
    <div className={`ambient-controls ${position}`}>
      {/* Main Control Button */}
      <button
        className="ambient-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        title="Ambient Controls"
      >
        🎛️
        {isPlaying && <div className="sound-indicator"></div>}
        {timerActive && <div className="timer-indicator"></div>}
      </button>

      {/* Expanded Control Panel */}
      {isExpanded && (
        <div className="ambient-panel">
          <div className="panel-header">
            <h3>🎛️ Ambient Controls</h3>
            <button
              className="close-panel"
              onClick={() => setIsExpanded(false)}
            >
              ×
            </button>
          </div>

          <div className="panel-content">
            {/* Sound Controls */}
            <div className="control-section">
              <h4>🔊 Ambient Sound</h4>
              <div className="sound-selector">
                {ambientSounds.map((sound) => (
                  <button
                    key={sound.id}
                    className={`sound-option ${
                      currentSound === sound.id ? "active" : ""
                    }`}
                    onClick={() => handleSoundChange(sound.id)}
                    style={{ borderColor: sound.color }}
                    title={sound.name}
                  >
                    {sound.icon}
                  </button>
                ))}
              </div>

              <div className="sound-controls">
                <button
                  className="play-pause-btn"
                  onClick={toggleSound}
                  disabled={currentSound === "silence"}
                >
                  {isPlaying ? "⏸️" : "▶️"}
                </button>
                <div className="volume-control">
                  <span>🔊</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={soundVolume}
                    onChange={(e) => setSoundVolume(parseFloat(e.target.value))}
                    className="volume-slider"
                  />
                  <span>{Math.round(soundVolume * 100)}%</span>
                </div>
              </div>

              <div className="current-sound">
                <span>Playing: {getCurrentSound()?.name}</span>
              </div>
            </div>

            {/* Lighting Controls */}
            <div className="control-section">
              <h4>💡 Lighting</h4>
              <div className="lighting-selector">
                {lightingModes.map((mode) => (
                  <button
                    key={mode.id}
                    className={`lighting-option ${
                      lightingMode === mode.id ? "active" : ""
                    }`}
                    onClick={() => handleLightingChange(mode.id)}
                    style={{ borderColor: mode.color }}
                    title={mode.name}
                  >
                    {mode.icon}
                  </button>
                ))}
              </div>

              <div className="lighting-controls">
                <span>Intensity:</span>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={lightingIntensity}
                  onChange={(e) =>
                    setLightingIntensity(parseFloat(e.target.value))
                  }
                  className="intensity-slider"
                />
                <span>{Math.round(lightingIntensity * 100)}%</span>
              </div>

              <div className="current-lighting">
                <span>Mode: {getCurrentLighting()?.name}</span>
              </div>
            </div>

            {/* Focus Mode */}
            <div className="control-section">
              <h4>🎯 Focus Mode</h4>
              <button
                className={`focus-toggle ${focusMode ? "active" : ""}`}
                onClick={toggleFocusMode}
              >
                {focusMode ? "🎯 Focus Mode ON" : "🎯 Focus Mode OFF"}
              </button>
              <p className="focus-description">
                {focusMode
                  ? "Distractions minimized"
                  : "Click to minimize distractions"}
              </p>
            </div>

            {/* Pomodoro Timer */}
            <div className="control-section">
              <h4>⏰ Focus Timer</h4>
              <div className="timer-display">
                <div className="timer-time">
                  {timerActive
                    ? formatTime(timeRemaining)
                    : formatTime(timerMinutes * 60)}
                </div>
                <div className="timer-session">
                  {sessionType === "writing" ? "✍️ Writing" : "☕ Break"}
                </div>
              </div>

              <div className="timer-controls">
                <button className="timer-btn" onClick={toggleTimer}>
                  {timerActive ? "⏸️ Pause" : "▶️ Start"}
                </button>
                <button className="timer-btn" onClick={resetTimer}>
                  🔄 Reset
                </button>
              </div>

              <div className="timer-presets">
                <button
                  className={`preset-btn ${
                    timerMinutes === 25 ? "active" : ""
                  }`}
                  onClick={() => setTimerMinutes(25)}
                >
                  25min
                </button>
                <button
                  className={`preset-btn ${
                    timerMinutes === 45 ? "active" : ""
                  }`}
                  onClick={() => setTimerMinutes(45)}
                >
                  45min
                </button>
                <button
                  className={`preset-btn ${
                    timerMinutes === 60 ? "active" : ""
                  }`}
                  onClick={() => setTimerMinutes(60)}
                >
                  60min
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
