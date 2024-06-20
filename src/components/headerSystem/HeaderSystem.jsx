"use client";
import styles from "./HeaderSystem.module.css";
import Link from "next/link";
import React from "react";

export const HeaderSystem = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.nav}>
        <div className={styles.home}>
          <Link href="" className={styles.link}>
            <img
              src="/logo-mackleaps.png"
              alt="Logo"
              className={styles.logoImage}
            />
          </Link>
          <Link href="" className={styles.link}>
            Home
          </Link>
        </div>
        <div className={styles.navegacao}>
          <Link href="" className={styles.link}>
            Publicações
          </Link>
          <Link href="" className={styles.link}>
            Usuários
          </Link>
          <Link href="" className={styles.link}>
            Colaboradores
          </Link>
        </div>
        <div className={styles.settings}>
          <Link href="" className={styles.link}>
            <img
              src="/userSystem.svg"
              alt="Perfil do Usuário"
              className={styles.icons}
            />
          </Link>
          <Link href="" className={styles.link}>
            <img
              src="/config.svg"
              alt="Configurações"
              className={styles.icons}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
