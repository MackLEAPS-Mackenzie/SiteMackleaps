import styles from "./page.module.css";
import Link from "next/link";
import { CardHomeSystem } from "@/components/cardHomeSystem/CardHomeSystem";

export default function HomeSystem() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div className={styles.welcomeContent}>
          <h1 className={styles.welcome}>Bem vindo, </h1>
          <h1 className={styles.welcomeUser}>Admin</h1>
        </div>
        <div className={styles.cards}>
          <Link href="/publicacoes" className={styles.link}>
            <CardHomeSystem title="Notícias" />
          </Link>
          <Link href="/projectsSystem" className={styles.link}>
            <CardHomeSystem title="Projetos" />
          </Link>
          <Link href="/researchSystem" className={styles.link}>
            <CardHomeSystem title="Pesquisas" />
          </Link>
          {/* <Link href="/othersSystem" className={styles.link}>
            <CardHomeSystem title="Outros" />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
