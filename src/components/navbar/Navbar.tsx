import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import styles from "./Navbar.module.css";

const Navbar = forwardRef<HTMLElement>(function Navbar(_, ref) {
  return (
    <header className={styles.header}>
      <nav ref={ref} className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/images/LogoLegalFirmBlack.svg"
            alt="LEGALFIRM Logo"
            width={72}
            height={72}
            priority
            className={styles.logo}
          />
        </Link>

        {/* Links */}
        <ul className={styles.menu}>
          <li>
            <Link href="#about" className={styles.link}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="#services" className={styles.link}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.link}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Navbar;
