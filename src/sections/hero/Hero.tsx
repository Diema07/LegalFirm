"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Hero.module.css";

const HERO_IMAGES: Record<string, string> = {
  "/": "/images/TopHome.webp",
  "/contact": "/images/TopContact.webp",
  "/services": "/images/TopServices.webp",
};

export default function Hero() {
  const pathname = usePathname();
  const image = HERO_IMAGES[pathname] || "/images/TopHome.webp";

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>

      <h1 className={styles.title}>LEGALFIRM S.A.S</h1>
    </section>
  );
}
