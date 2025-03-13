import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SubContentTitle from "@/components/ui/SubContentTitle";

// 이미지 경로는 실제 프로젝트에 맞게 수정해야 합니다
const images = {
  virus: "/images/intro01.jpg",
  doctor: "/images/intro02.jpg",
  medical: "/images/intro03.jpg",
  consultation: "/images/intro04.jpg",
  doctorTeam: "/images/intro05.jpg",
  medical01: "/images/intro06.jpg",
  medical02: "/images/intro07.jpg",
  medical03: "/images/intro08.jpg",
  medical04: "/images/intro09.jpg",
  nutrition: "/images/intro11.jpg",
  lab: "/images/intro10.jpg",
  seminar: "/images/intro12.jpg",
};

export default function IntroducePage() {
  return (
    <div className={styles.container}>
      <SubContentTitle title="사랑의병원" emphasis="소개" />

      {/* 주요 서비스 카드 섹션 */}
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <div className={styles.cardImage} style={{ position: "relative" }}>
            <Image src={images.virus} alt="통합의학적 암중점치료 프로그램" fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>통합의학적 암중점치료 프로그램</h3>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage} style={{ position: "relative" }}>
            <Image src={images.doctor} alt="내과전문의료진들의 전문진료" fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>내과전문의료진들의 전문진료</h3>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage} style={{ position: "relative" }}>
            <Image src={images.medical} alt="정밀검진 및 질병조기진단 시스템" fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>정밀검진 및 질병조기진단 시스템</h3>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage} style={{ position: "relative" }}>
            <Image src={images.consultation} alt="환우맞춤형 질병관리 상담센터" fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>환우맞춤형 질병관리 상담센터</h3>
          </div>
        </div>
      </div>

      {/* 섹션 1 */}
      <section className={styles.section}>
        <div className={styles.sectionNumber}>01</div>
        <h2 className={styles.sectionTitle}>암 및 면역질병들의 치료와 예방을 위한 암&면역 중점치료 병원입니다.</h2>
        <p className={styles.sectionContent}>
          사랑의 병원 통합의학적 면역칵테일치료프로그램은 20여년간의 암환자분들의 치료경험들과 수많은 의학적 학술연구를
          기반으로 시스템화 하였으며, 독일의 통합암치료프로그램을 접목하여 구축한 치료프로그램으로 암환자들의 치료효과를
          높이고, 치료로 인해 발생할 수 있는 부작용과 통증을 감소로 환자분들의 삶의 질을 향상시키는데 도움이 됩니다.
        </p>
        <p className={styles.sectionContent}>
          사랑의 병원은 암 및 면역환자분들을 위한 면역진료와 치료, 혈액종양내과 진료와 복합항암치료 등 면역전문진료를
          시행하고 있으며, 암 면역 치료와 함께 예방의학적 암예방시스템을 구축하여 사전에 암을 예측할 수 있는
          검사프로그램과 과학적인 예방지침을 제안함으로 앞으로 더 자유로운 건강생활을 제시합니다.
        </p>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceItem}>
            <h4 className={styles.serviceTitle}>면역치료 & 치료</h4>
          </div>
          <div className={styles.serviceItem}>
            <h4 className={styles.serviceTitle}>혈액종양 내과진료</h4>
          </div>
          <div className={styles.serviceItem}>
            <h4 className={styles.serviceTitle}>복합항암치료</h4>
          </div>
          <div className={styles.serviceItem + " " + styles.active}>
            <h4 className={styles.serviceTitle}>면역전문치료</h4>
          </div>
        </div>
      </section>

      {/* 섹션 2 */}
      <section className={styles.section}>
        <div className={styles.sectionNumber}>02</div>
        <div className={styles.doctorSection}>
          <div className={styles.doctorContent}>
            <h2 className={styles.sectionTitle}>
              성인병 치료 및 예방을 위해
              <br />
              내과 전문 의료진이 진료합니다.
            </h2>
            <p className={styles.doctorText}>
              일반환자분과 성인병환자분을 위한 소화기내과, 내분비내과, 가정의학과 진료가 진행됩니다.
            </p>
          </div>
          <div className={styles.doctorImage} style={{ position: "relative" }}>
            <Image src={images.doctorTeam} alt="내과 전문 의료진" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* 섹션 3 */}
      <section className={styles.section}>
        <div className={styles.sectionNumber}>03</div>
        <h2 className={styles.sectionTitle}>
          질병 별 정밀진단 및 종합건강검진프로그램을 갖춘 건강검진중점 병원입니다.
        </h2>
        <p className={styles.sectionContent}>
          기본종합검진, 정밀종합검진, 보험공단 건강검진과 암 및 면역 정밀검진을 시행하고 있습니다. 또한,
          조기정밀진단시스템을 구축하여 성인병 예방과 질병재발방지에도 많은 노력을 하고 있습니다.
        </p>

        <div className={styles.programGrid}>
          <div className={styles.programCard}>
            <div className={styles.programImage} style={{ position: "relative" }}>
              <Image src={images.medical01} alt="기본종합검진" width={52} height={50} />
            </div>
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>기본종합검진</h3>
            </div>
          </div>

          <div className={styles.programCard}>
            <div className={styles.programImage} style={{ position: "relative" }}>
              <Image src={images.medical02} alt="정밀종합검진" width={52} height={50} />
            </div>
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>정밀종합검진</h3>
            </div>
          </div>

          <div className={styles.programCard}>
            <div className={styles.programImage} style={{ position: "relative" }}>
              <Image src={images.medical03} alt="보험공단건강검진" width={52} height={50} />
            </div>
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>보험공단건강검진</h3>
            </div>
          </div>

          <div className={styles.programCard}>
            <div className={styles.programImage} style={{ position: "relative" }}>
              <Image src={images.medical04} alt="암 및 면역정밀 검진" width={52} height={50} />
            </div>
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>암 및 면역정밀 검진</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 4 */}
      <section className={styles.section}>
        <div className={styles.sectionNumber}>04</div>
        <h2 className={styles.sectionTitle}>통합의학연구센터에서 의학적, 약학적, 영양학적 건강 상담이 진행됩니다.</h2>
        <p className={styles.sectionContent}>
          기본종합검진, 정밀종합검진, 보험공단 건강검진과 암 및 면역 정밀검진을 시행하고 있습니다. 또한,
          조기정밀진단시스템을 구축하여 성인병 예방과 질병재발방지에도 많은 노력을 하고 있습니다.
        </p>

        <div className={styles.programGrid02}>
          <div className={styles.programCard}>
            <div className={styles.programImage} style={{ position: "relative" }}>
              <Image src={images.lab} alt="통합의학연구센터" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>
                사랑의병원은 예방의학연구소 & 건강생활연구소인 통합의학연구센터를 운영하고 있습니다.
              </h3>
            </div>
          </div>

          <div className={styles.programCard}>
            <div className={styles.programImage} style={{ position: "relative" }}>
              <Image src={images.nutrition} alt="영양상담" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>
                내원하시는 모든 분들에게 건강 & 영양상담과 정기적 건강 관리에 도움을 드리고 있습니다.
              </h3>
            </div>
          </div>

          <div className={styles.programCard}>
            <div className={styles.programImage} style={{ position: "relative" }}>
              <Image src={images.seminar} alt="건강세미나" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>
                지역주민들과 건강을 생각하시는 모든 분들을 위해 건강세미나와 건강캠프를 진행하고 있습니다.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
