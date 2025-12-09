import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Founder() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Founder</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Meet Mohamed Rabie</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <div className="w-48 h-48 rounded-lg bg-primary/10 mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">👨‍💼</span>
            </div>
            <h2 className="text-3xl font-bold text-center mb-4">Mohamed Rabie</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">Founder & Strategic Advisor</p>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>With over 20 years of experience in founding and restructuring companies, Mohamed brings a wealth of practical knowledge to every project.</p>
            <p>His philosophy centers on ethics first, deep understanding second, and measurable results always. He believes that true success comes from genuine partnerships and a commitment to long-term growth.</p>
            <p>Mohamed has helped numerous businesses transform their digital presence and achieve sustainable growth through strategic marketing solutions.</p>
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:info@rio.com" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
