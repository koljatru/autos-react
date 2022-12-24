import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderTop.module.scss";

import img1 from "../../../images/header/location.svg";
import img2 from "../../../images/header/clock.svg";
import img3 from "../../../images/header/watsup.svg";

const DataHeaderTop = [
  {
    id: 1,
    title: "location",
    src: img1,
    text: "Russia, Moscow, 80km МКАD, 120",
  },
  {
    id: 2,
    title: "working",
    src: img2,
    text: "Working hours: 08:00 to 21:00",
  },
  {
    id: 3,
    title: "whatsapp",
    src: img3,
    text: "Whatsapp",
  },
];

export default function HeaderTop() {
  return (
    <div className={styles.HeaderTop}>
      <div className="container">
        <div className={styles.inner}>
          {DataHeaderTop.map((el, i) => (
            <div className={styles.item} key={el.id}>
              <img src={el.src} alt={el.title} />
              {i === DataHeaderTop.length - 1 ? (
                <Link className={styles.link} to="#">
                  {el.text}
                </Link>
              ) : (
                <p className={styles.text}>{el.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
