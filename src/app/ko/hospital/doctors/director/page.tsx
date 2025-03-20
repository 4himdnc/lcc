import layoutStyles from "@/app/ko/layout.module.css";
import styles from "../layout.module.css";
import Image from "next/image";

export default function DirectorDoctorsPage() {
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={styles.directorSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/doc01.jpg"
              alt="황성주 병원장"
              width={400}
              height={0}
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              priority
            />
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.doctorHeader}>
              <h1 className={styles.doctorName}>황성주 병원장</h1>
              <h2 className={styles.doctorTitle}>예방의학 & 암면역의학 의학박사</h2>
            </div>

            <div className={styles.sectionContainer}>
              <h3 className={styles.sectionTitle}>전문분야</h3>
              <div className={styles.itemList}>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>예방의학 전문의</span>
                </div>
              </div>
            </div>

            <div className={styles.sectionContainer}>
              <h3 className={styles.sectionTitle}>주요경력 및 학력</h3>
              <div className={styles.itemList}>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>서울대학교 의과대학 졸업, 의학박사</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>서울대학교병원 전공의 연수</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>한림대학교 의과대학 교수</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>대통령 전용병원 예방의학과 과장역임</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>독일 프리덴바일러 암센터 통합의학과 면역의학연구</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>면역치료 전문병원 사랑의병원 설립, 병원장</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>제 10대 대한암협회 이사</span>
                </div>
              </div>
            </div>

            <div className={styles.sectionContainer}>
              <h3 className={styles.sectionTitle}>기타 활동</h3>
              <div className={styles.itemList}>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>독일 자연면역요법&ldquo;미슬토 치료&rdquo; 한국 최초도입</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>자닥신 요법 최초 시행</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>통합종양학 융합치료 최초시행</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>면역칵테일 항암요법 개발</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>면역관리의학 시스템 최초개발</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>융합의학적 암진단법 개발</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>암환자 치료식, &ldquo;황성주 생식 개발&rdquo;</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.bullet}>·</span>
                  <span className={styles.itemContent}>&lsquo;암은없다&rsquo; 외 30여권 저서 집필</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
