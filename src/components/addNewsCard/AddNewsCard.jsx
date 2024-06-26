import { ButtonDeleteSystem } from "../buttonDeleteSystem/ButtonDeleteSystem";
import { ButtonWithImage } from "../buttonWithImage/ButtonWithImage";
import styles from "./AddNewsCard.module.css";
import Link from "next/link";

export const AddNewsCard = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div className={styles.firstLine}>
          <div className={styles.inputTitle}>
            <label htmlFor="Título" className={styles.label}>
              Título:
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              className={styles.input}
            />
          </div>
          <div className={styles.inputTitle}>
            <label htmlFor="Data" className={styles.label}>
              Data:
            </label>
            <input
              type="text"
              id="data"
              name="data"
              className={styles.inputData}
            />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.labelTextArea}>
            <label htmlFor="Texto" className={styles.label}>
              Descrição
            </label>
          </div>
          <textarea
            name="descricao"
            id="descricao"
            className={styles.textArea}
          ></textarea>
        </div>
        <div className={styles.lastLine}>
          <ButtonDeleteSystem />
          <ButtonWithImage text="Salvar Rascunho" image="/iconSave.svg" />
          <ButtonWithImage text="Publicar" image="/iconPublish.svg" />
        </div>
      </div>
    </div>
  );
};
