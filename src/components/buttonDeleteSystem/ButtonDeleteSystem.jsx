import styles from "./ButtonDeleteSystem.module.css";

export const ButtonDeleteSystem = () => {
  return (
    <div className={styles.mainContainer}>
      <button className={styles.button}>Deletar</button>
      <img
        src="/iconDelete.svg"
        alt="Publicar/Salvar/Deletar"
        className={styles.images}
      />
    </div>
  );
};
