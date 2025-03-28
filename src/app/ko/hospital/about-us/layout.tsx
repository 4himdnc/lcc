import TertiaryMenu from "@/components/layout/TertiaryMenu";
import styles from "./layout.module.css";
export default function HospitalLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { id: "greeting", name: "인사말", path: "/ko/hospital/about-us/greeting" },
    { id: "introduce", name: "소개", path: "/ko/hospital/about-us/introduce" },
    { id: "history", name: "연혁", path: "/ko/hospital/about-us/history" },
  ];

  return (
    <>
      <TertiaryMenu menuItems={menuItems} />
      <div className={styles.container}>{children}</div>
    </>
  );
}
