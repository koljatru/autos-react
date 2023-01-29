import styles from "./Search.module.scss";

import imgSearch from "../../../images/header/search.svg";

export default function Search() {
  return (
    <>
      <form action="#" method="GET" className={styles.form}>
        <img src={imgSearch} alt="search" />
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </form>
    </>
  );
}
