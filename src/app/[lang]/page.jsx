import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@/components/card/Card";
import { ProjetosHome } from "@/components/projetosHome/ProjetosHome";
import { LabHome } from "@/components/labHome/LabHome";
import { PesquisaHome } from "@/components/pesquisa_home/PesquisaHome";
import { getDictionary } from "@/dictionary";
import {
  getDbLatestNews,
  getDbLatestProjects,
  getDbLatestResearch,
} from "@/services/db_queries";

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang);
  const latest_news = await getDbLatestNews();
  return (
    <>
      <main className={styles.main}>
        <LabHome
          json={lang.home.labSection.noticiasHome}
          textContent={lang.home.labSection}
          lang={params.lang}
        />
        <ProjetosHome
          json={lang.home.projectSession.projetosHome}
          textContent={lang.home.projectSession}
          lang={params.lang}
        />
        <PesquisaHome
          json={lang.home.pesquisaSection.pesquisaHome}
          textContent={lang.home.pesquisaSection}
          lang={params.lang}
        />
        <Card textContent={lang.home} lang={params.lang} />
      </main>
    </>
  );
}
