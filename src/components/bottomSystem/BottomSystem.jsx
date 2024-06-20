import styles from "./BottomSystem.module.css";
import { useState } from "react";

export const ButtonSystem = ({ text }) => {
  return <button className={styles.buttonSystem}>{text}</button>;
};
