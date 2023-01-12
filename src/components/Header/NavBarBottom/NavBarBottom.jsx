import React, { useState } from "react";
import styles from "./NavBarBottom.module.scss";
import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import { DataNavBarBottom } from "../../../data/main.js";

import { ReactComponent as ArrowImg } from "../../../images/header/arrow-down.svg";

export default function NavBarBottom() {
  //   const [isHovering, setIsHovering] = useState(false);
  //   const [activeLink, setactiveLink] = useState(false);
  // все ссылки стейт

  //   const handleMouseOver = (index) => {
  //     // console.log(index);
  //     setIsHovering(true);
  //   };

  //   const handleMouseOut = () => {
  //     setIsHovering(false);
  //   };

  return (
    <>
      <nav className={styles.NavBarBottom}>
        <ul>
          {DataNavBarBottom.map((el, index) =>
            index === DataNavBarBottom.length - 1 ? (
              <li className={styles.navbarItem} key={index}>
                <Link className={styles.navbarLink} to="#">
                  {el.text}
                </Link>
              </li>
            ) : (
              <>
                <li className={styles.navbarItem} key={index}>
                  <Link
                    className={styles.navbarLink}
                    //   onMouseOver={handleMouseOver}
                    //   onMouseOut={handleMouseOut}
                    to="#"
                  >
                    {el.text}
                  </Link>
                  <ArrowImg />
                  {/* {isHovering && <DropDown />} */}
                  <DropDown index={index} />
                </li>
              </>
            )
          )}
        </ul>
      </nav>
    </>
  );
}
