import styles from "../toggleText/styles.module.css";
import { useRef, useState } from "react";

function ToggleText() {
  const textAwayRef = useRef(null);

  const [duration, setDuration] = useState(300);

  const toggleVisibility = () => {
    if (!textAwayRef.current) return;
    textAwayRef.current.classList.toggle(styles.hidden);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Put here number - how long it takes to get clear
          <br />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Animation duration"
          />
        </label>
        <button onClick={toggleVisibility}>Toggle Text</button>
        <p
          ref={textAwayRef}
          className={styles.textBlock}
          style={{ transition: `opacity ${duration}ms` }}
        >
          Clean the trash! Make me go away from here.
        </p>
        <button type="submit">Get it done</button>
      </form>
    </div>
  );
}

export default ToggleText;
