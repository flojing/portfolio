import "../styles/Contact.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-main-title">Contactez-moi</h2>
      <p>
        Vous avez une demande, une question, un projet, une proposition, envie
        d'en savoir plus, ou simplement de discuter, de partager des
        expériences, n'hésitez pas à me contacter!
      </p>
      <div className="contact-socials">
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
      </div>

      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
}
