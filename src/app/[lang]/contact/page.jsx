import styles from "./page.module.css";
import { CardContact } from "@/components/card_contact/CardContact";
import { SocialMedia } from "@/components/socialContact/SocialMedia";
import { CardMobile } from "@/components/card_mobile/CardMobile";
import { getDictionary } from "@/dictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <>
      <main className={styles.main}>
        <CardContact
          title={lang.contact.title}
          subtitle={lang.contact.subtitle}
          name={lang.contact.name}
          email={lang.contact.email}
          message={lang.contact.message}
          submitButton={lang.contact.submitButton}
        />
        <SocialMedia />
      </main>
      <div className={styles.mobile}>
        <CardMobile
          title={lang.contact.title}
          subtitle={lang.contact.subtitle}
          name={lang.contact.name}
          email={lang.contact.email}
          message={lang.contact.message}
          submitButton={lang.contact.submitButton}
        />
      </div>
    </>
  );
}
