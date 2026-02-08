import Hero from "@/sections/hero/Hero";
import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>¿QUIÉNES SOMOS?</h2>

          <p className={styles.aboutText}>
            Somos una firma de abogados comprometida con la excelencia jurídica,
            conformada por un equipo multidisciplinario de profesionales
            especializados en la atención integral de procesos judiciales en
            diversas áreas del derecho.
          </p>

          <div className={styles.aboutImage}>
            <Image
              src="/images/ManosFirma.jpg"
              alt="Equipo LEGALFIRM"
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>
    </>
  );
}
