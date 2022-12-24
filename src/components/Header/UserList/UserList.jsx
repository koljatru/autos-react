import React from "react";
import styles from "./UserList.module.scss";

import { ReactComponent as HeartIcon } from "../../../images/header/heart.svg";
import { ReactComponent as SrawIcon } from "../../../images/header/heart.svg";
import { ReactComponent as SearchIcon } from "../../../images/header/search.svg";

const DataUserList = [
  {
    id: 1,
    title: "10",
    item: <HeartIcon />,
  },
  {
    id: 2,
    title: "12",
    item: <SrawIcon />,
  },
  {
    id: 3,
    item: <SearchIcon />,
  },
];

export default function UserList() {
  return (
    <div className={styles.UserList}>
      {DataUserList.map((el, i) => (
        <div className={styles.UserListItem} key={el.id}>
          <a href="#">{el.item}</a>
          {i === DataUserList.length - 1 ? null : (
            <p className={styles.num}>{el.title}</p>
          )}
        </div>
      ))}
    </div>
  );
}
