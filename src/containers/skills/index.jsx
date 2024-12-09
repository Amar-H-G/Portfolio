import skillStyle from "./skills.module.css"; // Correct import statement
import skills from "../../components/data/skills/skills.json";

const Skills = () => {
  return (
    <>
      <div className={skillStyle.container}>
        <div className={skillStyle.heading}>
          <h1 className={skillStyle.head}>Skills</h1>
        </div>
        <div className={skillStyle.itemsContainer}>
          <div className={skillStyle.items}>
            {skills.map((data) => {
              return (
                <div className={skillStyle.item} key={data.title}>
                  <img src={`skills-image/${data.imgsrc}`} alt="" />
                  <span>{data.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
