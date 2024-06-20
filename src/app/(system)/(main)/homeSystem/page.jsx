import styles from "./page.module.css";

export default function HomeSystem() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div className={styles.welcomeContent}>
          <h1 className={styles.welcome}>Bem vindo, </h1>
          <h1 className={styles.welcomeUser}>Admin</h1>
        </div>
      </div>
    </div>
  );
}
