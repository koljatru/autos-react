import { Link } from "react-router-dom";
import styles from "./HeaderTop.module.scss";
import { DataHeaderTop } from "../../../data/main.js";

export default function HeaderTop() {
  return (
    <div className={styles.HeaderTop}>
      <div className="container">
        <div className={styles.inner}>
          {DataHeaderTop.map((el, index) => (
            <div className={styles.item} key={index}>
              <img src={el.src} alt={el.title} />
              {index === DataHeaderTop.length - 1 ? (
                <Link className={styles.link} to="#">
                  {el.text}
                </Link>
              ) : (
                <p className={styles.text} key={index}>
                  {el.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
