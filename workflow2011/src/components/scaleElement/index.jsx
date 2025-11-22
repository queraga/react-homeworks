import { useRef } from "react";
import styles from "../scaleElement/styles.module.css";

function ScaleElement({ duration = 300 }) {
  const scaleRef = useRef(null);
  const toggleScale = () => {
    if (scaleRef.current) {
      scaleRef.current.classList.toggle(styles.scaleHidden);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        ref={scaleRef}
        className={styles.scale}
        style={{ transition: `all ${duration}ms` }}
      >
        I AM SCALABLE !
      </div>
      <button className={styles.btn} onClick={toggleScale}>
        Scale that
      </button>
    </div>
  );
}

export default ScaleElement;
