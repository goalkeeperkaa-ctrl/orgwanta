import { GlassCard } from "../components/GlassCard";
import { AlertTriangle, ShieldAlert } from "lucide-react";

export function Conflicts() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <GlassCard className="border-l-4 border-l-red-500">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
            <AlertTriangle size={20} />
          </div>
          <h3 className="text-lg font-bold text-white">Сроки vs Качество</h3>
        </div>
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-white/5 p-3">
            <span className="block text-xs font-bold uppercase text-white/40 mb-1">Ситуация</span>
            <p className="text-white/80">PM: "Нужен отчёт за 2 недели"<br/>РДА: "Невозможно без потери качества"</p>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase text-white/40 mb-1">Решение</span>
            <ul className="list-disc pl-4 text-white/60 space-y-1">
              <li>Поиск компромисса (быстрая методология?)</li>
              <li>Дополнительные ресурсы</li>
              <li>Эскалация Операционному директору</li>
            </ul>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="border-l-4 border-l-orange-500">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
            <ShieldAlert size={20} />
          </div>
          <h3 className="text-lg font-bold text-white">Проблемы с выборкой</h3>
        </div>
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-white/5 p-3">
            <span className="block text-xs font-bold uppercase text-white/40 mb-1">Ситуация</span>
            <p className="text-white/80">Полевой блок не успевает собрать нужное количество интервью в срок.</p>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase text-white/40 mb-1">Решение</span>
            <ul className="list-disc pl-4 text-white/60 space-y-1">
              <li>Сообщить СРАЗУ</li>
              <li>Нанять больше интервьюеров (бюджет ↑)</li>
              <li>Упростить методологию (качество ↓)</li>
            </ul>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="border-l-4 border-l-yellow-500">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">
            <AlertTriangle size={20} />
          </div>
          <h3 className="text-lg font-bold text-white">Плохие данные</h3>
        </div>
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-white/5 p-3">
            <span className="block text-xs font-bold uppercase text-white/40 mb-1">Ситуация</span>
            <p className="text-white/80">15% брака в анкетах. Ошибки, пропуски.</p>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase text-white/40 mb-1">Решение</span>
            <ul className="list-disc pl-4 text-white/60 space-y-1">
              <li>Мало ошибок (1-5%) → Фикс вручную</li>
              <li>Много ошибок (10%+) → Пересбор (сроки ↑)</li>
              <li>Ответственность полевого блока</li>
            </ul>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 md:col-span-2 bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/20">
        <h3 className="text-lg font-bold text-orange-400 mb-2">Главное правило</h3>
        <p className="text-white/80">
          Сообщай о проблемах <strong>СРАЗУ</strong>. Три главные роли (PM, РДА, Полевой блок) должны знать друг о друге о любых проблемах в день их возникновения.
        </p>
      </GlassCard>
    </div>
  );
}
