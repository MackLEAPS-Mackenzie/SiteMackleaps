"use client";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <img
          src="/mackleaps-system-logo.png"
          alt="logo"
          className={styles.logo}
        />
        <form className={styles.inputContainer}>
          <div>
            <img src="/user-icon.svg" alt="avatar" className={styles.icons} />

            <input type="text" placeholder="Usuário" />
          </div>
          <div>
            <img
              src="/password-icon.svg"
              alt="password"
              className={styles.icons}
            />
            <input type="password" placeholder="Senha" />
          </div>
          <button>ENVIAR</button>
        </form>
      </div>
    </div>
  );
}
