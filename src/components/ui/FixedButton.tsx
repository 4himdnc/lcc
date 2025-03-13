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

    // 페이지 로드와 라우트 변경 시 스와이퍼 초기화
    initSwiper();
    window.addEventListener("load", initSwiper);

    // Next.js의 라우트 변경 이벤트 감지
    const handleRouteChange = () => {
      setTimeout(initSwiper, 100); // 라우트 변경 후 약간의 지연을 두고 초기화
    };

    document.addEventListener("routeChangeComplete", handleRouteChange);

    return () => {
      window.removeEventListener("load", initSwiper);
      document.removeEventListener("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const handleScrollTop = () => {
    const isMainPage = window.location.pathname === "/";
    if (isMainPage) {
      // 스와이퍼가 존재하고 파괴되지 않았는지 확인
      const swiperElement = document.querySelector(".swiper") as SwiperElement;
      if (swiperElement?.swiper && !swiperElement.swiper.destroyed) {
        swiperElement.swiper.slideTo(0, 800);
      } else {
        // 스와이퍼가 없거나 파괴된 경우 다시 초기화
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
