import "./App.css";
import ToggleText from "./components/toggleText";
// import { useRef, useState } from "react";

function App() {
  // const fleeBtnRef = useRef(null);
  // const handleMouseMove = () => {
  //   const fleeButton = fleeBtnRef.current;

  //   if (fleeButton) {
  //     const newX = Math.random() * (innerWidth - fleeButton.offsetWidth);
  //     const newY = Math.random() * (innerHeight - fleeButton.offsetHeight);

  //     fleeButton.style.left = `${newX}px`;
  //     fleeButton.style.top = `${newY}px`;
  //   }
  // };

  // const usernameInputRef = useRef(null);
  // const [error, setError] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!usernameInputRef.current.value) {
  //     setError("This field may not be empty");
  //     usernameInputRef.current.focus();
  //   } else {
  //     setError("");
  //     console.log("Data has been sent");
  //   }
  // };

  return (
    <div>
      <ToggleText />
    </div>
  );
  // <button
  //   onMouseMove={handleMouseMove}
  //   ref={fleeBtnRef}
  //   style={{ position: "absolute" }}
  // >
  //   Run away!
  // </button>

  // <form onSubmit={handleSubmit}>
  //   <label>
  //     Username:
  //     <input type="text" ref={usernameInputRef} />
  //   </label>
  //   {error && <p style={{ color: "red" }}>{error}</p>}
  //   <input type="submit" value={"Send"} />
  // </form>
}

export default App;
