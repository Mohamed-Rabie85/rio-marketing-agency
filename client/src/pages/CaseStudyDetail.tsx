import { useRoute, Link } from 'wouter';
import {
    ArrowLeft, Users, DollarSign, TrendingUp, BarChart3, Target,
    Award, Building2, ChevronRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import casesData from '@/data/case-studies.json';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function CaseStudyDetail() {
    const [, params] = useRoute('/case-studies/:id');
    const study = casesData.find(c => c.id === params?.id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params?.id]);

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">المشروع غير موجود</h1>
                <Link href="/case-studies">
                    <Button>العودة لسابقة الأعمال</Button>
                </Link>
            </div>
        );
    }

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
        <div className="min-h-screen bg-background pb-20">
            {/* Breadcrumb */}
            <div className="container py-6">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/case-studies" className="hover:text-primary transition-colors">سابقة الأعمال</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium truncate">{study.title}</span>
                </nav>
            </div>

            {/* Hero */}
            <section className="container mb-16">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-primary aspect-[21/9] min-h-[300px]">
                    <img
                        src={study.image}
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {study.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-secondary/90 backdrop-blur-sm text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                            {study.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
                            {study.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Summary */}
            <section className="container mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {study.results.map((res, idx) => (
                        <div key={idx} className="bg-muted/30 p-8 rounded-[2rem] border border-border flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                            <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                {getIcon(res.type)}
                            </div>
                            <div className="text-3xl font-black text-primary mb-1">{res.value}</div>
                            <div className="text-muted-foreground font-bold text-sm tracking-wide uppercase">{res.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Content Sections */}
            <section className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        {/* The Challenge */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold">التحدي السوقي</h2>
                            </div>
                            <div
                                className="bg-white p-8 md:p-10 rounded-[2rem] border border-border/50 text-lg md:text-xl text-muted-foreground leading-relaxed shadow-sm prose prose-lg dark:prose-invert max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground"
                                dangerouslySetInnerHTML={{ __html: study.challenge }}
                            />
                        </div>

                        {/* The Solution */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold">منهجية ريو للحل</h2>
                            </div>
                            <div
                                className="bg-white p-8 md:p-10 rounded-[2rem] border border-border/50 text-lg md:text-xl text-muted-foreground leading-relaxed shadow-sm prose prose-lg dark:prose-invert max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground"
                                dangerouslySetInnerHTML={{ __html: study.solution }}
                            />
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <aside className="lg:col-span-4 h-fit sticky top-24">
                        <div className="bg-secondary p-8 md:p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <MessageSquare className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">هل ترغب في تحقيق نتائج مماثلة؟</h3>
                                <p className="text-white/80 mb-8 leading-relaxed">
                                    احجز استشارتك المجانية اليوم لنناقش كيف يمكن لـ "ريو" تحويل تحديات عملك إلى قصص نجاح.
                                </p>
                                <Link href="/contact">
                                    <a>
                                        <Button size="lg" className="w-full bg-white text-secondary hover:bg-white/90 font-bold h-14 rounded-xl shadow-lg">
                                            ابدأ مشروعك الآن
                                        </Button>
                                    </a>
                                </Link>
                                <Link href="/case-studies">
                                    <a>
                                        <Button variant="ghost" className="w-full mt-4 text-white hover:bg-white/10">
                                            مشاهدة مشاريع أخرى <ArrowLeft className="mr-2 w-4 h-4" />
                                        </Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
