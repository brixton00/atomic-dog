import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // On change pour des polices plus "classe"
import "./globals.css";
import { siteConfig } from "@/config/site-config"; // On utilise ta config !

// Police principale (Texte)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Police secondaire (Titres) - Optionnel mais classe pour Atomic Dog
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}