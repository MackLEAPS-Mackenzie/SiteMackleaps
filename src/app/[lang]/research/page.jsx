import { PageTitle } from "@/components/title_search/PageTitle";
import styles from "./page.module.css";
import { NewsCard } from "@/components/news_card/NewsCard";
import { getDictionary } from "@/dictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <main className={styles.main}>
      <PageTitle
        title={lang.research.title}
        subtitle={lang.research.subtitle}
        textSearch={lang.news.buscar}
      />
      <section className={styles.card_div}>
        {lang.projects.projetos.map((elem, index) => {
          return (
            <NewsCard
              img={elem.img}
              date={elem.date}
              title={elem.title}
              description={elem.description}
              key={index}
              link={
                params.lang === "en"
                  ? `/en/research/${elem.id}`
                  : `/pt/research/${elem.id}`
              }
              textButton={lang.news.leiaMais}
            />
          );
        })}
      </section>
    </main>
  );
}