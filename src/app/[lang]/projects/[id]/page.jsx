import styles from "./page.module.css";
import { Relacionados } from "@/components/relacionados/Relacionados";
import { getDictionary } from "@/dictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  const projeto = lang.projects.projetos.find((news) => news.id === params.id);

  return (
    <div className={styles.main_div}>
      <main className={styles.main}>
        <div className={styles.img_div}>
          <img src={projeto?.img} alt="headline_image" className={styles.img} />
        </div>
        <div className={styles.title_container}>
          <div className={styles.divider}></div>
          <h2 className={styles.title}>{projeto?.title}</h2>
        </div>
        <section className={styles.author_container}>
          <h3
            className={styles.author_name}
          >{`${projeto?.date} - ${projeto?.status}`}</h3>
        </section>
        <section className={styles.text_body}>{projeto.body}</section>
      </main>
      z
      <Relacionados
        title={lang.relacionados.title}
        articles={lang.relacionados.related}
      />
    </div>
  );
}
