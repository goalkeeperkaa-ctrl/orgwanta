import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, Users, ClipboardList, GitMerge, AlertTriangle, HelpCircle } from "lucide-react";
import { TabButton } from "./components/TabButton";
import { Hierarchy } from "./views/Hierarchy";
import { Roles } from "./views/Roles";
import { Matrix } from "./views/Matrix";
import { Process } from "./views/Process";
import { Conflicts } from "./views/Conflicts";
import { FAQ } from "./views/FAQ";

// Background image URL - Desert/Warm vibe
const BG_IMAGE = "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2070&auto=format&fit=crop";

export default function App() {
  const [activeTab, setActiveTab] = useState("hierarchy");

  const renderContent = () => {
    switch (activeTab) {
      case "hierarchy": return <Hierarchy />;
      case "roles": return <Roles />;
      case "matrix": return <Matrix />;
      case "process": return <Process />;
      case "conflicts": return <Conflicts />;
      case "faq": return <FAQ />;
      default: return <Hierarchy />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] text-white selection:bg-[#FF495C]/30">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src={BG_IMAGE} 
          alt="Background" 
          className="h-full w-full object-cover opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-[#1a1a1a]/40" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl drop-shadow-lg">
              Wanta <span className="text-[#FF495C]">Group</span>
            </h1>
            <p className="mt-2 text-lg text-white/60 font-light tracking-wide">
              Organizational Structure & Process Guide
            </p>
          </motion.div>
        </header>

        {/* Navigation */}
        <nav className="mb-12 overflow-x-auto pb-4 md:pb-0">
          <div className="flex min-w-max gap-4 rounded-3xl bg-white/5 p-2 backdrop-blur-md border border-white/10">
            <TabButton 
              active={activeTab === "hierarchy"} 
              onClick={() => setActiveTab("hierarchy")} 
              icon={LayoutGrid} 
              label="Иерархия" 
            />
            <TabButton 
              active={activeTab === "roles"} 
              onClick={() => setActiveTab("roles")} 
              icon={Users} 
              label="Роли" 
            />
            <TabButton 
              active={activeTab === "matrix"} 
              onClick={() => setActiveTab("matrix")} 
              icon={ClipboardList} 
              label="Матрица" 
            />
            <TabButton 
              active={activeTab === "process"} 
              onClick={() => setActiveTab("process")} 
              icon={GitMerge} 
              label="Процесс" 
            />
            <TabButton 
              active={activeTab === "conflicts"} 
              onClick={() => setActiveTab("conflicts")} 
              icon={AlertTriangle} 
              label="Конфликты" 
            />
            <TabButton 
              active={activeTab === "faq"} 
              onClick={() => setActiveTab("faq")} 
              icon={HelpCircle} 
              label="FAQ" 
            />
          </div>
        </nav>

        {/* Content Area */}
        <main className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          <p>© 2026 Wanta Group. Internal Documentation.</p>
        </footer>
      </div>
    </div>
  );
}
