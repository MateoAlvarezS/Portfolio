import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Info />
        <Habilidades />
        <Proyectos />
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
