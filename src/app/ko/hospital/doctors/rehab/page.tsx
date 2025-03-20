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
                src="/images/doc02.png"
                alt="류병주 원장"
                width={400}
                height={0}
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                priority
              />
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.doctorHeader}>
                <h1 className={styles.doctorName}>류병주 원장</h1>
                <h2 className={styles.doctorTitle}>재활의학과 전문의, 생활습관의학 전문의, 의학박사</h2>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>전문분야</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>
                      암재활 (면역치료, 암성통증, 항암제방사선 부작용, 림프부종)
                    </span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>자가면역재활</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>신경근골격재활</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>학력</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>고려대학교 의과대학 졸업</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>고려대학교 의과대학원 재활의학과 석사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>고려대학교 의과대학원 재활의학과 박사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>한반도국제대학원대학교 국제협력학과 석사</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>경력</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>삼육서울병원 재활의학과 주임과장, QI부부장</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>고려대학교 안암병원 재활의학과 임상교수</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>삼육대학교 외래교수</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>국립재활원 재활의학과 전공의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>서울아산병원 인턴</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>캐나다 토론토재활센터 단기연수</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>
                      미국 웨이크포레스트대학병원(Wake Forest University Hospital) 장기연수
                    </span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>
                      국제/대한 생활습관의학 전문의(International Board of Lifestyle medicine)
                    </span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한스포츠의학회인증전문의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한근전도전기진단학회 전문의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>미국근전도전기진단의학회(ABEM) 전문의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한신경근골격초음파학회 인증전문의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한노인병학회 노인병전문인증의</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한장애인스키협회 등급분류사</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한스키협회 의무위원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한병원의사협의회 대의원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한재활의학과의사회 조직강화특별위원</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>학회 활동</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>
                      대한재활의학회 정회원, 수련위원, 연구기획위원, 논문심사위원, 초록심사위원, 수련위원회 간사,
                      학술위원, 신경근육질환연구회 총무간사
                    </span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>
                      대한뇌신경재활학회 정회원, 학술위원, 진료지침위원, 미래기획위원, 논문심사 위원, 학술위원회간사,
                      교육위원회 간사, 진료지침위원회 간사, 정보위원
                    </span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>
                      대한근전도전기진단의학회 정회원, 편집위원, 논문심사 위원, 전 대한근전도전기진단의학회지 부편집장
                    </span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한암재활학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한림프부종학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>한국호스피스완화의료학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한연하장애학회 정회원, 논문심사 위원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한스포츠의학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한임상통증학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한신경근골격초음파학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한뇌졸중학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>한국의지보조기학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한발의학회 정회원</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>대한노인병학회 정회원</span>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>저술</h3>
                <div className={styles.itemList}>
                  <div className={styles.item}>
                    <span className={styles.bullet}>·</span>
                    <span className={styles.itemContent}>&lsquo;치매와 인지재활&rsquo; 언어부문 집필</span>
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
