import styles from "./NavBarTop.module.scss";
import { Link } from "react-router-dom";

import { DataNavBarTop } from "../../../data/main.js";

export default function NavBarTop() {
  return (
    <>
      <nav className={styles.navbarTop}>
        <ul>
          {DataNavBarTop.map((el, index) => (
            <li className={styles.navbarItem} key={index}>
              <Link className={styles.navbarLink} to="#">
                {el.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
