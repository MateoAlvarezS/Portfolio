import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <i className="fa-solid fa-user"></i>
        <div className={styles['nav-links']}>
          <a href="#info">Sobre Mí</a>
          <a href="#habilidades">Mis habiadades</a>
          <a href="#proyectos">Mis proyectos</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
