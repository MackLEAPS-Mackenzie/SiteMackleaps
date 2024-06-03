"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import React from "react";

export const Navbar = ({ setOpen, open, items }) => {
  const [position, setPosition] = React.useState(false);

  function handleHamburguer() {
    setPosition(!position);
  }
  function handleSearch() {
    setOpen(!open);
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.link}>
            <img
              src="/logo-mackleaps.png"
              alt="logo-mackleaps"
              className={styles.logoImage}
            />
          </Link>
        </div>
        <div className={styles.link_container}>
          <Link href="/projects" className={styles.link}>
            {items.projetos}
          </Link>
          <Link href="/research" className={styles.link}>
            {items.pesquisa}
          </Link>
          <Link href="/news" className={styles.link}>
            {items.noticias}
          </Link>
          <Link href="/team" className={styles.link}>
            {items.equipe}
          </Link>
          <Link href="/about" className={styles.link}>
            {items.sobre}
          </Link>
          <Link href="/systems" className={styles.link}>
            {items.sistemas}
          </Link>
          <Link href="/contact" className={styles.link}>
            {items.contato}
          </Link>
          <img
            src="/pesquisa.png"
            alt="pesquisar"
            className={styles.search_button}
            onClick={() => handleSearch()}
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
          <img
            src="/pesquisa.png"
            alt="pesquisar"
            className={styles.search_button}
            onClick={() => handleSearch()}
          />
          <img
            src="/close.png"
            alt="fechar"
            className={styles.search_button}
            onClick={() => handleHamburguer()}
          />
        </div>
        <Link href="/projects" className={styles.link_hamburguer}>
          {items.projetos}
        </Link>
        <Link href="/research" className={styles.link_hamburguer}>
          {items.pesquisa}
        </Link>
        <Link href="/news" className={styles.link_hamburguer}>
          {items.noticias}
        </Link>
        <Link href="/team" className={styles.link_hamburguer}>
          {items.equipe}
        </Link>
        <Link href="/about" className={styles.link_hamburguer}>
          {items.sobre}
        </Link>
        <Link href="/systems" className={styles.link_hamburguer}>
          {items.sistemas}
        </Link>
        <Link href="/contact" className={styles.link_hamburguer}>
          {items.contato}
        </Link>
      </div>
    </>
  );
};
