import React from "react";
import styles from "./ButtomSystem.module.css";

export const ButtonSystem = ({ text, isSelected, onClick }) => {
  const buttonClass = isSelected ? styles.buttonSystemRed : styles.buttonSystem;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};
