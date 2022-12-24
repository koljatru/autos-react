import React from "react";
import styles from "./NavBarBottom.module.scss";

import { ReactComponent as ArrowImg } from "../../../images/header/arrow-down.svg";

const DataNavBarBottom = [
  {
    id: 1,
    text: "Car catalog",
  },
  {
    id: 2,
    text: "Used cars",
  },
  {
    id: 3,
    text: "Credit and installment",
  },
  {
    id: 4,
    text: "Specials",
  },
  {
    id: 5,
    text: "Taxi on credit",
  },
];

export default function NavBarBottom() {
  return (
    <>
      <nav className={styles.NavBarBottom}>
        <ul>
          {DataNavBarBottom.map((el, i) =>
            i === DataNavBarBottom.length - 1 ? (
              <li className={styles.navbarItem} key={el.id}>
                <a className={styles.navbarLink} href="#">
                  {el.text}
                </a>
              </li>
            ) : (
              <li className={styles.navbarItem} key={el.id}>
                <a className={styles.navbarLink} href="#">
                  {el.text}
                </a>
                <ArrowImg />
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
}
