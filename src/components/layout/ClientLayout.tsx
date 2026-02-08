"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./ClientLayout.module.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuRef = useRef<HTMLElement>(null);
  const [menuOffset, setMenuOffset] = useState(0);

  useEffect(() => {
    const calculate = () => {
      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        setMenuOffset(center);
      }
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={
        {
          "--menu-offset": `${menuOffset}px`,
          "--menu-full": `${menuOffset * 2}px`,
        } as React.CSSProperties
      }
    >
      {/* Navbar flotante */}
      <div className={styles.navbarFloat}>
        <Navbar ref={menuRef} />
      </div>

      {/* Contenido */}
      <main className={styles.main}>{children}</main>
    </div>
  );
}
