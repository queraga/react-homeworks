import { NavLink } from "react-router";
import styles from "../components/styles.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Users
      </NavLink>
    </nav>
  );
}

export default NavBar;
