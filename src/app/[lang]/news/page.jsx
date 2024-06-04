import { PageTitle } from "@/components/title_search/PageTitle";
import styles from "./page.module.css";
import { NewsCard } from "@/components/news_card/NewsCard";
import { getDictionary } from "@/dictionary";

// function waitFor(ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms));
// }

export default async function Page({ params }) {
  //await waitFor(5000);
  const lang = await getDictionary(params.lang);
  return (
    <main className={styles.main}>
      <PageTitle
        title={lang.news.title}
        subtitle={lang.news.subtitle}
        textSearch={lang.news.buscar}
      />
      <section className={styles.card_div}>
        {lang.news.noticias.map((elem, index) => {
          return (
            <NewsCard
              img={elem.img}
              date={elem.date}
              title={elem.title}
              description={elem.description}
              key={index}
              link={`/news/${elem.id}`}
              textButton={lang.news.leiaMais}
            />
          );
        })}
      </section>
    </main>
  );
}
