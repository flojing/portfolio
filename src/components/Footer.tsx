import "../styles/Footer.css";
import FlorentinMonteilFooterDesktop from "../assets/florentin_monteil_footer.svg";
import FlorentinMonteilFooter from "../assets/florentin_monteil_footer_mobile.svg";
import LogoFooter from "../assets/logosvg.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <img src={LogoFooter} alt="Logo" className="footer-logo" />
      <img
        src={FlorentinMonteilFooter}
        alt="Logo"
        className="footer-florentin-monteil"
      />
      <img
        src={FlorentinMonteilFooterDesktop}
        alt="Logo"
        className="footer-florentin-monteil-desktop"
      />
    </div>
  );
}
