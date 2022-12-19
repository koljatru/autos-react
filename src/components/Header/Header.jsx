import React from "react";
import styles from "./Header.module.scss";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

export default function Header() {
  return (
    <header className={styles.Header}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}
