import Footer from "@/components/layout/Footer";
import styles from "./layout.module.css";
export default function HospitalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.pageContainer}>{children}</div>
      <Footer />
    </>
  );
}
