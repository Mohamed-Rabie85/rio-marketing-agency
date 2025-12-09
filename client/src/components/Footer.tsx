import { Link } from 'wouter';
import { Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react';

/**
 * Footer Component
 * Main footer with company info, links, and social media
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    الخدمات: [
      { label: 'التواجد الرقمي الاحترافي', href: '/services' },
      { label: 'النمو واكتساب العملاء', href: '/services' },
      { label: 'التشخيص الاستراتيجي', href: '/services' },
      { label: 'الشريك التسويقي الدائم', href: '/services' },
    ],
    الموارد: [
      { label: 'المدونة', href: '/blog' },
      { label: 'دراسات الحالة', href: '/case-studies' },
      { label: 'عن المؤسس', href: '/founder' },
      { label: 'من نحن', href: '/about' },
    ],
    الشركة: [
      { label: 'الرئيسية', href: '/' },
      { label: 'تواصل معنا', href: '/contact' },
      { label: 'احجز جلسة', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  R
                </div>
                <span>RIO</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              وكالة تسويق متخصصة في تحويل رؤيتك إلى نتائج ملموسة. الأخلاق أولاً، والفهم العميق ثانياً.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} RIO Marketing Solutions. جميع الحقوق محفوظة.
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href="mailto:info@rio.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@rio.com</span>
            </a>
            <a
              href="tel:+201000000000"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+20 100 000 0000</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
