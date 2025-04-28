import { useState } from "react";
import "../styles/Contact.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "../services/toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const response = await fetch(
        "https://formsubmit.co/ajax/flo.monteil@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        toastSuccess("Votre message a été envoyé avec succès!");
        form.reset();
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toastError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/flo.monteil@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="_subject"
        value="Nouveau message depuis le portfolio"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://votre-site.com/merci" />
      <div className="form-group">
        <label htmlFor="nom">
          Nom <span className="required">*</span>
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Votre adresse mail <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Votre message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={5}
        />
      </div>

      <button type="submit" className="submit-button">
        <span>Envoyer</span>
        <div className="button-icon">
          <BsArrowRightCircleFill />
        </div>
      </button>
    </form>
  );
}
