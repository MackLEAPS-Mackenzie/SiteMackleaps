import styles from "./page.module.css";
import Link from "next/link";
import { getDictionary } from "@/dictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>{lang.about.title}</h1>
      <p className={styles.p}>{lang.about.subtitle}</p>
      <h2 className={styles.h2}>{lang.about.educacao}</h2>
      <p className={styles.p}>{lang.about.educacaoText}</p>
      <h2 className={styles.h2}>{lang.about.objetivos}</h2>
      <p className={styles.p}>{lang.about.objetivosText}</p>
      <h2 className={styles.h2}>{lang.about.parcerias}</h2>
      <div className={styles.parceria}>
        <Link href="https://atech.com.br/" target="_blank">
          <img src="/atech.png" alt="atech" className={styles.image} />
        </Link>
      </div>
    </main>
  );
}
