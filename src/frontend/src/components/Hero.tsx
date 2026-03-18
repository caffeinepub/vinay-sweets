import { motion } from "motion/react";

export default function Hero() {
  return (
    <div
      className="relative w-full min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/generated/hero-sweets.dim_1200x700.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-gold text-sm sm:text-base tracking-[0.25em] uppercase mb-4 font-medium">
            Est. 1978 • Chittorgarh
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            TASTE THE
            <br />
            <span className="text-gold italic">TRADITION</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mb-10 leading-relaxed max-w-xl">
            Authentic Indian Sweets crafted with love and pure ingredients in
            Chittorgarh. Every bite carries the warmth of generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#sweets"
              data-ocid="hero.primary_button"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-foreground font-semibold text-sm tracking-wide rounded hover:bg-accent/90 transition-all shadow-lg"
            >
              Explore Our Sweets
            </a>
            <a
              href="#contact"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-sm tracking-wide rounded hover:bg-white/10 transition-all"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
