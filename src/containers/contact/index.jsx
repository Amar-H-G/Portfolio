import styles from "./contact.module.css";
import { IoIosMail } from "react-icons/io";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="container my-5">
        <div className={styles.heading}>
          <h1>Contact Me</h1>
        </div>
        <div className={styles.contactIcons}>
          <a
            href="mailto:amarpatra932@gmail.com"
            target="_blank"
            className="ittems"
          >
            <IoIosMail className={styles.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/amarpatra"
            target="_blank"
            className="ittems"
          >
            <FaLinkedin className={styles.icons} />
          </a>
          <a href="https://github.com/Amar-H-G" target="_blank" className="ittems">
            <FaGithub className={styles.icons} />
          </a>
          <a
            href="https://www.facebook.com/Technical.study89"
            target="_blank"
            className="ittems"
          >
            <FaFacebook className={styles.icons} />
          </a>
          <a href="https://www.instagram.com/patraamar187/" target="_blank" className="ittems">
            <FaSquareInstagram className={styles.icons} />
          </a>
          <a href="https://x.com/amarpatra89?t=d6Lu7iv3A8kwTTiflcuS_Q&s=09" target="_blank" className="items">
            <FaTwitterSquare className={styles.icons} />
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;
