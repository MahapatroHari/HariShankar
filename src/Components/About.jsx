import Skills from "./Skills";
import Resume from "../assets/Hari_Resume.pdf"
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Hari Shankar Mahapatro</b> and I am from
            Visakhapatnam, India. I&apos;m a <b>Frontend Web Developer</b> with a
            recent <b>B.Tech in Computer Science</b>. <br />
            <br />
            I am passionate about building dynamic web applications and enjoy
            creating visually appealing designs with my unique touch. You can
            explore some of my projects in the projects section.
            <br />
            <br />I am <b>eager</b> to collaborate on new opportunities where I
            can contribute, learn, and grow. Feel free to connect with me—links
            are available in the footer.
            <br />
            Besides coding, I enjoy exploring new technologies, experimenting
            with designs, and finding creative solutions to challenges in my
            spare time.
          </p>

          <a href={Resume} download className="resume-btn">
            <button className="DownloadBtn">
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Redux" />
        <Skills skill="MySQL" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
        <Skills skill="C++" />
        <Skills skill="Excel" />
      </div>
    </>
  );
};

export default About;
