import styles from "./SubContentTitle.module.css";

export default function SubContentTitle({ title, emphasis }: { title: string; emphasis?: string }) {
  return (
    <h3 className={styles.subContentTitle}>
      {title} {emphasis && <span className={styles.emphasis}>{emphasis}</span>}
    </h3>
  );
}
