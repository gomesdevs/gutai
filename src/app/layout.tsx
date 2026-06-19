import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "GUTAI — Artefatos para quem entende peso",
  description:
    "Curadoria de artefatos de alto impacto. Cada peça é um documento de rebeldia contra o ordinário.",
  keywords: [
    "luxury fashion",
    "streetwear",
    "Chrome Hearts",
    "Rick Owens",
    "Balenciaga",
    "Maison Margiela",
    "brutalismo texturizado",
    "curadoria moda luxo",
  ],
  authors: [{ name: "GUTAI" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "GUTAI",
    title: "GUTAI — Artefatos para quem entende peso",
    description:
      "Curadoria de artefatos de alto impacto. Cada peça é um documento de rebeldia contra o ordinário.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "GUTAI — Brutalismo Texturizado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GUTAI — Artefatos para quem entende peso",
    description:
      "Curadoria de artefatos de alto impacto.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e8e8e8]">
        <noscript>
          <div className="p-4 text-center text-sm text-[#8a8a8a]" style={{ fontFamily: 'var(--font-mono)' }}>
            GUTAI funciona melhor com JavaScript habilitado.
          </div>
        </noscript>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
