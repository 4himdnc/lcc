import SubContentTitle from "@/components/ui/SubContentTitle";
import styles from "./page.module.css";

export default function HospitalHistoryPage() {
  return (
    <>
      <SubContentTitle title="사랑의병원" emphasis="연혁" />
      <div className={styles.historyHeader}>
        <p className={styles.subTitle}>우리 이웃을 더 건강하게!</p>
        <p className={styles.subTitle}>사랑의병원에서 여러분과 함께 하겠습니다.</p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>2023</div>
          <div className={styles.timelineContent}>
            <ul>
              <li>사랑의병원 지속적인 성장</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>2022</div>
          <div className={styles.timelineContent}>
            <ul>
              <li>CT도입, 병실확장</li>
              <li>닥터스솔루션 협업체계 구축</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>2021</div>
          <div className={styles.timelineContent}>
            <ul>
              <li>고주파온열치료기(EHY-2000) 3호기 도입</li>
              <li>건강도서 다수 출간 : 면역 밥상 생식</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>
            <span className={styles.yearRange}>2015-2018</span>
          </div>
          <div className={styles.timelineContent}>
            <ul>
              <li>건강도서 다수 출간 : 면역관리 없이 완치 없다. 생식이 유전자를 바꾼다.</li>
              <li>우간다, 에티오피아 의료선교</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>2013</div>
          <div className={styles.timelineContent}>
            <ul>
              <li>사랑의병원 승격 & 판교 확장이전</li>
              <li>암&면역 중점치료와 통합의학적 암 면역치료 정립</li>
              <li>1:1 맞춤입원시스템 구축</li>
              <li>조기진단&정밀검진시스템 정립</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>2012</div>
          <div className={styles.timelineContent}>
            <ul>
              <li>암환자 30,000례 이상 진료</li>
              <li>암관련 건강도서 다수 출간 : 암은없다. 암재발은 없다.</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>
            <span className={styles.yearRange}>2002-2005</span>
          </div>
          <div className={styles.timelineContent}>
            <ul>
              <li>제4회 국제암면역세미나 개최</li>
              <li>통증치료클리닉, 내과클리닉</li>
              <li>건강도서 다수 출간 : 면역칵테일 암치료법</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>
            <span className={styles.yearRange}>2000-2001</span>
          </div>
          <div className={styles.timelineContent}>
            <ul>
              <li>제1~2회 국제 암면역 세미나 개최</li>
              <li>항암효과 보유한 신소재 개발연구</li>
              <li>제3회 국제암면역세미나 개최</li>
              <li>항암치료법 개발연구</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>
            <span className={styles.yearRange}>1996-1998</span>
          </div>
          <div className={styles.timelineContent}>
            <ul>
              <li>미슬토주사 등 면역치료 도입</li>
              <li>독일 프리덴바일러 암센터 협진시스템 구축</li>
              <li>종합 검진센터 & 선교사 정밀 건강검진 시행</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>1994</div>
          <div className={styles.timelineContent}>
            <ul>
              <li>사랑의의원 암중점 & 성인병 진료병원 개원</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
