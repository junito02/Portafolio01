import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importamos los íconos de GitHub y LinkedIn
import "../Estilos/Footer.css"; // Importa tu archivo de estilo para el Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy;2024 - Realizado por Junior Alejandro..</p>
        <div className="social-icons">
          <a
            href="https://github.com/junito02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/junior-alejandro-a3b426343/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
