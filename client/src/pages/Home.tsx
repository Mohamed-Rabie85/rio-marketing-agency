import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Shield, TrendingUp, Users } from 'lucide-react';

/**
 * Home Page
 * Landing page showcasing RIO's philosophy, services, and value proposition
 */
export default function Home() {
  const philosophyPoints = [
    {
      icon: Shield,
      title: 'الأخلاق أولاً',
      description: 'نبني علاقاتنا على أساس من الشفافية والصدق والمسؤولية الاجتماعية',
    },
    {
      icon: Lightbulb,
      title: 'الفهم العميق',
      description: 'نستثمر الوقت في فهم عميق لعملك وسوقك قبل تقديم أي حل',
    },
    {
      icon: TrendingUp,
      title: 'النتائج الملموسة',
      description: 'نركز على تحقيق نتائج قابلة للقياس والنمو المستدام',
    },
    {
      icon: Users,
      title: 'الشراكة الحقيقية',
      description: 'نعتبر أنفسنا شركاء في نموك، لا مجرد مزودي خدمات',
    },
  ];

  const services = [
    {
      title: 'باقة التواجد الرقمي الاحترافي',
      description: 'بناء هوية رقمية قوية وموثوقة لعملك',
      features: ['موقع ويب احترافي', 'هوية بصرية متكاملة', 'استراتيجية محتوى'],
    },
    {
      title: 'باقة النمو واكتساب العملاء',
      description: 'تحويل تواجدك الرقمي إلى عملاء فعليين',
      features: ['استراتيجية تسويق رقمي', 'إدارة الحملات', 'تحسين التحويلات'],
    },
    {
      title: 'جلسة التشخيص الاستراتيجي',
      description: 'فهم عميق لوضعك الحالي ورسم خطة واضحة',
      features: ['تحليل شامل', 'توصيات مخصصة', 'خطة عمل واضحة'],
    },
    {
      title: 'خدمة الشريك التسويقي الدائم',
      description: 'شريك استراتيجي يرافقك في رحلة النمو',
      features: ['استشارات مستمرة', 'إشراف على التنفيذ', 'تحسين مستمر'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              وضوح في الخطة <span className="text-gradient">قوة في التنفيذ</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              بخبرة عملية في تأسيس وإعادة هيكلة الشركات، مهمتنا هي تحقيق نتائج ملموسة لمشروعك على أرض الواقع
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    احجز جلسة استشارية مجانية
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <Button size="lg" variant="outline">
                    تعرف على أكثر
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">فلسفتنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نؤمن أن النجاح الحقيقي يأتي من الجمع بين الأخلاق والكفاءة والفهم العميق
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم حلولاً متكاملة مصممة خصيصاً لاحتياجات عملك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border card-hover">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <a>
                <Button size="lg" variant="outline">
                  عرض جميع الخدمات
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز لتحويل رؤيتك إلى واقع؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            دعنا نتحدث عن كيفية مساعدتك في تحقيق أهدافك وتطوير أعمالك بشكل استراتيجي ومستدام
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                احجز جلسة استشارية الآن
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
