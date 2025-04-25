import "../styles/AboutMe.css";
import { useRef } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaFigma, FaNode, FaReact } from "react-icons/fa6";
import { SiExpress, SiMysql } from "react-icons/si";
import cvPDF from "/CV/cv_florentin_monteil.pdf";
import FlorentinMonteilAboutMe from "../assets/florentin_monteil.svg";
import FloLogoAboutMe from "../assets/logosvg.svg";

export default function AboutMe() {
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const handleDownloadCV = () => {
    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }
  };

  return (
    <div className="about-me-container">
      <img
        src={FlorentinMonteilAboutMe}
        alt="Florentin Monteil"
        className="about-me-image"
      />
      <article className="about-me-text">
        Après une formation initiale de commerce international et plusieurs
        années d'expérience dans le domaine des achats, j'ai décidé à presque 40
        ans de me reconvertir dans le milieu du développement web. J'ai donc
        fait une formation de développeur web full-stack à la Wild Code School
        de Toulouse où j'ai pu acquérir les bases du métier et de React.js ainsi
        que les notions importantes du travail en équipe (workflow Git). Suite à
        cela, je suis actuellement à la recherche d'expérience, que ce soit un
        stage, des projets, un emploi et en priorité un poste en alternance pour
        le titre de Concepteur Développeur d'Application.
      </article>
      <img src={FloLogoAboutMe} alt="logo" className="about-me-logo" />
      <button
        type="button"
        onClick={handleDownloadCV}
        className="about-me-button"
      >
        Télécharger mon CV
      </button>
      <a
        ref={downloadLinkRef}
        href={cvPDF}
        download="CV_Florentin_Monteil.pdf"
        style={{ display: "none" }}
      >
        Télécharger
      </a>
      <div className="tech-logos-container">
        <FaReact />
        <BiLogoTypescript />
        <FaNode />
        <SiExpress />
        <SiMysql />
        <FaGithub />
        <FaFigma />
      </div>
    </div>
  );
}
