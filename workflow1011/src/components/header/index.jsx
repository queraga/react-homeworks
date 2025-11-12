import styles from "../header/styles.module.css";

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src="src/assets/images/logoImage.svg" alt="Logo" />
      </div>
      <div className={styles.container}>
        <a href="">Main</a>
        <a href="">Music</a>
        <a href="">Comunity</a>
        <a href="">Friends</a>
      </div>
    </header>
  );
}

export default Header;
