import styles from "./styles.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>
          <span>One Click</span>
          <br />
          and Job is in your pocket
        </h1>
        <form className={styles.form}>
          <div className={styles.inputJob}>
            <img src="src/assets/icons/searchIcon.svg" alt="Search" />
            <input type="text" placeholder="Job title or Company" />
            <span className={styles.divider}></span>
          </div>
          <div className={styles.inputLocation}>
            <img
              src="src/assets/icons/searchLocationIcon.svg"
              alt="Location Search"
            />
            <input type="text" placeholder="City, country" />
          </div>
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
      </div>

      <div className={styles.logos}>
        <p className={styles.helpText}>We help to find a Job:</p>
        <div className={styles.logosImages}>
          <img src="src/assets/icons/disneyLogo.svg" alt="Disney" />
          <img src="src/assets/icons/facebookLogo.svg" alt="Facebook" />
          <img src="src/assets/icons/microsoftLogo.svg" alt="Microsoft" />
          <img src="src/assets/icons/sonyLogo.svg" alt="Sony" />
          <img src="src/assets/icons/cocacolaLogo.svg" alt="Coca-Cola" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
