import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavTopContact from "../NavTopContact/NavTopContact";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavBarTop from "../NavBarTop/NavBarTop";
import styles from "./HeaderMiddle.module.scss";

import Logo from "../../../images/header/logo.svg";

export default function HeaderMiddle() {
  const [burgerActive, setBurgerActive] = useState(false);
  const [menuActive, setmenuActive] = useState(false);

  const burgerHandler = (e) => {
    e.preventDefault();
    setBurgerActive(!burgerActive);
    setmenuActive(!menuActive);
  };

  return (
    <div className={styles.HeaderMiddle}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <button
              className={
                burgerActive
                  ? styles["burger"] + " " + styles.active
                  : styles["burger"]
              }
              onClick={burgerHandler}
            >
              <span className={styles.line}></span>
            </button>
            <Link to="/" className={styles.logo}>
              <img src={Logo} alt="logo" />
            </Link>
            <p className={styles.content}>
              <span>8 years</span> of exceeding your expectations
            </p>
          </div>
          <NavBarTop />
          <NavTopContact />
          <BurgerMenu menuActive={menuActive} />
        </div>
      </div>
    </div>
  );
}
