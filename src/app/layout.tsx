import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GUTAI — Artefatos para quem entende peso",
  description: "Galeria de arte viva e clube exclusivo de moda de luxo. Brutalismo Texturizado.",
  keywords: ["luxury fashion", "streetwear", "Chrome Hearts", "Rick Owens", "Balenciaga", "Margiela"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e8e8e8]">
        {children}
      </body>
    </html>
  );
}
