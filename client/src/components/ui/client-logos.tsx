import { motion } from "framer-motion";

const clients = [
    { name: "الشركة الوطنية", logo: "N" },
    { name: "مجموعة الأمل", logo: "A" },
    { name: "تطوير للتنمية", logo: "T" },
    { name: "فيوتشر تك", logo: "F" },
    { name: "سمارت حلول", logo: "S" },
    { name: "بيوت السعودية", logo: "K" },
    { name: "رؤية المستقبل", logo: "R" },
    { name: "إعمار", logo: "E" },
];

/**
 * مكون شعارات العملاء (Infinite Marquee)
 * يتم عرضه داخل Container لضمان عدم خروجه عن حدود الصفحة.
 */
export default function ClientLogos() {
    return (
        <section className="py-10 bg-white" dir="ltr">
            <div className="container mb-8 text-center">
                <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase">
                    شركاء نجاح وثقوا بنا
                </p>
            </div>

            <div className="container overflow-hidden relative">
                <div className="relative flex">
                    {/* نستخدم Framer Motion لتحريك الحاوية بالكامل */}
                    <motion.div
                        className="flex min-w-full"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {/* نكرر القائمة مرتين لضمان الحركة المستمرة دون انقطاع */}
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center w-64 h-24 px-8 border-l border-slate-100 last:border-l-0"
                            >
                                <span className="text-xl font-bold text-muted-foreground/80 hover:text-primary transition-colors cursor-default whitespace-nowrap">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* تدرج لوني خفيف على الجوانب لعمل Fade Effect */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}