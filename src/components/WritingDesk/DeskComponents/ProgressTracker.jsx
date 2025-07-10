// src/components/WritingDesk/DeskComponents/ProgressTracker.jsx
import { useState, useEffect } from "react";

export default function ProgressTracker() {
  const [sessionData, setSessionData] = useState({
    startTime: null,
    wordCount: 0,
    targetWords: 0,
    charactersTyped: 0,
    timeElapsed: 0,
    wordsPerMinute: 0,
    goal: "",
  });

  const [goals, setGoals] = useState([]);
  const [currentGoal, setCurrentGoal] = useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    // Load session data from localStorage
    loadSessionData();

    // Set up timer for session tracking
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSessionData((prev) => ({
          ...prev,
          timeElapsed: prev.timeElapsed + 1,
        }));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Load session data (empty for future Supabase integration)
  const loadSessionData = () => {
    try {
      // TODO: Load from Supabase when implemented
      // const { data } = await supabase
      //   .from('writing_sessions')
      //   .select('*')
      //   .eq('user_id', userId)
      //   .single();

      // For now, load from localStorage
      const savedData = localStorage.getItem("writingSession");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setSessionData(parsed);
      }
    } catch (error) {
      console.error("Error loading session data:", error);
    }
  };

  // Save session data (empty for future Supabase integration)
  const saveSessionData = () => {
    try {
      // TODO: Save to Supabase when implemented
      // await supabase
      //   .from('writing_sessions')
      //   .upsert(sessionData);

      // For now, save to localStorage
      localStorage.setItem("writingSession", JSON.stringify(sessionData));
    } catch (error) {
      console.error("Error saving session data:", error);
    }
  };

  const startSession = () => {
    const now = new Date();
    setSessionData((prev) => ({
      ...prev,
      startTime: now,
      timeElapsed: 0,
      wordCount: 0,
      charactersTyped: 0,
    }));
    setIsTimerRunning(true);
  };

  const pauseSession = () => {
    setIsTimerRunning(false);
    saveSessionData();
  };

  const endSession = () => {
    setIsTimerRunning(false);
    saveSessionData();

    // TODO: Save session summary to history when backend is integrated
    // await supabase
    //   .from('session_history')
    //   .insert([{
    //     date: new Date(),
    //     duration: sessionData.timeElapsed,
    //     words_written: sessionData.wordCount,
    //     goal_achieved: sessionData.wordCount >= sessionData.targetWords
    //   }]);
  };

  const setWordTarget = (target) => {
    setSessionData((prev) => ({
      ...prev,
      targetWords: target,
    }));
  };

  const addGoal = () => {
    if (currentGoal.trim()) {
      setGoals((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: currentGoal,
          completed: false,
          createdAt: new Date(),
        },
      ]);
      setCurrentGoal("");
    }
  };

  const toggleGoal = (goalId) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const removeGoal = (goalId) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== goalId));
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercentage =
    sessionData.targetWords > 0
      ? Math.min((sessionData.wordCount / sessionData.targetWords) * 100, 100)
      : 0;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3>Writing Progress</h3>
      </div>

      <div className="session-controls">
        <div className="timer-display">
          <span className="time-label">Session Time:</span>
          <span className="time-value">
            {formatTime(sessionData.timeElapsed)}
          </span>
        </div>

        <div className="session-buttons">
          {!isTimerRunning ? (
            <button onClick={startSession} className="start-btn">
              Start Session
            </button>
          ) : (
            <button onClick={pauseSession} className="pause-btn">
              Pause Session
            </button>
          )}
          <button onClick={endSession} className="end-btn">
            End Session
          </button>
        </div>
      </div>

      <div className="word-tracking">
        <div className="word-count">
          <span className="count-label">Words Written:</span>
          <span className="count-value">{sessionData.wordCount}</span>
        </div>

        <div className="word-target">
          <label className="target-label">Target Words:</label>
          <input
            type="number"
            value={sessionData.targetWords}
            onChange={(e) => setWordTarget(parseInt(e.target.value) || 0)}
            className="target-input"
            min="0"
            step="100"
          />
        </div>

        {sessionData.targetWords > 0 && (
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <span className="progress-text">
              {Math.round(progressPercentage)}%
            </span>
          </div>
        )}
      </div>

      <div className="writing-stats">
        <div className="stat-item">
          <span className="stat-label">Words/Min:</span>
          <span className="stat-value">{sessionData.wordsPerMinute}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Characters:</span>
          <span className="stat-value">{sessionData.charactersTyped}</span>
        </div>
      </div>

      <div className="goals-section">
        <h4>Session Goals</h4>
        <div className="add-goal">
          <input
            type="text"
            placeholder="Add a goal..."
            value={currentGoal}
            onChange={(e) => setCurrentGoal(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addGoal()}
            className="goal-input"
          />
          <button onClick={addGoal} className="add-goal-btn">
            Add
          </button>
        </div>

        <div className="goals-list">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`goal-item ${goal.completed ? "completed" : ""}`}
            >
              <label className="goal-label">
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => toggleGoal(goal.id)}
                />
                <span className="goal-text">{goal.text}</span>
              </label>
              <button
                onClick={() => removeGoal(goal.id)}
                className="remove-goal-btn"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="session-summary">
        <h4>Today&apos;s Summary</h4>
        <div className="summary-stats">
          <div className="summary-item">
            <span className="summary-label">Total Words:</span>
            <span className="summary-value">{sessionData.wordCount}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Time Spent:</span>
            <span className="summary-value">
              {formatTime(sessionData.timeElapsed)}
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Goals Completed:</span>
            <span className="summary-value">
              {goals.filter((g) => g.completed).length}/{goals.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
