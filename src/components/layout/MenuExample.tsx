import React from "react";
import SecondaryMenu from "./SecondaryMenu";
import TertiaryMenu from "./TertiaryMenu";

const MenuExample: React.FC = () => {
  // 2차 메뉴 아이템 예시
  const secondaryMenuItems = [
    { id: "intro", name: "사랑의병원소개", path: "/hospital/intro" },
    { id: "doctors", name: "의료진소개", path: "/hospital/doctors" },
    { id: "guide", name: "진료안내", path: "/hospital/guide" },
    { id: "jobs", name: "채용공고", path: "/hospital/jobs" },
    { id: "directions", name: "찾아오시는길", path: "/hospital/directions" },
  ];

  // 3차 메뉴 아이템 예시
  const tertiaryMenuItems = [
    { id: "greeting", name: "인사말", path: "/hospital/intro/greeting" },
    { id: "about", name: "소개", path: "/hospital/intro/about" },
    { id: "history", name: "연혁", path: "/hospital/intro/history" },
    { id: "tour", name: "둘러보기", path: "/hospital/intro/tour" },
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>병원소개</h1>

      {/* 2차 메뉴 */}
      <SecondaryMenu menuItems={secondaryMenuItems} />

      <div style={{ marginTop: "20px" }}>
        {/* 3차 메뉴 */}
        <TertiaryMenu menuItems={tertiaryMenuItems} />
      </div>

      <div style={{ marginTop: "40px", padding: "20px", border: "1px solid #eee" }}>
        <h2>컨텐츠 영역</h2>
        <p>여기에 선택된 메뉴에 해당하는 컨텐츠가 표시됩니다.</p>
      </div>
    </div>
  );
};

export default MenuExample;
