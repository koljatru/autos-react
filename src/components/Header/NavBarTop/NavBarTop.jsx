import React from "react";
import styles from "./NavBarTop.module.scss";

const DataNavBarTop = [
  {
    id: 1,
    text: "Car selection",
  },
  {
    id: 2,
    text: "About",
  },
  {
    id: 3,
    text: "Service",
  },
  {
    id: 4,
    text: "Reviews",
  },
  {
    id: 5,
    text: "Contacts",
  },
];

export default function NavBarTop() {
  return (
    <>
      <nav className={styles.navbarTop}>
        <ul>
          {DataNavBarTop.map((el) => (
            <li className={styles.navbarItem} key={el.id}>
              <a className={styles.navbarLink} href="#">
                {el.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
