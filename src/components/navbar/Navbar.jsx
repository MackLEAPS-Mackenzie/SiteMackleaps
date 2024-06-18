"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import React from "react";

export const Navbar = ({ setOpen, open, items, lang }) => {
  const [position, setPosition] = React.useState(false);

  function handleHamburguer() {
    setPosition(!position);
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <Link href={lang === "en" ? "/en" : "/pt"} className={styles.link}>
            <img
              src="/logo-mackleaps.png"
              alt="logo-mackleaps"
              className={styles.logoImage}
            />
          </Link>
        </div>
        <div className={styles.link_container}>
          <Link
            href={lang === "en" ? "/en/projects" : "/pt/projects"}
            className={styles.link}
          >
            {items.projetos}
          </Link>
          <Link
            href={lang === "en" ? "/en/research" : "/pt/research"}
            className={styles.link}
          >
            {items.pesquisa}
          </Link>
          <Link
            href={lang === "en" ? "/en/news" : "/pt/news"}
            className={styles.link}
          >
            {items.noticias}
          </Link>
          <Link
            href={lang === "en" ? "/en/team" : "/pt/team"}
            className={styles.link}
          >
            {items.equipe}
          </Link>
          <Link
            href={lang === "en" ? "/en/about" : "/pt/about"}
            className={styles.link}
          >
            {items.sobre}
          </Link>
          <Link
            href={lang === "en" ? "/en/systems" : "/pt/systems"}
            className={styles.link}
          >
            {items.sistemas}
          </Link>
          <Link
            href={lang === "en" ? "/en/contact" : "/pt/contact"}
            className={styles.link}
          >
            {items.contato}
          </Link>
          <Link
            href="/pt-br"
            className={
              lang === "en" ? styles.lenguageLink : styles.lenguageLinkColor
            }
          >
            <img
              src="/brasil.png"
              alt="Português"
              className={lang === "en" ? styles.idioma : styles.idiomaColor}
            />
          </Link>
          <Link
            href="/en"
            className={
              lang != "en" ? styles.lenguageLink : styles.lenguageLinkColor
            }
          >
            <img
              src="/eua.png"
              alt="Inglês"
              className={lang != "en" ? styles.idioma : styles.idiomaColor}
            />
          </Link>
          {/* <img
            src="/idioma.svg"
            alt="Idioma"
            className={styles.idioma}
            onClick={() => setOpen(open === 2 ? 0 : 2)}
          /> */}
          <img
            src="/pesquisa.png"
            alt="pesquisar"
            className={styles.search_button}
            onClick={() => setOpen(open === 1 ? 0 : 1)}
          />
        </div>
        <img
          src="/hamburguer.png"
          alt="menu"
          className={styles.hamburguer}
          onClick={() => handleHamburguer()}
        />
      </div>
      <div className={position ? styles.hamburguer_menu : styles.closed}>
        <div className={styles.icons_Hamburguer}>
          <img src="/idioma.svg" alt="Idioma" className={styles.idioma} />
          <img
            src="/close.png"
            alt="fechar"
            className={styles.search_button}
            onClick={() => handleHamburguer()}
          />
        </div>
        <Link
          href={lang === "en" ? "/en/projects" : "/pt/projects"}
          className={styles.link_hamburguer}
        >
          {items.projetos}
        </Link>
        <Link
          href={lang === "en" ? "/en/research" : "/pt/research"}
          className={styles.link_hamburguer}
        >
          {items.pesquisa}
        </Link>
        <Link
          href={lang === "en" ? "/en/news" : "/pt/news"}
          className={styles.link_hamburguer}
        >
          {items.noticias}
        </Link>
        <Link
          href={lang === "en" ? "/en/team" : "/pt/team"}
          className={styles.link_hamburguer}
        >
          {items.equipe}
        </Link>
        <Link
          href={lang === "en" ? "/en/about" : "/pt/about"}
          className={styles.link_hamburguer}
        >
          {items.sobre}
        </Link>
        <Link
          href={lang === "en" ? "/en/systems" : "/pt/systems"}
          className={styles.link_hamburguer}
        >
          {items.sistemas}
        </Link>
        <Link
          href={lang === "en" ? "/en/contact" : "/pt/contact"}
          className={styles.link_hamburguer}
        >
          {items.contato}
        </Link>
      </div>
    </>
  );
};
