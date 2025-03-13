import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SubContentTitle from "@/components/ui/SubContentTitle";

export default function GreetingPage() {
  return (
    <div className={styles.greetingPage}>
      {/* 병원 소개 섹션 */}
      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <div className={styles.textContent}>
            <SubContentTitle title="사랑의병원" emphasis="인사말" />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/greeting.jpg"
              alt="사랑의병원 병원장"
              width={480}
              height={569}
              className={styles.introImage}
            />
          </div>
        </div>
      </div>

      {/* 인사말 섹션 */}
      <section className={styles.greetingSection}>
        <div className={styles.greetingWrapper}>
          <div className={styles.divider}></div>

          {/* 인사말 내용 */}
          <div className={styles.greetingContainer}>
            <div className={styles.greetingContent}>
              <p className={styles.paragraph}>
                <span className={styles.emphasisText}>
                  사랑의병원은 통합의학적 면역치료와 예방의학적 암 예방을 실현하는 병원으로, 30여년간 암으로 고통받는
                  환자분들을 섬기고 있습니다.
                </span>
              </p>

              <p className={styles.paragraph}>
                수 만명의 환자진료를 하면서 암과 성인병 등 많은 질병들이 건강 검진, 기능 의학적 검사 등을 통한
                예방의학적 조기진단을 통해 예방의 가능성이 높아지고, 치료효과를 높일 수 있다는 것을 확인하였습니다.
              </p>

              <p className={styles.paragraph}>
                본 건강검진센터에서는 우수한 전문의료진이 최첨단 의료진단장비를 이용하여 최상의 의료 서비스를 제공 하고
                있으며, 질병예방, 재발방지 및 치료극대화를 위한 검사항목 중심으로 다양한 건강검진프로그램을 운영하고
                있습니다.
              </p>

              <p className={styles.paragraph}>
                전문의료진이 건강검진결과에 따른 정확한 건강상담을 진행하고 있으며, 질병치료에 대한 적절한 진료와 국내
                최고의 의료센터와의 연계 치료 서비스도 제공하고 있습니다. 라이프스타일개선을 통한 질병예방을 위한
                차별화된 전문 영양·건강컨설팅을 제공하여 좀 더 효율적으로 건강관리를 할 수 있도록 하고 있습니다.
              </p>

              <p className={styles.paragraph}>
                사랑의병원은 앞으로도 암이 없는 건강한 세상, 질병이 없는 행복한 삶을 실현하도록 최선을 다할 것을 약속
                드립니다.
              </p>
            </div>
            <div className={styles.directorSignature}>
              <div className={styles.signatureText}>
                <span className={styles.directorTitle}>사랑의 병원 병원장</span>
                <span className={styles.directorName}>황성주</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
