import { useState } from "react";
import "../styles/BurgerMenu.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import FlorentinMonteilBurgerFooter from "../assets/florentin_monteil_footer_mobile.svg";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#a-propos" onClick={handleLinkClick}>
              À propos de moi <LuArrowRight />
            </a>
          </li>
          <li>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#projets" onClick={handleLinkClick}>
              Projets <LuArrowRight />
            </a>
          </li>
          <li>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li className="socials">
            <a
              href="https://www.linkedin.com/in/flomonteil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href=" https://github.com/flojing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="burger-footer-image">
            <img src={FlorentinMonteilBurgerFooter} alt="Florentin Monteil" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
