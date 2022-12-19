import React from "react";
import styles from "./HeaderMiddle.module.scss";

export default function HeaderMiddle() {
  return (
    <div className={styles.HeaderMiddle}>
      <div className="container">
        <div className={styles.inner}>
          <div className="left">
            {/* <button>
              <span></span>
            </button> */}
            HeaderMiddle
          </div>
          <div className="center"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}
