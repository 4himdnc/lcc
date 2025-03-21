import SubContentTitle from "@/components/ui/SubContentTitle";
import styles from "./page.module.css";

export default function HospitalLocationPage() {
  return (
    <>
      <div className={styles.locationContainer}>
        <SubContentTitle title="찾아오시는 길" />

        {/* 구글 맵 */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.681888752679!2d127.11025301605548!3d37.397354641555104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b593446bbefff%3A0x9fa9e2078781da6e!2z7Zmp7ISx7KO8IOyCrOuekeydmOuzkeybkA!5e0!3m2!1sko!2skr!4v1660895280071!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.locationInfo}>
          {/* 주소 및 연락처 정보 */}
          <div className={styles.addressBox}>
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s-8-4.5-8-11.8a8 8 0 0 1 16 0c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              찾아 오시는 길
            </h4>
            <div className={styles.addressList}>
              <div className={styles.addressItem}>경기도 성남시 분당구 삼평동 656 삼도타워 7층</div>
              <div className={styles.addressItem}>경기도 성남시 분당구 분당내곡로 151 삼도타워 7층</div>
              <div className={styles.addressItem}>전화번호 : 1588-0008, 031-8017-0101</div>
            </div>
          </div>

          {/* 대중교통 정보 */}
          <div className={styles.transportBox}>
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <circle cx="8" cy="17" r="1" />
                <circle cx="16" cy="17" r="1" />
                <path d="M4 11h16" />
              </svg>
              <span>01</span> 지하철 이용시
            </h4>
            <div className={styles.routeDescription}>신분당선 판교역 1번 출구 300m</div>
          </div>

          <div className={styles.transportBox}>
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h18v12H3z" />
                <path d="M1 6h2v12H1z" />
                <path d="M21 6h2v12h-2z" />
                <path d="M5 6h14v2H5z" />
                <circle cx="7" cy="18" r="1" />
                <circle cx="17" cy="18" r="1" />
              </svg>
              <span>02</span> 버스 이용시
            </h4>

            <div className={styles.busContainer}>
              <div className={styles.busType}>
                <h5>직행버스</h5>
                <div className={styles.busList}>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>4000</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>9414</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>1002</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>9507</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>9300</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>1005</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>6800</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>6900</span>
                  <span className={`${styles.busNumber} ${styles.directBus}`}>9007</span>
                </div>
              </div>

              <div className={styles.busType}>
                <h5>일반버스</h5>
                <div className={styles.busList}>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>55</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>5</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>280</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>370</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>390</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>380</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>340</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>340-1</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>103</span>
                  <span className={`${styles.busNumber} ${styles.localBus}`}>101</span>
                </div>
              </div>

              <div className={styles.busType}>
                <h5>마을버스</h5>
                <div className={styles.busList}>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>74</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>72</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>71</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>812</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>602-2</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>73</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>602-1</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>602</span>
                  <span className={`${styles.busNumber} ${styles.townBus}`}>76</span>
                </div>
              </div>

              <div className={styles.busType}>
                <h5>급행버스</h5>
                <div className={styles.busList}>
                  <span className={`${styles.busNumber} ${styles.expressBus}`}>1151</span>
                  <span className={`${styles.busNumber} ${styles.expressBus}`}>8106</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.transportBox}>
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 9l2 -4h8l2 4" />
                <path d="M5 9h14v5h-14z" />
                <path d="M6 13l0 4" />
                <path d="M18 13l0 4" />
              </svg>
              <span>03</span> 자가용 이용시
            </h4>

            <div className={styles.carRouteContainer}>
              <div className={styles.carRouteBox}>
                <h5>강남방면</h5>
                <div className={styles.routeDescription}>1) 강남대로-양재IC-판교IC-판교역-사랑의병원(삼도타워)</div>
                <div className={styles.routeDescription}>
                  2) 분당내곡간 도속도로=광장지하차도 전 진출(판교방향 우)-직진 후 동판교길
                  좌회전(한신교회방면)-사랑의병원
                </div>
              </div>

              <div className={styles.carRouteBox}>
                <h5>분당방면</h5>
                <div className={styles.routeDescription}>
                  서현역-서현로(판교IC방면)-광장로(내곡방면 우회전)-사랑의 병원
                </div>
              </div>

              <div className={styles.carRouteBox}>
                <h5>용인서울고속도로 이용시</h5>
                <div className={styles.routeDescription}>
                  서판교IC-안양판교로-대왕판교로 좌회전-광장로테크노밸리 방면-사랑의병원
                </div>
              </div>

              <div className={styles.carRouteBox}>
                <h5>경부고속도로 이용시</h5>
                <div className={styles.routeDescription}>
                  신갈IC-판교IC-대왕판교로 좌회전-판교역-광장로테크노밸리 방면-사랑의병원
                </div>
              </div>

              <div className={styles.carRouteBox}>
                <h5>분당수서간 고속도로이용시</h5>
                <div className={styles.routeDescription}>탄천IC-벌말사거리-광장로 판교역 방향 좌회전-사랑의병원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
