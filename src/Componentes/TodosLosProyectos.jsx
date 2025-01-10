import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import "../Estilos/Proyectos.css";
import reack from "../assets/reack.png";
import countries from "../assets/countries.webp";
import todo from "../assets/todo.webp";
import gestion from "../assets/gestion.webp";
import movies from "../assets/movies.webp";
import news from "../assets/news.webp";
import ecomerce from "../assets/ecomerce.webp";

// Importa los iconos de tecnologías
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { TbBrandTailwind } from "react-icons/tb";

function TodosLosProyectos() {
  const projects = [
    {
      title: "Movies",
      image: movies,
      link: "https://movies-plum-ten.vercel.app",
      tech: [
        { icon: <FaReact size={25} color="#61DBFB" />, key: "react" },
        { icon: <FaCss3Alt size={25} color="#264de4" />, key: "css" },
        {
          icon: <TbBrandTailwind size={25} color="#264de4" />,
          key: "tailwind",
        },
      ],
    },
    {
      title: "Gestion de gastos",
      image: gestion,
      link: "http://proyecto-2.atwebpages.com/index.php",
      tech: [
        { icon: <FaPhp size={25} color="#264de4" />, key: "php" },
        { icon: <GrMysql size={25} color="#264de4" />, key: "mysql" },
        { icon: <FaCss3Alt size={25} color="#264de4" />, key: "css" },
      ],
    },
    {
      title: "News",
      image: news,
      link: "https://github.com/junito02/App-news",
      tech: [
        { icon: <FaReact size={25} color="#61DBFB" />, key: "react" },
        { icon: <FaCss3Alt size={25} color="#264de4" />, key: "css" },
        {
          icon: <TbBrandTailwind size={25} color="#264de4" />,
          key: "tailwind",
        },
      ],
    },
    {
      title: "Ecommerce",
      image: ecomerce,
      link: "https://ecommerce01-gules.vercel.app/",
      tech: [
        { icon: <FaReact size={25} color="#61DBFB" />, key: "react" },
        { icon: <FaCss3Alt size={25} color="#264de4" />, key: "css" },
        {
          icon: <TbBrandTailwind size={25} color="#264de4" />,
          key: "tailwind",
        },
      ],
    },
    {
      title: "Countries",
      image: countries,
      link: "https://app-countries-gamma.vercel.app/",
      tech: [
        { icon: <FaReact size={25} color="#61DBFB" />, key: "react" },
        {
          icon: <TbBrandTailwind size={25} color="#264de4" />,
          key: "tailwind",
        },
      ],
    },
    {
      title: "Todo-List",
      image: todo,
      link: "https://lista-de-tareas-one.vercel.app/",
      tech: [
        { icon: <FaReact size={25} color="#61DBFB" />, key: "react" },
        {
          icon: <TbBrandTailwind size={25} color="#264de4" />,
          key: "tailwind",
        },
      ],
    },
  ];

  return (
    <div className="todos-los-proyectos section">
      <h1 className="titulo-proyectos-todos">Todos mis proyectos</h1>

      {/* Botón de retorno */}
      <div className="boton-retorno">
        <Link to="/" className="retorno-link">
          Volver a la página principal
        </Link>
      </div>

      <div className="proyectos-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <div className="tech-icons">
                {project.tech.map((tech) => (
                  <span key={tech.key}>{tech.icon}</span>
                ))}
              </div>
              <a
                target="_blank"
                href={project.link}
                className="card-link"
                rel="noreferrer"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodosLosProyectos;
