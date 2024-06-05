"use client";
import Link from "next/link";
import React from "react";
import styles from "./LenguageOverlay.module.css";

export const LenguageOverlay = ({
  title,
  portuguese,
  english,
  setOpen,
  open,
}) => {
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
        <h1 className={styles.h1}>Selecione o idioma</h1>

        <div className={styles.buttons_div}>
          <Link href="/pt">
            <button className={styles.button}>Português</button>
          </Link>
          <Link href="/en">
            <button className={styles.button}>Inglês</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
