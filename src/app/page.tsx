import Hero from "@/sections/hero/Hero";
import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className={styles.about}>
        <div className={styles.aboutLayout}>

          {/* 👉 COLUMNA DERECHA (TU ABOUT) */}
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>¿QUIÉNES SOMOS?</h2>

              <p className={styles.aboutText}>
                Somos una firma de abogados comprometida con la excelencia jurídica,
                conformada por un equipo multidisciplinario de profesionales
                especializados en la atención integral de procesos judiciales en
                diversas áreas del derecho.
              </p>
            </div>

            <div className={styles.aboutImage}>
              <Image
                src="/images/ManosFirma.jpg"
                alt="Equipo LEGALFIRM"
                fill
                className={styles.imageAbout}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* 👉 COLUMNA IZQUIERDA */}
          <div className={styles.leftSection}>
            <h3 className={styles.leftTitle}>Comunicate con nosotros</h3>
            <p className={styles.leftText}>
              Acompañamos empresas y personas con soluciones jurídicas modernas,
              eficientes y humanas.
            </p>
          </div>
          {/* <div className={styles.leftImage}>
              <Image
                src="/images/igDorado.png"
                alt="Instagram LEGALFIRM"
                fill
                className={styles.imageleft}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div> */}

        </div>
      </section>
    </>
  );
}
