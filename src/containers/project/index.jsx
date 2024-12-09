import styles from "./portfolio.module.css";
const Project = () => {
  return (
    <>
      <div className={`my-3 ${styles.container}`}>
        <div className={styles.heading}>
          <h1>Projects</h1>
        </div>
        <div className={styles.containerProjects}>

        </div>
      </div>
    </>
  );
};
export default Project;
