import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, BrainCircuit, Globe2, Layers3, HeartHandshake } from "lucide-react";

const advantages = [
  {
    icon: Layers3,
    title: "منصة شاملة All-in-One",
    desc: "لا حاجة لاشتراكات متعددة. كل أدواتك في مكان واحد بسعر واحد.",
  },
  {
    icon: BrainCircuit,
    title: "مدعومة بالذكاء الاصطناعي",
    desc: "توصيات ذكية، توقع المبيعات، وتحسين الحملات تلقائياً بدون تدخل بشري.",
  },
  {
    icon: Globe2,
    title: "دعم عربي كامل",
    desc: "واجهة عربية بالكامل، دعم فني متخصص بالعربية، وخوادم في المنطقة.",
  },
  {
    icon: HeartHandshake,
    title: "مناسبة للجميع",
    desc: "سواء كنت تاجراً مبتدئاً أو محترفاً — المنصة تتكيف مع احتياجاتك.",
  },
];

const checks = [
  "لا تحتاج خبرة تقنية للبدء",
  "تجربة مجانية 14 يوم بدون بطاقة ائتمان",
  "دعم فني على مدار الساعة",
  "تحديثات مستمرة بدون رسوم إضافية",
  "أمان وحماية بيانات على أعلى مستوى",
  "تكامل مع أبرز منصات التجارة",
];

export default function WhyNexrb() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-accent">لماذا NEXRB؟</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-balance mb-6 leading-tight">
                نحن لا نقدم متجراً…
                <br />
                <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                  نقدم منظومة نمو
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                في عالم التجارة الرقمية السريع، لا يكفي أن تمتلك متجراً. تحتاج إلى نظام ذكي
                يدير، يحلل، ويسوّق لك باستمرار — ويساعدك على اتخاذ القرارات الصحيحة في الوقت المناسب.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {checks.map((check, i) => (
                  <motion.div
                    key={check}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-foreground/80 font-medium">{check}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-card rounded-2xl border border-border/60 p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
