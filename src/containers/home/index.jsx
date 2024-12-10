import styles from "./home.module.css";
import myPhoto from "../../assets/my-images/myPhoto3.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.containerHome}>
        <div
          className={styles.containerHomeHob}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p>Coding</p>
          <p>Football</p>
          <p className={styles.movies}>
            Watching
            <br /> Movies
          </p>
          <p>Travelling</p>
        </div>
        <div className={styles.middlePartHome}>
          <div
            className={styles.textWelcome}
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <p className={styles.profile}>
              Hello!,
              <br /> I am Amar,
              <br /> Welcome! to my Profile
            </p>
          </div>
          <div
            className={styles.containerHomeTop}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className={styles.left}>
              <h1 className={styles.passion}>WEB</h1>
            </div>
            <div className={styles.center}>
              <img
                className={styles.centerImage}
                src={myPhoto}
                alt="Image Loaded"
              />
            </div>
            <div className={styles.right}>
              <h1 className={styles.passion}>DEVELOPER</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
