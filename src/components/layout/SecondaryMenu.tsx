"use client";

import React, { useState, useEffect, useRef, CSSProperties } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./SecondaryMenu.module.css";

export interface MenuItem {
  id: string;
  name: string;
  path: string;
}

interface SecondaryMenuProps {
  menuItems: MenuItem[];
  className?: string;
}

export default function SecondaryMenu({ menuItems, className = "" }: SecondaryMenuProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<string>("auto");

  // 현재 활성화된 메뉴 아이템 결정
  const currentActiveId = menuItems.find((item) => pathname.includes(item.id))?.id;
  const activeMenuItem = menuItems.find((item) => item.id === currentActiveId);

  // 화면 크기 변경 감지
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setIsExpanded(false);
        setContainerHeight("auto");
      } else {
        setContainerHeight("auto");
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // 아코디언 토글 함수
  const toggleAccordion = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
  };

  // 메뉴 항목의 위치 계산 함수
  const getItemStyle = (index: number): CSSProperties => {
    if (!isMobile) {
      return { width: `${100 / menuItems.length}%` };
    }

    if (isExpanded) {
      const itemHeight = 50; // 메뉴 항목의 높이 (px)
      return {
        position: "absolute" as const,
        top: `calc(100% + ${index * itemHeight}px)`,
        left: 0,
        width: "100%",
        zIndex: 20,
      };
    }

    return {};
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`${styles.secondaryMenuContainer} ${className} ${isMobile ? styles.mobile : ""}`}
        style={{ height: containerHeight }}
      >
        {isMobile && (
          <button
            className={`${styles.menuItem} ${styles.active} ${styles.accordionToggle} ${
              isExpanded ? styles.expanded : ""
            }`}
            onClick={toggleAccordion}
          >
            {activeMenuItem ? activeMenuItem.name : menuItems[0]?.name || "메뉴"}
          </button>
        )}

        {(!isMobile || isExpanded) &&
          menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={item.id}
              className={`${styles.menuItem} ${currentActiveId === item.id ? styles.active : ""} ${
                isMobile && styles.subMenuItem
              }`}
              style={getItemStyle(index)}
              onClick={() => isMobile && setIsExpanded(false)}
            >
              {item.name}
            </Link>
          ))}
      </div>
    </>
  );
}
