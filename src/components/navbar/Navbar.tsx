import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
}
