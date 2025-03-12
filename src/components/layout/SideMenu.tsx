import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./SideMenu.module.css";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // 폴더 구조를 기반으로 메뉴 아이템 생성
    const menuItems = [
      {
        name: "병원 소개",
        path: "/hospital",
        children: [
          { name: "인사말", path: "/ko/hospital/about-us/greeting" },
          { name: "소개", path: "/ko/hospital/about-us/introduce" },
          { name: "연혁", path: "/ko/hospital/about-us/history" },
          {
            name: "의료진 소개",
            path: "/hospital/doctors",
            children: [
              { name: "병원장", path: "/ko/hospital/doctors/director" },
              { name: "대표원장", path: "/ko/hospital/doctors/chief" },
              { name: "내과", path: "/ko/hospital/doctors/internal" },
              { name: "재활의학과", path: "/ko/hospital/doctors/rehab" },
              { name: "혈액 종양 내과", path: "/ko/hospital/doctors/oncology" },
              { name: "호흡기내과", path: "/ko/hospital/doctors/pulmonology" },
            ],
          },
          { name: "진료안내", path: "/ko/hospital/treatments" },
          { name: "시설안내", path: "/ko/hospital/facilities" },
          { name: "찾아오시는 길", path: "/ko/hospital/location" },
        ],
      },
      {
        name: "암면역 센터",
        path: "/cancer-immuno",
        children: [
          {
            name: "암면역치료 로드맵",
            path: "/cancer-immuno/roadmap/immune-summary",
            children: [
              { name: "암면역치료 개요", path: "/ko/cancer-immuno/roadmap/immune-summary" },
              { name: "면역지도", path: "/ko/cancer-immuno/roadmap/immune-map" },
              { name: "암면역치료 시스템", path: "/ko/cancer-immuno/roadmap/treatment-system" },
              { name: "조기정밀 진단 시스템", path: "/ko/cancer-immuno/roadmap/early-diagnosis" },
            ],
          },
          {
            name: "황's 4I",
            path: "/cancer-immuno/h4i",
            children: [
              { name: "황's 4I란", path: "/ko/cancer-immuno/h4i/intro" },
              { name: "10가지 건강 솔루션", path: "/ko/cancer-immuno/h4i/health-solutions" },
            ],
          },
          {
            name: "면역치료클리닉",
            path: "/cancer-immuno/immunotherapy",
            children: [
              { name: "면역치료 시스템", path: "/ko/cancer-immuno/immunotherapy/system" },
              { name: "미슬토 면역치료란?", path: "/ko/cancer-immuno/immunotherapy/mistletoe" },
              { name: "미슬토 면역치료a", path: "/ko/cancer-immuno/immunotherapy/mistletoe-a" },
              { name: "미슬토 면역치료h", path: "/ko/cancer-immuno/immunotherapy/mistletoe-h" },
              { name: "싸이모신 알파1", path: "/ko/cancer-immuno/immunotherapy/alpha1" },
              { name: "이뮤노시아닌", path: "/ko/cancer-immuno/immunotherapy/immuno-shianin" },
              { name: "셀레늄", path: "/ko/cancer-immuno/immunotherapy/selenium" },
              { name: "칵테일 면역치료", path: "/ko/cancer-immuno/immunotherapy/cocktail" },
            ],
          },
          {
            name: "온열면역",
            path: "/cancer-immuno/hyperthermia",
            children: [
              { name: "온열면역시스템", path: "/ko/cancer-immuno/hyperthermia/system" },
              { name: "고주파온열암치료", path: "/ko/cancer-immuno/hyperthermia/rf-therapy" },
              { name: "전신온열요법", path: "/ko/cancer-immuno/hyperthermia/whole-body" },
            ],
          },
          {
            name: "영양면역",
            path: "/cancer-immuno/nutrition-immuno",
            children: [
              { name: "영양면역 시스템", path: "/ko/cancer-immuno/nutrition-immuno/system" },
              { name: "암예방지침", path: "/ko/cancer-immuno/nutrition-immuno/prevention" },
              { name: "암환자의 식생활", path: "/ko/cancer-immuno/nutrition-immuno/diet" },
              { name: "황성주 박사의 면역특강", path: "/ko/cancer-immuno/nutrition-immuno/lecture" },
            ],
          },
        ],
      },
      {
        name: "정밀검사 센터",
        path: "/precision-test",
        children: [
          {
            name: "암유전자 검사",
            path: "/precision-test/gene-testing",
            children: [
              { name: "셀스캔 15대 암유전자", path: "/ko/precision-test/gene-testing/cellscan" },
              { name: "텔로미어 셀에이지 검사", path: "/ko/precision-test/gene-testing/telomere" },
              { name: "마이지놈 암유전자", path: "/ko/precision-test/gene-testing/mygenome" },
              { name: "APO E 치매 유전자 검사", path: "/ko/precision-test/gene-testing/aope" },
              { name: "BRCA 유전성 유방암 검사", path: "/ko/precision-test/gene-testing/brca" },
              { name: "신데칸-2 유전자 메틸화 검사", path: "/ko/precision-test/gene-testing/syntecan" },
              { name: "캔서파인드 8대 암 진단 검사", path: "/ko/precision-test/gene-testing/cancerfind" },
            ],
          },
          { name: "면역력 검사", path: "/ko/precision-test/immune-test" },
          { name: "비타민 검사", path: "/ko/precision-test/vitamin-test" },
          { name: "맞춤형 유기산 대사균형 검사", path: "/ko/precision-test/metabolic-test" },
          { name: "Eye-CT 심혈관 위험도 검사", path: "/ko/precision-test/eye-ct-test" },
          { name: "알츠온 알츠하이머 치매 검사", path: "/ko/precision-test/alzheimer-test" },
          { name: "GUT Inside 장내미생물 검사", path: "/ko/precision-test/gut-test" },
        ],
      },
      {
        name: "건강검진 센터",
        path: "/health-check",
        children: [
          {
            name: "종합검진",
            path: "/health-check/general-checkup",
            children: [
              { name: "베이직 검진", path: "/ko/health-check/general-checkup/basic-checkup" },
              { name: "스마트 검진", path: "/ko/health-check/general-checkup/smart-checkup" },
              { name: "프리미엄 검진", path: "/ko/health-check/general-checkup/premium-checkup" },
              { name: "플래티넘 검진", path: "/ko/health-check/general-checkup/platinum-checkup" },
              { name: "목회자/선교사 종합 검진", path: "/ko/health-check/general-checkup/clergy-checkup" },
            ],
          },
          { name: "국가검진", path: "/ko/health-check/national-checkup" },
          { name: "검진 전 주의 사항", path: "/ko/health-check/pre-checkup-notes" },
        ],
      },
      {
        name: "커뮤니티",
        path: "/community",
        children: [
          { name: "공지사항", path: "/ko/community/notices" },
          { name: "통합치유프로그램", path: "/ko/community/integrated-healing" },
          { name: "건강희망도서", path: "/ko/community/health-books" },
        ],
      },
    ];

    setMenuItems(menuItems);
  }, []);

  const handleMenuClick = (menuName: string) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
      setActiveSubMenu(null);
    } else {
      setActiveMenu(menuName);
      setActiveSubMenu(null);
    }
  };

  const handleSubMenuClick = (subMenuName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSubMenu(activeSubMenu === subMenuName ? null : subMenuName);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.sideMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className={styles.header}>
              <button className={styles.closeButton} onClick={onClose}>
                닫기
              </button>
              <div className={styles.logo}>
                <Image src="/images/logo.jpg" alt="병원 로고" width={60} height={41} />
              </div>
              <div className={styles.auth}>
                <Link href="/login" className={styles.authLink}>
                  로그인
                </Link>
                <Link href="/register" className={styles.authLink}>
                  회원가입
                </Link>
              </div>
            </div>

            <nav className={styles.navigation}>
              {menuItems.map((item) => (
                <div key={item.path} className={styles.menuItem}>
                  <button
                    className={`${styles.menuButton} ${activeMenu === item.name ? styles.active : ""}`}
                    onClick={() => handleMenuClick(item.name)}
                  >
                    {item.name}
                  </button>
                  <AnimatePresence>
                    {activeMenu === item.name && item.children && (
                      <motion.div
                        className={styles.submenu}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {item.children.map((child) => (
                          <div key={child.path} className={styles.submenuItemContainer}>
                            {child.children ? (
                              <>
                                <div
                                  className={`${styles.submenuItem} ${
                                    activeSubMenu === child.name ? styles.active : ""
                                  }`}
                                  onClick={(e) => handleSubMenuClick(child.name, e)}
                                >
                                  {child.name}
                                  <span className={styles.submenuArrow}>
                                    {activeSubMenu === child.name ? "▼" : "▶"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {activeSubMenu === child.name && (
                                    <motion.div
                                      className={styles.thirdLevelMenu}
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                    >
                                      {child.children.map((grandChild) => (
                                        <Link
                                          key={grandChild.path}
                                          href={grandChild.path}
                                          className={styles.thirdLevelItem}
                                          onClick={onClose}
                                        >
                                          {grandChild.name}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                            ) : (
                              <Link href={child.path} className={styles.submenuItem} onClick={onClose}>
                                {child.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className={styles.footer}>
              <a href="tel:1588-0008" className={styles.phone}>
                상담전화 1588-0008
              </a>
              <p className={styles.copyright}>© 2025 사랑의병원. All rights reserved.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
