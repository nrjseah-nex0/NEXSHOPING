import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { toast } from "sonner";
import {
  Megaphone,
  Mail,
  Tag,
  Award,
  Users,
  BarChart3,
  PlusCircle,
  MessageSquare,
} from "lucide-react";

const actions = [
  { icon: PlusCircle, label: "إضافة منتج", color: "from-primary/20 to-primary/5", iconColor: "text-primary" },
  { icon: Megaphone, label: "حملة جديدة", color: "from-accent/20 to-accent/5", iconColor: "text-accent" },
  { icon: Mail, label: "حملة بريد", color: "from-primary/15 to-transparent", iconColor: "text-primary" },
  { icon: Tag, label: "كود خصم", color: "from-accent/15 to-transparent", iconColor: "text-accent" },
  { icon: Award, label: "نقاط ولاء", color: "from-primary/15 to-transparent", iconColor: "text-primary" },
  { icon: Users, label: "مسوّق بالعمولة", color: "from-accent/15 to-transparent", iconColor: "text-accent" },
  { icon: MessageSquare, label: "رسالة SMS", color: "from-primary/15 to-transparent", iconColor: "text-primary" },
  { icon: BarChart3, label: "تقرير مبيعات", color: "from-accent/15 to-transparent", iconColor: "text-accent" },
];

export default function QuickActions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card rounded-2xl border border-border/60 p-6"
    >
      <h3 className="font-bold text-foreground mb-4">إجراءات سريعة</h3>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                toast.info("قريباً!", {
                  description: `ميزة "${action.label}" ستكون متاحة قريباً`,
                  duration: 2500,
                })
              }
              className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br ${action.color} border border-border/40 hover:border-primary/30 transition-all duration-200 cursor-pointer`}
            >
              <div className="w-9 h-9 rounded-lg bg-background/30 flex items-center justify-center">
                <Icon size={16} className={action.iconColor} />
              </div>
              <span className="text-[11px] font-semibold text-foreground/80 text-center leading-tight">
                {action.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
