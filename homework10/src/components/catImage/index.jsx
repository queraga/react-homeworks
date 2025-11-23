import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../catImage/styles.module.css";

function CatImage() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCat = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    setImage(response.data[0].url);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Cats in shuffle</h1>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : image ? (
        <img src={image} className={styles.img} />
      ) : null}
      <button onClick={fetchCat} className={styles.btn}>
        New Cat
      </button>
    </div>
  );
}

export default CatImage;
