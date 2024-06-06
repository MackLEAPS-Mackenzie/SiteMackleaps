"use client";
import Link from "next/link";
import React from "react";
import styles from "./LenguageOverlay.module.css";

export const LenguageOverlay = ({ setOpen, open, lang }) => {
  const titulo = lang === "pt" ? "Selecione o idioma" : "Select the language";
  const pt = lang === "pt" ? "Português" : "Portuguese";
  const en = lang === "pt" ? "Inglês" : "English";

  function handleHamburguer() {
    setOpen(!open);
  }

  return (
    <div className={styles.main}>
      <div className={styles.content_div}>
        <div className={styles.close}>
          <img
            src="/close.png"
            alt="fechar"
            onClick={() => handleHamburguer()}
            className={styles.close_button}
          />
        </div>
        <h1 className={styles.h1}>{titulo}</h1>

        <div className={styles.buttons_div}>
          <Link href="/pt">
            <button className={styles.button}>{pt}</button>
          </Link>
          <Link href="/en">
            <button className={styles.button}>{en}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
