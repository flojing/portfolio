import "../styles/AboutMe.css";
import FlorentinMonteilAboutMe from "../assets/florentin_monteil.svg";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img
        src={FlorentinMonteilAboutMe}
        alt="Florentin Monteil"
        className="about-me-image"
      />
    </div>
  );
}
