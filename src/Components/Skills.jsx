import { CgCPlusPlus } from "react-icons/cg";
import {
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiRedux, SiMicrosoftexcel, SiMysql } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Tailwind: <SiTailwindcss />,
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Redux: <SiRedux />,
    Excel: <SiMicrosoftexcel />,
    MySQL: <SiMysql />,
  };

  return (
    <div title={skill} className="SkillBox">
      <div className="SkillIcon">{icon[skill]}</div>
      <div className="SkillName">{skill}</div>
    </div>
  );
};

export default Skills;
