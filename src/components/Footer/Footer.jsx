import React from "react";
import styles from "./Footer.module.scss";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterTop from "./FooterTop/FooterTop";

export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </footer>
    </>
  );
}
