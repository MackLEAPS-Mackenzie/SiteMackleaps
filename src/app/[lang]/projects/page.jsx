import { PageTitle } from "@/components/title_search/PageTitle";
import styles from "./page.module.css";
import { NewsCard } from "@/components/news_card/NewsCard";
import { getDictionary } from "@/dictionary";
import dbConnect from "@/lib/mongodb";
import EnProjects from "@/models/en-projects";
import PtProjects from "@/models/pt-projects";

const findProjects = async (lang) => {
  if (lang === "en") {
    await dbConnect();
    const projects = await EnProjects.find({});
    return projects;
  } else {
    await dbConnect();
    const projects = await PtProjects.find({});
    return projects;
  }
};

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  const projects = await findProjects(params.lang);
  return (
    <main className={styles.main}>
      <PageTitle
        title={lang.projects.title}
        subtitle={lang.projects.subtitle}
        textSearch={lang.news.buscar}
      />
      <section className={styles.card_div}>
        {projects.map((elem, index) => {
          return (
            <NewsCard
              img={elem.img}
              date={elem.date}
              title={elem.title}
              description={elem.description}
              key={index}
              link={
                params.lang === "en"
                  ? `/en/projects/${elem.id}`
                  : `/pt/projects/${elem.id}`
              }
              textButton={lang.news.leiaMais}
            />
          );
        })}
      </section>
    </main>
  );
}
