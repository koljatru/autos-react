import { useMemo } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./BurgerMenu.module.scss";
import classNames from "classnames";

import { creditMenu, catalogAuto } from "../../../data/main.js";

export default function BurgerMenu({ isShow }) {
  const burgerMenu1 = useMemo(() => {
    if (Array.isArray(creditMenu)) {
      return creditMenu.map((el, index) => {
        return (
          <li key={index} className={styles.link}>
            <Link to="#">{el.title}</Link>
          </li>
        );
      });
    }
  }, [creditMenu]);

  const burgerMenu2 = useMemo(() => {
    if (Array.isArray(catalogAuto)) {
      return catalogAuto.map((el, index) => {
        return (
          <li key={index} className={styles.link}>
            <Link to="#">{el.name}</Link>
          </li>
        );
      });
    }
  }, [catalogAuto]);

  return (
    <div
      className={classNames(styles.BurgerMenu, {
        [styles.active]: isShow,
      })}
    >
      <div className="container">
        <Search />

        <div className={styles.inner}>
          <div className={styles.menuLeft}>
            <div className={styles.item}>
              <h3 className={styles.title}>Credit and installment</h3>
              <ul>{burgerMenu1}</ul>
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
            <h3 className={styles.title}>Car catalog</h3>
            <div className={styles.col}>
              <ul>{burgerMenu2}</ul>
            </div>
          </div>

          <div className={styles.menuRight}>
            <h3 className={styles.title}>Used cars</h3>
            <div className={styles.col}>
              <ul>{burgerMenu2}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
