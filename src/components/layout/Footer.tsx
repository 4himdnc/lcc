import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topMenu}>
        <div className={styles.container}>
          <Link href="/ko/privacy" className={styles.topMenuItem}>
            개인정보 취급방침
          </Link>
          <span className={styles.divider}>|</span>
          <Link href="/ko/email-policy" className={styles.topMenuItem}>
            이메일무단수집거부
          </Link>
        </div>
      </div>

      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/footer_logo2.png"
                alt="사랑의병원 로고"
                width={111}
                height={76}
                className={styles.logo}
              />
            </div>

            <div className={styles.footerInfo}>
              <p className={styles.hospitalName}>사랑의병원</p>
              <p className={styles.address}>경기도 성남시 분당구 분당내곡로 151.</p>
              <p className={styles.businessInfo}>
                사업자 번호 214-98-49287 <span className={styles.divider}>|</span> 대표자명 황성주{" "}
                <span className={styles.divider}>|</span> admin@lcc.co.kr
              </p>

              <div className={styles.clinicInfo}>
                <p className={styles.clinicTitle}>진료안내</p>
                <p className={styles.contactInfo}>
                  tel.1588-0008, 031-8017-0101 <span className={styles.divider}>|</span> fax. 031-8017-5353
                </p>
                <p className={styles.hours}>평일 : 오전 8시30분 ~ 오후 5시30분 (점심시간 : 오후 1시 ~ 2시)</p>
                <p className={styles.hours}>토요일 : 오전 9시 ~ 오후 1시 (점심시간 없음)</p>
                <p className={styles.hours}>주일, 공휴일 휴진</p>
              </div>

              <p className={styles.copyright}>copyright 2025. lovecareclinic. all rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
