"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { ButtonSystem } from "@/components/bottomSystem/ButtomSystem";
import { NewPublishButton } from "@/components/newPublishButton/newPublishButton";
import { DataTable } from "@/components/table/Table";
import { getDbNews } from "@/services/db_queries";

export default async function Publicacoes() {
  const [selectedButton, setSelectedButton] = useState("Notícias");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  const dbNews = await getDbNews();

  const rows = dbNews.map((news, index) => ({
    id: index + 1,
    ...news,
  }));

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <h1 className={styles.h1}>Publicações</h1>
        <div className={styles.buttons}>
          <div className={styles.firstButtons}>
            <Link href="/publicacoes">
              <ButtonSystem
                text="Notícias"
                isSelected={selectedButton === "Notícias"}
                onClick={() => handleButtonClick("Notícias")}
              />
            </Link>
            <Link href="/projectsSystem">
              <ButtonSystem
                text="Projetos"
                isSelected={selectedButton === "Projetos"}
                onClick={() => handleButtonClick("Projetos")}
              />
            </Link>
          </div>
          <div className={styles.secondButtons}>
            <Link href="/researchSystem">
              <ButtonSystem
                text="Pesquisas"
                isSelected={selectedButton === "Pesquisas"}
                onClick={() => handleButtonClick("Pesquisas")}
              />
            </Link>
            {/* <Link href="/othersSystem">
              <ButtonSystem
                text="Outros"
                isSelected={selectedButton === "Outros"}
                onClick={() => handleButtonClick("Outros")}
              />
            </Link> */}
          </div>
        </div>
        <DataTable rows={rows} />
        <div className={styles.new}>
          <NewPublishButton />
        </div>
      </div>
    </div>
  );
}
