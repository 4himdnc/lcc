import TertiaryMenu from "@/components/layout/TertiaryMenu";

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { id: "director", name: "병원장", path: "/ko/hospital/doctors/director" },
    { id: "chief", name: "대표원장", path: "/ko/hospital/doctors/chief" },
    { id: "internal", name: "내과전문의", path: "/ko/hospital/doctors/internal" },
    { id: "rehab", name: "재활의학과전문의", path: "/ko/hospital/doctors/rehab" },
    { id: "oncology", name: "혈액종양내과", path: "/ko/hospital/doctors/oncology" },
    { id: "pulmonology", name: "호흡기내과", path: "/ko/hospital/doctors/pulmonology" },
  ];

  return (
    <>
      <TertiaryMenu menuItems={menuItems} />
      {children}
    </>
  );
}
