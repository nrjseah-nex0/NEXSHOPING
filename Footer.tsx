import { Mail, Globe, MessageCircle, Link2, AtSign } from "lucide-react";

const footerLinks = {
  "المنصة": ["المميزات", "الأسعار", "التكاملات", "API Docs", "حالة النظام"],
  "الموارد": ["مركز المساعدة", "المدونة", "دراسات الحالة", "الشراكات", "التحديثات"],
  "الشركة": ["من نحن", "فريق العمل", "الوظائف", "الأخبار", "تواصل معنا"],
};

const socials = [
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "Website" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-primary-foreground font-black text-lg">N</span>
              </div>
              <span className="text-xl font-black tracking-tight">
                <span className="text-foreground">NEX</span>
                <span className="text-primary">RB</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              المنصة المتكاملة لنمو التجارة الإلكترونية — نجمع أدوات التسويق، التحليلات،
              وإدارة العملاء في مكان واحد.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-secondary border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} NEXRB. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={14} className="text-accent" />
            <a
              href="mailto:nrjseah00@gmail.com"
              className="hover:text-accent transition-colors"
            >
              nrjseah00@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-accent transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
