import "../styles/AboutMe.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaFigma, FaNode, FaReact } from "react-icons/fa6";
import { SiExpress, SiMysql } from "react-icons/si";
import { useInView } from "react-intersection-observer";
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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Réinitialiser l'animation quand hors de vue
    }
  }, [controls, inView]);

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
      <motion.div
        ref={ref}
        className="tech-logos-container"
        initial={{ x: -100, opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
      >
        <FaReact />
        <BiLogoTypescript />
        <FaNode />
        <SiExpress />
        <SiMysql />
        <FaGithub />
        <FaFigma />
      </motion.div>
    </div>
  );
}
