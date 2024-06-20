"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { ButtonSystem } from "@/components/bottomSystem/ButtomSystem";
import { NewPublishButton } from "@/components/newPublishButton/newPublishButton";
import { DataTable } from "@/components/table/Table";

export default function Publicacoes() {
  const [selectedButton, setSelectedButton] = useState("Notícias");

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

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
          <Link href="">
            <ButtonSystem
              text="Outros"
              isSelected={selectedButton === "Outros"}
              onClick={() => handleButtonClick("Outros")}
            />
          </Link>
        </div>
        <DataTable />
        <div className={styles.new}>
          <NewPublishButton />
        </div>
      </div>
    </div>
  );
}
