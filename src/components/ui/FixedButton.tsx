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
        console.log(swiperElement.swiper);
      }
    };

    initSwiper();
    window.addEventListener("load", initSwiper);
    return () => window.removeEventListener("load", initSwiper);
  }, []);

  const handleScrollTop = () => {
    const isMainPage = window.location.pathname === "/";
    if (isMainPage && swiperRef.current) {
      swiperRef.current.slideTo(0, 800);
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
