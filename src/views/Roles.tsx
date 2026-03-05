import { GlassCard } from "../components/GlassCard";
import { Check, X, Users } from "lucide-react";

export function Roles() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* PM */}
      <GlassCard className="relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
          <Users size={24} />
        </div>
        <h3 className="mb-1 text-2xl font-bold text-white">PM</h3>
        <p className="mb-4 text-sm text-blue-300">Менеджер проекта</p>
        
        <div className="mb-6 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
          <p className="text-sm text-white/80 italic">"Капитан проекта"</p>
          <p className="mt-2 text-xs text-white/50">Убедиться, что проект идёт по плану, в сроки и в бюджет.</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/40">Отвечает за</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-blue-500" /> Сроки выполнения</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-blue-500" /> Бюджет проекта</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-blue-500" /> Клиентская коммуникация</li>
            </ul>
          </div>
          
          <div>
             <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/40">Может сказать НЕТ</h4>
             <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><X size={16} className="mt-0.5 text-red-500" /> "В сроки не уложимся"</li>
              <li className="flex items-start gap-2"><X size={16} className="mt-0.5 text-red-500" /> "Бюджет закончился"</li>
            </ul>
          </div>
        </div>
      </GlassCard>

      {/* RPD */}
      <GlassCard className="relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
          <Users size={24} />
        </div>
        <h3 className="mb-1 text-2xl font-bold text-white">РПД</h3>
        <p className="mb-4 text-sm text-purple-300">Рук. Продуктового Деп.</p>
        
        <div className="mb-6 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
          <p className="text-sm text-white/80 italic">"Хранитель качества"</p>
          <p className="mt-2 text-xs text-white/50">Убедиться, что исследование сделано правильно, по методологии.</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/40">Отвечает за</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-purple-500" /> Методология</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-purple-500" /> Качество выводов</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-purple-500" /> Финальное одобрение</li>
            </ul>
          </div>
          
          <div>
             <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/40">Может сказать НЕТ</h4>
             <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><X size={16} className="mt-0.5 text-red-500" /> "Методология нарушена"</li>
              <li className="flex items-start gap-2"><X size={16} className="mt-0.5 text-red-500" /> "Выводы не обоснованы"</li>
            </ul>
          </div>
        </div>
      </GlassCard>

      {/* Field Lead */}
      <GlassCard className="relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <Users size={24} />
        </div>
        <h3 className="mb-1 text-2xl font-bold text-white">Полевой</h3>
        <p className="mb-4 text-sm text-emerald-300">Руководитель блока</p>
        
        <div className="mb-6 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
          <p className="text-sm text-white/80 italic">"Исполнитель"</p>
          <p className="mt-2 text-xs text-white/50">Собрать данные в точности по методологии РПД в сроки PM.</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/40">Отвечает за</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-emerald-500" /> Сбор выборки</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-emerald-500" /> Качество данных</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-emerald-500" /> Команда интервьюеров</li>
            </ul>
          </div>
          
          <div>
             <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/40">Может сказать НЕТ</h4>
             <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><X size={16} className="mt-0.5 text-red-500" /> "Нужно больше людей"</li>
              <li className="flex items-start gap-2"><X size={16} className="mt-0.5 text-red-500" /> "Данные с ошибками"</li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
