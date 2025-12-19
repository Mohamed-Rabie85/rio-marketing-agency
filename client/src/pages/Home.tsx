import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Target } from 'lucide-react';
import RioMethodology from '@/components/RioMethodology';
import ClientLogos from '@/components/ui/client-logos';

/**
 * Home Page
 * Narrative flow: Hook -> Social Proof -> Pain/Solution -> Authority/History -> Plan -> CTA
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. قسم الهيرو: فيديو في الخلفية */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* طبقة الفيديو الخلفية */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* طبقة تظليل داكنة */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1400"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container relative z-20 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-1000">
              ريو: شريكك التنفيذي <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">لنمو الأعمال</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              خبرة من 2015 في تحويل الشركات. شريكك التنفيذي الذي يحوّل تحديات أعمالك إلى نمو مستدام وعائد استثمار حقيقي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
              <Link href="/contact">
                <a>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20 border-none transition-transform hover:scale-105">
                    احجز استشارة مجانية
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </a>
              </Link>
              <Link href="/services">
                <a>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md">
                    اكتشف خدماتنا
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. شركاء النجاح: قسم منفصل تماماً */}
      <section className="py-20 bg-white border-b border-border/5">
        <ClientLogos />
      </section>

      {/* 3. القيمة المقترحة: خلفية مميزة */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* بطاقات تعرض أيقونات بصرية */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">خبرة تنفيذية</h3>
              <p className="text-slate-600 leading-relaxed">
                لا نقدم نظريات. خبرة 20 عاماً في تأسيس الشركات، و 10 سنوات لـ "ريو" تضمن لك خططاً قابلة للتطبيق.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">شفافية مطلقة</h3>
              <p className="text-slate-600 leading-relaxed">
                شراكة حقيقية بلا أسرار. تقاريرنا توضح أين يُنفق كل جنيه وما هو العائد الفعلي (ROI) بدقة.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">منهجية علمية</h3>
              <p className="text-slate-600 leading-relaxed">
                نستخدم أحدث أدوات تحليل البيانات وسيكولوجية المستهلك لنحول الزائرين إلى عملاء دائمين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. المشكلة: خلفية بيضاء مع صورة */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
                <img
                  src="/meet.jpg"
                  alt="Business Meeting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* شارة عائمة */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20 hidden md:block animate-in fade-in slide-in-from-left-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-bold text-slate-900">هل ميزانيتك تنزف؟</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive font-bold rounded-full text-sm mb-4">
                واقع مؤلم
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
                هل تشعر أن جهدك التسويقي <span className="text-destructive relative">
                  ضائع؟
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-destructive/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                الكثير من الشركات تعاني من تشتت الجهود بين "فري لانسر" و "وكالة" و "موظف داخلي"، مما يؤدي لضياع الميزانية دون بناء أصول حقيقية للشركة.
              </p>
              <ul className="space-y-4">
                {[
                  'تصرف ميزانيات إعلانية دون عائد استثمار واضح (ROI)',
                  'تتعامل مع وكالات "تنفذ" فقط ولا "تفكر" معك',
                  'غياب التكامل بين المبيعات والتسويق'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-destructive flex items-center justify-center flex-shrink-0">
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

      {/* 5. المنهجية: خلفية مميزة */}
      <div className="bg-slate-50 border-y border-slate-200">
        <RioMethodology />
      </div>

      {/* 6. المصداقية (Authority): خلفية بيضاء */}
      <section className="section-padding bg-white">
        <div className="container text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">لماذا RIO هي الحل؟</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            لأننا لسنا مجرد وكالة إعلانية وليدة اللحظة. نحن كيان راسخ يجمع بين الخبرة الاستراتيجية والتنفيذ الاحترافي.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* البطاقات تبقى متشابهة، لكننا اعتمدنا ستايل موحد للأقسام */}
          <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow p-6">
            <CardHeader className="p-0 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-center">كيان قانوني راسخ</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-center">
              <p className="text-slate-600">
                خبرة ممتدة في السوق المصري والسعودي، مع سجل تجاري وبطاقة ضريبية وفريق عمل ثابت.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow p-6">
            <CardHeader className="p-0 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 text-secondary mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-center">حلول 360 درجة</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-center">
              <p className="text-slate-600">
                نغطي كافة احتياجاتك: من التخطيط الاستراتيجي، للهوية البصرية، للموقع الإلكتروني، وحتى إدارة الإعلانات.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow p-6">
            <CardHeader className="p-0 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent mx-auto">
                <TrendingUp className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-center">قائد برؤية</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-center">
              <p className="text-slate-600">
                إشراف مباشر من <span className="font-bold text-primary">محمد ربيع</span> لضمان الجودة الاستراتيجية لكل مخرجات المشروع.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6.5. أحدث الرؤى (Blog Preview) */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold rounded-full text-sm mb-4">
                تحديثات مستمرة
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">أحدث الرؤى والأفكار</h2>
            </div>
            <Link href="/blog">
              <a>
                <Button variant="outline" className="hidden md:flex gap-2">
                  عرض كل المقالات <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'كيف تختار الاستراتيجية المناسبة لشركتك؟',
                category: 'استراتيجيات النمو',
                date: '15 ديسمبر 2025',
                image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'اتجاهات التسويق الرقمي في 2026',
                category: 'اتجاهات السوق',
                date: '12 ديسمبر 2025',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'قصة نجاح: إعادة هيكلة شركة مقاولات',
                category: 'قصص نجاح',
                date: '10 ديسمبر 2025',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
              }
            ].map((post, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-white overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardContent className="pt-6">
                  <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <Link href="/blog">
                    <a className="text-sm font-bold text-secondary flex items-center gap-1 hover:gap-2 transition-all mt-4">
                      اقرأ المزيد <ArrowRight className="w-3 h-3" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog">
              <a>
                <Button variant="outline" className="w-full">
                  عرض كل المقالات
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. الفاصل النهائي: فيديو/تدرج خلفية */}
      <section className="relative py-32 overflow-hidden text-white text-center">
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-800 to-secondary opacity-90" />
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400" className="w-full h-full object-cover mix-blend-overlay opacity-20" alt="" />
        </div>

        <div className="container relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">جاهز لنقل شركتك للمستوى التالي؟</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-light">
            دعنا نبني لك نظاماً تسويقياً لا يتوقف عن جلب العملاء.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a>
                <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-xl bg-white text-primary hover:bg-gray-100 shadow-2xl font-bold rounded-full transition-transform hover:scale-105">
                  احجز مكانك الآن
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
