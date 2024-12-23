import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Aside from "@/components/aside/Aside";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lurgi's blog",
  description: "개발자 박정우(러기)의 개인 블로그. 개발, 인사이트, 독서, 사진등 일상을 공유합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.className}`}>
        <div className={styles.layout}>
          <Aside />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
