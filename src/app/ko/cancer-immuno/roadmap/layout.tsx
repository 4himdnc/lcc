import TertiaryMenu from "@/components/layout/TertiaryMenu";

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    {
      id: "1",
      name: "암면역치료 개요",
      path: "/ko/cancer-immuno/roadmap/immune-summary",
    },
    {
      id: "2",
      name: "면역지도",
      path: "/ko/cancer-immuno/roadmap/immune-map",
    },
    {
      id: "3",
      name: "암면역치료 치료 시스템",
      path: "/ko/cancer-immuno/roadmap/treatment-system",
    },
    {
      id: "4",
      name: "조기정밀 진단 시스템",
      path: "/ko/cancer-immuno/roadmap/early-diagnosis",
    },
  ];

  return (
    <>
      <TertiaryMenu menuItems={menuItems} />
      {children}
    </>
  );
}
