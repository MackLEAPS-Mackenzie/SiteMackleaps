"use client";
import styles from "./relacionados.module.css";
import { RelatedCard } from "@/components/related_card/RelatedCard";

export const Relacionados = ({ title, articles }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.card_container}>
        {articles.map((related, index) => {
          return (
            <RelatedCard
              img={related.img}
              title={related.title}
              description={related.description}
              key={index}
              onClik={() => console.log("click")}
            />
          );
        })}
      </div>
    </div>
  );
};
