import Card from "./components/Card";
import swPoster from "./assets/sw-poster.png";
import rjPoster from "./assets/rj-poster.png";
import esPoster from "./assets/es-poster.png";

export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      <Card title="Pôster: Stars Wars (1997)" poster={ swPoster } alt="Star Wars Poster"/>
      <Card title="Pôster: Empire Stikes Back (1980)" poster={ esPoster } alt="Empire Stikes Back Poster"/>
      <Card title="Pôster: Return od the Jedi (1983)" poster={ rjPoster } alt="Return od the Jedi Poster"/>
    </>
  )
}