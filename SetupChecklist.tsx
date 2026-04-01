 import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, Circle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button.tsx";

const steps = [
  { id: 1, label: "أنشئ حساباً وسجّل دخولك", completed: true },
  { id: 2, label: "أضف اسم متجرك وتفاصيله", completed: false },
  { id: 3, label: "أضف أول منتج للمتجر", completed: false },
  { id: 4, label: "اربط بوابة الدفع", completed: false },
  { id: 5, label: "أنشئ أول حملة تسويقية", completed: false },
];

export default function SetupChecklist() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const completedCount = steps.filter((s) => s.completed).length;
  const progress = (completedCount / steps.length) * 100;

  const handleStep = (step: (typeof steps)[0]) => {
    if (!step.completed) {
      toast.info("قريباً!", {
        description: "هذه الخطوة ستكون متاحة في التحديث القادم",
        duration: 3000,
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card rounded-2xl border border-border/60 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-foreground">إعداد متجرك</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {completedCount} من {steps.length} خطوات مكتملة
          </p>
        </div>
        <span className="text-2xl font-black text-primary">{Math.round(progress)}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full mb-5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${progress}%` } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-l from-primary to-accent rounded-full"
        />
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, i) => (
          <motion.button
            key={step.id}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
            onClick={() => handleStep(step)}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-start group"
          >
            {step.completed ? (
              <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
            ) : (
              <Circle size={18} className="text-muted-foreground/40 flex-shrink-0 group-hover:text-primary/60 transition-colors" />
            )}
            <span
              className={`text-sm flex-1 ${
                step.completed
                  ? "text-muted-foreground line-through"
                  : "text-foreground/80 font-medium"
              }`}
            >
              {step.label}
            </span>
            {!step.completed && (
              <ArrowLeft
                size={14}
                className="text-muted-foreground/40 group-hover:text-primary/60 group-hover:-translate-x-0.5 transition-all"
              />
            )}
          </motion.button>
        ))}
      </div>

      <Button
        size="sm"
        className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 font-semibold"
        onClick={() =>
          toast.info("قريباً!", {
            description: "إعداد المتجر سيكون متاحاً في التحديث القادم",
          })
        }
      >
        أكمل إعداد متجرك
      </Button>
    </motion.div>
  );
}
