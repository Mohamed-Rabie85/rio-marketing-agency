import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "خدماتنا" },
    { href: "/about", label: "من نحن" },
    { href: "/blog", label: "المدونة" },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="RIO Marketing Solutions"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none">
                ريو للحلول التسويقية
              </span>
              <span className="text-[0.65rem] text-muted-foreground font-medium tracking-wider uppercase">
                Marketing Solutions
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === item.href
                    ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a>
              <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 transition-all hover:-translate-y-0.5">
                تواصل معنا
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-background border-b border-border p-4 md:hidden shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      location === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <a onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
                    تواصل معنا
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
