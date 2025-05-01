import "../styles/MyWork.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import Projet1Screen from "../assets/mockup_Pokemon.png";
import Projet2Screen from "../assets/mockup_WildyGamy.png";
import Projet3Screen from "../assets/mockup_mario.png";
import KeywordsContainer from "./KeywordsContainer";

function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls };
}

export default function MyWork() {
  const project1 = useScrollAnimation();
  const project2 = useScrollAnimation();
  const project3 = useScrollAnimation();
  return (
    <div className="my-work-container">
      <div>
        <h2 className="my-work-main-title">Projets</h2>
        <p className="my-work-intro">
          J'ai le plaisir de vous présenter quelques projets que j'ai pu
          réaliser ou sur lesquels j'ai pu travailler.
        </p>
      </div>
      <motion.div
        ref={project1.ref}
        className="project-1-container"
        initial={{ x: 100, opacity: 0 }}
        animate={project1.controls}
        variants={{
          hidden: { x: 100, opacity: 0 }, // État caché (identique à initial)
          visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
      >
        <div className="project-1-content">
          <img src={Projet1Screen} alt="Projet 1" className="project-1-image" />
          <h3 className="project-title">Pokémon Arena</h3>
          <p>
            Pokémon Arena est un site front faisant appel à l'API PokéAPI qui
            comprend un Pokédex et un jeu permettant d'organiser des tournois
            visant à choisir son Pokémon favori. Ce projet a été réalisé dans le
            cadre de ma formation, en groupe de 4.
          </p>
          <KeywordsContainer
            keywords={["Pokédex", "Tournoi", "Design", "React", "PokéAPI"]}
          />
          <a href="f">
            Voir le projet <BsArrowRightCircleFill />
          </a>
        </div>
      </motion.div>
      <motion.div
        ref={project2.ref}
        className="project-2-container"
        initial={{ x: -100, opacity: 0 }}
        animate={project2.controls}
        variants={{
          hidden: { x: -100, opacity: 0 }, // État caché (identique à initial)
          visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
      >
        <div className="project-2-content">
          <img src={Projet2Screen} alt="Projet 2" className="project-2-image" />
          <h3 className="project-title">Wildy Gamy</h3>
          <p>
            Wildy Gamy est un site full-stack dédié à une salle d'arcade
            fictive. Il comprend entre autres un système d'authentification, une
            interface administrateur, un espace utilisateur offrant differents
            types d'interactions. Ce projet a été réalisé dans le cadre de ma
            formation, en groupe de 4.
          </p>
          <KeywordsContainer
            keywords={[
              "Interactif",
              "Sécurisé",
              "Modulaire",
              "React",
              "Express",
              "MySQL",
            ]}
          />
          <a className="project-link-right" href="f">
            Voir le projet <BsArrowRightCircleFill />
          </a>
        </div>
      </motion.div>
      <motion.div
        ref={project3.ref}
        className="project-3-container"
        initial={{ x: 100, opacity: 0 }}
        animate={project3.controls}
        variants={{
          hidden: { x: 100, opacity: 0 }, // État caché (identique à initial)
          visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
      >
        <div className="project-3-content">
          <img src={Projet3Screen} alt="Projet 3" className="project-3-image" />
          <h3 className="project-title">Mario Rank</h3>
          <p>
            Mario Rank est un site full-stack proposant de créer un compte et de
            s'authentifier afin de classer les items de Mario Kart par ordre de
            préférence via un système drag and drop, et de consulter les liste
            des autres utilisateurs. Ce projet a été réalisé dans le cadre de ma
            formation, seul, en 48 heures.
          </p>
          <KeywordsContainer
            keywords={[
              "Solo Rush",
              "Fun",
              "Drag & Drop",
              "React",
              "Express",
              "MySQL",
            ]}
          />
          <a href="f">
            Voir le projet <BsArrowRightCircleFill />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
