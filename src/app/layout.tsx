import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";

/* =======================
   FUENTES LOCALES
======================= */

const FontTitle = localFont({
  src: [
    {
      path: "../assets/fonts/GlacialIndifference/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GlacialIndifference/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-title",
  display: "swap",
});

const FontContent = localFont({
  src: [
    {
      path: "../assets/fonts/HankenGrotesk/HankenGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/HankenGrotesk/HankenGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/HankenGrotesk/HankenGrotesk-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/HankenGrotesk/HankenGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-content",
  display: "swap",
});

/* =======================
   METADATA
======================= */

export const metadata: Metadata = {
  title: "LEGALFIRM S.A.S | Firma legal especializada",
  description:
    "LEGALFIRM S.A.S, firma legal especializada en derecho laboral, cumplimiento normativo, SG-SST y gestión empresarial.",
};

/* =======================
   ROOT LAYOUT
======================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${FontTitle.variable} ${FontContent.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
