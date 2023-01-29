import { Link } from "react-router-dom";
import NavTopContact from "../NavTopContact/NavTopContact";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavBarTop from "../NavBarTop/NavBarTop";
import styles from "./HeaderMiddle.module.scss";

import Logo from "../../../images/header/logo.svg";

import useOutside from "../../../hooks/useOutside";

export default function HeaderMiddle() {
  const { ref, isShow, setIsShow, setisActive, isActive } = useOutside(
    false,
    false
  );

  const burgerHandler = () => {
    setisActive(!isActive);
    setIsShow(!isShow);
  };

  return (
    <div className={styles.HeaderMiddle}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div ref={ref}>
              <button
                className={
                  isActive
                    ? styles["burger"] + " " + styles.active
                    : styles["burger"]
                }
                onClick={burgerHandler}
              >
                <span className={styles.line}></span>
              </button>
              <BurgerMenu isShow={isShow} />
            </div>
            <Link to="/" className={styles.logo}>
              <img src={Logo} alt="logo" />
            </Link>
            <p className={styles.content}>
              <span>8 years</span> of exceeding your expectations
            </p>
          </div>
          <NavBarTop />
          <NavTopContact />
        </div>
      </div>
    </div>
  );
}
