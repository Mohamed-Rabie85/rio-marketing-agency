import { useState, useEffect } from 'react';
import { X, CheckCircle, FileDown, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function LeadMagnet() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    // Show popup after 10 seconds, but only if not shown before
    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('rio_promo_popup_seen');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 10000); // 10 ثواني
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('rio_promo_popup_seen', 'true');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/rio4ims@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    _subject: "✨ تحميل الدليل المجاني (Lead Magnet)",
                    _template: "table",
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setHasSubmitted(true);
                localStorage.setItem('rio_promo_popup_seen', 'true');
                toast.success("تم التسجيل بنجاح! جاري تحميل الملف...");

                // محاكاة تحميل الملف (يمكن استبداله بملف حقيقي لاحقاً)
                setTimeout(() => {
                    const link = document.createElement('a');
                    // هنا نضع رابط الملف الحقيقي، حالياً رابط وهمي للتجربة
                    link.href = "/rio_growth_guide_2026.pdf";
                    link.download = "Rio_Growth_Guide_2026.pdf";
                    // document.body.appendChild(link);
                    // link.click();
                    // document.body.removeChild(link);
                    toast.info("سيبدأ التحميل فور توفر الملف (هذا تجريبي)");
                }, 1500);

            } else {
                toast.error("حدث خطأ بسيط، حاول مرة أخرى.");
            }
        } catch (error) {
            toast.error("خطأ في الاتصال.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <Card className="w-full max-w-lg bg-background border-none shadow-2xl relative overflow-hidden">
                {/* زر الإغلاق */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10 bg-background/50 p-1 rounded-full"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* الجانب الأيمن (صورة أو لون مميز) - مخفي في الموبايل لتوفير المساحة */}
                    <div className="hidden md:flex w-1/3 bg-primary items-center justify-center p-6 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80" />
                        <div className="relative z-10">
                            <FileDown className="w-16 h-16 mx-auto mb-4 opacity-90" />
                            <h3 className="font-bold text-lg mb-2">نسخة خاصة</h3>
                            <p className="text-xs opacity-80">للمدراء التنفيذيين وأصحاب الشركات فقط</p>
                        </div>
                    </div>

                    {/* الجانب الأيسر (المحتوى والفورم) */}
                    <CardContent className="flex-1 p-8">
                        {!hasSubmitted ? (
                            <>
                                <div className="mb-6 text-center md:text-right">
                                    <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-3">
                                        مجان لفترة محدودة
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2 text-foreground">
                                        دليل النمو الاستراتيجي 2026
                                    </h2>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        اكتشف الـ 5 أخطاء التي تقتل نمو الشركات في مصر والسعودية، وكيف تتجنبها بخطوات عملية.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Input
                                            name="name"
                                            placeholder="اسمك الكريم"
                                            required
                                            className="border-primary/20 focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            name="email" // Changed from phone to email/phone flexibly, but usually email for PDF
                                            type="text"
                                            placeholder="رقم الواتساب أو الإيميل"
                                            required
                                            className="border-primary/20 focus:border-primary"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 shadow-lg shadow-secondary/20"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'جاري التحضير...' : 'تحميل الدليل مجاناً'}
                                    </Button>

                                    <p className="text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1">
                                        <Lock className="w-3 h-3" />
                                        بياناتك آمنة 100% ولا نشاركها مع أحد.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-10 animate-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">أحسنت الاختيار!</h3>
                                <p className="text-muted-foreground mb-6">
                                    جاري تحميل الدليل...<br />
                                    تم إرسال نسخة أيضاً إلى بريدك.
                                </p>
                                <Button onClick={handleClose} variant="outline" className="w-full">
                                    تصفح باقي الموقع
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}
