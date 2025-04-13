import "../styles/NavBar.css";
import FloLogo from "../assets/logosvg.svg";
import CustomToggle from "./CustomToggle";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left-container">
        <img className="navbar-logo" src={FloLogo} alt="Logo" />
        <CustomToggle onChange={(checked) => console.log(checked)} />
      </div>
    </div>
  );
}
