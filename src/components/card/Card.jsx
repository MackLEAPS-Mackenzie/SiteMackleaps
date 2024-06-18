import styles from "./Card.module.css";
import Link from "next/link";

export const Card = ({ textContent, lang }) => {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.h2}>{textContent.joinTitle}</h2>
      <p className={styles.p}>{textContent.jointSubtext}</p>
      <div className={styles.btn_container}>
        <Link
          href={lang == "en" ? "/en/about" : "/pt/about"}
          className={styles.link}
        >
          <button className={styles.about_button}>
            {textContent.sobreButton}
          </button>
        </Link>
        <Link
          href={lang == "en" ? "/en/contact" : "/pt/contact"}
          className={styles.link}
        >
          <button className={styles.contact_button}>
            {textContent.contatoButton}
          </button>
        </Link>
      </div>
    </div>
  );
};
