"use client";

import styles from "./PesquisaHome.module.css";
import { MoreButton } from "@/components/moreButton/MoreButton";
import { PesquisaCard } from "../pesquisa_card/PesquisaCars";
import React from "react";
import Link from "next/link";

export const PesquisaHome = ({ json, textContent, lang }) => {
  let currentCardIndex = 0;
  const [currentCard, setCurrentCard] = React.useState(json[0]);

  function handleCardChange(direction) {
    const totalCards = json.length;

    if (direction === "next") {
      currentCardIndex = (currentCardIndex + 1) % totalCards;
    } else if (direction === "previous") {
      currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    }

    setCurrentCard(json[currentCardIndex]);
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.text}>
        <h2 className={styles.h2}>{textContent.pesquisa}</h2>
        <p className={styles.p}>{textContent.pesquisaSubtext}</p>
        <Link
          href={lang === "en" ? "/en/research" : "pt-br/research"}
          className={styles.link}
        >
          <MoreButton text={textContent.saibaMais} />
        </Link>
      </div>
      <div className={styles.content_container}>
        <PesquisaCard img={currentCard.img} txt={currentCard.txt} />
        <div className={styles.arrow_container}>
          <img
            src="/left_arrow.png"
            alt="esquerda"
            className={styles.setas}
            onClick={() => handleCardChange("previous")}
          />
          <img
            src="/right_arrow.png"
            alt="direita"
            className={styles.setas}
            onClick={() => handleCardChange("next")}
          />
        </div>
      </div>
    </div>
  );
};
