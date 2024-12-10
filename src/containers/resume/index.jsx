import styles from "./resume.module.css";
import pdf from "../../resume-pdf/my_resume_perfect.pdf";
const Resume = () => {
  return (
    <>
      <div className="container">
        <div
          className={styles.heading}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="head">Resume</h1>
        </div>
        <div className={styles.containerBody}>
          <div
            className={styles.left}
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <p className={styles.text}>
              As a passionate web developer, I specialize in creating dynamic,
              responsive applications using HTML, CSS, JavaScript, Python, and
              Django, React. My portfolio features projects like Local Shop, an
              Amazon and Myntra clone, a to-do app, and more, reflecting my
              focus on user-friendly design. Currently mastering data structures
              and algorithms, I’m committed to learning modern development
              practices and delivering innovative, impactful solutions.
            </p>
          </div>
          <div
            className={styles.right}
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <div className={styles.button}>
              <a
                href={pdf}
                download="resume.pdf"
                type="button"
                className={`btn btn-warning btn-lg ${styles.textbutton}`}
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
