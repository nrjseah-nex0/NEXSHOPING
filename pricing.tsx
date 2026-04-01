import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const plans = [
  {
    name: "مبتدئ",
    price: "99",
    period: "ريال / شهر",
    desc: "مثالي للتجار الجدد",
    features: [
      "حتى 500 منتج",
      "إدارة الحملات الأساسية",
      "التسويق بالبريد الإلكتروني",
      "تقارير الأداء الأساسية",
      "دعم فني عبر البريد",
    ],
    cta: "ابدأ مجاناً",
    highlight: false,
  },
  {
    name: "احترافي",
    price: "299",
    period: "ريال / شهر",
    desc: "الأكثر طلباً للتجار النشطين",
    features: [
      "منتجات غير محدودة",
      "جميع أدوات التسويق",
      "برامج الولاء والعمولة",
      "تحليلات الذكاء الاصطناعي",
      "تكاملات متقدمة",
      "دعم فني على مدار الساعة",
    ],
    cta: "ابدأ مجاناً",
    highlight: true,
  },
  {
    name: "مؤسسي",
    price: "799",
    period: "ريال / شهر",
    desc: "للشركات والمتاجر الكبرى",
    features: [
      "كل مميزات الاحترافي",
      "مدير حساب مخصص",
      "API مفتوح كامل",
      "تقارير مخصصة",
      "تدريب وإعداد مجاني",
      "SLA مضمون 99.9%",
    ],
    cta: "تواصل معنا",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-primary/90">خطط الأسعار</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            استثمار يعود عليك{" "}
            <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              بأضعاف مضاعفة
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">تجربة مجانية 14 يوماً — بدون بطاقة ائتمان</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary/60 bg-gradient-to-b from-primary/10 to-card shadow-xl shadow-primary/20 scale-105"
                  : "border-border/60 bg-card hover:border-primary/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  الأكثر شعبية
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check size={15} className={plan.highlight ? "text-accent" : "text-primary"} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold gap-2 group ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {plan.cta}
                <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
