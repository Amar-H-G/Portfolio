import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const NavBar = () => {
  return (
    <>
      <div className={`container ${styles.navbar} `} data-aos="fade-down-left" data-aos-duration="2000" >
        <div className={`${styles.leftNav} ${styles.navItems}`}>Portfolio</div>
        <div className={styles.rightNav}>
          <Link className={styles.navItems} to="/">
            Home
          </Link>
          <Link className={styles.navItems} to="/project">
            Projects
          </Link>
          <Link className={styles.navItems} to="/skills">
            Skills
          </Link>
          <Link className={styles.navItems} to="/resume">
            Resume
          </Link>
          <Link className={styles.navItems} to="/experience">
            Experience
          </Link>
          <Link className={styles.navItems} to="/contact">
            Contact
          </Link>
          <Link className={styles.navItems} to="/about">
            About
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
