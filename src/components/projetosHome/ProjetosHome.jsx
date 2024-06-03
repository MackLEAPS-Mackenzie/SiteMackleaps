import styles from "./ProjetosHome.module.css";
import { MoreButton } from "@/components/moreButton/MoreButton";
import { ProjCard } from "@/components/card_projetos/ProjCard";
import { getLatestNews, getProjects, getResearch } from "@/services/home";
import Link from "next/link";

export const ProjetosHome = async ({ json, textContent }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.projetosHome}>
        <h2 className={styles.h2}>{textContent.projetosTitle}</h2>
        <p className={styles.p}>{textContent.projetosSubtitle}</p>
        <Link href="/projects" className={styles.link}>
          <MoreButton text={textContent.saibaMais} />
        </Link>
      </div>
      <div className={styles.card_container}>
        {json.map((project, index) => (
          <div key={index}>
            {" "}
            <ProjCard
              img={project.img}
              title={project.title}
              description={project.description}
              status={project.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
