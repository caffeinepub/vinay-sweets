import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Sweets from "@/components/Sweets";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans">
        {/* Top Utility Bar */}
        <div className="bg-burgundy text-primary-foreground text-center py-2 text-xs sm:text-sm tracking-widest uppercase">
          Authentic Sweets Since 1978 &nbsp;|&nbsp; Made with Pure Ghee &amp;
          Love
        </div>

        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="sweets">
            <Sweets />
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="faqs">
            <FAQs />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
        <Chatbot />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
