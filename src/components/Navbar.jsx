import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <i className="fa-solid fa-user"></i>
        <ul className={styles['nav-links']}>
          <li>Sobre Mí</li>
          <li>Mis habilidades</li>
          <li>Mis proyectos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
