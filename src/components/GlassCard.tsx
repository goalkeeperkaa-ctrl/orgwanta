import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function GlassCard({ children, className = "", title, subtitle }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-2xl ${className}`}
    >
      {/* Subtle gradient glow effect - contained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      </div>
      
      {(title || subtitle) && (
        <div className="mb-6 relative z-10">
          {title && <h3 className="text-xl font-medium text-white/90">{title}</h3>}
          {subtitle && <p className="text-sm text-white/50">{subtitle}</p>}
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
