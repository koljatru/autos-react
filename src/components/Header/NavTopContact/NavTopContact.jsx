import styles from "./NavTopContact.module.scss";

import iconPhone from "../../../images/header/phone.svg";

export default function NavTopContact() {
  return (
    <div className={styles.navTopContact}>
      <div className={styles.contact}>
        <div className={styles.top}>
          <img src={iconPhone} alt="tel" />
          <a className={styles.topTel} href="tel:88009664511">
            +7 (800) 966-45-11
          </a>
        </div>

        <a className={styles.bottomTel} href="tel:84969400632">
          +7 (496) 940-06-32
        </a>
      </div>

      <button>Call back</button>
    </div>
  );
}
