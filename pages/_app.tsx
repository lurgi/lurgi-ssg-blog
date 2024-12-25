import "../styles/global.css";
import styles from "./layout.module.css";
import { Noto_Sans_KR } from "next/font/google";
import type { AppProps } from "next/app";
import Aside from "@/components/aside/Aside";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${notoSansKr.className} ${styles.layout}`}>
      <Aside />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
