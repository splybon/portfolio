import React from "react";
import styles from "./Header.module.css";
import utilStyles from "../styles/utils.module.css";
import navLinks from "./nav-links";

const Header = () => (
  <header className={utilStyles.container}>
    <div className={styles.header}>
      <a href="/" className={styles.homeLink}>
        <img src="/bear-face.png" className={styles.navIcon} />
        <strong className={styles.homeText}>Scott Plybon</strong>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map(({ title, page }) => (
            <li className={styles.navItem} key={title}>
              <a href={page} className={styles.navLink}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
