import logo from "./logo.svg";
import "./App.css";
import { Testimonio } from "./components/Testimonio";
import { Socialcomp } from "./components/Socialcomp";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <a href="https://www.soyhenry.com/" target="_blank">
            <img
              className="logo"
              src={require(`../src/images/logo-white.png`)}
              alt="logo"
            />
          </a>
        </div>
      </header>

      <div className="contenedor-principal">
        <h1>
          Nos obsesionamos por el éxito de los estudiantes. Su testimonio es
          fuente de inspiración para toda nuestra comunidad.
        </h1>

        <Testimonio
          name="Sofia Praderio"
          city="Berlin"
          cargo="Full Stack Developer"
          image="sofi"
          company="Balance"
          Testimonio="Celebro Henry, las nuevas formas de enseñanza, todo lo que aprendí, el back up que recibí del staff y de mis compañeros para llegar hasta este punto."
        />

        <Testimonio
          name="Mark Cameron"
          city="Buenos Aires"
          cargo="Full Stack Developer"
          image="markcameron"
          company="Osmind"
          Testimonio="Gracias a la inversión que hizo Henry en mí, empecé la carrera como desarrollador."
        />

        <Testimonio
          name="Alexander Cuesta"
          city="Medellin"
          cargo="Full Stack Developer"
          image="alexandercuesta"
          company="Chiper"
          Testimonio="Adquirí las skills que se necesitan en el mercado. El crecimiento profesional que se viene supera cualquier expectativa que hubiera tenido antes de Henry."
        />
      </div>

      <footer>
        <Socialcomp />
      </footer>
    </div>
  );
}

export default App;
