"use client";

import styles from "./page.module.css";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { ButtonSystem } from "@/components/buttomSystem/ButtomSystem";
import { AddProjectsCard } from "@/components/addProjectsCard/AddProjectsCard";

export default function AddNews() {
  const [selectedButton, setSelectedButton] = useState("Projetos");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Publicações</h1>
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
        <AddProjectsCard />
      </div>
    </div>
  );
}
