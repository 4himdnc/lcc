"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./page.module.css";

const sections = [
  {
    id: 1,
    title: "사랑의병원",
    subtitle: "최상의 의료서비스를 제공합니다",
    videoSrc: "/videos/section1.mp4",
  },
  {
    id: 2,
    title: "암면역 센터",
    subtitle: "최신 의료장비와 우수한 의료진이 함께합니다",
    videoSrc: "/videos/section2.mp4",
  },
  {
    id: 3,
    title: "정밀검사 센터",
    subtitle: "정확한 진료와 치료를 제공합니다",
    videoSrc: "/videos/section3.mp4",
  },
  {
    id: 4,
    title: "건강검진 센터",
    subtitle: "건강검진을 통한 건강관리를 지원합니다",
    videoSrc: "/videos/section4.mp4",
  },
  {
    id: 5,
    title: "커뮤니티",
    subtitle: "커뮤니티를 통한 건강정보 공유",
    videoSrc: "/videos/section5.mp4",
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        <main className={styles.main}>
          {sections.map((section) => (
            <div key={section.id} className={styles.slide}>
              <div className={styles["video-wrapper"]}>
                <video autoPlay muted loop playsInline className={styles.video}>
                  <source src={section.videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{section.title}</h2>
                <p className={styles.subtitle}>{section.subtitle}</p>
              </div>
            </div>
          ))}
        </main>
      ) : (
        <main className={styles.main}>
          <Swiper
            direction="vertical"
            mousewheel={true}
            speed={800}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}" data-swiper-slide-index="${index}">${sections[index].title}</span>`;
              },
            }}
            modules={[Mousewheel, Pagination]}
            className={`${styles.swiper} ${styles["swiper-container"]}`}
          >
            {sections.map((section) => (
              <SwiperSlide key={section.id} className={styles.slide}>
                <div className={styles["video-wrapper"]}>
                  <video autoPlay muted loop playsInline className={styles.video}>
                    <source src={section.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>{section.title}</h2>
                  <p className={styles.subtitle}>{section.subtitle}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      )}
    </>
  );
}
