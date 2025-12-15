import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, User, Tag, Search } from 'lucide-react';

/**
 * صفحة المدونة (Blog Page)
 * تعرض المقالات المعرفية وقصص النجاح لتعزيز مكانة الشركة كخبير (Authority)
 */
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('الكل');

  // تصنيفات المحتوى بناءً على الخطة
  const categories = [
    'الكل',
    'استراتيجيات النمو',
    'اتجاهات السوق',
    'قصص نجاح',
    'ريادة الأعمال'
  ];

  // مقالات تجريبية (Placeholder) لتعكس نوعية المحتوى
  const posts = [
    {
      id: 1,
      title: 'الفرق بين "النمو" و "التوسع": كيف تختار الاستراتيجية المناسبة؟',
      excerpt: 'الكثير من الشركات تخلط بين المفهومين، مما يؤدي إلى استنفاذ الموارد. اكتشف متى يجب عليك أن تنمو ومتى يجب أن تتوسع.',
      category: 'استراتيجيات النمو',
      author: 'محمد ربيع',
      date: '15 ديسمبر 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'لماذا تفشل 80% من الشركات الناشئة في السنة الأولى؟',
      excerpt: 'تحليل عميق لأسباب الفشل الشائعة، من غياب التخطيط المالي إلى سوء التموضع السوقي، وكيف تتجنبها.',
      category: 'ريادة الأعمال',
      author: 'فريق ريو',
      date: '12 ديسمبر 2025',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'كيف حولنا شركة "س" من خسارة مليوني جنيه إلى أرباح قياسية',
      excerpt: 'دراسة حالة واقعية لإحدى شركات المقاولات التي أشرفنا على إعادة هيكلتها إدارياً وتسويقياً.',
      category: 'قصص نجاح',
      author: 'محمد ربيع',
      date: '10 ديسمبر 2025',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'اتجاهات التسويق الرقمي في السعودية لعام 2026',
      excerpt: 'نظرة مستقبلية على تغير سلوك المستهلك السعودي وأهم القنوات التي يجب التركيز عليها.',
      category: 'اتجاهات السوق',
      author: 'فريق ريو',
      date: '05 ديسمبر 2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    },
  ];

  // تصفية المقالات
  const filteredPosts = activeCategory === 'الكل'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* الترويسة */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">الأفكار والرؤى</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            محتوى استراتيجي لرواد الأعمال وصناع القرار. لا نكتب لمجرد الكتابة، بل لنقدم قيمة.
          </p>

          {/* شريط البحث (شكلي حالياً) */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Input
              type="text"
              placeholder="ابحث عن موضوع..."
              className="h-12 pr-12 rounded-full border-primary/20 focus:border-primary shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          </div>
        </div>
      </section>

      {/* المحتوى الرئيسي */}
      <section className="section-padding">
        <div className="container">

          {/* التصنيفات */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* شبكة المقالات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-border/50 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* صورة المقال */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="pt-0 pb-6">
                  <Link href={`/blog/${post.id}`}>
                    <a className="text-secondary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      اقرأ المقال كاملاً <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* النشرة البريدية */}
          <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">اشترك في نشرة ريو الأسبوعية</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              استقبل أحدث الاستراتيجيات وتحليلات السوق مباشرة في بريدك الوارد. لا نرسل رسائل مزعجة (Spam)، فقط خلاصة الخبرة.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input placeholder="بريدك الإلكتروني" className="h-12 bg-background border-border" />
              <Button size="lg" className="h-12 bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20">
                اشتراك مجاني
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
