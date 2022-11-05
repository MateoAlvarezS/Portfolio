import styles from "../styles/Info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles['info-text']}>
        <h2>Sobre Mi</h2>
        <p>
          Mi nombre es Mateo Alejandro Alvarez, tengo 20 años, soy estudiante de
          Desarrollo de Software en la Institución Universitaria Pascual Bravo,
          tengo conocimientos básicos en JavaScript, HTML, CSS, en bases de
          datos tengo conocimientos básicos con SQL, MySQL, MongoDB, también
          poseo conocimientos en herramientas de ofimática. Soy una persona
          responsable, solidaria, honesta y ante todo respetuosa, con gran
          sentido de empatía, amante a la tecnología y al aprendizaje
          autodidacta, tengo habilidad para establecer excelentes relaciones
          interpersonales, capacitado para trabajar en equipo, con facilidad de
          adaptación en nuevos retos, y con muy buena disposición para cualquier
          tarea que se me asigne.
        </p>
      </div>
      <div className={styles['info-img']}>
        <img
          src="https://gestion.pe/resizer/OSK-E93RBuk0IBNqoON8bTn_fWE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/X2VOBZY6CBF7JPT76NJO4UHXLM.jpg"
          alt="programador"
        />
      </div>
    </div>
  );
};

export default Info;
