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
          <a className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-border/50 shadow-sm group-hover:scale-105 transition-transform bg-white p-1">
              <img
                src="/logo.png"
                alt="RIO Marketing Solutions"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block">
              <span className="block font-bold text-xl leading-none text-primary">RIO</span>
              <span className="block text-[10px] tracking-widest text-muted-foreground">MARKETING SOLUTIONS</span>
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-background/50 backdrop-blur-md px-2 py-1 rounded-full border border-border/50 shadow-sm">
          <Link href="/">
            <a className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location === '/' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}>
              الرئيسية
            </a>
          </Link>
          <Link href="/services">
            <a className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location === '/services' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}>
              خدماتنا
            </a>
          </Link>
          <Link href="/case-studies">
            <a className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location === '/case-studies' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}>
              قصص نجاح
            </a>
          </Link>
          <Link href="/founder">
            <a className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location === '/founder' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}>
              المؤسس
            </a>
          </Link>
          <Link href="/about">
            <a className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location === '/about' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}>
              من نحن
            </a>
          </Link>
          <Link href="/blog">
            <a className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location === '/blog' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}>
              المدونة
            </a>
          </Link>
        </div>

        {/* CTA Button */}
        <Link href="/contact">
          <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 rounded-full px-6">
            لنتحدث
          </Button>
        </Link>

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
