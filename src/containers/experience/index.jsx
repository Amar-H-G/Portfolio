import styles from "./experience.module.css";

const Experience = () => {
  return (
    <>
      <div className={`ex ${styles.container}`}>
        <div className={styles.heading}>
          <h1>Experience</h1>
        </div>

        <div className={`${styles.Ebody}`}>
          <div className={styles.text}>
            <h2>Student</h2>
            <h3 className={styles.head}>
              I am a student at <br />
              <span>
                Dr. Sudhir Chandra Sur Institute of Technology and Sports
                Complex.
              </span>
            </h3>
            <p>
              Currently, I have no industry-level work experience,
              <br /> but I have completed a few projects with my own dedication.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
