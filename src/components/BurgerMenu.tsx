import { useState } from "react";
import "../styles/BurgerMenu.css";

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
            <a href="#a-propos">À propos</a>
          </li>
          <li>
            <a href="#projets">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
