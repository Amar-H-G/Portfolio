import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const NavBar = () => {
  return (
    <>
      <div
        className={`container ${styles.navbar} `}
        data-aos="fade-down-left"
        data-aos-duration="800"
      >
        <div
          className={`${styles.leftNav} ${styles.navItems}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Amar Patra
        </div>
        <div className={styles.rightNav}>
          <Link
            className={styles.navItems}
            to="/"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Home
          </Link>
          <Link
            className={styles.navItems}
            to="/about"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            About
          </Link>
          <Link
            className={styles.navItems}
            to="/project"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Projects
          </Link>
          <Link
            className={styles.navItems}
            to="/skills"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Skills
          </Link>
          <Link
            className={styles.navItems}
            to="/experience"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Experience
          </Link>
          <Link
            className={styles.navItems}
            to="/resume"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Resume
          </Link>

          <Link
            className={styles.navItems}
            to="/contact"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
