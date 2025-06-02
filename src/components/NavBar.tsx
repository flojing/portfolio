import "../styles/NavBar.css";
import FloLogo from "../assets/logosvg.svg";
import { useTheme } from "../services/ThemeContext";
import BurgerMenu from "./BurgerMenu";
import CustomToggle from "./CustomToggle";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar-container">
      <div className="navbar-left-container">
        <img className="navbar-logo" src={FloLogo} alt="Logo" />
        <CustomToggle onChange={toggleTheme} initialState={theme === "light"} />
      </div>
      <div className="navbar-right-container">
        <BurgerMenu />
      </div>
      <div className="navbar-right-container-desktop">
        <a href="#a-propos">À propos de moi</a>
        <a href="#projets">Projets</a>
        <a href="#contact" className="desktop-menu-contact">
          Contact
        </a>
      </div>
    </div>
  );
}
