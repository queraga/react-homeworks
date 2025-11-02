import styles from "./styles.module.css";
import CoolJobIcon from "../../assets/icons/cooljob_icon.svg";

function Footer() {
  const cities = [
    "Osaka",
    "Kyosan",
    "Tokyo",
    "Hakone",
    "Naeba",
    "Tomamu",
    "Yokohama",
    "Nagoya",
    "Sapporo",
    "Kobe",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <p className={styles.title}>Popular cities</p>

          <ul className={styles.cities}>
            {cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <img src={CoolJobIcon} alt="CoolJob Logo" className={styles.logo} />
        <div className={styles.socials}>
          <img
            src="src/assets/icons/socialsIcons/linkedInIcon.svg"
            alt="LinkedIn"
          />
          <img
            src="src/assets/icons/socialsIcons/googleIcon.svg"
            alt="Google"
          />
          <img
            src="src/assets/icons/socialsIcons/twitterIcon.svg"
            alt="Twitter"
          />
          <img
            src="src/assets/icons/socialsIcons/facebookIcon.svg"
            alt="Facebook"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
