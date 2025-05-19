import "../styles/Contact.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-main-title">Contactez-moi</h2>
      <p>
        Vous avez une demande, une question, un projet, une proposition, envie
        d'en savoir plus, ou simplement de discuter, de partager des
        expériences, n'hésitez pas à me contacter!
      </p>
      <div className="contact-socials">
        <FaLinkedinIn />
        <FaGithub />
      </div>

      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
}
