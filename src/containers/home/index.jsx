import styles from "./home.module.css";
import myPhoto from "../../assets/my-images/myPhoto.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.containerHome}>
        <div className={styles.containerHomeHob}>
          <p>Coding</p>
          <p>Football</p>
          <p className={styles.movies}>
            Watching
            <br /> Movies
          </p>
          <p>Travelling</p>
        </div>
        <div className={styles.middlePartHome}>
          <div className={styles.textWelcome}>
            <p className={styles.profile}>
              Hello!,
              <br /> I am Amar,
              <br /> Welcome! to my Profile
            </p>
          </div>
          <div className={styles.containerHomeTop}>
            <div className={styles.left}>
              <h1 className={styles.passion}>WEB</h1>
            </div>
            <div className={styles.center}>
              <img className={styles.centerImage} src={myPhoto} alt="Image Loaded" />
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
