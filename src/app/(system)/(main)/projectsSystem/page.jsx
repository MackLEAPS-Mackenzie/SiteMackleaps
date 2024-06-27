"use client";

import { useState } from "react";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { ButtonSystem } from "@/components/buttomSystem/ButtomSystem";
import { NewPublishButton } from "@/components/newPublishButton/newPublishButton";
import { getDbProjects } from "@/services/db_queries";
import { TableProjects } from "@/components/tableProjects/TableProjects";

export default async function ProjectsSystem() {
  const [selectedButton, setSelectedButton] = useState("Projetos");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  const db = await getDbProjects();

  const rows = db.map((projects, index) => ({
    id: index + 1,
    ...projects,
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
        <TableProjects rows={rows} />
        <div className={styles.new}>
          <Link href="/addProjects" className={styles.link}>
            <NewPublishButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
