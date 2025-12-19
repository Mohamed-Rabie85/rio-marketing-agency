import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Target, BarChart3, Building2, GraduationCap, Store, Award, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'transform', label: 'تحول تسويقي' },
    { id: 'growth', label: 'نمو شامل' },
    { id: 'complex', label: 'حل مشكلات معقدة' },
  ];

  // البيانات الحقيقية من Portfolio
  const cases = [
    {
      id: 'impact-interiors',
      title: 'Impact Interiors',
      subtitle: 'تحول تسويقي وتوسع جغرافي',
      description: 'شركة متخصصة في التصميم الداخلي وخدمات الـ fit-out في البحرين ولبنان، مع طموح للتوسع في السعودية وقطر والإمارات.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
      icon: <Building2 className="w-6 h-6" />,
      results: [
        { label: 'نمو العملاء', value: '+25%', icon: <Users className="w-4 h-4 text-green-500" /> },
        { label: 'زيادة الإيرادات', value: '+25%', icon: <DollarSign className="w-4 h-4 text-blue-500" /> },
        { label: 'الوعي بالعلامة', value: '+50%', icon: <TrendingUp className="w-4 h-4 text-purple-500" /> },
      ],
      tags: ['تحول تسويقي', 'نمو شامل'],
      category: ['transform', 'growth']
    },
    {
      id: 'verde-vertical',
      title: 'Verde Vertical',
      subtitle: 'استراتيجية النمو المستدام',
      description: 'شركة حلول خضراء ومنتجات للحدائق. تحدي بناء علامة تجارية قوية وتحقيق مبيعات ملموسة بميزانية محدودة.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200',
      icon: <Target className="w-6 h-6" />,
      results: [
        { label: 'نمو المتابعين', value: '+185%', icon: <TrendingUp className="w-4 h-4 text-green-500" /> },
        { label: 'ROAS المتوقع', value: '4.8x', icon: <DollarSign className="w-4 h-4 text-blue-500" /> },
        { label: 'معدل التفاعل', value: '10.7%', icon: <BarChart3 className="w-4 h-4 text-purple-500" /> },
      ],
      tags: ['تحول تسويقي', 'نمو شامل'],
      category: ['transform', 'growth', 'complex']
    },
    {
      id: 'agyal-academy',
      title: 'أكاديمية أجيال',
      subtitle: 'تأسيس كيان تعليمي متكامل',
      description: 'تأسيس أكاديمية تعليمية في سوق تنافسي لتقديم دورات البرمجة وتطوير الويب مع ضمان فرص توظيف حقيقية.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
      icon: <GraduationCap className="w-6 h-6" />,
      results: [
        { label: 'جذب طلاب', value: '18-34 سنة', icon: <Users className="w-4 h-4 text-green-500" /> },
        { label: 'شراكات صناعية', value: 'متعددة', icon: <Award className="w-4 h-4 text-blue-500" /> },
        { label: 'نموذج تشغيلي', value: 'متكامل', icon: <Target className="w-4 h-4 text-purple-500" /> },
      ],
      tags: ['حل مشكلات معقدة', 'نمو شامل'],
      category: ['complex', 'growth', 'transform']
    },
    {
      id: 'al-marsam',
      title: 'المرسم الأول',
      subtitle: 'تحول رقمي محلي',
      description: 'متجر قرطاسية وأدوات فنية. التحدي: تحويل الاهتمام الرقمي إلى زيارات فعلية للمحل.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
      icon: <Store className="w-6 h-6" />,
      results: [
        { label: 'زيادة الزيارات', value: 'للمحل', icon: <Users className="w-4 h-4 text-green-500" /> },
        { label: 'ظهور محلي', value: 'Google Maps', icon: <TrendingUp className="w-4 h-4 text-blue-500" /> },
        { label: 'نمو رقمي', value: 'متعدد المنصات', icon: <BarChart3 className="w-4 h-4 text-purple-500" /> },
      ],
      tags: ['تحول تسويقي'],
      category: ['transform']
    },
    {
      id: 'winner-advertising',
      title: 'Winner Advertising',
      subtitle: 'تحول استراتيجي شامل',
      description: 'تحويل مصنع تصنيع إلى شريك استراتيجي متكامل يقدم خدمات BTL شاملة مع نظام إداري متطور.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
      icon: <Award className="w-6 h-6" />,
      results: [
        { label: 'نمو المبيعات', value: '+50%', icon: <DollarSign className="w-4 h-4 text-green-500" /> },
        { label: 'تحول الهوية', value: 'كامل', icon: <Award className="w-4 h-4 text-blue-500" /> },
        { label: 'ابتكار تقني', value: 'AI Design', icon: <Target className="w-4 h-4 text-purple-500" /> },
      ],
      tags: ['نمو شامل', 'حل مشكلات معقدة', 'تحول تسويقي'],
      category: ['growth', 'complex', 'transform']
    },
  ];

  const filteredCases = selectedCategory === 'all'
    ? cases
    : cases.filter(c => c.category.includes(selectedCategory));

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

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-md z-40">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCases.map((study) => (
              <Card key={study.id} className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0 z-10" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2 flex-wrap">
                    {study.tags.map(tag => (
                      <span key={tag} className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    {study.icon}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-sm text-secondary font-medium">{study.subtitle}</p>
                    </div>
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
                        <div className="font-bold text-lg text-primary">{res.value}</div>
                        <div className="text-xs text-muted-foreground">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-6">
                  <Link href="/contact">
                    <a className="w-full">
                      <Button variant="ghost" className="w-full border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        ابدأ مشروعك الآن <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                    </a>
                  </Link>
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
                  <Button className="bg-secondary hover:bg-secondary/90">ابدأ رحلتك الآن</Button>
                </a>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
