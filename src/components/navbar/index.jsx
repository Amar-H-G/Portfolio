import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const NavBar = () => {
  return (
    <>
      <div
        className={`container ${styles.navbar} `}
        data-aos="fade-down-left"
        data-aos-duration="2000"
      >
        <div
          className={`${styles.leftNav} ${styles.navItems}`}
        >
          Portfolio
        </div>
        <div className={styles.rightNav}>
          <Link
            className={styles.navItems}
            to="/"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Home
          </Link>
          <Link
            className={styles.navItems}
            to="/project"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            Projects
          </Link>
          <Link
            className={styles.navItems}
            to="/skills"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Skills
          </Link>
          <Link
            className={styles.navItems}
            to="/resume"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            Resume
          </Link>
          <Link
            className={styles.navItems}
            to="/experience"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Experience
          </Link>

          <Link
            className={styles.navItems}
            to="/about"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            About
          </Link>
          <Link
            className={styles.navItems}
            to="/contact"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
