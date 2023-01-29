import NavBarBottom from "../NavBarBottom/NavBarBottom";
import UserList from "../UserList/UserList";
import styles from "./HeaderBottom.module.scss";

export default function HeaderBottom() {
  return (
    <div className={styles.HeaderBottom}>
      <div className="container">
        <div className={styles.inner}>
          <NavBarBottom />
          <UserList />
        </div>
      </div>
    </div>
  );
}
