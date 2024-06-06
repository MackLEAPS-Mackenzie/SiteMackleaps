"use client";
import styles from "./Header.module.css";
import { Navbar } from "../navbar/Navbar";
import { SearchOverlay } from "../SearchOverlay/SearchOverlay";
import { LenguageOverlay } from "../lenguageOverlay/LenguageOverlay";
import React from "react";

export const Header = ({ items, lang }) => {
  const [isOpen, setIsOpen] = React.useState(0);

  return (
    <header className={styles.header}>
      <Navbar setOpen={setIsOpen} open={isOpen} items={items} lang={lang} />
      {isOpen === 1 ? (
        <SearchOverlay
          setOpen={setIsOpen}
          open={isOpen}
          items={items}
          lang={lang}
        />
      ) : isOpen === 2 ? (
        <LenguageOverlay setOpen={setIsOpen} open={isOpen} lang={lang}/>
      ) : (
        ""
      )}
      <div className={styles.header_img_div}>
        <img
          src="/titulo-mackleaps.png"
          alt="logo"
          className={styles.header_img}
        />
      </div>
    </header>
  );
};
