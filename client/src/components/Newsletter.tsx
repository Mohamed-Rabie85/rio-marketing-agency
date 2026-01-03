import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { Button } from './ui/button';

interface NewsletterProps {
    variant?: 'sidebar' | 'footer';
}

/**
 * Newsletter Subscription Component
 * Ready for integration with MailChimp, ConvertKit, or custom API
 * Currently in Mock mode
 */
export default function Newsletter({ variant = 'sidebar' }: NewsletterProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('من فضلك أدخل بريد إلكتروني صحيح');
            return;
        }

        setStatus('loading');

        // Mock API call - Replace with actual API integration
        setTimeout(() => {
            console.log('📧 [MOCK] Newsletter Subscription:', email);
            setStatus('success');
            setMessage('تم الاشتراك بنجاح! سنرسل لك أحدث المقالات.');
            setEmail('');

            // Reset after 3 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 3000);
        }, 1000);

        /* 
        // Example: Actual API integration
        try {
          const response = await fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });
    
          if (response.ok) {
            setStatus('success');
            setMessage('تم الاشتراك بنجاح!');
            setEmail('');
          } else {
            throw new Error('فشل الاشتراك');
          }
        } catch (error) {
          setStatus('error');
          setMessage('حدث خطأ، حاول مرة أخرى');
        }
        */
    };

    if (variant === 'footer') {
        return (
            <div className="space-y-4">
                <h4 className="font-bold text-lg flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    اشترك في النشرة البريدية
                </h4>
                <p className="text-sm text-muted-foreground">
                    احصل على أحدث المقالات والنصائح التسويقية مباشرة في بريدك
                </p>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="email"
                        placeholder="بريدك الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={status === 'loading'}
                    />
                    <Button
                        type="submit"
                        size="sm"
                        disabled={status === 'loading'}
                        className="h-10"
                    >
                        {status === 'loading' ? 'جاري...' : 'اشترك'}
                    </Button>
                </form>
                {message && (
                    <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )}
            </div>
        );
    }

    // Sidebar variant (for blog)
    return (
        <div className="bg-primary p-6 rounded-3xl text-primary-foreground text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h4 className="font-bold mb-3">اشترك في النشرة</h4>
            <p className="text-xs text-primary-foreground/70 mb-4 leading-relaxed">
                احصل على أحدث تحليلات السوق مباشرة في بريدك.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 rounded-full bg-white/10 border border-white/20 px-4 text-xs text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
                    disabled={status === 'loading'}
                />
                <Button
                    type="submit"
                    size="sm"
                    disabled={status === 'loading'}
                    className="w-full h-10 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full"
                >
                    {status === 'loading' ? 'جاري...' : 'اشتراك'}
                </Button>
            </form>
            {message && (
                <p className={`text-xs mt-3 ${status === 'success' ? 'text-green-200' : 'text-red-200'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}
