import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export default function CaseStudies() {
  const { data: cases } = trpc.caseStudies.getStudies.useQuery({ limit: 12 });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real results from real clients</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases?.map((caseStudy: any) => (
              <Card key={caseStudy.id} className="border-border overflow-hidden card-hover">
                <CardHeader>
                  <CardTitle>{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                    <TrendingUp className="w-5 h-5" />
                    {caseStudy.result}
                  </div>
                  <Link href={`/case-studies/${caseStudy.id}`}>
                    <a className="text-primary hover:text-primary/80 flex items-center gap-2">View Details <ArrowRight className="w-4 h-4" /></a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
