import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail, Award, BookOpen, Briefcase, Quote, MessageCircle, Globe, Facebook } from 'lucide-react';
import { Link } from 'wouter';

/**
 * صفحة المؤسس (Founder Page)
 * تعرض السيرة الذاتية والرؤية الاستراتيجية لمحمد ربيع
 */
export default function Founder() {
  return (
    <div className="min-h-screen bg-background">
      {/* القسم الرئيسي (Hero) */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">

            {/* النص التعريفي */}
            <div className="flex-1 text-center md:text-right space-y-6">
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold rounded-full text-sm mb-2">
                الشريك الاستراتيجي
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
                محمد ربيع
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                مستشار نمو الشركات | مؤسس RIO Marketing Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                "التسويق ليس سحراً، بل هو هندسة دقيقة للأرقام والسلوك البشري.
                مهمتي ليست مجرد إطلاق حملات، بل بناء أنظمة نمو مستدامة تعيش لسنوات"
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start pt-4">
                <a href="https://wa.me/201503000790" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 shadow-lg w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5" />
                    تواصل مباشرة (WhatsApp)
                  </Button>
                </a>
                <a href="https://mohamedrabie.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto gap-2">
                    <Globe className="w-5 h-5" />
                    الموقع الشخصي
                  </Button>
                </a>
              </div>

              {/* ورابط التواصل الاجتماعي */}
              <div className="flex gap-4 justify-center md:justify-start pt-2">
                <a href="https://www.linkedin.com/in/mohamedrabie85" target="_blank" className="text-muted-foreground hover:text-[#0077b5] transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="https://www.facebook.com/mohamedrabie85" target="_blank" className="text-muted-foreground hover:text-[#1877F2] transition-colors"><Facebook className="w-6 h-6" /></a>
              </div>
            </div>

            {/* الصورة الشخصية */}
            <div className="flex-1 flex justify-center md:justify-end relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-10 animate-pulse" />
                <div className="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-10 bg-muted">
                  {/* Placeholder image focused on professional headshot */}
                  <img
                    src="/founder.jpg"
                    alt="Mohamed Rabie"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* بطاقة خبرة عائمة */}
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-border z-20 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-primary">+20</div>
                    <div className="text-xs text-muted-foreground font-bold">سنة خبرة تنفيذية</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* قسم القصة والفلسفة */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Quote className="w-12 h-12 text-secondary/20 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">لماذا أسست ريو؟</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-loose">
              <p>
                خلال عملي لسنوات كمدير تنفيذي في كبرى الشركات، كنت أواجه دائماً نفس المشكلة:
                وكالات التسويق تفهم "الإعلانات" لكنها لا تفهم "البيزنس"
              </p>
              <p>
                كنت أرى ميزانيات ضخمة تُصرف على حملات إبداعية لا تحقق عائداً حقيقياً (ROI).
                لذلك، في عام 2015، قررت بناء <strong>RIO</strong> لتكون الحل الذي كنت أبحث عنه
              </p>
              <p className="font-bold text-primary text-xl">
                "شريك تنفيذي يجلس معك على طاولة اتخاذ القرار، وليس مجرد مورد خدمات"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* محطات الخبرة */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">مجالات الخبرة الاستراتيجية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="pt-8 text-center">
                <Briefcase className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-3">إعادة هيكلة الشركات</h3>
                <p className="text-muted-foreground text-sm">
                  تحويل الشركات المتعثرة إلى كيانات رابحة من خلال ضبط العمليات والتدفقات المالية
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:border-secondary/50 transition-colors group">
              <CardContent className="pt-8 text-center">
                <BookOpen className="w-10 h-10 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-3">التسويق المبني على البيانات</h3>
                <p className="text-muted-foreground text-sm">
                  لا مكان للحدس هنا. كل قرار يُتخذ بناءً على تحليلات دقيقة وسلوك المستهلك
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:border-accent/50 transition-colors group">
              <CardContent className="pt-8 text-center">
                <Award className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-3">القيادة التنفيذية</h3>
                <p className="text-muted-foreground text-sm">
                  بناء وتدريب فرق العمل القادرة على حمل الراية واستكمال مسيرة النمو
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لنقل عملك للمستوى التالي؟</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            لا أعمل مع الجميع. أختار شركائي بعناية لأضمن لهم التركيز الكامل والنتائج الحقيقية
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 h-14 shadow-2xl">
                دعنا نتحدث في التفاصيل
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
