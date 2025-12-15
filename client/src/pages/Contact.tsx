import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

/**
 * صفحة التواصل (Contact Page)
 * تتيح للعملاء التواصل العام أو حجز استشارة متخصصة
 */
export default function Contact() {
  const [tab, setTab] = useState('contact'); // 'contact' or 'booking'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // حالة النموذج
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // تحديد عنوان الرسالة بناءً على التبويب
      const subject = tab === 'booking'
        ? `طلب استشارة جديدة من: ${formData.name}`
        : `رسالة تواصل جديدة من: ${formData.name}`;

      const response = await fetch("https://formsubmit.co/ajax/rio4ims@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: subject,
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        toast.success(tab === 'booking' ? 'تم استلام طلب الاستشارة بنجاح! سنتواصل معك قريباً.' : 'تم إرسال رسالتك بنجاح!');
        // تصفير النموذج
        setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', message: '' });
      } else {
        toast.error('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.');
      }
    } catch (error) {
      toast.error('حدث خطأ في الاتصال. يرجى التحقق من الإنترنت.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* الترويسة */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">تواصل معنا</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            سواء كنت جاهزاً للبدء أو لديك استفسار بسيط، فريقنا جاهز للمساعدة.
          </p>
        </div>
      </section>

      {/* معلومات الاتصال */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* البريد الإلكتروني */}
            <Card className="border-border/50 text-center hover:shadow-md transition-shadow group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
                <a href="mailto:rio4ims@gmail.com" className="text-muted-foreground hover:text-primary dir-ltr">rio4ims@gmail.com</a>
              </CardContent>
            </Card>

            {/* الهاتف والواتساب */}
            <Card className="border-border/50 text-center hover:shadow-md transition-shadow group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">اتصل بنا</h3>
                <div className="flex flex-col gap-1 items-center">
                  <a href="tel:+201503000790" className="text-muted-foreground hover:text-secondary dir-ltr font-semibold">
                    +20 150 300 0790
                  </a>
                  <a href="https://wa.me/201503000790" className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1 mt-1">
                    <MessageCircle className="w-3 h-3" />
                    تواصل عبر واتساب
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ساعات العمل */}
            <Card className="border-border/50 text-center hover:shadow-md transition-shadow group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">ساعات العمل</h3>
                <p className="text-muted-foreground">الاحد - الخميس: 11 ص - 7 م</p>
                <p className="text-xs text-muted-foreground mt-1">(متاحين للطوارئ 24/7 للعملاء الحاليين)</p>
              </CardContent>
            </Card>
          </div>

          {/* نموذج التواصل */}
          <div className="max-w-3xl mx-auto">
            {/* تبديل التبويبات */}
            <div className="flex justify-center mb-10">
              <div className="bg-muted p-1 rounded-xl inline-flex">
                <button
                  onClick={() => setTab('contact')}
                  className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${tab === 'contact' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-primary'}`}
                >
                  استفسار عام
                </button>
                <button
                  onClick={() => setTab('booking')}
                  className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${tab === 'booking' ? 'bg-secondary text-white shadow-sm' : 'text-muted-foreground hover:text-primary'}`}
                >
                  حجز استشارة مجانية
                </button>
              </div>
            </div>

            <Card className="border-none shadow-lg bg-card/50">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden Fields for FormSubmit Configuration if strictly using HTML form action, but here handled via JSON */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">الاسم بالكامل</label>
                      <Input
                        name="name"
                        placeholder="محمد أحمد"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 border-border/60 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">رقم الهاتف</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="01xxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 border-border/60 focus:border-primary dir-rtl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">البريد الإلكتروني</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 border-border/60 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">اسم الشركة (اختياري)</label>
                      <Input
                        name="company"
                        placeholder="اسم شركتك"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12 border-border/60 focus:border-primary"
                      />
                    </div>
                  </div>

                  {tab === 'booking' && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
                      <label className="text-sm font-medium">نوع الخدمة المطلوبة</label>
                      <select
                        name="serviceType"
                        className="w-full h-12 px-3 rounded-md border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="">اختر الخدمة...</option>
                        <option value="establishment">تأسيس وهيكلة شركات</option>
                        <option value="marketing">تسويق رقمي متكامل</option>
                        <option value="executive">شريك تنفيذي (Executive Partner)</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {tab === 'booking' ? 'تفاصيل مشروعك / التحدي الذي تواجهه' : 'رسالتك'}
                    </label>
                    <Textarea
                      name="message"
                      placeholder={tab === 'booking' ? "أخبرنا قليلاً عن شركتك وأهدافك الحالية..." : "كيف يمكننا مساعدتك؟"}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="resize-none border-border/60 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className={`w-full h-12 text-lg font-bold shadow-lg ${tab === 'booking' ? 'bg-secondary hover:bg-secondary/90 shadow-secondary/20' : 'bg-primary hover:bg-primary/90 shadow-primary/20'}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'جاري الإرسال...' : (tab === 'booking' ? 'تأكيد طلب الاستشارة' : 'إرسال الرسالة')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
