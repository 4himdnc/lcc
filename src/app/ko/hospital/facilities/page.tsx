import Image from "next/image";
import styles from "./page.module.css";
import SubContentTitle from "@/components/ui/SubContentTitle";

export default function HospitalFacilitiesPage() {
  return (
    <div className={styles.facilitiesContainer}>
      <SubContentTitle title="시설안내" />

      {/* 01 사랑의병원은 */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>01</span>
              사랑의병원은
            </h2>
            <p className={styles.facilityDesc}>
              암면역치료·내과치료중점 병원이며, 또 건강검진을 중점으로 합니다. 다양한 이유와 증상으로 많은 이들이 찾는
              사랑의 병원. 이곳은 열린 공간이며, 환우의 건강 회복과 편안함을 최대한 배려하는 병원입니다. 환우가 우선되는
              사랑의 병원 구석구석을 가봅니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa01.jpg"
              alt="사랑의 병원 외관"
              width={500}
              height={0}
              className={styles.facilityImage}
              priority
            />
          </div>
        </div>
      </div>

      {/* 02 힐링룸 */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>02</span>
              힐링룸
            </h2>
            <p className={styles.facilityDesc}>
              사랑의병원은 환우들이 내원한 동안 편안하게 머무를 수 있도록 쾌적한 환경을 제공하고 있습니다.
              힐링룸(Healing room)은 환우들 의 문화공간으로 또 환우간의 소통의 장소로 활용되고 있습니다. 각도가 조절되는
              편안한 1인용 리클라이너 의자가 마련되어 있으며, 영화 및 영상물을 취향에 맞게 선택할 수 있도록 개별 TV가
              설치되어 있습니다. 특히 장시간 주사를 맞아야 할 때 자기만의 시간을 가질 수 있어 환우들의 사랑을 받는
              공간입니다. 매주 목요일 오전 11시 30분에는 한 시간 동안 환우를 위한 예배 공간으로 사용되기도 합니다.
              점심시간에는 개별적으로 가져온 식사를 이곳에서 먹을 수 있습니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa02.jpg"
              alt="힐링룸 내부"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
        <div className={styles.facilityDetails}>
          <span className={styles.facilityDetailItem}>ㆍ위치 : 6층</span>
          <span className={styles.facilityDetailItem}>ㆍ이용대상 : 내원 환우 및 보호자</span>
          <span className={styles.facilityDetailItem}>ㆍ개방 시간 : 9시-6시</span>
          <span className={styles.facilityDetailItem}>ㆍ이용료 : 무료</span>
        </div>
      </div>

      {/* 03 휴게공간 */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>03</span>
              휴게공간
            </h2>
            <p className={styles.facilityDesc}>
              6층에 들어서면 내원인 누구나 이용할 수 있는 휴게공간이 마련되어 있습니다. 창가 쪽으로는 바깥 풍경을 보면서
              쉬거나 독서를 할 수 있는 기다란 카페 테이블이 비치되어 있습니다. 중앙에는 푹신한 소파가 갖추어져 있어
              자유롭게 대화를 나누기에 좋습니다. 또, 세계의 아름다운 풍경이 담긴 사진들이 전시되어 있는데, 사진을
              감상하는 동안 눈의 피로를 풀고 마음을 정화할 수 있습니다. 특히, 이 곳에서 1층의 카페 로쥬의 음료를 주문할
              수 있다는 장점이 있습니다. 벽면에 부착된 메뉴를 고른 후 카페 로쥬에 전화를 하면 카페 직원이 음료를 배달해
              줍니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa03.jpg"
              alt="휴게공간 내부"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* 04 CT실 */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>04</span>
              CT실
            </h2>
            <p className={styles.facilityDesc}>
              최첨단 MD(Multi Detector) CT 검사: 최근에 사랑의 병원에서 새로 도입한 CT 장비 모델명은 CANON AQ Lightning
              160이다. 이 모델은 1회 회전이 이루어지는 0.33초에 0.5mm의 얇은 두께의 영상을 160 slice까지 얻을 수 있다.
              이 장비를 사용하면 종양 리스크나 암 조기 진단이 가능한데, 대학병원에서 주로 사용하는 CT 장비의 경우는 1cm
              이상으로 커진 병변까지 식별이 가능한 반면, 이 장비 모델은 0.5mm의 병변까지 식별이 가능하기 때문이다. 또한
              기존 CT 대비 방사선 노출량을 75%까지 감소시켜 방사선 노출 위험도까지 낮추었다.
              <br />
              <br />
              빠른 영상 처리속도로 신속한 검사가 가능하여, 심장검사는 3-5sec 이내, 혈관영상은 7-8sec 이내, 가장 넓은
              검사 부위 중 하나인 하지 혈관 촬영도 10초 내외로 진행가능하다. 외상 영상 검사 시간을 단축할 수 있다. 기존
              CT로는 불가능했던 부정맥 환자나 인플란트, 인공관절 등 금속 인공물 부착 환자의 검사도 할 수 있다. 손·발
              말초혈관, 심혈관 등 혈관만을 정확하게 볼 수 있는 혈관 전용 소프트웨어를 탑재하여 노인 환자분들도 진단이
              가능하다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa04.jpg"
              alt="CT실 장비"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
        <div className={styles.facilityDetails}>
          <span className={styles.facilityDetailItem}>ㆍ위치 : 6층</span>
          <span className={styles.facilityDetailItem}>ㆍ개방 시간 : 9시-6시</span>
        </div>
      </div>

      {/* 05 고주파실 */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>05</span>
              고주파실
            </h2>
            <p className={styles.facilityDesc}>
              암세포만을 선택적으로 자극 및 가열해 암세포의 세포 자살과 괴사를 유도하고 사멸시키는 고주파 치료. 고주파
              치료는 독성이나 구토, 식욕부진과 같은 부작용이 없으며 면역반응을 촉진시키는 데 효과적인 치료입니다.
              사랑의병원의 고주파 치료실은 구별된 장소, 개별 암막 커튼으로 환우에게 쾌적한 환경이 제공되며 1시간 동안
              편안한 음악을 들으며 심적 불편함이 없도록 돕습니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa05.jpg"
              alt="고주파 치료실"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
        <div className={styles.facilityDetails}>
          <span className={styles.facilityDetailItem}>ㆍ위치 : 6층</span>
          <span className={styles.facilityDetailItem}>ㆍ이용대상 : 암환우</span>
          <span className={styles.facilityDetailItem}>ㆍ전문의 진단 후 치료</span>
        </div>
      </div>

      {/* 06 Dr'S Solution(닥터스솔루션) */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>06</span>
              Dr&#39;S Solution(닥터스솔루션)
            </h2>
            <p className={styles.facilityDesc}>
              닥터스 솔루션은 통합의학적 면역 프로그램을 통해 고객들의 질병을 관리해 주는 차원을 넘어, 건강한 라이프
              스타일을 가이드 하는 고객 맞춤형 토탈 헬스케어 입니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa06.jpg"
              alt="닥터스 솔루션 상담실"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
        <div className={styles.facilityDetails}>
          <span className={styles.facilityDetailItem}>ㆍ위치 : 8층</span>
          <span className={styles.facilityDetailItem}>ㆍ개방시간 : 오전9시 – 오후5시30분</span>
        </div>
      </div>

      {/* 07 르네상스 세미나실 */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>07</span>
              르네상스 세미나실
            </h2>
            <p className={styles.facilityDesc}>
              황성주 박사와 전문의가 함께 하는 암면역 세미나 및 건강 관련 교육 시에 환우 와 관심 있는 이들에게 개방하는
              세미나실이며 2층에 위치합니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa07.jpg"
              alt="르네상스 세미나실"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* 08 카페 로쥬(Cafeloge) */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>08</span>
              카페 로쥬(Cafeloge)
            </h2>
            <p className={styles.facilityDesc}>
              건물 1층에는 건강한 음료를 테마로 한 카페 로쥬(Cafeloge)가 있습니다. 일부 시즌 제품을 제외하면 모든 음료에
              자연 그대로의 재료를 담은게 특징으로, 메뉴에 들어가는 모든 시럽까지 결정과당으로 직접 제조합니다.
              결정과당은 혈당상승을 급격히 올리지 않으므로 다이어트나 이유식, 당뇨환우용 음식에 좋습니다. 카페 로쥬는
              일반 고객을 대상으로 하는 카페이지만, 환우들이 마음껏 드나들 수 있도록 배려된 공간입니다.
              <br />
              <br />
              일부 음식점이나 카페에서는 환자복을 입은 환우는 아예 출입이 제한되기도 하는데 이곳에서는 환자복을 입어도,
              주사를 맞고 있어도 여느 곳처럼 마음껏 이용할 수 있습니다. 베스트 메뉴 중 하나인 무화과 스무디를 비롯해
              생식 스무디 메뉴는 필요 영양소와 함께 이롬 100% 국산콩 두유와 프리미엄 식이 들어가 있어 식사 대용으로도
              가능합니다. 디톡스라인에는 비타민C, 칼슘, 프로바이오틱스 등의 다양한 건강기능식품이 들어갑니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa08.jpg"
              alt="카페 로쥬 내부"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
        <div className={styles.facilityDetails}>
          <span className={styles.facilityDetailItem}>ㆍ위치 : 1층</span>
          <span className={styles.facilityDetailItem}>ㆍ개방시간 : 아침 7시 30분-밤 10시 30분</span>
          <span className={styles.facilityDetailItem}>
            ㆍ환우 추천 메뉴 : 산삼한 라떼, 애플노니, 무화과 스무디, 스위 캐롯
          </span>
        </div>
      </div>

      {/* 09 H-Lounge */}
      <div className={styles.facilitySection}>
        <div className={styles.facilityContent}>
          <div className={styles.facilityInfo}>
            <h2 className={styles.facilityTitle}>
              <span className={styles.facilityNumber}>09</span>
              H-Lounge
            </h2>
            <p className={styles.facilityDesc}>
              편안하게 식사를 할 수 있도록 배려한 공간입니다. 사랑의병원에서 운영하는 식당으로, 균형 잡힌 영양소로 꽉
              채운 건강한 한 끼를 제공하며 병원에 방문한 이들은 누구나 이용할 수 있습니다. 특히 환우들을 위해서 환우용
              반찬을 무료로 제공합니다.
            </p>
          </div>
          <div className={styles.facilityImageContainer}>
            <Image
              src="/images/fa09.jpg"
              alt="H-Lounge 내부"
              width={500}
              height={0}
              className={styles.facilityImage}
              unoptimized
            />
          </div>
        </div>
        <div className={styles.facilityDetails}>
          <span className={styles.facilityDetailItem}>ㆍ위치 : 지하 1층</span>
          <span className={styles.facilityDetailItem}>ㆍ이용대상 : 내원 환우 및 보호자 누구나</span>
          <span className={styles.facilityDetailItem}>ㆍ개방 시간 : 12시-2시</span>
          <span className={styles.facilityDetailItem}>ㆍ이용료 : 8,000원</span>
        </div>
      </div>
    </div>
  );
}
