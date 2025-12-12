import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Target } from 'lucide-react';
import ClientLogos from '@/components/ui/client-logos';

/**
 * Home Page
 * Narrative flow: Hook -> Social Proof -> Pain/Solution -> Authority/History -> Plan -> CTA
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION: The Promise */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-background">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground">
              ريو: شريكك التنفيذي <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">لنمو الأعمال</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              خبرة 9 سنوات في تحويل الشركات. شريكك التنفيذي الذي يحوّل تحديات أعمالك إلى نمو مستدام وعائد استثمار حقيقي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a>
                  <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-lg bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20">
                    احجز استشارة مجانية
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </a>
              </Link>
              <Link href="/services">
                <a>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-lg border-primary/20 hover:bg-primary/5">
                    اكتشف خدماتنا
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. VALUE PROPOSITION: Why Rio? */}
      <section className="py-12 bg-muted/30 border-y border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div className="p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">الخبرة التنفيذية (20 عاماً)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                لا نقدم نظريات. خبرة 20 عاماً في تأسيس الشركات، و9 سنوات لـ "ريو" في مصر والسعودية تضمن لك خططاً قابلة للتطبيق.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">الشفافية المطلقة</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                شراكة حقيقية بلا أسرار. تقاريرنا توضح أين يُنفق كل جنيه وما هو العائد الفعلي (ROI) على استثمارك التسويقي.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">المنهجية الاستراتيجية</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                لا نعتمد على العشوائية. نبني خططنا على البيانات والتحليل العميق لضمان أن كل خطوة تخدم هدف النمو.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF: Client Logos */}
      <ClientLogos />

      {/* 3. THE PROBLEM (Pain Points) */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Visual Placeholder for 'Frustration' or 'Confusion' */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots" />
                <Target className="w-32 h-32 text-muted-foreground/20" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                هل تشعر أن جهدك التسويقي <span className="text-destructive">ضائع؟</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                الكثير من الشركات تعاني من تشتت الجهود بين شركات متعددة، ميزانيات إعلانية لا تحقق عائداً، وغياب الرؤية الاستراتيجية الواضحة للنمو.
              </p>
              <ul className="space-y-4">
                {[
                  'تصرف ميزانيات إعلانية دون نتائج ملموسة؟',
                  'تجربة سيئة مع وكالات لا تفهم طبيعة عملك؟',
                  'تشتت بين إدارة الأونلاين والتجهيزات الأوفلاين؟'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                      ✗
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE GUIDANCE (Authority & History) */}
      <section className="section-padding bg-card border-y border-border/50">
        <div className="container text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">لماذا RIO هي الحل؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            لأننا لسنا مجرد وكالة إعلانية وليدة اللحظة. نحن كيان راسخ يجمع بين الخبرة الاستراتيجية والتنفيذ الاحترافي.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-background border-none shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">خبرة منذ 2015</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                أكثر من 10 سنوات في السوق المصري، قدمنا خلالها حلولاً متكاملة لمئات الشركات في مختلف القطاعات.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                <Target className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">حلول متكاملة (360°)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                لا داعي للتعامل مع جهات متعددة. نحن نغطي كل احتياجاتك من التسويق الرقمي إلى تجهيزات الأوفلاين والفعاليات.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <TrendingUp className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">منهجية المؤسس</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نعمل بمنهجية استراتيجية واضحة يشرف عليها <span className="inline-flex items-center gap-2 mx-1 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/20"><span className="font-english font-bold text-primary tracking-wider">Mr.</span> <span className="font-bold text-foreground">محمد ربيع</span></span>، لضمان أن كل خطوة تخدم أهداف نمو شركتك.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. THE PLAN (3 Steps) */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">كيف نبدأ الرحلة؟</h2>
            <p className="text-xl text-muted-foreground">3 خطوات بسيطة تفصلك عن النقلة النوعية في عملك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

            {[
              {
                step: '01',
                title: 'التشخيص',
                desc: 'نحلل وضعك الحالي ونحدد الفجوات والفرص بدقة.'
              },
              {
                step: '02',
                title: 'الخطة',
                desc: 'نرسم لك خارطة طريق مخصصة تشمل الحلول الأونلاين والأوفلاين.'
              },
              {
                step: '03',
                title: 'التنفيذ والنمو',
                desc: 'نتولى زمام التنفيذ ونراقب النتائج لنضمن تحقيق الأهداف.'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-background p-6 rounded-2xl text-center border border-border shadow-sm z-10">
                <div className="w-24 h-24 mx-auto bg-background rounded-full border-4 border-primary/10 flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LATEST INSIGHTS (Blog Preview) */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">رؤى وأفكار</h2>
              <p className="text-xl text-muted-foreground">أحدث المقالات لمساعدتك في فهم السوق</p>
            </div>
            <Link href="/blog">
              <a>
                <Button variant="ghost" className="hidden md:flex text-primary">
                  عرض كل المقالات <ArrowRight className="mr-2 w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-bold bg-primary px-3 py-1 rounded-full shadow-lg backdrop-blur-md">استراتيجية</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                    كيف تختار القناة التسويقية الأنسب لنشاطك التجاري في 2025؟
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed opacity-80">
                    في ظل تعدد المنصات الرقمية، يصبح اختيار القناة الصحيحة هو العامل الحاسم في نجاح حملتك التسويقية.
                  </p>
                  <div className="flex items-center text-primary text-sm font-bold mt-auto pt-4 border-t border-border/40">
                    اقرأ المزيد <ArrowRight className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog">
              <a>
                <Button variant="outline" className="w-full">عرض كل المقالات</Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA (Success) */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">جاهز لكتابة قصة نجاحك؟</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            لا تترك نمو شركتك للصدفة. انضم لقائمة الشركات التي وثقت في RIO منذ 2015.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a>
                <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-xl bg-white text-primary hover:bg-white/90 shadow-xl font-bold">
                  ابدأ الآن مجاناً
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
