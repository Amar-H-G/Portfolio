import skillStyle from "./skills.module.css"; // Correct import statement
import skills from "../../components/data/skills/skills.json";

const Skills = () => {
  return (
    <>
      <div className={skillStyle.container}>
        <div className="heading">
          <h1>Skills</h1>
        </div>
        <div className="container-body">
          {skills.map((data) => {
            return (
              <div className="items" key={data.id}>
                <div className="item">
                  <img src={`skills-image/${data.imgsrc}`} alt="" />
                  <h3>{data.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Skills;
