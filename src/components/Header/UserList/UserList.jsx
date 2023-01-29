import { Link } from "react-router-dom";
import styles from "./UserList.module.scss";
import { DataUserList } from "../../../data/main.js";

import useOutside from "../../../hooks/useOutside";
import DropMenu from "../DropMenu/DropMenu";

export default function UserList() {
  const { ref, isShow, setIsShow } = useOutside(false);

  const searchHandler = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={styles.UserList}>
      {DataUserList.map((el, index) => (
        <div className={styles.UserListItem} key={index} ref={ref}>
          {el.type !== "search" ? (
            <div className={styles.iconBox}>
              <Link to="#">{el.item}</Link>
              <p className={styles.num}>{el.title}</p>
            </div>
          ) : (
            <>
              <Link to="#" onClick={searchHandler}>
                {el.item}
              </Link>
              {isShow && <DropMenu el={el.type} />}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
