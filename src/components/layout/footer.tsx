import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground mt-auto">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* COLONNE 1 : MARQUE */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">{siteConfig.name}</h3>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <Link href={siteConfig.links.instagram} target="_blank" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* Ajoute Facebook si besoin, sinon supprime */}
            </div>
          </div>

          {/* COLONNE 2 : LIENS RAPIDES */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline underline-offset-4">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/legals" className="hover:underline underline-offset-4">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Zone : Logroño, Pamplona, Tafalla</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}