import styles from "../styles/Habilidades.module.css";

const Habilidades = () => {
  return (
    <div className={styles["habilidades-seccion"]}>
      <h2>Mis habilidades</h2>
      <div className={styles.habilidades}>
        <div className={styles.habilidad}>
          <img className={styles["habilidad-img"]} src={"assets/equipo.png"} alt="equipo" />
          <p className={styles["habilidad-text"]}>Trabajo en equipo</p>
        </div>
        <div className={styles.habilidad}>
          <img className={styles["habilidad-img"]} src="assets/comunicacion.png" alt="comunicacion" />
          <p className={styles["habilidad-text"]}>Buena comunicaciòn</p>
        </div>
        <div className={styles.habilidad}>
          <img className={styles["habilidad-img"]} src="assets/web.png" alt="web" />
          <p className={styles["habilidad-text"]}>Diseño web</p>
        </div>
        <div className={styles.habilidad}>
          <img className={styles["habilidad-img"]} src="assets/datos.png" alt="datos" />
          <p className={styles["habilidad-text"]}>Analisis de datos</p>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
