import "./App.css";
import { useState } from "react";
import ValueDisplay from "./components/ValueDisplay";

function App() {
  const [isCurrent, setIsCurrent] = useState("");
  const [savedValue, setSavedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedValue(isCurrent);
    setIsCurrent("");
  };

  return (
    <>
      <div className="appContainer">
        <h1>Current and Previous Value</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={isCurrent}
          onChange={(e) => setIsCurrent(e.target.value)}
          placeholder="Value"
        />
      </form>
      <div className="valueBox">
        <ValueDisplay savedValue={savedValue} />
      </div>
      <footer className="footer">
        <p>Inspired by Apple’s Aqua UI (2001–2002)</p>
      </footer>
    </>
  );
}

export default App;
