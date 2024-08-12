import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Github from "../assets/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Twitter} alt="twitter icon" />
      <img src={Facebook} alt="facebook icon" />
      <img src={Instagram} alt="instagram icon" />
      <img src={Github} alt="github icon" />
    </div>
  );
};

export default Footer;
