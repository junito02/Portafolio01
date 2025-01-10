import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa Router
import Header from "./Componentes/Header";
import Inicio from "./Pages/Inicio";
import Acerca from "./Pages/Acerca";
import Skills from "./Pages/Skills";
import Proyectos from "./Pages/Proyectos";
import Contactos from "./Pages/Contactos";
import TodosLosProyectos from "./Componentes/TodosLosProyectos"; // Asegúrate de importar el componente
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Ruta principal */}
            <Route
              path="/"
              element={
                <>
                  <section id="inicio">
                    <Inicio />
                  </section>
                  <section id="Acerca">
                    <Acerca />
                  </section>
                  <section id="skills">
                    <Skills />
                  </section>
                  <section id="proyectos">
                    <Proyectos />
                  </section>
                  <section id="Contactos">
                    <Contactos />
                  </section>
                </>
              }
            />

            {/* Ruta para mostrar todos los proyectos */}
            <Route
              path="/todos-los-proyectos"
              element={<TodosLosProyectos />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
