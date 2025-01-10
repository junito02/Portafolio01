import React, { useState } from "react";
import "../Estilos/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Estado para enlace activo

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre abrir y cerrar el menú
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Cerrar menú después de hacer clic
    setActiveLink(sectionId); // Marcar el enlace como activo
  };

  return (
    <header>
      <h1 className="logo">"Jr."</h1>
      <div
        className={`bars ${isMenuOpen ? "active" : ""}`} // Agregar 'active' cuando el menú está abierto
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={isMenuOpen ? "active" : "X"}>
        <ul>
          <li>
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "inicio")}
              className={activeLink === "inicio" ? "active-link" : ""}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#Acerca"
              onClick={(e) => scrollToSection(e, "Acerca")}
              className={activeLink === "Acerca" ? "active-link" : ""}
            >
              Acerca
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className={activeLink === "skills" ? "active-link" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              onClick={(e) => scrollToSection(e, "proyectos")}
              className={activeLink === "proyectos" ? "active-link" : ""}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#Contactos"
              onClick={(e) => scrollToSection(e, "Contactos")}
              className={activeLink === "Contactos" ? "active-link" : ""}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
