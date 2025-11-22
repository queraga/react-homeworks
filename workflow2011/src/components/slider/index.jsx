import { useRef } from "react";
import styles from "../slider/styles.module.css";

function Slider({ duration = 300 }) {
  const sliderRef = useRef(null);
  const slideMe = () => {
    if (sliderRef.current) {
      sliderRef.current.classList.toggle(styles.slideHidden);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div style={{ transition: `all ${duration}ms` }} ref={sliderRef}>
        I am slidin sliding sliding sliding sliding
      </div>
      <button className={styles.btn} onClick={slideMe}>
        Slide Me!
      </button>
    </div>
  );
}

export default Slider;
