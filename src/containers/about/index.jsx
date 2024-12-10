import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.heading}
          data-aos="fade-down-right"
          data-aos-duration="3000"
        >
          <h1 className={styles.head}>About</h1>
        </div>
        <div className={`${styles.body} `}>
          <div
            className={styles.text1}
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            I am a passionate and driven web developer with a keen interest in
            building dynamic and user-friendly web applications. My journey into
            development is fueled by my love for technology and problem-solving,
            which inspires me to create solutions that simplify and enhance
            everyday experiences.
          </div>
          <div
            className={styles.text2}
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <p>
              I specialize in front-end and full-stack development, leveraging
              technologies like HTML, CSS, JavaScript, Python, and Django to
              build responsive and scalable projects. From crafting engaging
              designs to implementing robust back-end systems, I focus on
              delivering impactful, functional, and aesthetically pleasing
              applications.
            </p>
          </div>
          <div
            className={styles.text3}
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <p>
              Beyond coding, I am committed to continuous learning, currently
              enhancing my skills in data structures and algorithms to improve
              my problem-solving abilities. My dedication to personal growth and
              innovation drives me to stay updated with the latest industry
              trends and best practices. Whether collaborating in teams or
              working independently, I thrive on turning ideas into reality and
              contributing to meaningful projects that leave a lasting
              impression. My portfolio reflects my journey, showcasing projects
              that embody creativity, dedication, and technical expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
