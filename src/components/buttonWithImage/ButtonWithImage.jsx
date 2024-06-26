import styles from "./ButtonWithImage.module.css";

export const ButtonWithImage = ({ text, image }) => {
  return (
    <div className={styles.mainContainer}>
      <button className={styles.button}>{text}</button>
      <img
        src={image}
        alt="Publicar/Salvar/Deletar"
        className={styles.images}
      />
    </div>
  );
};
