import type { Metadata } from "next";
import { Geist, Geist_Mono, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import FixedButton from "@/components/ui/FixedButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "사랑의병원",
  description:
    "사랑의병원은 암 면역 중점 진료, 내과 전문 진료, 산부인과, 가정의학과, 건강검진 클리닉을 운영하고 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} ${nanumMyeongjo.variable}`}>
        <Header />
        {children}
        <FixedButton />
      </body>
    </html>
  );
}
