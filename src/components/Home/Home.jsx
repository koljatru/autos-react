import styles from "./Home.module.scss";
import Swiper from "./TopSlider/TopSlider";

export default function Home() {
  return (
    <main className="main">
      <div className={styles.homeInner}>
        <div className="container2">
          <Swiper />
        </div>
        <div className="container"></div>
      </div>
    </main>
  );
}
