import { SystemCard } from "@/components/card_system/SystemCard";
import styles from "./page.module.css";
import { getDictionary } from "@/dictionary";
import dbConnect from "@/lib/mongodb";
import PtSystems from "@/models/pt-systems";
import EnSystems from "@/models/en-systems";

const findSystems = async (lang) => {
  if (lang === "en") {
    await dbConnect();
    const systems = await EnSystems.find({});
    return systems;
  } else {
    await dbConnect();
    const systems = await PtSystems.find({});
    return systems;
  }
};

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  const systems = await findSystems(params.lang);
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h1 className={styles.h1}>{lang.systems.title}</h1>
        <p className={styles.p}>{lang.systems.subtitle}</p>
      </div>
      <section className={styles.card_div}>
        {systems.map((elem, index) => {
          return (
            <SystemCard
              title={elem.title}
              description={elem.description}
              situation={elem.situation}
              natureza={elem.natureza}
              members={elem.members}
              link={elem.link}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
}
