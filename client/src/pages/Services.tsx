import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Briefcase, Zap, UserCheck } from 'lucide-react';

/**
 * Services Page (Restructured)
 * Displays the 3 core strategic pillars of Rio Marketing Solutions
 */
export default function Services() {
  const servicePillars = [
    {
      id: 'business-development',
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      title: 'تطوير الأعمال والاستراتيجية',
      description: 'نحول الأفكار إلى شركات قوية، والشركات المتعثرة إلى كيانات رابحة. خدمات تأسيس وهيكلة تضعك على الطريق الصحيح.',
      features: [
        'إعادة هيكلة الشركات وتطوير العمليات',
        'بناء خطط العمل ونماذج الربح (Business Models)',
        'دراسات الجدوى وتقييم الفرص السوقية',
        'التخطيط المالي وتوقعات التدفقات النقدية'
      ],
      cta: 'اطلب استشارة تأسيس',
      highlight: false
    },
    {
      id: 'digital-marketing',
      icon: <Zap className="w-10 h-10 text-secondary" />,
      title: 'التسويق الرقمي المتكامل',
      description: 'لا نبيع "منشورات"، بل نبني أنظمة تسويقية تجلب العملاء. حلول شاملة من المحتوى إلى الإعلانات.',
      features: [
        'إدارة الحملات الإعلانية الممولة (Media Buying)',
        'تحسين محركات البحث والظهور العضوي (SEO)',
        'صناعة المحتوى والإدارة الكاملة للمنصات',
        'بناء وهيكلة المواقع والمتاجر الإلكترونية',
        'أتمتة التسويق (Marketing Automation)'
      ],
      cta: 'ابدأ حملتك الآن',
      highlight: true
    },
    {
      id: 'executive-partner',
      icon: <UserCheck className="w-10 h-10 text-accent" />,
      title: 'الشريك التنفيذي',
      description: 'خدمة Premium لرواد الأعمال الذين يحتاجون إلى "مدير تنفيذي شريك" يوجه الدفة ويشارك في اتخاذ القرار.',
      features: [
        'إشراف استراتيجي مباشر من مستر/ محمد ربيع',
        'حضور اجتماعات مجلس الإدارة واتخاذ القرار',
        'التوجيه المباشر لفريق العمل الداخلي',
        'مراجعة الأداء الربع سنوية وتصحيح المسار',
        'شبكة علاقات وشركاء نجاح تحت تصرفك'
      ],
      cta: 'تقدم بطلب شراكة',
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            خدمات <span className="text-secondary">ريو</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            لأننا لا نؤمن بالحلول الجاهزة، قمنا بتقسيم خبراتنا إلى 3 مسارات استراتيجية تغطي دورة حياة شركتك بالكامل، من التأسيس إلى التوسع.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePillars.map((pillar, index) => (
              <Card
                key={index}
                className={`relative flex flex-col border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${pillar.highlight ? 'border-secondary/50 shadow-lg shadow-secondary/5 scale-105 z-10' : 'bg-card/50'}`}
              >
                {pillar.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    الأكثر طلباً للنمو
                  </div>
                )}

                <CardHeader className="text-center pt-10 pb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 bg-background shadow-sm border ${pillar.highlight ? 'border-secondary/20' : 'border-border'}`}>
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-3">{pillar.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${pillar.highlight ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-medium text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-6 pb-8">
                  <Link href="/contact">
                    <a className="w-full">
                      <Button
                        size="lg"
                        variant={pillar.highlight ? "default" : "outline"}
                        className={`w-full h-12 text-base ${pillar.highlight ? 'bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20' : 'border-primary/20 hover:bg-primary/5 text-primary'}`}
                      >
                        {pillar.cta} <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                    </a>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لنقل عملك للمستوى التالي؟</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            سواء كنت في مرحلة التأسيس أو التوسع، لدينا الخبرة والأدوات لمساعدتك. احجز استشارتك المجانية اليوم.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 h-14 px-10 text-xl font-bold shadow-xl shadow-black/20">
                احجز استشارة مجانية الآن
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
