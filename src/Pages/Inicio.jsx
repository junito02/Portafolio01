import React from "react";
import "../Estilos/Inicio.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import imagenAvif from "../Imagenes/imagen.avif"; // Solo imagen en AVIF

function Inicio() {
  return (
    <section id="inicio" className="section" aria-labelledby="titulo-inicio">
      <div className="contenedor">
        <img
          className="imagen"
          src={imagenAvif}
          alt="Foto de Junior Alejandro, desarrollador web"
          loading="lazy"
        />
        <p className="saludo">Hola, qué tal, mi nombre es</p>
        <h1 id="titulo-inicio" className="nombre">
          Junior Alejandro
        </h1>
        <p className="profesion">Desarrollador Web</p>
        <div className="contenedor-boton">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/junior-alejandro-a3b426343/"
            className="LINKEDIN"
            aria-label="Ir a mi perfil de LinkedIn"
          >
            <button
              className="boton-LINKEDIN"
              aria-label="Ver mi perfil de LinkedIn"
            >
              <FaLinkedin />
              <span className="sr-only">Ver mi perfil de LinkedIn</span>
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1YjY4kpAK4oTwK58bGlScrDLahcvzYVI5/view?usp=drive_link"
            className="CV"
            aria-label="Descargar mi Currículum Vitae"
          >
            <button className="boton-CV" aria-label="Descargar mi CV">
              <FaDownload />
              <span className="sr-only">Descargar mi CV</span>
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/junito02"
            className="GIT"
            aria-label="Ir a mi repositorio de GitHub"
          >
            <button className="boton-GIT" aria-label="Ver mi GitHub">
              <FaGithub className="git" />
              <span className="sr-only">Ver mi GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
