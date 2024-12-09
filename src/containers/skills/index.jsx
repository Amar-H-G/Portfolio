import skillStyle from "./skills.module.css"; // Correct import statement
import skills from "../../components/data/skills/skills.json";

const Skills = () => {
  return (
    <>
      <div className={skillStyle.container}>
        <div className={skillStyle.heading}data-aos="zoom-out-right" data-aos-duration="2000" >
          <h1 className={skillStyle.head}>Skills</h1>
        </div>
        <div className={skillStyle.itemsContainer}>
          <div className={skillStyle.items}>
            {skills.map((data) => {
              return (
                <div
                  className={skillStyle.item}
                  key={data.title}
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500"
                >
                  <img
                    src={`skills-image/${data.imgsrc}`}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    alt=""
                  />
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
