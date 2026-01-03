import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import {
  ArrowLeft, TrendingUp, Target, BarChart3, Building2,
  GraduationCap, Store, Award, Users, DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import casesData from '@/data/case-studies.json';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'transform', label: 'تحول تسويقي' },
    { id: 'growth', label: 'نمو شامل' },
    { id: 'complex', label: 'حل مشكلات معقدة' },
  ];

  const filteredCases = selectedCategory === 'all'
    ? casesData
    : casesData.filter(c => c.category.includes(selectedCategory));

  const getIcon = (type: string) => {
    switch (type) {
      case 'users': return <Users className="w-5 h-5 text-green-500" />;
      case 'dollar': return <DollarSign className="w-5 h-5 text-blue-500" />;
      case 'trending': return <TrendingUp className="w-5 h-5 text-purple-500" />;
      case 'bar-chart': return <BarChart3 className="w-5 h-5 text-orange-500" />;
      case 'award': return <Award className="w-5 h-5 text-yellow-500" />;
      case 'target': return <Target className="w-5 h-5 text-red-500" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredCases.map((study) => (
              <Card key={study.id} className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl rounded-[2rem] bg-card/50 backdrop-blur-sm">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0 z-10" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2 flex-wrap">
                    {study.tags.map(tag => (
                      <span key={tag} className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] px-3 py-1.5 rounded-full font-bold shadow-sm uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <CardHeader className="pt-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-sm text-secondary font-bold tracking-wide">{study.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed line-clamp-2">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 bg-muted/40 p-6 rounded-2xl border border-border/50">
                    {study.results.map((res, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-2">{getIcon(res.type)}</div>
                        <div className="font-black text-xl text-primary">{res.value}</div>
                        <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-8 px-6">
                  <Link href={`/case-studies/${study.id}`}>
                    <a className="w-full">
                      <Button variant="ghost" className="w-full justify-between items-center group-hover:text-secondary group-hover:bg-secondary/5 font-bold transition-all h-14 rounded-xl border border-transparent hover:border-secondary/20">
                        <span>اقرأ قصة النجاح</span>
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </Link>
                </CardFooter>
              </Card>
            ))}

            {/* بطاقة دعوة "أنت التالي" */}
            <Card className="flex flex-col justify-center items-center text-center p-12 border-dashed border-2 border-border/80 bg-muted/20 hover:bg-muted/40 transition-all rounded-[2rem]">
              <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">قصة النجاح القادمة؟</h3>
              <p className="text-muted-foreground mb-8 max-w-sm text-lg leading-relaxed">
                شركتك قد تكون العنوان التالي هنا. دعنا نصنع قصة نجاح مشتركة ونحقق نتائج استثنائية.
              </p>
              <Link href="/contact">
                <a>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-10 rounded-xl shadow-lg shadow-secondary/20">
                    ابدأ رحلتك الآن
                  </Button>
                </a>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
