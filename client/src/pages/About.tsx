import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Zap, ShieldCheck, Users, Trophy } from 'lucide-react';

/**
 * صفحة من نحن (About Page)
 * تعرض قصة الشركة، الرؤية، والقيم الجوهرية
 */
export default function About() {
  // القيم الجوهرية للشركة
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'الأخلاق أولاً',
      description: 'نؤمن أن الشفافية والصدق هما العملة الوحيدة التي لا تفقد قيمتها. لا وعود زائفة ولا تكاليف مخفية.',
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: 'الفهم العميق',
      description: 'لا نبدأ أي مشروع قبل أن نفهم "لماذا" و "كيف". ندرس سوقك ومنافسيك بعمق قبل كتابة سطر واحد.',
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'النتائج هي الحكم',
      description: 'في النهاية، ما يهم هو العائد على الاستثمار (ROI). نحن نركز على الأرقام التي تزيد أرباحك.',
    },
  ];

  // إحصائيات سريعة
  const stats = [
    { label: 'سنة خبرة تنفيذية', value: '+20' },
    { label: 'سنوات باسم ريو', value: '10' },
    { label: 'شريك نجاح', value: '+200' },
    { label: 'حملة ناجحة', value: '+500' },
  ];

  return (
    <div className="min-h-screen">
      {/* القسم الرئيسي: العنوان */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            قصة <span className="text-secondary">ريو</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            منذ 2015، ونحن نعمل كشريك تنفيذي للشركات في مصر والسعودية. <br />
            لسنا مجرد وكالة، نحن ذراعك الاستراتيجي للنمو.
          </p>
        </div>
      </section>

      {/* قسم القصة: من نحن */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* النص */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">أكثر من مجرد "تسويق"</h2>
              <div className="text-lg text-muted-foreground space-y-4 leading-loose">
                <p>
                  بدأت "ريو" من رؤية واضحة لمحمد ربيع بعد سنوات من العمل التنفيذي: السوق مليء بالشركات التي "تنفذ" ما يطلبه العميل، لكنه يفتقد للشريك الذي "يرشد" العميل لما يحتاجه فعلاً.
                </p>
                <p>
                  في عام 2015، انطلقت ريو (RIO) لتسد هذه الفجوة. نحن لا نبيع "باقات سوشيال ميديا"، بل نبيع "نمو شركات". دمجنا الخبرة الإدارية العميقة مع أدوات التسويق الحديثة لنقدم نموذج عمل فريد.
                </p>
                <p className="font-semibold text-foreground">
                  نحن نعمل معك وكأننا شركاء في رأس المال، حريصون على كل مليم يُصرف وعلى العائد الذي سيعود به.
                </p>
              </div>

              <div className="pt-6">
                <Link href="/contact">
                  <a>
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 shadow-lg shadow-secondary/20">
                      ابدأ قصتك معنا
                    </Button>
                  </a>
                </Link>
              </div>
            </div>

            {/* الإحصائيات / الصورة */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="text-center border-primary/10 bg-card hover:bg-accent/5 transition-colors">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* قسم القيم: لماذا نحن؟ */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">قيمنا الراسخة</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all text-center group">
                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* فريق العمل */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">فريق يفهم طموحك</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              خلف كل نجاح فريق شغوف يجمع بين الإبداع الفني والتحليل الرقمي الدقيق.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* إبراهيم فيض */}
            <div className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 text-center hover:shadow-md transition-all group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary transition-colors">
                <img
                  src="https://avatar.iran.liara.run/public/boy?username=Ibrahim"
                  alt="Ibrahim Fyad"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">إبراهيم فيض</h3>
              <p className="text-sm text-secondary font-medium mb-2">Digital Marketer</p>
              <p className="text-xs text-muted-foreground">
                متخصص في إدارة الحملات الإعلانية وتحليل الأداء لضمان أعلى عائد استثمار.
              </p>
            </div>

            {/* شروق حازم */}
            <div className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 text-center hover:shadow-md transition-all group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary transition-colors">
                <img
                  src="https://avatar.iran.liara.run/public/girl?username=Shorouk"
                  alt="Shorouk Hazem"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">شروق حازم</h3>
              <p className="text-sm text-secondary font-medium mb-2">Digital Marketer</p>
              <p className="text-xs text-muted-foreground">
                مبدعة في صياغة المحتوى وبناء استراتيجيات التواصل الاجتماعي التي تخلق تفاعلاً حقيقياً.
              </p>
            </div>

            {/* بطاقة الانضمام للفريق */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-dashed border-primary/30 flex flex-col justify-center items-center text-center hover:bg-primary/10 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm text-2xl">
                🚀
              </div>
              <h3 className="font-bold text-lg">انضم إلينا؟</h3>
              <p className="text-xs text-muted-foreground mt-2">
                نبحث دائماً عن المبدعين.<br />أرسل سيرتك الذاتية.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
