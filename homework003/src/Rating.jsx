import { useState } from "react";
import styles from "./Rating.module.css";
import { ratingList } from "./ratingList.js";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.imageBlock}>
        <img src={ratingList[ratingValue]} alt="image" />
      </div>
      <div className={styles.btnBlock}>
        <button onClick={() => setRatingValue(3)}>Great</button>
        <button onClick={() => setRatingValue(2)}>Good</button>
        <button onClick={() => setRatingValue(1)}>Ok</button>
        <button onClick={() => setRatingValue(0)}>Bad</button>
      </div>
    </div>
  );
}

export default Rating;
