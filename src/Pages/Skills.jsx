import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiPhp, SiMysql, SiMongodb } from "react-icons/si";

import "../Estilos/Skills.css";

function Skills() {
  return (
    <div id="skills" className="section">
      <div className="contenedor-titulo-skills">
        <h2 className="titulo-skills">Skills</h2>
      </div>
      <div className="contenedor-iconos">
        <div className="icono">
          <h2 className="nombre-iconos" id="html">
            HTML
          </h2>
          <FaHtml5 className="icon" id="html" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="css">
            CSS
          </h2>
          <FaCss3Alt className="icon" id="css" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="javascript">
            JavaScript
          </h2>
          <TbBrandJavascript className="icon" id="javascript" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="react">
            React
          </h2>
          <FaReact className="icon" id="react" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="tailwind">
            Tailwind
          </h2>
          <RiTailwindCssFill className="icon" id="tailwind" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="php">
            PHP
          </h2>
          <SiPhp className="icon" id="php" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="mysql">
            MySQL
          </h2>
          <SiMysql className="icon" id="mysql" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="mongodb">
            MongoDB
          </h2>
          <SiMongodb className="icon" id="mongodb" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="git">
            Git
          </h2>
          <FaGitAlt className="icon" id="git" />
        </div>

        <div className="icono">
          <h2 className="nombre-iconos" id="github">
            Github
          </h2>
          <FaGithub className="icon" id="github" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
