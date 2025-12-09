import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Contact() {
  const [tab, setTab] = useState('contact');
  const [form1, setForm1] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [form2, setForm2] = useState({ name: '', email: '', phone: '', company: '', serviceType: '', preferredDate: '', preferredTime: '', message: '' });

  const contactMut = trpc.contact.submitForm.useMutation();
  const bookingMut = trpc.consultation.bookSession.useMutation();

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactMut.mutateAsync({ name: form1.name, email: form1.email, phone: form1.phone || undefined, company: form1.company || undefined, subject: form1.subject || undefined, message: form1.message });
      toast.success('Message sent');
      setForm1({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Error sending');
    }
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await bookingMut.mutateAsync({ name: form2.name, email: form2.email, phone: form2.phone, company: form2.company || undefined, serviceType: form2.serviceType, preferredDate: form2.preferredDate ? new Date(form2.preferredDate) : undefined, preferredTime: form2.preferredTime || undefined, message: form2.message || undefined });
      toast.success('Booking received');
      setForm2({ name: '', email: '', phone: '', company: '', serviceType: '', preferredDate: '', preferredTime: '', message: '' });
    } catch (error) {
      toast.error('Error booking');
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get in touch with us today</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:info@rio.com" className="text-primary">info@rio.com</a>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+201000000000" className="text-primary">+20 100 000 0000</a>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">Sat - Thu: 9am - 6pm</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container">
          <div className="flex gap-4 mb-8 border-b border-border max-w-2xl mx-auto">
            <button onClick={() => setTab('contact')} className={`px-4 py-2 font-semibold border-b-2 ${tab === 'contact' ? 'border-primary text-primary' : 'border-transparent'}`}>Contact</button>
            <button onClick={() => setTab('booking')} className={`px-4 py-2 font-semibold border-b-2 ${tab === 'booking' ? 'border-primary text-primary' : 'border-transparent'}`}>Book</button>
          </div>

          <div className="max-w-2xl mx-auto">
            {tab === 'contact' && (
              <form onSubmit={handleContact} className="space-y-4">
                <Input placeholder="Name" value={form1.name} onChange={(e) => setForm1({...form1, name: e.target.value})} required />
                <Input type="email" placeholder="Email" value={form1.email} onChange={(e) => setForm1({...form1, email: e.target.value})} required />
                <Input placeholder="Subject" value={form1.subject} onChange={(e) => setForm1({...form1, subject: e.target.value})} />
                <Textarea placeholder="Message" rows={6} value={form1.message} onChange={(e) => setForm1({...form1, message: e.target.value})} required />
                <Button type="submit" size="lg" className="w-full" disabled={contactMut.isPending}>{contactMut.isPending ? 'Sending' : 'Send'}</Button>
              </form>
            )}

            {tab === 'booking' && (
              <form onSubmit={handleBooking} className="space-y-4">
                <Input placeholder="Name" value={form2.name} onChange={(e) => setForm2({...form2, name: e.target.value})} required />
                <Input type="email" placeholder="Email" value={form2.email} onChange={(e) => setForm2({...form2, email: e.target.value})} required />
                <Input type="tel" placeholder="Phone" value={form2.phone} onChange={(e) => setForm2({...form2, phone: e.target.value})} required />
                <select value={form2.serviceType} onChange={(e) => setForm2({...form2, serviceType: e.target.value})} className="w-full px-4 py-2 rounded-md border" required>
                  <option value="">Select Service</option>
                  <option value="diagnosis">Diagnosis</option>
                  <option value="presence">Presence</option>
                  <option value="growth">Growth</option>
                </select>
                <Button type="submit" size="lg" className="w-full" disabled={bookingMut.isPending}>{bookingMut.isPending ? 'Booking' : 'Book'}</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
