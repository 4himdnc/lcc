import React from "react";
import styles from "./PageTemplate.module.css";

interface PageTemplateProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, subtitle, children }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{title}</h1>
        {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
      </div>
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
};

export default PageTemplate;
