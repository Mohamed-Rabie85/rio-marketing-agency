import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import faqData from '@/data/faq.json';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function FAQ() {
    const [searchTerm, setSearchTerm] = useState('');
    const [openId, setOpenId] = useState<number | null>(1);
    const [selectedCategory, setSelectedCategory] = useState('الكل');

    const categories = ['الكل', ...Array.from(new Set(faqData.map(item => item.category)))];

    const filteredFaq = faqData.filter(item => {
        const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'الكل' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header section */}
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">الأسئلة الشائعة</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                        كل ما تود معرفته عن منهجية "ريو" في العمل وكيف نساعد شركائنا في تحقيق النمو.
                    </p>

                    <div className="max-w-xl mx-auto relative group">
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="ابحث عن سؤال..."
                            className="w-full h-14 pr-12 pl-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Categories filter */}
            <section className="py-8 bg-background sticky top-16 z-30 border-b shadow-sm">
                <div className="container">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === cat
                                    ? 'bg-secondary text-secondary-foreground shadow-md'
                                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ content */}
            <section className="section-padding">
                <div className="container max-w-3xl">
                    {filteredFaq.length > 0 ? (
                        <div className="space-y-4">
                            {filteredFaq.map((item) => (
                                <div
                                    key={item.id}
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openId === item.id ? 'border-secondary/50 shadow-lg shadow-secondary/5 bg-secondary/[0.02]' : 'border-border hover:border-border/80'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-right transition-colors"
                                    >
                                        <span className="text-lg md:text-xl font-bold text-primary leading-tight">
                                            {item.question}
                                        </span>
                                        {openId === item.id ? (
                                            <ChevronUp className="w-6 h-6 text-secondary shrink-0 ml-4" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-muted-foreground shrink-0 ml-4" />
                                        )}
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="p-5 md:p-6 md:pt-0 border-t border-border/50 text-muted-foreground text-lg leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-xl text-muted-foreground">عفواً، لا توجد نتائج مطابقة لبحثك.</p>
                            <Button
                                variant="link"
                                onClick={() => { setSearchTerm(''); setSelectedCategory('الكل'); }}
                                className="mt-4 text-secondary"
                            >
                                مسح الفلاتر
                            </Button>
                        </div>
                    )}

                    {/* Contact CTA */}
                    <div className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4">هل لديك أسئلة أخرى؟</h2>
                            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                                إذا لم تجد الإجابة التي تبحث عنها، يسعدنا تواصلك المباشر معنا لمناقشة تحديات عملك.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <a>
                                        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-12 rounded-full">
                                            تواصل معنا الآن <MessageCircle className="mr-2 w-5 h-5" />
                                        </Button>
                                    </a>
                                </Link>
                                <Button variant="outline" size="lg" className="border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground h-12 rounded-full px-8">
                                    حجز استشارة مجانية
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
