import ProjectBox from "./ProjectBox";
import FoodImage from "../images/foodapp.png";
import ErpImage from "../images/erp.png";
import MovieImage from "../images/moviedb.png";
import MoneyImage from "../images/money.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={FoodImage} projectName="FoodOrderingApp" />
        <ProjectBox projectPhoto={ErpImage} projectName="ErpApp" />
        <ProjectBox projectPhoto={MoneyImage} projectName="MoneyExchange" />
        <ProjectBox projectPhoto={MovieImage} projectName="MovieDatabase" />
      </div>
    </div>
  );
};

export default Projects;