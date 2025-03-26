import SubContentTitle from "@/components/ui/SubContentTitle";
import styles from "./page.module.css";
export default function ImmuneSummaryPage() {
  return (
    <>
      <div className={styles.immuneSummaryContainer}>
        <SubContentTitle title="면역치료 개요" />
        <div className={styles.immuneSummaryContent}>
          <h2 className={styles.immuneSummaryTitle}>면역치료 개요</h2>
          <p className={styles.immuneSummaryDescription}>면역치료 개요 페이지 준비 중입니다.</p>
        </div>
      </div>
    </>
  );
}
