import { GlassCard } from "../components/GlassCard";

export function Process() {
  const steps = [
    {
      id: 1,
      title: "Привлечение клиента",
      desc: "New Business Manager ведёт переговоры, обсуждает задачу и требования клиента.",
      role: "NBM",
    },
    {
      id: 2,
      title: "Приемка проекта",
      desc: "PM и РПД совместно принимают проект. Проверка ТЗ, контракта и вводных данных.",
      role: "PM + РПД",
    },
    {
      id: 3,
      title: "Разработка методологии",
      desc: "РПД разбирает ТЗ. Встреча с PM и полевым блоком. Обсуждение сроков и бюджета.",
      role: "РПД",
    },
    {
      id: 4,
      title: "Полевые работы",
      desc: "Сбор данных по методологии. Интервьюеры проводят исследования, Специалист по контролю качества проверяет.",
      role: "Полевой",
    },
    {
      id: 5,
      title: "Анализ данных",
      desc: "Обработка и структурирование. Анализ в соответствии с методологией.",
      role: "Ст. Аналитик",
    },
    {
      id: 6,
      title: "Подготовка отчёта",
      desc: "Написание отчёта. Редактура. Финальное одобрение РПД.",
      role: "Аналитики",
    },
    {
      id: 7,
      title: "Сдача и презентация",
      desc: "РПД презентует финальный отчёт клиенту и защищает выводы. PM организует встречу.",
      role: "РПД",
    },
  ];

  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#FF495C]/50 via-white/10 to-transparent md:left-1/2 md:-ml-px"></div>

      <div className="space-y-12">
        {steps.map((step, idx) => (
          <div key={step.id} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            
            {/* Spacer for desktop layout */}
            <div className="hidden w-5/12 md:block"></div>

            {/* Center Node */}
            <div className="absolute left-8 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#404040] border border-[#FF495C]/50 shadow-[0_0_15px_rgba(255,73,92,0.3)] z-10 md:left-1/2">
              <span className="text-xs font-bold text-[#FF495C]">{step.id}</span>
            </div>

            {/* Content Card */}
            <GlassCard className="ml-16 w-full md:ml-0 md:w-5/12 hover:border-[#FF495C]/30 transition-colors">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-bold text-white">{step.title}</h3>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/60">{step.role}</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
