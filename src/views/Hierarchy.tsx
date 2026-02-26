import { GlassCard } from "../components/GlassCard";
import { RoleBox } from "../components/RoleBox";

export function Hierarchy() {
  return (
    <div className="space-y-8">
      <GlassCard className="w-full text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-orange-500/20 px-4 py-1 text-sm text-orange-300 border border-orange-500/30">
          Стратегический уровень
        </div>
        <div className="flex flex-col items-center gap-8">
          {/* CEO */}
          <RoleBox 
            title="CEO"
            subtitle="Генеральный директор"
            responsibility="Определяет стратегию, миссию и долгосрочные цели компании. Принимает ключевые решения по развитию бизнеса."
            variant="primary"
            glowClass="bg-gradient-to-r from-orange-600 to-purple-600"
          />

          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"></div>

          {/* Op Dir */}
          <RoleBox 
            title="Операционный директор"
            responsibility="Управляет операционными процессами, разрешает конфликты между департаментами и обеспечивает эффективность работы компании."
            variant="secondary"
            glowClass="bg-gradient-to-r from-blue-600 to-cyan-600"
          />
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {/* Commercial */}
        <GlassCard className="border-t-4 border-t-orange-500" title="Коммерция">
          <div className="space-y-3">
            <RoleBox title="NBM" responsibility="Поиск новых клиентов, переговоры, подготовка коммерческих предложений и заключение контрактов." />
            <RoleBox title="PR" responsibility="Управление репутацией компании, взаимодействие со СМИ и внешние коммуникации." />
            <RoleBox title="SMM" responsibility="Ведение социальных сетей, создание контента и взаимодействие с аудиторией." />
          </div>
        </GlassCard>

        {/* Analytics */}
        <GlassCard className="border-t-4 border-t-purple-500" title="Аналитика">
           <div className="space-y-3">
            <div className="flex gap-2">
               <div className="flex-1">
                 <RoleBox 
                   title="РДА" 
                   responsibility="Разработка методологии, контроль качества исследований и научное руководство." 
                   className="h-full"
                 />
               </div>
               <div className="flex-1">
                 <RoleBox 
                   title="PM" 
                   responsibility="Управление сроками, бюджетом проекта и коммуникация с клиентом." 
                   className="h-full"
                 />
               </div>
            </div>
            <div className="h-px w-full bg-white/10"></div>
            <RoleBox title="Аналитики" responsibility="Обработка данных, интерпретация результатов, написание отчетов и подготовка презентаций." />
            <RoleBox title="Редактор" responsibility="Проверка отчетов на логику, стиль, грамотность и соответствие стандартам компании." />
          </div>
        </GlassCard>

        {/* Field */}
        <GlassCard className="border-t-4 border-t-blue-500" title="Полевой блок">
           <div className="space-y-3">
            <div className="flex gap-2">
               <div className="flex-1">
                 <RoleBox 
                   title="Рук. полевого" 
                   responsibility="Организация сбора данных, управление командой интервьюеров и обеспечение выполнения квот." 
                   className="h-full"
                 />
               </div>
               <div className="flex-1">
                 <RoleBox 
                   title="QA" 
                   responsibility="Контроль качества работы интервьюеров, прослушка записей и проверка достоверности данных." 
                   className="h-full"
                 />
               </div>
            </div>
            <div className="h-px w-full bg-white/10"></div>
            <RoleBox title="Менеджеры" responsibility="Координация полевых работ в конкретных регионах, инструктаж интервьюеров." />
            <RoleBox title="Интервьюеры" responsibility="Проведение опросов, соблюдение методологии и первичный сбор данных." />
          </div>
        </GlassCard>

        {/* Support */}
        <GlassCard className="border-t-4 border-t-emerald-500" title="Поддержка">
          <div className="space-y-3">
            <RoleBox title="HR" responsibility="Найм, адаптация, обучение, развитие сотрудников и поддержание корпоративной культуры." />
            <RoleBox title="Юрист" responsibility="Правовая экспертиза договоров, защита интересов компании и консультации по юридическим вопросам." />
            <RoleBox title="Бухгалтер" responsibility="Финансовый учет, налоговая отчетность, расчет зарплат и документооборот." />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
