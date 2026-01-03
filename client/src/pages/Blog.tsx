import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, User, Tag, Search } from 'lucide-react';
import blogData from '@/data/blog.json';

/**
 * صفحة المدونة (Blog Page)
 * تعرض المقالات المعرفية وقصص النجاح لتعزيز مكانة الشركة كخبير (Authority)
 */
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  // تصنيفات المحتوى بناءً على الخطة
  const categories = ['الكل', ...Array.from(new Set(blogData.map(post => post.category)))];

  // تصفية المقالات بناءً على التصنيف والبحث
  const filteredPosts = blogData.filter(post => {
    const matchesCategory = activeCategory === 'الكل' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* الترويسة */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">الأفكار والرؤى</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            محتوى استراتيجي لرواد الأعمال وصناع القرار. لا نكتب لمجرد الكتابة، بل لنقدم قيمة.
          </p>

          {/* شريط البحث */}
          <div className="max-w-md mx-auto mt-8 relative group">
            <Input
              type="text"
              placeholder="ابحث عن موضوع..."
              className="h-14 pr-12 rounded-full border-primary/10 focus:border-primary shadow-sm text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
          </div>
        </div>
      </section>

      {/* المحتوى الرئيسي */}
      <section className="section-padding">
        <div className="container">

          {/* التصنيفات */}
          <div className="flex flex-wrap gap-3 justify-center mb-16 underline-offset-8">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${activeCategory === cat
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* شبكة المقالات */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border-border/30 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-[2rem] bg-card/50 backdrop-blur-sm">
                  {/* صورة المقال */}
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-primary/90 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-sm backdrop-blur-md uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <CardContent className="pt-8">
                    <div className="flex items-center gap-4 text-[11px] text-muted-foreground/80 mb-4 font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-secondary" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-secondary" /> {post.author}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors min-h-[4rem]">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-base line-clamp-3 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-0 pb-8 px-6">
                    <Link href={`/blog/${post.slug}`}>
                      <a className="w-full">
                        <Button variant="ghost" className="w-full justify-between items-center group-hover:text-secondary group-hover:bg-secondary/5 font-bold transition-all h-12 rounded-xl border border-transparent hover:border-secondary/20">
                          <span>اقرأ التفاصيل</span>
                          <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground font-medium">عفواً، لا توجد مقالات تطابق بحثك حالياً.</p>
              <Button variant="link" onClick={() => { setSearchTerm(''); setActiveCategory('الكل'); }} className="mt-4 text-secondary">إعادة ضبط البحث</Button>
            </div>
          )}

          {/* النشرة البريدية */}
          <div className="mt-20 bg-primary/5 rounded-[3rem] p-10 md:p-16 text-center border border-primary/10 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">اشترك في نشرة ريو الأسبوعية</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                استقبل أحدث الاستراتيجيات وتحليلات السوق مباشرة في بريدك الوارد. لا نرسل رسائل مزعجة (Spam)، فقط خلاصة الخبرة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input placeholder="بريدك الإلكتروني" className="h-14 bg-background border-border rounded-xl px-6" />
                <Button size="lg" className="h-14 bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/20 px-10 rounded-xl font-bold">
                  اشتراك مجاني
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
