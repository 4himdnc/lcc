"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./TertiaryMenu.module.css";
import { MenuItem } from "./SecondaryMenu";

interface TertiaryMenuProps {
  menuItems: MenuItem[];
  className?: string;
}

export default function TertiaryMenu({ menuItems, className = "" }: TertiaryMenuProps) {
  const pathname = usePathname();

  // 현재 활성화된 메뉴 아이템 결정
  const currentActiveId = menuItems.find((item) => pathname === item.path || pathname.startsWith(`${item.path}/`))?.id;

  return (
    <div className={`${styles.tertiaryMenuContainer} ${className}`}>
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
  );
}
