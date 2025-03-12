"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <a href="tel:1588-0008" className={styles.phoneNumber}>
            대표전화 1588-0008
          </a>
        </div>

        <div className={styles.centerSection}>
          <Link href="/">
            <Image src="/images/logo.jpg" alt="병원 로고" width={80} height={54} priority />
          </Link>
        </div>

        <div className={styles.rightSection}>
          <Link href="/login" className={styles.headerLink}>
            로그인
          </Link>
          <Link href="/register" className={styles.headerLink}>
            회원가입
          </Link>
          <button className={styles.menuButton} onClick={() => setIsSideMenuOpen(true)}>
            전체메뉴
          </button>
        </div>
      </div>

      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </header>
  );
};

export default Header;
