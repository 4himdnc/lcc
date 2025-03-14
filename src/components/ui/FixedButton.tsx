"use client";

import { useEffect, useRef } from "react";
import styles from "./FixedButton.module.css";
import type { Swiper as SwiperType } from "swiper";

interface SwiperElement {
  swiper?: SwiperType;
}

export default function FixedButton() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const initSwiper = () => {
      const swiperElement = document.querySelector(".swiper") as SwiperElement;
      if (swiperElement?.swiper) {
        swiperRef.current = swiperElement.swiper;
      }
    };

    initSwiper();
    window.addEventListener("load", initSwiper);

    const handleRouteChange = () => {
      setTimeout(initSwiper, 100);
    };

    document.addEventListener("routeChangeComplete", handleRouteChange);

    return () => {
      window.removeEventListener("load", initSwiper);
      document.removeEventListener("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const handleScrollTop = () => {
    const isMainPage = window.location.pathname === "/";
    const isMobile = window.innerWidth <= 768;

    if (isMainPage && !isMobile) {
      const swiperElement = document.querySelector(".swiper") as SwiperElement;
      if (swiperElement?.swiper && !swiperElement.swiper.destroyed) {
        swiperElement.swiper.slideTo(0, 800);
      } else {
        const initSwiper = () => {
          const newSwiperElement = document.querySelector(".swiper") as SwiperElement;
          if (newSwiperElement?.swiper) {
            swiperRef.current = newSwiperElement.swiper;
            swiperRef.current.slideTo(0, 800);
          }
        };
        setTimeout(initSwiper, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.fixedButtonContainer}>
      <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.fixedButton} ${styles.kakao}`}>
        카톡상담
      </a>
      <a href="#" className={`${styles.fixedButton} ${styles.reservation}`}>
        예약하기
      </a>
      <a href="tel:1588-0008" className={`${styles.fixedButton} ${styles.phone}`}>
        전화상담
      </a>
      <button onClick={handleScrollTop} className={`${styles.fixedButton} ${styles.top}`}>
        ↑
      </button>
    </div>
  );
}
