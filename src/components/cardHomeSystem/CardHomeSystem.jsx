import styles from "./CardHomeSystem.module.css";

export const CardHomeSystem = ({ title }) => {
  return (
    <div className={styles.mainContainer}>
      <img
        src="./moreIcon.svg"
        alt="Adicionar/consultar"
        className={styles.moreIcon}
      />
      <div className={styles.text}>
        <p className={styles.textContent}>Adicionar/consultar {title}</p>
      </div>
    </div>
  );
};
