import { LucideIcon } from "lucide-react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}

export function TabButton({ active, onClick, icon: Icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center gap-2 rounded-2xl p-4 transition-all duration-300 ${
        active 
          ? "bg-white/10 text-[#FF495C] shadow-[0_0_20px_rgba(255,73,92,0.1)]" 
          : "text-white/40 hover:bg-white/5 hover:text-white/80"
      }`}
    >
      <div className={`rounded-full p-2 transition-all ${active ? "bg-[#FF495C]/20" : "bg-transparent group-hover:bg-white/5"}`}>
        <Icon size={24} strokeWidth={active ? 2.5 : 2} />
      </div>
      <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      
      {active && (
        <span className="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[#FF495C] blur-[2px]" />
      )}
    </button>
  );
}
