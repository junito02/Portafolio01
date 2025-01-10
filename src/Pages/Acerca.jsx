import React from "react";
import "../Estilos/Acerca.css";
import imagenAvif from "../Imagenes/imagen.avif";
import imagenWebp from "../Imagenes/imagen.webp"; // Respaldo en WebP

function Acerca() {
  return (
    <div className="Acerca" aria-labelledby="section" id="section">
      <h1 className="titulo-acerca">Acerca de mi</h1>
      <div className="contenedor-acerca">
        <p className="texto">
          Hace dos años, decidí adentrarme en el apasionante mundo de la
          programación, impulsado por mi interés en la tecnología y el deseo de
          adquirir nuevas habilidades. Desde entonces, he estado dedicando
          tiempo y esfuerzo a comprender los fundamentos de la programación y a
          explorar diversos lenguajes y herramientas. Este viaje me ha permitido
          empezar a construir una base sólida en el área, y estoy entusiasmado
          por seguir creciendo y enfrentar nuevos desafíos en el futuro.
        </p>
        <figure className="img-container">
          <picture>
            {/* Intenta cargar AVIF, si no lo soporta carga WebP */}
            <source srcSet={imagenAvif} type="image/avif" />
            <source srcSet={imagenWebp} type="image/webp" />
            {/* Si no soporta ninguno de los anteriores, carga la imagen por defecto */}
            <img
              className="img-acerca"
              src={imagenWebp} // Imagen predeterminada de respaldo (WebP)
              alt="Imagen de Junior Alejandro"
            />
          </picture>
        </figure>
      </div>
    </div>
  );
}

export default Acerca;
