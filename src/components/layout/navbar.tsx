"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-serif tracking-tighter text-primary">
              {siteConfig.name.toUpperCase()}
            </span>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 items-center">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="ml-4">
            <Link href="/contact">Prendre RDV</Link>
          </Button>
        </nav>

        {/* MOBILE NAV (BURGER) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="text-left font-serif text-primary text-xl mb-6">
                Menu
              </SheetTitle>
              <nav className="flex flex-col gap-4">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t">
                  <Button asChild className="w-full justify-center gap-2">
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                      <Phone className="h-4 w-4" />
                      Appeler maintenant
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}