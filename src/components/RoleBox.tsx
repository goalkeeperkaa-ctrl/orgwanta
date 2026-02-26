import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface RoleBoxProps {
  title: ReactNode;
  subtitle?: string;
  responsibility: string;
  variant?: "primary" | "secondary" | "default";
  glowClass?: string;
  className?: string;
}

export function RoleBox({ 
  title, 
  subtitle, 
  responsibility, 
  variant = "default", 
  glowClass,
  className = "" 
}: RoleBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "h-24 w-64 bg-black/80 border-white/10 rounded-xl";
      case "secondary":
        return "h-20 w-56 bg-black/80 border-white/10 rounded-xl";
      default:
        return "w-full p-3 bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 rounded-lg";
    }
  };

  return (
    <div 
      className={`relative group ${variant === 'default' ? 'w-full' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect for Primary/Secondary */}
      {glowClass && (
        <div className={`absolute -inset-1 rounded-2xl opacity-50 blur transition duration-500 group-hover:opacity-100 ${glowClass}`}></div>
      )}

      {/* Main Box Content */}
      <div className={`relative flex items-center justify-center border backdrop-blur-md transition-all duration-300 ${getVariantStyles()}`}>
        <div className="text-center">
          <div className={`font-bold text-white ${variant === 'default' ? 'text-sm' : 'text-lg'}`}>
            {title}
          </div>
          {subtitle && (
            <div className="text-xs text-white/50">{subtitle}</div>
          )}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 w-56 rounded-xl bg-[#1a1a1a] border border-white/20 p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] z-50 pointer-events-none"
          >
            <div className="text-xs font-semibold text-orange-400 mb-1 uppercase tracking-wider">Ответственность</div>
            <p className="text-sm text-white/90 leading-relaxed text-center">
              {responsibility}
            </p>
            
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -mt-1.5 -ml-1.5 h-3 w-3 rotate-45 border-r border-b border-white/20 bg-[#1a1a1a]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
