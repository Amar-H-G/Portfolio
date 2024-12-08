import "./home.modules.css";
import myPhoto from "../../assets/my-images/myPhoto.jpg";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="container-home-hob">
          <p>Coding</p>
          <p>Football</p>
          <p className="movies">Watching<br/> Movies</p>
          <p>Travelling</p>
        </div>
        <div className="middle-part-home">
          <div className="text-welcome">
            <p className="profile">
              Hello!,
              <br /> I am Amar,
              <br /> Welcome! to my Profile
            </p>
          </div>
          <div className="container-home-top">
            <div className="left">
              <h1 className="passion">WEB</h1>
            </div>
            <div className="center">
              <img className="center-image" src={myPhoto} alt="Image Loaded" />
            </div>
            <div className="right">
              <h1 className="passion">DEVELOPER</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
