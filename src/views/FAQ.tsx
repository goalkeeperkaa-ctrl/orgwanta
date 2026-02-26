import { useState } from "react";
import type { FC } from "react";
import { GlassCard } from "../components/GlassCard";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const items = [
    { q: "К кому обращаться новичку?", a: "Обратись к HR. Они помогут с адаптацией и подберут ментора." },
    { q: "Кто главный — PM или РДА?", a: "Они равны. PM — сроки/бюджет, РДА — качество/методология. Конфликты решает Опер. директор." },
    { q: "Вижу проблему не в моем отделе. Молчать?", a: "Нет! Сообщи своему руководителю или PM. Лучше поднять проблему рано." },
    { q: "Как изменить методологию?", a: "Только через согласование с РДА. Это закон качества." },
    { q: "Что такое матрица RACI?", a: "R = Responsible (Исполнитель), A = Accountable (Ответственный), C = Consulted (Согласует), I = Informed (Информирован)." },
  ];

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <FAQItem key={idx} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassCard className="cursor-pointer transition-colors hover:bg-white/10 p-0">
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between p-6">
        <span className="font-medium text-white/90">{question}</span>
        <ChevronDown 
          className={`text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-sm text-white/60 leading-relaxed border-t border-white/5 mt-2 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};
