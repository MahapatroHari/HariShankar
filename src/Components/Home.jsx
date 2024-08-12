import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/PI.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I&apos;M <b>Hari Shankar Mahapatro</b>
          </h1>
          <Type />
          <Link to="/About">
            <button className="AboutMeBtn">
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button className="ContactBtn">
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
