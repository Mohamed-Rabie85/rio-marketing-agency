import { Search, RotateCcw, Map, Zap, TrendingUp } from 'lucide-react';

export default function RioMethodology() {
    const steps = [
        {
            id: 1,
            title: 'التشخيص',
            englishTitle: 'Diagnosis',
            icon: <Search className="w-8 h-8" />,
            description: 'تحليل شامل لوضعك الحالي، تحديد الفجوات، واكتشاف الفرص الضائعة.',
            color: 'bg-blue-100 text-blue-600 border-blue-200'
        },
        {
            id: 2,
            title: 'إعادة التعريف',
            englishTitle: 'Redefinition',
            icon: <RotateCcw className="w-8 h-8" />,
            description: 'ضبط التموضع (Positioning) وصياغة الرسالة التسويقية لتناسب جمهورك المستهدف.',
            color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
        },
        {
            id: 3,
            title: 'الاستراتيجية',
            englishTitle: 'Strategy',
            icon: <Map className="w-8 h-8" />,
            description: 'رسم خارطة طريق تنفيذية بالأرقام والأهداف (KPIs) واضحة المعالم.',
            color: 'bg-purple-100 text-purple-600 border-purple-200'
        },
        {
            id: 4,
            title: 'التنفيذ',
            englishTitle: 'Execution',
            icon: <Zap className="w-8 h-8" />,
            description: 'تطبيـق الخطة بأعلى معايير الجودة، مع إدارة كاملة للعمليات.',
            color: 'bg-orange-100 text-orange-600 border-orange-200'
        },
        {
            id: 5,
            title: 'التوسع',
            englishTitle: 'Scaling',
            icon: <TrendingUp className="w-8 h-8" />,
            description: 'تحليل النتائج، تحسين الأداء (Optimization)، ومضاعفة العائد.',
            color: 'bg-green-100 text-green-600 border-green-200'
        }
    ];

    return (
        <section className="py-20 bg-background border-b border-border/50 overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">منهجية ريو للنمو</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" />
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        لا نؤمن بالصدفة. نستخدم منهجية علمية مجربة من 5 خطوات لنقل شركتك من الوضع الحالي إلى الهدف المنشود.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -translate-y-1/2 z-0 opacity-50" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative bg-card hover:bg-card/50 border border-border p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center text-center">
                                {/* Step Number Badge */}
                                <div className="absolute -top-4 bg-background border border-border text-muted-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                                    {step.id}
                                </div>

                                {/* Icon Circle */}
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 border-4 border-background shadow-sm ${step.color}`}>
                                    {step.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                                <span className="text-xs font-bold tracking-wider text-muted-foreground/60 uppercase mb-3 block">{step.englishTitle}</span>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
