import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import SubContentTitle from "@/components/ui/SubContentTitle";

export default function TreatmentsPage() {
  return (
    <>
      <div className={styles.treatmentsContainer}>
        <SubContentTitle title="진료안내" />
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>진료 시간</h2>
          <div className={styles.timeTable}>
            <div className={styles.timeRow}>
              <span className={styles.timeLabel}>평일</span>
              <span>오전 8시 30분 ~ 오후 5시 30분 (점심시간 : 오후 1시~2시)</span>
            </div>
            <div className={styles.timeRow}>
              <span className={styles.timeLabel}>토요일</span>
              <span>오전 9시 ~ 오후 1시 (점심시간 없음)</span>
            </div>
            <div className={styles.timeRow}>
              <span className={styles.timeLabel}>휴진</span>
              <span>주일, 공휴일</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>예약 방법</h2>

          <div className={styles.reservationSteps}>
            <div className={styles.step}>
              <h3>전화예약</h3>
              <div className={styles.contactInfo}>
                <h4>사랑의 병원 해피콜 센터</h4>
                <div className={styles.phoneNumber}>1588-0008</div>
                <div className={styles.phoneNumber}>031-8017-0101</div>
                <ul className={styles.extensionList}>
                  <li>진료예약 : 1번</li>
                  <li>종합검진예약 : 2번</li>
                  <li>입원실 : 3번</li>
                  <li>위치안내 : 6번</li>
                  <li>기타문의 및 전화번호 안내 : 0번</li>
                </ul>
                <div className={styles.notice}>
                  <p>※ 빠른 예약을 위해 환자등록번호 또는 주민등록번호와 주소, 전화번호를 준비해 주세요.</p>
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <h3>방문예약</h3>
              <p>건강보험증을 지참하시고 병원을 방문하여 접수창구에서 예약하시면 됩니다.</p>
              <div className={styles.mapSection}>
                <Link href="/ko/hospital/location" className={styles.mapLink}>
                  사랑의병원 약도보기
                </Link>
              </div>
            </div>

            <div className={styles.step}>
              <h3>온라인예약</h3>
              <p>PC나 모바일을 통해 사랑의 병원 홈페이지에서 예약하실 수 있습니다.</p>
              <div className={styles.onlineSteps}>
                <div className={styles.onlineStep}>진료/검진예약</div>
                <div className={styles.onlineStep}>진료과목선택</div>
                <div className={styles.onlineStep}>날짜 선택</div>
                <div className={styles.onlineStep}>시간 선택</div>
                <div className={styles.onlineStep}>인적사항 입력</div>
                <div className={styles.onlineStep}>예약완료</div>
              </div>
              <p>※ 회원, 비회원 예약이 모두 가능합니다.</p>
            </div>
          </div>

          <div className={`${styles.reservationSteps} ${styles.additionalClass}`}>
            <div className={styles.step}>
              <h3>준비서류</h3>
              <ul>
                <li>영상자료(각종 검사 영상자료 CD, 판독결과지)</li>
                <li>조직검사를 시행한 경우 조직검사 결과지, 슬라이드(골수 검사의 경우 골수결과지, 슬라이드)</li>
                <li>타병원에서 수술이나 항암, 방사선 치료를 받은 경우 수술기록지와 항암, 방사선 기록지</li>
              </ul>
            </div>

            <div className={styles.step}>
              <h3>주의사항</h3>
              <ul>
                <li>
                  <strong>처음 진료를 보시는 분은</strong> 당일 면역검사 등을 위해 8시간 금식이 필요할 수 있으니 꼭
                  확인전화를 하고 방문하시기 바랍니다.
                </li>
              </ul>
            </div>

            <div className={styles.step}>
              <h3>예약취소 안내</h3>
              <ul>
                <li>
                  <strong className={styles.strong}>진료예약 취소</strong> - 당일 취소를 원하실 경우 사랑의 병원 해피콜
                  센터 1588-0008로 문의 주시기 바랍니다.
                </li>
                <li>
                  <strong className={styles.strong}>건강검진 취소</strong> - 대장/위 내시경 예약의 경우
                  <strong> 검진 7일 전</strong>까지만 취소가 가능합니다. 그외 건강검진의
                  <strong> 당일 취소를 원하실 경우 사랑의 병원 해피콜 센터 1588-0008로 문의</strong> 주시기 바랍니다.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <picture>
          <source media="(max-width: 768px)" srcSet="/images/res02.jpg" />
          <Image
            src="/images/res01.jpg"
            alt="예약 이미지"
            width={1200}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </picture>
      </div>
    </>
  );
}
