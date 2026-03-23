import { Star, Mail, Settings, ShieldCheck, Sparkles } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: Star, label: 'Rate App' },
    { icon: Mail, label: 'Contact' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex flex-col rounded-r-[2.5rem] h-full w-80 bg-white shadow-2xl shadow-primary/10 overflow-hidden">
      {/* Drawer Header */}
      <div className="bg-primary-container p-8 pb-10 flex flex-col gap-6 relative overflow-hidden">
        {/* Abstract patterns */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-20"></div>
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-black/5">
            <Sparkles className="text-primary w-10 h-10 fill-primary/10" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-headline font-black text-white text-2xl tracking-tight leading-none">Status Saver</h1>
            <p className="text-white/80 text-sm mt-1 font-medium">Premium Curator</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto pt-8 space-y-2 px-4">
        {navItems.map((item, index) => (
          <div key={item.label}>
            <a 
              href="#" 
              className="flex items-center gap-4 px-4 py-4 rounded-2xl text-on-surface-variant font-headline font-semibold text-base transition-all hover:bg-surface-container-low active:scale-95 group"
            >
              <item.icon className="w-6 h-6 text-outline group-hover:text-primary transition-colors" />
              <span>{item.label}</span>
            </a>
            {index === 1 && <div className="h-px bg-outline-variant/15 mx-4 my-4" />}
          </div>
        ))}
      </nav>

      {/* Footer Pro Badge */}
      <div className="p-8">
        <div className="bg-surface-container rounded-3xl p-5 flex items-center gap-4 border border-outline-variant/10">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="text-primary w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-outline mb-0.5">Pro Version</p>
            <p className="text-sm font-bold text-on-surface">Valid until 2025</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
