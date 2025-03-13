import React from "react";
import styles from "./SubTitle.module.css";

interface SubTitleProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function SubTitle({ title, subtitle }: SubTitleProps) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>{title}</h2>
        {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
