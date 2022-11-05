import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <i className="fa-solid fa-user"></i>
        <ul className="nav-links">
          <li>Sobre Mí</li>
          <li>Mis habilidades</li>
          <li>Mis proyectos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
