"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { ButtonSystem } from "@/components/bottomSystem/ButtomSystem";
import { NewPublishButton } from "@/components/newPublishButton/newPublishButton";
import { getDbProjects } from "@/services/db_queries";
import { TableProjects } from "@/components/tableProjects/TableProjects";

export default async function Publicacoes() {
  const [selectedButton, setSelectedButton] = useState("Outros");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  const dbProjects = await getDbProjects();

  const rows = dbProjects.map((projects, index) => ({
    id: index + 1,
    ...projects,
  }));

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <h1 className={styles.h1}>Publicações</h1>
        <div className={styles.buttons}>
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
          <Link href="/researchSystem">
            <ButtonSystem
              text="Pesquisas"
              isSelected={selectedButton === "Pesquisas"}
              onClick={() => handleButtonClick("Pesquisas")}
            />
          </Link>
          <Link href="/othersSystem">
            <ButtonSystem
              text="Outros"
              isSelected={selectedButton === "Outros"}
              onClick={() => handleButtonClick("Outros")}
            />
          </Link>
        </div>
        <TableProjects rows={rows} />
        <div className={styles.new}>
          <NewPublishButton />
        </div>
      </div>
    </div>
  );
}
