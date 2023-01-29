import styles from "./NavBarBottom.module.scss";
import DropDown from "../DropDown/DropDown";
import { DataNavBarBottom } from "../../../data/main.js";

export default function NavBarBottom() {
  return (
    <>
      <ul className={styles.NavBarBottom}>
        {DataNavBarBottom.map((data, index) => {
          return <DropDown data={data} key={index} />;
        })}
      </ul>
    </>
  );
}
