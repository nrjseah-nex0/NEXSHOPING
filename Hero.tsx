import { motion } from "motion/react";
import { ArrowLeft, Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Hero image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url(https://hercules-cdn.com/file_ydbfmMyAkepyTh5euPj02YVh)" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.58 0.28 268) 1px, transparent 1px), linear-gradient(90deg, oklch(0.58 0.28 268) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-8"
        >
          <Zap size={14} className="text-accent fill-accent" />
          <span className="text-sm font-semibold text-primary/90">منصة الجيل القادم للتجارة الذكية</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black leading-tight text-balance mb-6"
        >
          <span className="text-foreground">الحل المتكامل</span>
          <br />
          <span className="bg-gradient-to-l from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            لنمو تجارتك
          </span>
          <br />
          <span className="text-foreground">بذكاء</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          NEXRB ليست مجرد متجر إلكتروني… بل منظومة نمو متكاملة تدمج إدارة الحملات التسويقية،
          تحليلات الذكاء الاصطناعي، برامج الولاء، والتسويق الآلي — كل ذلك من لوحة تحكم واحدة.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 gap-2 group"
          >
            ابدأ تجربتك المجانية
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="border border-border/60 hover:border-primary/50 text-foreground hover:bg-primary/5 font-semibold px-8 py-6 text-lg gap-2 backdrop-blur-sm"
          >
            <Play size={16} className="text-accent fill-accent" />
            شاهد كيف يعمل
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 space-x-reverse">
              {["#6366f1", "#f59e0b", "#10b981", "#ec4899"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span>+2,000 تاجر يثقون بنا</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-border" />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-accent text-base">★</span>
            ))}
            <span className="mr-1">4.9/5 تقييم</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 bg-primary rounded-full" />
        </motion.div>
        <span className="text-xs text-muted-foreground">اكتشف أكثر</span>
      </motion.div>
    </section>
  );
}
