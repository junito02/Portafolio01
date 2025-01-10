import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Estilos/Contactos.css";

const Contactos = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");

    emailjs
      .sendForm(
        "service_sjtss1a",
        "template_s1jvq5o",
        form.current,
        "AwswkJUDi57i6pMpL"
      )
      .then(
        () => {
          setIsSending(false);
          setSuccessMessage("¡Mensaje enviado correctamente!");
          form.current.reset();
        },
        () => {
          setIsSending(false);
          setSuccessMessage("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="form-title">Contáctame</h2> {/* Título agregado */}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit" disabled={isSending}>
            {isSending ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
        {successMessage && (
          <p
            className={`message ${
              successMessage.includes("correctamente") ? "success" : "error"
            }`}
          >
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contactos;
