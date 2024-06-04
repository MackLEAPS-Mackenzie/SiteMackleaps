import { getNews } from "@/services/topics";
import styles from "./page.module.css";
import { Relacionados } from "@/components/relacionados/Relacionados";
import { getDbNews } from "@/services/db_queries";
import { getDictionary } from "@/dictionary";

async function getData(id) {
  const news = await getDbNews();
  const selectedNews = news.find((item) => item.id == id);
  if (selectedNews) {
    return selectedNews;
  }
}

function formatBodyText(bodyText) {
  const paragraphs = bodyText
    .split("\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  return paragraphs;
}

export default async function Page({ params }) {
  const data = await getData(params.id);
  // const textoSemTags = data.body.map((paragrafo) =>
  //   paragrafo.replace(/<\/?[^>]+(>|$)/g, "")
  // );

  return (
    <div className={styles.main_div}>
      <main className={styles.main}>
        <div className={styles.img_div}>
          <img src={data?.img} alt="headline_image" className={styles.img} />
        </div>
        <div className={styles.title_container}>
          <div className={styles.divider}></div>
          <h2 className={styles.title}>{data?.title}</h2>
        </div>
        <section className={styles.author_container}>
          <img
            src={data?.author_img}
            alt="author"
            className={styles.author_img}
          />
          <h3
            className={styles.author_name}
          >{`Escrito por ${data?.author} - ${data?.date}`}</h3>
        </section>
        <section className={styles.text_body}>
          <div dangerouslySetInnerHTML={data.body} className={styles.a}></div>
        </section>
      </main>
      <Relacionados />
    </div>
  );
}
