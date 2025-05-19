import { useState } from "react";
import "../styles/BurgerMenu.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import FlorentinMonteilBurgerFooter from "../assets/florentin_monteil_footer_mobile.svg";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`burger-menu-container ${isOpen ? "expanded" : ""}`}>
      <div className="burger-circle"> </div>
      <button
        type="button"
        className={`burger-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Menu principal"
      >
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </button>

      <nav className="menu-items">
        <ul>
          <li>
            <a href="#a-propos">
              À propos de moi <LuArrowRight />
            </a>
          </li>
          <li>
            <a href="#projets">
              Projets <LuArrowRight />
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="socials">
            <FaLinkedinIn />
            <FaGithub />
          </li>
          <li className="burger-footer-image">
            <img src={FlorentinMonteilBurgerFooter} alt="Florentin Monteil" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
