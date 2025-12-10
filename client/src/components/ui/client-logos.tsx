import { useRef, useEffect } from "react";

export default function ClientLogos() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollerRef.current) return;
        const scrollerContent = scrollerRef.current.querySelector(".scroller__inner");
        if (!scrollerContent) return;

        // Duplicate content for infinite scroll
        const scrollerContentArray = Array.from(scrollerContent.children);
        scrollerContentArray.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            (duplicatedItem as HTMLElement).setAttribute("aria-hidden", "true");
            scrollerContent.appendChild(duplicatedItem);
        });
    }, []);

    const clients = [
        "الشركة الوطنية",
        "مجموعة الأمل",
        "تطوير للتنمية",
        "مصانع التقنية",
        "المشرق العربي",
        "نيو هورايزون",
        "إعمار المستقبل",
        "حلول متكاملة"
    ];

    return (
        <section className="py-10 bg-muted/30 overflow-hidden">
            <div className="container text-center mb-8">
                <p className="text-muted-foreground font-medium">شركاء نجاح وثقوا بنا</p>
            </div>

            <div
                ref={scrollerRef}
                className="scroller relative max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
            >
                <div className="scroller__inner flex w-max flex-nowrap animate-scroll">
                    {clients.map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center w-64 h-24 px-8 text-xl text-muted-foreground font-bold hover:text-primary transition-colors border-l border-border/10 last:border-l-0"
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem));
          }
        }
      `}</style>
        </section>
    );
}
