import layoutStyles from "@/app/ko/layout.module.css";
import styles from "../layout.module.css";
import Image from "next/image";

export default function InternalDoctorsPage() {
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={styles.doctorsSection}>
          {/* 김수정 원장 */}
          <div className={styles.doctorContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/doc03.png"
                alt="김수정 원장"
                width={400}
                height={0}
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                priority
              />
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.doctorHeader}>
                <h1 className={styles.doctorName}>김수정 원장</h1>
                <h2 className={styles.doctorTitle}>내과 전문의</h2>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>전문분야</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>소화기내과 전문의</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>주요경력 및 학력</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>부천성모병원 소화기내과 임상강사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>서울성모병원 전공의 연수</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>분당차병원 건강증진센터 진료교수</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>분당필립 메디컬 센터근무, 과장역임</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>내과전문의, 소화기 내시경 전문의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>(위내시경 3만례, 대장내시경 2만례)</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>임상 노인 전문 인정의</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>기타 활동</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 내과학회 평생회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 소화기 내시경 학회 평생회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 소화기학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 임상초음파 학회정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 소화기암 연구학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>노인의학회 정회원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 김지수 원장 */}
          <div className={styles.doctorContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/doc04.png"
                alt="김지수 원장"
                width={400}
                height={0}
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                priority
              />
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.doctorHeader}>
                <h1 className={styles.doctorName}>김지수 원장</h1>
                <h2 className={styles.doctorTitle}>내과 전문의</h2>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>전문분야</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>소화기내과 전문의</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>주요경력 및 학력</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>전남대학교 의과대학 졸업, 의학석사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>차의과학대학교 분당차병원 내과 전문의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>차의과학대학교 분당차병원 소화기내과 임상강사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>차의과학대학교 차움건진센터 삼성분원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>분당차병원 건강증진센터</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>창덕의료재단 필립메디컬센터</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>성모윌병원 원장</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>내과 전문 진료</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한 내과학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한소화기내시경학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>소화기내시경 세부전문의</span>
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
