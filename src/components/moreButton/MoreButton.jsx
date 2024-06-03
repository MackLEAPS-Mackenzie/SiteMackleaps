"use client";
import styles from "./MoreButton.module.css";

export const MoreButton = ({ text }) => {
  return <button className={styles.moreButton}>{text}</button>;
};
