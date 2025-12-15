import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Target, BarChart3, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CaseStudies() {
  // بيانات حقيقية تم استخراجها من موقع Mohamed Rabie
  const cases = [
    {
      id: 'verde-vertical',
      title: 'Verde Vertical',
      subtitle: 'استراتيجية التحول التسويقي والنمو الشامل',
      description: 'شركة تقدم حلولاً خضراء ومنتجات للحدائق. كان التحدي هو بناء علامة تجارية قوية وموثوقة وزيادة المبيعات بشكل مستدام ضمن ميزانية محدودة.',
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80", // Placeholder relevant to "Green"
      results: [
        { label: 'نمو المتابعين', value: '+185%', icon: <Target className="w-4 h-4 text-blue-500" /> },
        { label: 'ROAS المتوقع', value: '4.8x', icon: <TrendingUp className="w-4 h-4 text-green-500" /> },
        { label: 'معدل التفاعل', value: '10.7%', icon: <BarChart3 className="w-4 h-4 text-purple-500" /> },
      ],
      tags: ['تحول تسويقي', 'نمو شامل', 'حل مشكلات معقدة']
    },
    // يمكن إضافة المزيد لاحقاً
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold rounded-full text-sm mb-4">
            نتائج تتحدث عن نفسها
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">قصص نجاح واقعية</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            لا نبيع "وعوداً"، بل نصنع "أرقاماً". اكتشف كيف ساعدنا شركائنا في تحقيق نقلات نوعية في أعمالهم.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((study) => (
              <Card key={study.id} className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0 z-10" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-sm text-secondary font-medium">{study.subtitle}</p>
                    </div>
                    <Leaf className="w-8 h-8 text-green-600 opacity-50" />
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 bg-muted/30 p-4 rounded-xl">
                    {study.results.map((res, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-2">{res.icon}</div>
                        <div className="font-bold text-xl text-primary">{res.value}</div>
                        <div className="text-xs text-muted-foreground">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-6">
                  {/* يمكن تفعيل هذا الرابط لاحقاً لصفحة تفاصيل كاملة */}
                  <Button variant="ghost" className="w-full border border-border group-hover:bg-primary group-hover:text-primary-foreground">
                    عرض التفاصيل الكاملة <ArrowRight className="w-4 h-4 mr-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* بطاقة دعوة "أنت التالي" */}
            <Card className="flex flex-col justify-center items-center text-center p-8 border-dashed border-2 border-border bg-muted/20 hover:bg-muted/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 shadow-sm">
                <Target className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">قصة النجاح القادمة؟</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                شركتك قد تكون العنوان التالي هنا. دعنا نصنع قصة نجاح مشتركة.
              </p>
              <Link href="/contact">
                <a>
                  <Button className="bg-primary hover:bg-primary/90">ابدأ رحلتك الآن</Button>
                </a>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
