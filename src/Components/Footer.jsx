import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Hari Shankar Mahapatro</h4>
      <div className="footerLinks">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/harishankarmahapatro/" target="_blank">
          <FaLinkedinIn />
        </a>

        {/* Github */}
        <a href="https://github.com/MahapatroHari" target="_blank">
          <FaGithub />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/mahapatrohari/" target="_blank">
          <FaInstagram />
        </a>

        {/* Gmail */}
        <a href="mailTo:harisankarmahapatro@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
