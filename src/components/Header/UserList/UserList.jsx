import React from "react";
import styles from "./UserList.module.scss";
import { DataUserList } from "../../../data/main.js";

export default function UserList() {
  return (
    <div className={styles.UserList}>
      {DataUserList.map((el, index) => (
        <div className={styles.UserListItem} key={index}>
          <a href="#">{el.item}</a>
          {index === DataUserList.length - 1 ? null : (
            <p className={styles.num}>{el.title}</p>
          )}
        </div>
      ))}
    </div>
  );
}
