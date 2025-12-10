import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

/**
 * Services Page
 * Displays all service packages and consulting services with details
 */
export default function Services() {
  const executionPackages = [
    {
      title: 'باقة التواجد الرقمي الاحترافي',
      description: 'بناء أساس رقمي قوي وموثوق لعملك',
      duration: '3 أشهر',
      features: [
        'موقع ويب احترافي وسريع',
        'هوية بصرية متكاملة (شعار، ألوان، خطوط)',
        'استراتيجية محتوى شاملة',
        'تحسين محركات البحث (SEO)',
        'إعداد وسائل التواصل الاجتماعي',
        'تدريب فريقك على الإدارة',
      ],
      highlights: [
        'هوية رقمية احترافية',
        'تواجد قوي على الإنترنت',
        'أساس متين للنمو',
      ],
    },
    {
      title: 'باقة النمو واكتساب العملاء',
      description: 'تحويل تواجدك الرقمي إلى عملاء فعليين',
      duration: '6 أشهر',
      features: [
        'استراتيجية تسويق رقمي متكاملة',
        'إدارة حملات الإعلانات (Facebook, Google)',
        'تحسين معدلات التحويل',
        'إدارة المحتوى والمنشورات',
        'تحليل البيانات والتقارير الشهرية',
        'استشارات استراتيجية مستمرة',
        'دعم فني 24/7',
      ],
      highlights: [
        'زيادة العملاء المحتملين',
        'تحسين معدلات التحويل',
        'نمو مستدام',
      ],
    },
  ];

  const consultingServices = [
    {
      title: 'جلسة التشخيص الاستراتيجي',
      description: 'فهم عميق لوضعك الحالي ورسم خطة واضحة',
      duration: 'جلسة واحدة (3 ساعات)',
      features: [
        'تحليل شامل لوضعك الحالي',
        'تقييم المنافسة والسوق',
        'تحديد نقاط القوة والضعف',
        'توصيات مخصصة وعملية',
        'خطة عمل واضحة وقابلة للتنفيذ',
        'تقرير مفصل مكتوب',
      ],
      highlights: [
        'فهم عميق لوضعك',
        'خطة واضحة للنمو',
        'توصيات عملية',
      ],
    },
    {
      title: 'خدمة المستشار التسويقي الدائم',
      description: 'شريك استراتيجي يرافقك في رحلة النمو',
      duration: 'عقد شهري/سنوي',
      features: [
        'استشارات استراتيجية مستمرة',
        'إشراف على التنفيذ والعمليات',
        'مراجعة شهرية للأداء والنتائج',
        'تحسين مستمر للاستراتيجيات',
        'دعم في اتخاذ القرارات الصعبة',
        'تقارير تفصيلية شهرية',
        'أولوية في الدعم والاستجابة',
      ],
      highlights: [
        'شراكة حقيقية',
        'نمو مستدام',
        'دعم مستمر',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم حلولاً متكاملة مصممة خصيصاً لاحتياجات عملك، من بناء التواجد الرقمي إلى تحقيق النمو المستدام
          </p>
        </div>
      </section>

      {/* Execution Packages */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">حزم التنفيذ</h2>
            <p className="text-lg text-muted-foreground">
              حلول متكاملة لبناء وتطوير عملك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {executionPackages.map((pkg, index) => (
              <Card key={index} className="border-border flex flex-col overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">المدة:</span> {pkg.duration}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">المميزات الرئيسية:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-border">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-foreground">ستحصل على:</h4>
                      <ul className="space-y-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact">
                      <a className="block">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          تواصل معنا
                          <ArrowRight className="w-4 h-4 mr-2" />
                        </Button>
                      </a>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">الخدمات الاستشارية</h2>
            <p className="text-lg text-muted-foreground">
              استشارات استراتيجية من خبير متخصص
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="border-border flex flex-col overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-secondary to-accent" />
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">المدة:</span> {service.duration}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">ما تتضمنه:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-border">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-foreground">الفوائد:</h4>
                      <ul className="space-y-1">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact">
                      <a className="block">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                          احجز الآن
                          <ArrowRight className="w-4 h-4 mr-2" />
                        </Button>
                      </a>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Assets Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">بناء الأصول الرقمية</h2>
            <p className="text-lg text-muted-foreground">
              حلول تقنية مبتكرة لخدمة أهداف عملك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'تطوير المنصات', desc: 'بناء منصات متخصصة تخدم عملياتك وعملائك' },
              { title: 'تطبيقات الويب', desc: 'تطبيقات تفاعلية متطورة تعمل على المتصفح' },
              { title: 'تصميم تجربة المستخدم', desc: 'تصميم واجهات احترافية تركز على سهولة الاستخدام' }
            ].map((item, i) => (
              <Card key={i} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supplementary Services */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">خدمات تكميلية</h2>
            <p className="text-lg text-muted-foreground">
              دعم شامل لاحتياجاتك التسويقية الأوفلاين
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>تصميم وطباعة المواد الدعائية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">تصميم وتنفيذ كافة المطبوعات والهدايا الدعائية بجودة عالية.</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>تجهيز الفعاليات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">تخطيط وتجهيز أجنحة المعارض والمؤتمرات لضمان أفضل ظهور.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار RIO؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'خبرة عملية',
                description: '20 سنة من الخبرة في تأسيس وإعادة هيكلة الشركات',
              },
              {
                title: 'نتائج ملموسة',
                description: 'نركز على تحقيق أهداف قابلة للقياس والنمو المستدام',
              },
              {
                title: 'شراكة حقيقية',
                description: 'نعتبر أنفسنا شركاء في نموك، لا مجرد مزودي خدمات',
              },
              {
                title: 'الأخلاق أولاً',
                description: 'نبني علاقاتنا على أساس من الشفافية والصدق',
              },
              {
                title: 'فهم عميق',
                description: 'نستثمر الوقت في فهم عميق لعملك وسوقك',
              },
              {
                title: 'دعم مستمر',
                description: 'دعم فني واستراتيجي مستمر طوال الرحلة',
              },
            ].map((item, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز للبدء؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            احجز جلسة تشخيص استراتيجية مجانية واكتشف كيف يمكننا مساعدتك
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                احجز جلسة مجانية الآن
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
