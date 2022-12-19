import React from "react";
// import { Link } from "react-router-dom";
import styles from "./HeaderTop.module.scss";

export default function HeaderTop() {
  return (
    <div className={styles.HeaderTop}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.item}>
            <img src="/images/header/location.svg" alt="location" />
            <p className={styles.text}>Russia, Moscow, 80km МКАD, 120</p>
          </div>
          <div className={styles.item}>
            <img src="/images/header/clock.svg" alt="working" />
            <p className={styles.text}>Working hours: 08:00 to 21:00</p>
          </div>
          <div className={styles.item}>
            <img src="/images/header/watsup.svg" alt="whatsapp" />
            {/* <Link to="#">Whatsapp</Link> */}
            <a className={styles.link} href="#">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
