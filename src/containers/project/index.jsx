import styles from "./portfolio.module.css";
import projects from "../../components/data/projects/projects.json";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className={`my-3 ${styles.container}`}>
        <div className={styles.heading}>
          <h1>Projects</h1>
        </div>
        <div className={`row  ${styles.containerProjects}`}>
          {projects.map((projects) => {
            return (
              <>
                <div key={projects.id} className="my-4 col-md-3 mx-4">
                  <div className={styles.cardBox} style={{ width: "18rem" }}>
                    <div className={styles.img}>
                      <img
                        src={`projects/${projects.imgSrc}`}
                        className={`card-img-top ${styles.cardImgTop}`}
                        alt="Loading"
                      />
                    </div>

                    <div className={`card-body ${styles.cardBody}`}>
                      <h2 className={`card-title ${styles.cardTitle}`}>
                        {projects.title}
                      </h2>
                      <p className={`card-text my-1 ${styles.cardText}`}>
                        {projects.about}
                      </p>
                      <div className="btn">
                        <Link
                          to={projects.link}
                          className={`btn btn-info mx-2 ${styles.btnPrimary}`}
                        >
                          Go & Check
                        </Link>
                        <Link
                          to={projects.code}
                          className={`btn btn-warning mx-2 ${styles.btnPrimary}`}
                        >
                          Code
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Project;
