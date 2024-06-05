import styles from "./page.module.css";
import { Relacionados } from "@/components/relacionados/Relacionados";
import { getDictionary } from "@/dictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  const noticia = lang.news.noticias.find((news) => news.id === params.id);

  return (
    <div className={styles.main_div}>
      <main className={styles.main}>
        <div className={styles.img_div}>
          <img src={noticia?.img} alt="headline_image" className={styles.img} />
        </div>
        <div className={styles.title_container}>
          <div className={styles.divider}></div>
          <h2 className={styles.title}>{noticia?.title}</h2>
        </div>
        <section className={styles.author_container}>
          <img
            src={noticia?.author_img}
            alt="author"
            className={styles.author_img}
          />
          <h3
            className={styles.author_name}
          >{`Escrito por ${noticia?.author} - ${noticia?.date}`}</h3>
        </section>
        <section className={styles.text_body}>
          <div
            dangerouslySetInnerHTML={noticia.body}
            className={styles.a}
          ></div>
        </section>
      </main>
      <Relacionados
        title={lang.relacionados.title}
        articles={lang.relacionados.related}
      />
    </div>
  );
}
