import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Zap } from 'lucide-react';

/**
 * About Page - من نحن
 * Displays company values, strategic charter, and business model
 */
export default function About() {
  const coreValues = [
    {
      icon: Heart,
      title: 'الأخلاق أولاً',
      description: 'نؤمن أن الأخلاق والشفافية هي أساس أي علاقة عمل ناجحة',
    },
    {
      icon: Target,
      title: 'الفهم العميق',
      description: 'نستثمر الوقت في فهم عميق لعملك وسوقك وتحدياتك',
    },
    {
      icon: Zap,
      title: 'النتائج الملموسة',
      description: 'نركز على تحقيق نتائج قابلة للقياس والنمو المستدام',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            وكالة تسويق متخصصة في تحويل الرؤى إلى نتائج ملموسة
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">قصتنا</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              بدأت رحلتنا من إيمان بسيط: أن النجاح الحقيقي يأتي من الجمع بين الأخلاق والكفاءة والفهم العميق.
            </p>
            <p>
              بعد 20 سنة من الخبرة العملية في تأسيس وإعادة هيكلة الشركات، قررنا تأسيس RIO لمساعدة الشركات على تحقيق أحلامها.
            </p>
            <p>
              مهمتنا بسيطة: أن نكون شركاء حقيقيين في نموك، وأن نحقق نتائج ملموسة، وأن نفعل كل ذلك بأخلاق واحترافية عالية.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">قيمنا الجوهرية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '20+', label: 'سنة خبرة' },
              { number: '50+', label: 'شركة ساعدناها' },
              { number: '300%', label: 'متوسط النمو' },
              { number: '95%', label: 'رضا العملاء' },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.number}
                </div>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charter */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">التزامنا لك</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  'نضع مصلحتك قبل أي شيء آخر',
                  'نستثمر الوقت في فهم عميق لعملك',
                  'نقدم حلولاً مخصصة وفعالة',
                  'نركز على نتائج قابلة للقياس',
                  'نكون شركاء حقيقيين في نموك',
                  'نتحسن باستمرار ونتعلم من كل تجربة',
                  'نحترم وقتك وأموالك',
                  'نعمل بأخلاقية واحترافية عالية',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت مستعد للشراكة معنا؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            دعنا نتحدث عن كيفية مساعدتك في تحقيق أهدافك
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                احجز جلسة استشارية مجانية
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
