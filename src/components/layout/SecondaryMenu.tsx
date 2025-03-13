"use client";

import React from "react";
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

  // 현재 활성화된 메뉴 아이템 결정
  const currentActiveId = menuItems.find((item) => pathname.includes(item.id))?.id;

  return (
    <>
      <div className={`${styles.secondaryMenuContainer} ${className}`}>
        {menuItems.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className={`${styles.menuItem} ${currentActiveId === item.id ? styles.active : ""}`}
            style={{ width: `${100 / menuItems.length}%` }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
