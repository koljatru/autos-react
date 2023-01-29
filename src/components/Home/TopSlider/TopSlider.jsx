import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import styles from "./TopSlider.module.scss";

import { topSlides } from "../../../data/main.js";

export default function TopSlider() {
  const slides = useMemo(() => {
    if (Array.isArray(topSlides)) {
      return topSlides.map((el, index) => {
        return (
          <SwiperSlide key={index} tag="li">
            <img src={el.src} alt={`car${index}`} />
            <div className="container">
              <div className={styles.sliderInner}>
                {(() => {
                  if (el.id === 1) {
                    return (
                      <div className={styles.slideBlock}>
                        <p className={styles.topText}>Only 10 cars left!</p>
                        <h1>{el.title}</h1>
                        <p className={styles.offerText}>{el.text}</p>
                      </div>
                    );
                  } else if (el.id === 2) {
                    return (
                      <>
                        <h1 className={styles.title2}>{el.title}</h1>
                        <p className={styles.offerText2}>{el.text}</p>

                        <div className={styles.slideBlock1}>
                          <div className={styles.slideBlockItem}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText}>
                              Insurance for taxi cabs
                            </p>
                          </div>
                          <div className={styles.slideBlockItem}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText}>
                              The lowest policy price guarantee
                            </p>
                          </div>
                          <div className={styles.slideBlockItem}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText}>
                              Official policies
                            </p>
                          </div>
                          <div className={styles.slideBlockItem}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText}>
                              Payment after checking
                            </p>
                          </div>
                          <div className={styles.slideBlockItem}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText}>
                              For all categories A B C D E
                            </p>
                          </div>
                          <div className={styles.slideBlockItem}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText}>
                              Possible non-cash payment
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  } else if (el.id === 3) {
                    return (
                      <>
                        <h1 className={styles.title3}>{el.title}</h1>
                        <div className={styles.slideBlock2}>
                          <div className={styles.slideBlockItem1}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText1}>
                              Preferential car loan from 1,9%
                            </p>
                          </div>
                          <div className={styles.slideBlockItem1}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText1}>
                              Car wrapping as a gift
                            </p>
                          </div>
                          <div className={styles.slideBlockItem1}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText1}>
                              Action is valid until October 20!
                            </p>
                          </div>
                          <div className={styles.slideBlockItem1}>
                            <img src={el.img} alt={`img-${index}`} />
                            <p className={styles.slideBlockText1}>
                              Initial payment 0%
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </SwiperSlide>
        );
      });
    }
  }, [topSlides]);

  return (
    <Swiper
      className={styles.TopSlider}
      modules={[Autoplay, Navigation, Pagination]}
      tag="section"
      wrapperTag="ul"
      navigation={true}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
    >
      {slides}
    </Swiper>
  );
}
