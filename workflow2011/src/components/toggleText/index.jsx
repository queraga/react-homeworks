// import styles from "../toggleText/styles.module.css";
import { useRef, useState } from "react";

function ToggleText() {
  const textAwayRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const [duration, setDuration] = useState(300);

  return (
    <div>
      <form>
        <label>
          Vanished Text
          <input type="text" />
        </label>
        <button type="submit">Get it done</button>
      </form>
    </div>
  );
}

export default ToggleText;
