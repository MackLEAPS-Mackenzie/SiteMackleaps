import Link from "next/link";
import styles from "./Footer.module.css";
export const Footer = ({ items, headers, lang }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mackleapsContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href={lang === "en" ? "/en" : "/pt"} className={styles.link}>
            <img src="/logo-mackleaps.png" alt="logo-mackleaps" />
          </Link>
          <Link href={lang === "en" ? "/en" : "/pt"} className={styles.link}>
            <h2>MACKLEAPS</h2>
          </Link>
        </div>
      </div>

      <div className={styles.bread_crumbs}>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>{headers.paginas}</h2>
          <Link href={lang === "en" ? "/en" : "/pt"} className={styles.link}>
            HOME
          </Link>
          <Link
            href={lang === "en" ? "/en/projects" : "/pt/projects"}
            className={styles.link}
          >
            {items.projetos}
          </Link>
          <Link
            href={lang === "en" ? "/en/research" : "/pt/research"}
            className={styles.link}
          >
            {items.pesquisa}
          </Link>
          <Link
            href={lang === "en" ? "/en/team" : "/pt/team"}
            className={styles.link}
          >
            {items.equipe}
          </Link>
          <Link
            href={lang === "en" ? "/en/news" : "/pt/news"}
            className={styles.link}
          >
            {items.noticias}
          </Link>
          <Link
            href={lang === "en" ? "/en/about" : "/pt/about"}
            className={styles.link}
          >
            {items.sobre}
          </Link>
          <Link
            href={lang === "en" ? "/en/contact" : "/pt/contact"}
            className={styles.link}
          >
            {items.contato}
          </Link>
        </div>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>{headers.parcerias}</h2>
          <Link
            href="https://atech.com.br/"
            target="
            _blank"
          >
            <img src="/atech.png" alt="atech" />
          </Link>
        </div>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>{headers.contato}</h2>
          <Link href="/" className={styles.social_midias}>
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/computa%C3%A7%C3%A3o-mackenzie-473540216/?originalSubdomain=br"
            target="
            _blank"
            className={styles.social_midias}
          >
            Linkedin
          </Link>
          <Link
            href="https://www.instagram.com/computacao_mackenzie/"
            target="
            _blank"
            className={styles.social_midias}
          >
            Instagram
          </Link>
        </div>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>{headers.sistemas}</h2>
          <Link
            href="https://mackleaps.mackenzie.br/oriente"
            target="_blank"
            className={styles.social_midias}
          >
            Oriente 2.0
          </Link>
          <Link
            href="https://mackleaps.mackenzie.br"
            target="_blank"
            className={styles.social_midias}
          >
            Site Mackleaps
          </Link>
          <Link
            href="https://lab-mackleaps.gitbook.io/residencia-de-software-macklaeps-upm-fci/"
            target="_blank"
            className={styles.social_midias}
          >
            GitBook
          </Link>
          <Link
            href="https://mackleaps.mackenzie.br/redmine"
            target="_blank"
            className={styles.social_midias}
          >
            Redmine
          </Link>
          <Link
            href="https://mackleaps.mackenzie.br/back-carrossel/"
            target="_blank"
            className={styles.social_midias}
          >
            Carrossel Informativo FCI
          </Link>
          <Link
            href="https://mackleaps.mackenzie.br/dashboard-estacao/"
            target="_blank"
            className={styles.social_midias}
          >
            Estação meteorológica
          </Link>
          <Link
            href="https://mackleaps.mackenzie.br/meteorologiaapi-docs/#"
            target="_blank"
            className={styles.social_midias}
          >
            API - Estação
          </Link>
        </div>
      </div>
      <div className={styles.address_container}>
        <Link
          href="https://www.google.com/maps/place/R.+da+Consola%C3%A7%C3%A3o,+930+-+Higien%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+01302-000/data=!4m2!3m1!1s0x94ce5849eeb27779:0xe350caf4879b89a6?sa=X&ved=2ahUKEwiRz8mihseDAxV7r5UCHYVWBsEQ8gF6BAgLEAA&cshid=1704485327777783"
          target="
            _blank"
        >
          <img src="/map.png" alt="mapa" className={styles.image_address} />
        </Link>
        <p className={styles.address}>
          Endereço R. da Consolação, 930 - Consolação, São Paulo - SP - ( Prédio
          45 - Subsolo 2 )
        </p>
        <p className={styles.address}>Telefone (11)2766-7764</p>
      </div>
    </div>
  );
};
