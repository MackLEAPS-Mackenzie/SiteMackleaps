import styles from "./CardContact.module.css";

export const CardContact = ({
  title,
  subtitle,
  submitButton,
  name,
  email,
  message,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.p}>{subtitle}</p>
        <form className={styles.form}>
          <div>
            <label htmlFor="nome" className={styles.label}></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder={name}
              className={styles.input}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="email" className={styles.label}></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={email}
              className={styles.input}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="question" className={styles.label}></label>
            <textarea
              className={styles.textarea}
              name="question"
              id="question"
              cols="30"
              rows="10"
              placeholder={message}
            ></textarea>
          </div>
          <br></br>
          <button type="submit" className={styles.button}>
            {submitButton}
          </button>
          <br></br>
        </form>
      </div>
      <div className={styles.right}>
        <img src="/contact.svg" alt="contato" />
        <div className={styles.divs}>
          <img src="/Localização.png" alt="Endereço" />
          <p className={styles.p}>
            R. da Consolação, 930 - Consolação, São Paulo - SP
          </p>
        </div>
        <div className={styles.divs}>
          <img src="/Email.png" alt="E-mail" />
          <p className={styles.p}>fci@mackenzie.br</p>
        </div>
        <div className={styles.divs}>
          <img src="/Telefone.png" alt="Telefone" />
          <p className={styles.p}>(11) 2766-7764</p>
        </div>
      </div>
    </div>
  );
};
