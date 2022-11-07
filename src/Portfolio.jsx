import Habilidades from "./components/Habilidades";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Info />
        <Habilidades />
      </main>
    </>
  );
}

export default Portfolio;
