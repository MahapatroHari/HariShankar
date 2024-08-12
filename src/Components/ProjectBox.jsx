import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FoodOrderingAppDesc:
      "Discover your next favorite meal with our intuitive food app. Browse menus, place orders, and explore culinary delights right from your fingertips.",
    FoodOrderingAppGithub: "https://github.com/MahapatroHari/foodapp",
    FoodOrderingAppWebsite: "https://yumbox.netlify.app/",

    ErpAppDesc:
      "Streamline your business operations with our comprehensive ERP app. Manage resources, track performance, and enhance productivity with a unified solution.",
    ErpAppGithub: "https://github.com/MahapatroHari/erp-system",
    ErpAppWebsite: "https://entnt-erp.netlify.app/",

    MovieDatabaseDesc:
      "Find and explore movies with ease using our MovieDB app. Get detailed information, reviews, and recommendations for all your cinematic needs.This web app  is for helping you find your desired movie.The project helped me with understanding the working of API.I also learned new CSS properties and tricks.",
    MovieDatabaseGithub: "https://github.com/MahapatroHari/JavaScript/tree/main/moviedb",
    MovieDatabaseWebsite: "https://cinemabook.netlify.app/",


    MoneyExchangeDesc:
      "Stay on top of global currency trends with our currency exchange app. Track real-time rates, make conversions, and manage your finances effortlessly.",
    MoneyExchangeGithub: "https://github.com/MahapatroHari/currencyConverter",
    MoneyExchangeWebsite: "https://rateconvert.netlify.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName.split(/(?=[A-Z])/).join(' ')}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;