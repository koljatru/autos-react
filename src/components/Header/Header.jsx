import styles from "./Header.module.scss";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  return (
    <header
      className={classNames(styles.Header, {
        [styles.active]: !show,
      })}
    >
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}
