"use client";

import styles from "./page.module.css";
import React from "react";
import { HeaderSystem } from "@/components/headerSystem/HeaderSystem";
import { ButtonSystem } from "@/components/bottomSystem/BottomSystem";
import { NewPublishButton } from "@/components/newPublishButton/newPublishButton";
import { DataTable } from "@/components/table/Table";

export default function Publicacoes() {
  return (
    <div className={styles.mainContainer}>
      <HeaderSystem />
      <div className={styles.mainContent}>
        <h1 className={styles.h1}>Publicações</h1>
        <div className={styles.buttons}>
          <ButtonSystem text="Notícias" />
          <ButtonSystem text="Projetos" />
          <ButtonSystem text="Artigos" />
          <ButtonSystem text="Outros" />
        </div>
        <DataTable />
        <div className={styles.new}>
          <NewPublishButton />
        </div>
      </div>
    </div>
  );
}
