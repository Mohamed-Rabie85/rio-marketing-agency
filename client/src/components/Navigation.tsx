import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Navigation Component
 * Main navigation bar with RTL support and mobile menu
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/services', label: 'الخدمات' },
    { href: '/about', label: 'من نحن' },
    { href: '/case-studies', label: 'دراسات الحالة' },
    { href: '/blog', label: 'المدونة' },
    { href: '/founder', label: 'المؤسس' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
              R
            </div>
            <span>RIO</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 text-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <a className="hidden sm:inline-block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                احجز جلسة استشارية
              </Button>
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a onClick={() => setIsOpen(false)} className="block pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  احجز جلسة استشارية
                </Button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
