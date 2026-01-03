import { useRoute, Link } from 'wouter';
import { Calendar, User, ArrowLeft, Share2, Tag, ChevronRight } from 'lucide-react';
import blogData from '@/data/blog.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';

export default function BlogPost() {
    const [, params] = useRoute('/blog/:slug');
    const post = blogData.find(p => p.slug === params?.slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params?.slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
                <Link href="/blog">
                    <Button>العودة للمدونة</Button>
                </Link>
            </div>
        );
    }

    const relatedPosts = blogData
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 2);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Navigation Breadcrumb */}
            <div className="container py-6">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/blog" className="hover:text-primary transition-colors">المدونة</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
                        {post.title}
                    </span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] w-full mb-12 overflow-hidden">
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full z-30 py-12">
                    <div className="container">
                        <div className="max-w-3xl">
                            <div className="inline-block px-4 py-1 bg-secondary text-white text-xs font-bold rounded-full mb-6 shadow-lg">
                                {post.category}
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium">
                                <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-secondary" /> {post.date}</span>
                                <span className="flex items-center gap-2"><User className="w-5 h-5 text-secondary" /> {post.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Article sidebar/tools */}
                    <aside className="lg:col-span-1 flex lg:flex-col items-center gap-6 order-last lg:order-first sticky top-24 h-fit">
                        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-border/50 hover:bg-primary hover:text-white transition-all shadow-sm">
                            <Share2 className="w-5 h-5" />
                        </Button>
                        {/* Social Share Placeholders */}
                        <div className="hidden lg:flex flex-col gap-4 text-muted-foreground">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-center">مشاركة</span>
                            <div className="w-px h-12 bg-border mx-auto" />
                        </div>
                    </aside>

                    {/* Article body */}
                    <article className="lg:col-span-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                            <p className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed italic border-r-4 border-secondary pr-6 py-2">
                                {post.excerpt}
                            </p>

                            <div
                                className="bg-muted/30 p-8 rounded-3xl border border-dashed border-border mb-12 prose prose-lg dark:prose-invert max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                                {post.tags.map(tag => (
                                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                                        <Tag className="w-3.5 h-3.5" />
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Author info placeholder */}
                        <div className="mt-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-soft">
                                <img src="/logo.png" alt="RIO" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">عن {post.author}</h4>
                                <p className="text-muted-foreground m-0">
                                    خبير في استراتيجيات النمو والتحول الرقمي، ومؤسس ريو للحلول التسويقية. يساعد الشركات على بناء أصول رقمية قوية وتحقيق نمو مستدام من خلال منهجية علمية وتنفيذه دقيق.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar - Related Posts */}
                    <aside className="lg:col-span-3 space-y-8">
                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <div className="w-2 h-6 bg-secondary rounded-full" />
                                مقالات ذات صلة
                            </h3>
                            <div className="space-y-6">
                                {relatedPosts.map(rel => (
                                    <Link key={rel.id} href={`/blog/${rel.slug}`}>
                                        <a className="group block">
                                            <Card className="overflow-hidden border-none shadow-none bg-transparent hover:bg-muted/30 transition-all rounded-2xl p-2">
                                                <div className="h-32 rounded-xl overflow-hidden mb-3">
                                                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div className="px-1">
                                                    <h4 className="font-bold text-sm line-clamp-2 leading-tight group-hover:text-primary transition-colors mb-2">
                                                        {rel.title}
                                                    </h4>
                                                    <span className="text-[10px] text-muted-foreground font-bold uppercase">{rel.date}</span>
                                                </div>
                                            </Card>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter placeholder */}
                        <div className="bg-primary p-6 rounded-3xl text-primary-foreground text-center">
                            <h4 className="font-bold mb-3">اشترك في النشرة</h4>
                            <p className="text-xs text-primary-foreground/70 mb-4 leading-relaxed">احصل على أحدث تحليلات السوق مباشرة في بريدك.</p>
                            <input type="email" placeholder="البريد الإلكتروني" className="w-full h-10 rounded-full bg-white/10 border border-white/20 px-4 text-xs mb-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50" />
                            <Button size="sm" className="w-full h-10 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full">اشتراك</Button>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Footer CTA */}
            <section className="container mt-20">
                <div className="bg-secondary p-10 md:p-16 rounded-[40px] text-center text-white relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl transition-transform group-hover:scale-110" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">هل تبحث عن استراتيجية نمو مماثلة؟</h2>
                        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium">
                            دعنا نحلل وضع شركتك الحالي ونضع خارطة طريق للنمو المستدام.
                            <br />
                            <span className="text-primary font-bold">رحلة الألف ميل تبدأ باستشارة استراتيجية.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <a>
                                    <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold px-10 h-14 rounded-full text-lg shadow-xl shadow-black/10">
                                        احجز استشارتك المجانية
                                    </Button>
                                </a>
                            </Link>
                            <Link href="/blog">
                                <a>
                                    <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10 text-white font-bold px-10 h-14 rounded-full text-lg">
                                        العودة للمدونة <ArrowLeft className="mr-2 w-5 h-5" />
                                    </Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
