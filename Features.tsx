import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Megaphone,
  Mail,
  MessageSquare,
  Share2,
  Tag,
  Award,
  Users,
  Search,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Star,
  HeadphonesIcon,
  Plug,
} from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "إدارة الحملات التسويقية",
    desc: "إنشاء حملات متعددة القنوات مع تتبع الأداء (Clicks / Conversions / ROI) وتقسيم الجمهور بدقة",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Mail,
    title: "التسويق عبر البريد الإلكتروني",
    desc: "قوالب احترافية، حملات أوتوماتيكية (Welcome / Abandoned Cart)، وتحليلات متقدمة للأداء",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: MessageSquare,
    title: "SMS & WhatsApp Marketing",
    desc: "رسائل فورية موجهة حسب السلوك والموقع مع تكامل مباشر مع واتساب بزنس",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Share2,
    title: "إدارة السوشيال ميديا",
    desc: "جدولة ونشر المحتوى تلقائياً على حسابات متعددة مع تحليل أداء المنشورات",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: Tag,
    title: "نظام الكوبونات والعروض",
    desc: "أكواد خصم مرنة، عروض اشترِ واحصل على واحد، وخصومات حسب السلة أو العميل",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Award,
    title: "برامج الولاء",
    desc: "نظام نقاط ومكافآت بمستويات VIP / Gold / Silver لتحفيز العملاء على الشراء المتكرر",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: Users,
    title: "التسويق بالعمولة",
    desc: "نظام مسوقين بالعمولة مع تتبع الروابط وإدارة المدفوعات لتوسيع قاعدة عملائك",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Search,
    title: "تحسين محركات البحث SEO",
    desc: "تحسين صفحات المنتجات تلقائياً، اقتراح كلمات مفتاحية، وتقارير أداء البحث",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: TrendingUp,
    title: "الإعلانات المدفوعة",
    desc: "تكامل مع Google Ads وMeta Ads مع إدارة الحملات وتتبع التحويلات من داخل المنصة",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: BarChart3,
    title: "التحليلات الذكية AI",
    desc: "لوحة تحكم شاملة مع توقع المبيعات وتوصيات ذكية لزيادة الأرباح",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: Target,
    title: "استهداف وإعادة استهداف العملاء",
    desc: "تقسيم العملاء حسب السلوك والموقع وتاريخ الشراء مع حملات مخصصة لكل شريحة",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Zap,
    title: "أتمتة التسويق",
    desc: "سيناريوهات جاهزة (سلة مهجورة، عميل جديد، عميل غير نشط) تعمل تلقائياً",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: Star,
    title: "إدارة التقييمات",
    desc: "جمع وعرض تقييمات العملاء للرد المباشر وتحسين سمعة متجرك",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: HeadphonesIcon,
    title: "تجربة العميل",
    desc: "دردشة مباشرة، Chatbot ذكي، ومركز دعم متكامل لتخصيص تجربة المستخدم",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: Plug,
    title: "التكاملات والـ API",
    desc: "تكامل مع بوابات الدفع، شركات الشحن، وأدوات التسويق الخارجية عبر API مفتوح",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    glow: "shadow-primary/20",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      {/* Section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-primary/90">المميزات التسويقية المتكاملة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4">
            15 أداة تسويقية{" "}
            <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              في منصة واحدة
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            كل ما تحتاجه لتنمية متجرك من مكان واحد — بدون تعقيد، بدون تكاليف إضافية
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative bg-card rounded-2xl border border-border/60 p-6 overflow-hidden cursor-default hover:border-primary/40 transition-all duration-300 hover:shadow-lg ${feature.glow}`}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} border border-border/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className={feature.iconColor} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base leading-snug">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
Let m
