import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./BurgerMenu.module.scss";

import { creditMenu, catalogAuto } from "../../../data/main.js";

export default function BurgerMenu({ menuActive }) {
  return (
    <div
      className={
        menuActive
          ? styles["BurgerMenu"] + " " + styles.active
          : styles["BurgerMenu"]
      }
    >
      <div className="container">
        <Search />

        <div className={styles.inner}>
          <div className={styles.menuLeft}>
            <div className={styles.item}>
              <h3 className={styles.title}>Credit and installment</h3>
              <ul>
                {creditMenu.map((el, index) => (
                  <li key={index} className={styles.link}>
                    <Link to="#">{el.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.item}>
              <h3 className={styles.title}>Specials</h3>
              <ul>
                <li className={styles.link}>
                  <Link to="#">Trade-in</Link>
                </li>
                <li className={styles.link}>
                  <Link to="#">Installment</Link>
                </li>
              </ul>
            </div>

            <div className={styles.item}>
              <h3 className={styles.title}>Credit and installment</h3>
              <ul>
                <li className={styles.link}>
                  <Link to="#">Trade-in</Link>
                </li>
                <li className={styles.link}>
                  <Link to="#">Installment</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.menuRight}>
            <h3 className={styles.title}>Used cars</h3>
            <div className={styles.col}>
              <ul>
                {catalogAuto.map((el, index) => (
                  <li key={index} className={styles.link}>
                    <Link to="#">{el.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.menuRight}>
            <h3 className={styles.title}>Used cars</h3>
            <div className={styles.col}>
              <ul>
                {catalogAuto.map((el, index) => (
                  <li key={index} className={styles.link}>
                    <a to="#">{el.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
