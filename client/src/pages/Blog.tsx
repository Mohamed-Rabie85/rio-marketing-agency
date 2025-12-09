import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export default function Blog() {
  const { data: posts } = trpc.blog.getPosts.useQuery({ limit: 12 });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Insights and strategies for digital success</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.map((post: any) => (
              <Card key={post.id} className="border-border overflow-hidden card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <a className="text-primary hover:text-primary/80 flex items-center gap-2">Read More <ArrowRight className="w-4 h-4" /></a>
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
