import Photo from "../assets/card-photo.png";
import Envelope from "../assets/envelope.png";
import LinkedIn from "../assets/linkedin.png";

const Info = () => {
  return (
    <div className="info">
      <img className="info-image" src={Photo} alt="A Headshot of a female" />
      <h2 className="info-name">Laura Smith</h2>
      <h4 className="info-skill">Frontend Developer</h4>
      <p className="info-website">laurasmith.website</p>
      <div className="btn-container">
        <button id="envelope">
          <img className="info-icons" src={Envelope} alt="an envelope icon" />
          Email
        </button>
        <button id="linkedin">
          <img className="info-icons" src={LinkedIn} alt="an envelope icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
