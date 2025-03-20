import layoutStyles from "@/app/ko/layout.module.css";
import styles from "../layout.module.css";
import Image from "next/image";

export default function OncologyDoctorsPage() {
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={styles.doctorsSection}>
          <div className={styles.doctorContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/doc05.png"
                alt="김시영 원장"
                width={400}
                height={0}
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                priority
              />
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.doctorHeader}>
                <h1 className={styles.doctorName}>김시영 원장</h1>
                <h2 className={styles.doctorTitle}>혈액종양내과 전문의</h2>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>전문분야</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>혈액종양내과 전문의</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>주요경력 및 학력</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>경희대학교 의과대학, 대학원 졸업, 의학박사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>경희대학교 의과대학 교수</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>경희의료원 암센터장</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>서울대학교병원 혈액종양내과 전임의사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>미국 MD Anderson Cancer Center 연수</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>기타활동</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>보건복지부 국가암관리위원회 위원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>국립암센터 암정복추진기획단 기획위원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>식약처 의약품심사부 전문가협의체 항암제분과 위원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>건강보험심사평가원 상근심사위원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한종양내과학회 회장</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한암학회 부회장</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>한국호스피스완화의료학회 이사장, 회장</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>American Society of Clinical Oncology, active member</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>American Association for Cancer Research, active member</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>European Society of Medical Oncology, active member</span>
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
