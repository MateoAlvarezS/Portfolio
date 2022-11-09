import styles from "../styles/Proyectos.module.css";

const Proyectos = () => {
  return (
    <div id="proyectos" className={styles.proyectos}>
      <h2>Mis Proyectos</h2>
      <div className={styles.proyecto}>
        <a
          href="https://github.com/MateoAlvarezS?tab=repositories"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
          <p>Revisa mis proyectos</p>
        </a>
      </div>
    </div>
  );
};

export default Proyectos;
