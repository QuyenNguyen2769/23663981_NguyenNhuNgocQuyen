import { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  // useRef lưu intervalId
  const intervalRef = useRef(null);

  // useRef focus input
  const inputRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    pause();
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps(prev => [
      ...prev,
      {
        name: lapName || `Lap ${prev.length + 1}`,
        time
      }
    ]);
    setLapName("");

    // focus input
    inputRef.current.focus();
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = Math.floor((ms % 1000) / 10);

    return `${minutes}:${seconds.toString().padStart(2, "0")}.${millis
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Stopwatch</h2>

      <h1>{formatTime(time)}</h1>

      <button onClick={start} disabled={running}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <input
        ref={inputRef}
        placeholder="Lap name"
        value={lapName}
        onChange={e => setLapName(e.target.value)}
      />
      <button onClick={addLap}>Add Lap</button>

      <ul>
        {laps.map((lap, i) => (
          <li key={i}>
            {lap.name} – {formatTime(lap.time)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stopwatch;
