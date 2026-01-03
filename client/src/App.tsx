import { Analytics } from "@vercel/analytics/react";
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from './pages/BlogPost';
import CaseStudies from '@/pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Founder from '@/pages/Founder';
import FAQ from '@/pages/FAQ';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LeadMagnet from '@/components/LeadMagnet';
import ScrollToTop from "@/components/ScrollToTop";
import { Route, Switch } from 'wouter';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';

/**
 * App Router
 * Main routing configuration for RIO Marketing Solutions website
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/:id" component={CaseStudyDetail} />
      <Route path="/founder" component={Founder} />
      <Route path="/faq" component={FAQ} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Main App Component
 * Wraps all pages with theme, layout, and providers
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={true}>
        <TooltipProvider>
          {/* مكون التحليلات يوضع هنا ليعمل في كامل الموقع */}
          <Analytics />
          <Toaster />
          <LeadMagnet />

          <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
