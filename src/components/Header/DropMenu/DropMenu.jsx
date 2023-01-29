import { useMemo } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./DropMenu.module.scss";
import cn from "classnames";

export default function DropMenu({
  DropMenu1,
  DropMenu1Type,
  DropMenu2,
  type,
  el,
}) {
  const menuList1 = useMemo(() => {
    if (Array.isArray(DropMenu1)) {
      return DropMenu1.map((el, index) => {
        return (
          <div className={styles.item} key={index}>
            <img src={el.src} alt={`car${index}`} />
            <Link className={styles.text}>{el.text}</Link>
          </div>
        );
      });
    }
  }, [DropMenu1]);

  const menuList2 = useMemo(() => {
    if (Array.isArray(DropMenu1Type)) {
      return DropMenu1Type.map((el, index) => {
        return (
          <div className={styles.itemBottom} key={index}>
            <img src={el.src} alt={`car${index}`} />
            <Link className={styles.text}>{el.title}</Link>
          </div>
        );
      });
    }
  }, [DropMenu1Type]);

  const menuList3 = useMemo(() => {
    if (Array.isArray(DropMenu2)) {
      return DropMenu2.map((el, index) => {
        return (
          <div className={styles.card} key={index}>
            <img src={el.src} alt={`car${index}`} />
            <h5 className={styles.title}>{el.title}</h5>
            <p className={styles.text}>{el.text}</p>
            <button className={styles.btn}>Узнать больше</button>
          </div>
        );
      });
    }
  }, [DropMenu2]);

  return (
    <div className={styles.dropMenu}>
      <div className="container">
        <div className={styles.inner}>
          {(() => {
            if (type === "type1") {
              return (
                <>
                  <div className={styles.top}>{menuList1}</div>
                  <div className={styles.bottom}>{menuList2}</div>
                </>
              );
            } else if (type === "type2") {
              return (
                <div className={styles.cardInner}>{menuList3.slice(0, 2)}</div>
              );
            } else if (type === "type3") {
              return (
                <div className={styles.cardInner}>{menuList3.slice(0, 6)}</div>
              );
            } else if (type === "type4") {
              return (
                <div className={styles.cardInner}>{menuList3.slice(5)}</div>
              );
            } else if (el === "search") {
              return <Search />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
