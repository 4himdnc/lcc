import SecondaryMenu from "@/components/layout/SecondaryMenu";
import SubTitle from "@/components/layout/SubTitle";

export default function HospitalLayout({ children }: { children: React.ReactNode }) {
  const secondaryMenuItems = [
    { id: "about-us", name: "병원소개", path: "/ko/hospital/about-us/greeting" },
    { id: "doctors", name: "의료진소개", path: "/ko/hospital/doctors/chief" },
    { id: "treatments", name: "진료안내", path: "/ko/hospital/treatments" },
    { id: "facilities", name: "시설안내", path: "/ko/hospital/facilities" },
    { id: "location", name: "찾아오시는길", path: "/ko/hospital/location" },
  ];

  return (
    <>
      <SubTitle title="병원 소개" subtitle="사랑의 병원을 소개합니다." />
      <SecondaryMenu menuItems={secondaryMenuItems} />
      {children}
    </>
  );
}
