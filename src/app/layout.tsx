// src/app/layout.tsx (Mise à jour)
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site-config";
import { Navbar } from "@/components/layout/navbar"; // <--- Import
import { Footer } from "@/components/layout/footer"; // <--- Import

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <div className="flex min-h-screen flex-col"> {/* Wrapper Flex */}
          <Navbar /> {/* <--- Ajout */}
          <main className="flex-1"> {/* Flex-1 pousse le footer en bas */}
            {children}
          </main>
          <Footer /> {/* <--- Ajout */}
        </div>
      </body>
    </html>
  );
}