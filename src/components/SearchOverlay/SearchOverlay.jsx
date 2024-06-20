"use client";
import Link from "next/link";
import React from "react";
import styles from "./search.module.css";

export const SearchOverlay = ({ setOpen, open, items, lang }) => {
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
        <h1 className={styles.h1}>
          {lang === "en" ? "I'm Looking For..." : "Estou Buscando Por..."}
        </h1>

        <div className={styles.buttons_div}>
          <Link href={lang === "en" ? "en/projects" : "/projects"}>
            <button className={styles.button}>{items.projetos}</button>
          </Link>
          <Link href={lang === "en" ? "en/research" : "/research"}>
            <button className={styles.button}>{items.pesquisa}</button>
          </Link>
          <Link href={lang === "en" ? "en/news" : "/news"}>
            <button className={styles.button}>{items.noticias}</button>
          </Link>
        </div>
        <div className={styles.search_div}>
          <input
            type="text"
            placeholder={lang === "en" ? "SEARCH" : "BUSQUE"}
            className={styles.input}
          />
          <img src="/search.svg" alt="search" className={styles.search_btn} />
        </div>
      </div>
    </div>
  );
};
