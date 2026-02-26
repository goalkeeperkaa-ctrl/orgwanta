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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {/* Commercial */}
        <GlassCard className="border-t-4 border-t-[#FF495C]" title="Коммерция">
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

        {/* Analytics */}
        <GlassCard className="border-t-4 border-t-purple-500" title="Аналитика">
           <div className="space-y-6">
             <RoleBox 
               title="РДА" 
               subtitle="Руководитель Департамента"
               responsibility="Разработка методологии, контроль качества исследований и научное руководство." 
             />

             <div className="pl-4 border-l border-white/10 space-y-6">
                <RoleBox 
                  title="PM" 
                  subtitle="Менеджер проекта"
                  responsibility="Управление сроками, бюджетом проекта и коммуникация с клиентом." 
                />

                <div className="space-y-3">
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

        {/* Field */}
        <GlassCard className="border-t-4 border-t-blue-500" title="Полевой блок">
           <div className="space-y-6">
             <RoleBox 
               title="Рук. полевого блока" 
               responsibility="Организация сбора данных, управление командой интервьюеров и обеспечение выполнения квот." 
             />

             <div className="pl-4 border-l border-white/10 space-y-6">
                <div className="space-y-3">
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
        </GlassCard>

        {/* Support */}
        <GlassCard className="border-t-4 border-t-emerald-500" title="Поддержка">
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
