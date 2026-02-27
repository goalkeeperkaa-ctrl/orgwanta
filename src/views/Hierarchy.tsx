import { GlassCard } from "../components/GlassCard";
import { RoleBox } from "../components/RoleBox";

export function Hierarchy() {
  return (
    <div className="space-y-8">
      <GlassCard className="w-full text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#FF495C]/20 px-4 py-1 text-sm text-[#FF495C] border border-[#FF495C]/30">
          Стратегический уровень
        </div>
        <div className="flex flex-col items-center gap-8">
          {/* CEO */}
          <RoleBox 
            title="CEO"
            subtitle="Генеральный директор"
            responsibility="Определяет стратегию, миссию и долгосрочные цели компании. Принимает ключевые решения по развитию бизнеса."
            variant="primary"
            glowClass="bg-gradient-to-r from-[#FF495C] to-purple-600"
          />

          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"></div>

          {/* Op Dir */}
          <RoleBox 
            title="Операционный директор"
            responsibility="Управляет операционными процессами, разрешает конфликты между департаментами и обеспечивает эффективность работы компании."
            variant="secondary"
            glowClass="bg-gradient-to-r from-[#404040] to-gray-500"
          />
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Commercial */}
        <GlassCard className="border-t-4 border-t-[#FF495C] lg:col-span-1" title="Коммерция">
          <div className="space-y-6">
            <RoleBox title="New Business Manager" responsibility="Поиск новых клиентов, переговоры, подготовка коммерческих предложений." />
            
            <div className="pl-4 border-l border-white/10 space-y-3">
               <RoleBox title="PR-специалист" responsibility="Управление репутацией компании, взаимодействие со СМИ." />
               <div className="pl-4 border-l border-white/10">
                 <RoleBox title="SMM-специалист" responsibility="Ведение социальных сетей, создание контента." />
               </div>
            </div>

            <RoleBox title="Рук. спец. проектов" responsibility="Управление нестандартными и стратегически важными проектами." />
          </div>
        </GlassCard>

        {/* Analytics & Field - Spans 2 columns */}
        <GlassCard className="border-t-4 border-t-purple-500 lg:col-span-2" title="Департамент аналитики">
           <div className="flex flex-col gap-8">
             <div className="flex justify-center">
               <div className="w-full max-w-md">
                 <RoleBox 
                   title="РДА" 
                   subtitle="Руководитель Департамента"
                   responsibility="Разработка методологии, контроль качества исследований и научное руководство." 
                 />
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* Connector Lines (Visual only, hidden on mobile) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 h-8 w-px bg-white/10 hidden md:block"></div>
                {/* Horizontal line: Starts at 31.25% (center of shifted PM) and ends at 75% (center of Senior Analyst) */}
                <div className="absolute top-0 left-[31.25%] right-1/4 h-px bg-white/10 hidden md:block"></div>
                {/* Vertical line to PM: At 31.25% */}
                <div className="absolute top-0 left-[31.25%] h-4 w-px bg-white/10 hidden md:block"></div>
                {/* Vertical line to Senior Analyst: At 75% (right-1/4) */}
                <div className="absolute top-0 right-1/4 h-32 w-px bg-white/10 hidden md:block"></div>

                {/* Left Branch: PM -> Field */}
                {/* Added pl-[25%] to shift the content right, aligning center to 31.25% of total width */}
                <div className="space-y-4 pt-4 md:pt-0 md:pl-[25%]">
                   <RoleBox 
                     title="PM" 
                     subtitle="Менеджер проекта"
                     responsibility="Управление сроками, бюджетом проекта и коммуникация с клиентом." 
                   />

                   {/* Field Department Nested */}
                   <div className="pl-4 border-l border-white/10 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-4 bg-blue-500/50"></div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Полевой департамент</span>
                      </div>
                      
                      <RoleBox 
                        title="Рук. полевого блока" 
                        responsibility="Организация сбора данных, управление командой интервьюеров и обеспечение выполнения квот." 
                      />

                      <div className="pl-4 border-l border-white/10 space-y-4">
                         <div className="space-y-2">
                           <RoleBox title="Ст. менеджеры в городах" responsibility="Координация полевых работ в конкретных регионах." />
                           <div className="pl-4 border-l border-white/10">
                             <RoleBox title="Интервьюеры" responsibility="Проведение опросов в каждом городе." />
                           </div>
                         </div>

                         <RoleBox 
                           title="Спец. по контролю качества" 
                           responsibility="Контроль качества работы интервьюеров (поле)." 
                         />
                         
                         <RoleBox 
                           title="Спец. по обучению" 
                           responsibility="Обучение и инструктаж полевого персонала." 
                         />
                      </div>
                   </div>
                </div>

                {/* Right Branch: Senior Analyst */}
                <div className="space-y-4 pt-4 md:pt-0">
                   {/* Spacer to align Senior Analyst with Head of Field Block */}
                   <div className="hidden md:block h-28"></div>

                   <RoleBox 
                     title="Старший аналитик" 
                     responsibility="Координация работы аналитиков, контроль качества отчетов." 
                   />
                   
                   <div className="pl-4 border-l border-white/10 space-y-3">
                     <RoleBox title="Аналитики" responsibility="Обработка данных, интерпретация результатов, написание отчетов." />
                     <RoleBox title="Обработчик данных" responsibility="Техническая обработка массивов, подготовка таблиц и графиков." />
                     <RoleBox title="Редактор" responsibility="Вычитка финальных отчётов, проверка стиля и грамотности." />
                   </div>
                </div>
             </div>
          </div>
        </GlassCard>

        {/* Support */}
        <GlassCard className="border-t-4 border-t-emerald-500 lg:col-span-1" title="Поддержка">
          <div className="space-y-3">
            <RoleBox title="HR" responsibility="Найм, адаптация, обучение, развитие сотрудников и поддержание корпоративной культуры." />
            <RoleBox title="Юрист" responsibility="Правовая экспертиза договоров, защита интересов компании." />
            <RoleBox title="Бухгалтер" responsibility="Финансовый учет, налоговая отчетность, расчет зарплат." />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
