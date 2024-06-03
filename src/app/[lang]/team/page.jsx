import styles from "./page.module.css";
import { TeamCard } from "@/components/cardTeam/TeamCard";
import { getDictionary } from "@/dictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>{lang.team.title}</h1>
      <p className={styles.p}>{lang.team.subtitle}</p>
      <div className={styles.membros}>
        <h2 className={styles.h2}>{lang.team.membros}</h2>
        <section className={styles.card_div}>
          {lang.team.responsaveis.map((elem, index) => {
            return (
              <TeamCard
                img={elem.img}
                name={elem.name}
                role={elem.role}
                link={elem.link}
                date=""
                key={index}
              />
            );
          })}
        </section>
      </div>

      <div className={styles.colaboradores}>
        <h2 className={styles.h2}>{lang.team.colaboradoresAtuais}</h2>
        <section className={styles.card_div}>
          {lang.team.colaboradores.map((elem, index) => {
            return (
              <TeamCard
                img={elem.img}
                name={elem.name}
                role={elem.role}
                link=""
                date=""
                key={index}
              />
            );
          })}
        </section>
      </div>

      <div className={styles.exMembros}>
        <h2 className={styles.h2}>{lang.team.colaboradoresAnteriores}</h2>
        <section className={styles.card_div}>
          {lang.team.excolaboradores.map((elem, index) => {
            return (
              <TeamCard
                img={elem.img}
                name={elem.name}
                role=""
                date={elem.date}
                link=""
                key={index}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
