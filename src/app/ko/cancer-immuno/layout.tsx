import SecondaryMenu from "@/components/layout/SecondaryMenu";

const menuItems = [
  {
    id: "1",
    name: "암치료 로드맵",
    path: "/ko/cancer-immuno/roadmap/immune-summary",
  },
  {
    id: "2",
    name: "황's 4I",
    path: "/ko/cancer-immuno/h4i/intro",
  },
  {
    id: "3",
    name: "면역치료클리닉",
    path: "/ko/cancer-immuno/immunotherapy/system",
  },
  {
    id: "4",
    name: "온열면역",
    path: "/ko/cancer-immuno/hyperthermia/system",
  },
  {
    id: "5",
    name: "영양면역",
    path: "/ko/cancer-immuno/nutrition_immuno/system",
  },
];
export default function CancerImmunoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryMenu menuItems={menuItems} />
      {children}
    </>
  );
}
