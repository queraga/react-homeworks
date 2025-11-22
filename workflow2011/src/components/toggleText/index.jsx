import styles from "../toggleText/styles.module.css";
import { useRef, useState } from "react";

function ToggleText() {
  const textAwayRef = useRef(null);
  const [duration, setDuration] = useState(3000);
  const toggleVisibility = () => {
    if (!textAwayRef.current) return;

    textAwayRef.current.classList.toggle(styles.hidden);
  };

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className={styles.label}>
          Please enter a time to make it clear
          <br />
          <input
            className={styles.input}
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Animation duration"
          />
        </label>
        <button className={styles.btn} onClick={toggleVisibility}>
          Toggle Text
        </button>
        <p
          ref={textAwayRef}
          className={styles.textBlock}
          style={{
            transition: `opacity ${duration}ms, max-height ${duration}ms`,
          }}
        >
          Clean the trash! Make me go away from here.
        </p>
      </form>
    </div>
  );
}

export default ToggleText;
