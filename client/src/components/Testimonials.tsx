import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialsData from '@/data/testimonials.json';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((currentIndex + 1) % testimonialsData.length);
    const prev = () => setCurrentIndex((currentIndex - 1 + testimonialsData.length) % testimonialsData.length);

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold rounded-full text-sm mb-4">
                        ماذا يقولون عنا؟
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">شركاء النجاح يتحدثون</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        فخورون بأن نكون جزءاً من رحلة نمو شركات رائدة وطموحة.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Quote icon */}
                        <div className="absolute -top-10 -right-10 opacity-10">
                            <Quote className="w-24 h-24 text-secondary rotate-180" />
                        </div>

                        <div className="grid grid-cols-1">
                            {testimonialsData.map((t, idx) => (
                                <div
                                    key={t.id}
                                    style={{ gridArea: '1 / 1' }}
                                    className={`w-full transition-all duration-700 flex flex-col items-center text-center ${idx === currentIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 -z-10 pointer-events-none'
                                        }`}
                                >
                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-secondary/10 shadow-soft">
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-3xl font-medium text-slate-700 mb-10 leading-relaxed italic">
                                        "{t.content}"
                                    </p>

                                    <div>
                                        <h4 className="text-2xl font-bold text-primary mb-1">{t.name}</h4>
                                        <span className="text-secondary font-bold tracking-wide">{t.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex justify-center gap-4 mt-12 relative z-50">
                            <button
                                onClick={prev}
                                className="w-14 h-14 rounded-full border-2 border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                aria-label="Previous testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            <button
                                onClick={next}
                                className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300"
                                aria-label="Next testimonial"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Pagination dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonialsData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-secondary w-8' : 'bg-muted'
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
