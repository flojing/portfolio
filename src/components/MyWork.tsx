import "../styles/MyWork.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Projet3Screen from "../assets/MarioRankTab.png";
import Projet1Screen from "../assets/PokemonArenaDesktop.png";
import Projet2Screen from "../assets/WildyGamyDesktop.png";

export default function MyWork() {
  return (
    <div className="my-work-container">
      <div>
        <h2 className="my-work-main-title">Projets</h2>
        <p className="my-work-intro">
          J'ai le plaisir de vous présenter quelques projets que j'ai pu
          réaliser ou sur lesquels j'ai pu travailler.
        </p>
      </div>
      <div className="project-1-container">
        <div className="project-1-content">
          <img src={Projet1Screen} alt="Projet 1" className="project-1-image" />
          <h3 className="project-title">Pokémon Arena</h3>
          <p>
            Pokémon Arena est un site front faisant appel à l'API PokéAPI qui
            comprend un Pokédex et un jeu permettant d'organiser des tournois
            visant à choisir son Pokémon favori. Ce projet a été réalisé dans le
            cadre de ma formation, en groupe de 4.
          </p>
          <div className="project-keywords-container">
            <span className="keyword">Pokédex</span>
            <span className="keyword">Tournoi</span>
            <span className="keyword">Design</span>
            <span className="keyword">React</span>
            <span className="keyword">PokéAPI</span>
          </div>
          <a href="f">
            Voir le projet <BsArrowRightCircleFill />
          </a>
        </div>
      </div>
      <div className="project-2-container">
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
          <div className="project-keywords-container">
            <span className="keyword">Interactif</span>
            <span className="keyword">Sécurisé</span>
            <span className="keyword">Modulaire</span>
            <span className="keyword">React</span>
            <span className="keyword">Express</span>
            <span className="keyword">MySQL</span>
          </div>
          <a className="project-link-right" href="f">
            Voir le projet <BsArrowRightCircleFill />
          </a>
        </div>
      </div>
      <div className="project-3-container">
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
          <div className="project-keywords-container">
            <span className="keyword">Solo Rush</span>
            <span className="keyword">Fun</span>
            <span className="keyword">Drag & Drop</span>
            <span className="keyword">React</span>
            <span className="keyword">Express</span>
            <span className="keyword">MySQL</span>
          </div>
          <a href="f">
            Voir le projet <BsArrowRightCircleFill />
          </a>
        </div>
      </div>
    </div>
  );
}
