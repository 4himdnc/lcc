import layoutStyles from "@/app/ko/layout.module.css";
import styles from "../layout.module.css";
import Image from "next/image";

export default function PulmonologyDoctorsPage() {
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={styles.doctorsSection}>
          <div className={styles.doctorContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/doc06.png"
                alt="이성자 원장"
                width={400}
                height={0}
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                priority
              />
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.doctorHeader}>
                <h1 className={styles.doctorName}>이성자 원장</h1>
                <h2 className={styles.doctorTitle}>호흡기내과 전문의</h2>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>전문분야</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>호흡기내과 전문의</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>주요경력 및 학력</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>한양대학교 의과대학 졸업</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>한양대학교 병원 호흡기내과 전임</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>SRC병원 암병동 진료부</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>위례바이오병원 암병동 원장</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>기타활동</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 암 학회</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 폐암 학회</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 임상통합의학 암학회</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 내과 학회</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 결핵 및 호흡기 학회</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 천식알레르기 학회</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 골대사학회</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
