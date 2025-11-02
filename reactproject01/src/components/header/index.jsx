import styles from "./styles.module.css";
import CoolJobIcon from "../../assets/icons/cooljob_icon.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={CoolJobIcon} alt="Logo" className={styles.coolJobIcon} />
      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="">Job Search</a>
          </li>
          <li>
            <a href="">Startup Search</a>
          </li>
        </ul>
        <div className={styles.authSection}>
          <a href="">Registration</a>
          <button className={styles.loginBtn}>Log in</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
