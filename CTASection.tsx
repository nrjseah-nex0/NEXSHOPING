import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/15 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.58 0.28 268) 1px, transparent 1px), linear-gradient(90deg, oklch(0.58 0.28 268) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 mb-8 shadow-xl shadow-primary/20">
            <Rocket size={28} className="text-primary" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-balance mb-6">
            جاهز لتنمية{" "}
            <span className="bg-gradient-to-l from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              تجارتك؟
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            انضم لأكثر من 2,000 تاجر يستخدمون NEXRB لزيادة مبيعاتهم وأتمتة تسويقهم.
            ابدأ تجربتك المجانية اليوم — لا بطاقة ائتمان مطلوبة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg shadow-xl shadow-primary/30 gap-2 group"
            >
              ابدأ مجاناً الآن
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-border/60 hover:border-primary/40 font-semibold px-10 py-6 text-lg"
            >
              تحدث مع فريق المبيعات
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            أو تواصل معنا مباشرة:{" "}
            <a
              href="mailto:nrjseah00@gmail.com"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              nrjseah00@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
