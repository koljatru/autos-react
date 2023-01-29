import { Link } from "react-router-dom";
import DropMenu from "../DropMenu/DropMenu";

import useOutside from "../../../hooks/useOutside";

import styles from "./DropDown.module.scss";

export default function DropDown({ data }) {
  const { ref, isShow, setIsShow } = useOutside(false);
  const { text, img, type } = data;

  const dropHandler = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <li className={styles.navbarItem} ref={ref}>
        <Link className={styles.navbarLink} onClick={dropHandler} to="#">
          {text}
        </Link>
        {img}
        {isShow && type !== "type5" && <DropMenu {...data} />}
      </li>
    </>
  );
}
