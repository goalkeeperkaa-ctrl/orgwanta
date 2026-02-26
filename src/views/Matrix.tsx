import { GlassCard } from "../components/GlassCard";

export function Matrix() {
  const rows = [
    { task: "Переговоры с клиентом", pm: "O", rda: "C", field: "", senior: "", op: "C" },
    { task: "Определение методологии", pm: "C", rda: "O", field: "C", senior: "", op: "" },
    { task: "График работ", pm: "O", rda: "C", field: "C", senior: "", op: "C" },
    { task: "Сбор данных", pm: "I", rda: "I", field: "O", senior: "", op: "" },
    { task: "Анализ данных", pm: "I", rda: "O", field: "", senior: "O", op: "" },
    { task: "Подготовка отчёта", pm: "C", rda: "C", field: "", senior: "O", op: "" },
    { task: "Клиентская коммуникация", pm: "O", rda: "C", field: "C", senior: "", op: "C" },
  ];

  return (
    <GlassCard className="overflow-hidden p-0" title="Матрица ответственности (RACI)">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="p-4 font-medium text-white/60">Процесс</th>
              <th className="p-4 font-medium text-blue-300">PM</th>
              <th className="p-4 font-medium text-purple-300">РДА</th>
              <th className="p-4 font-medium text-emerald-300">Полевой</th>
              <th className="p-4 font-medium text-white/60">Ст. Аналитик</th>
              <th className="p-4 font-medium text-white/60">Опер. Дир</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-white/90">{row.task}</td>
                <td className="p-4">{renderBadge(row.pm)}</td>
                <td className="p-4">{renderBadge(row.rda)}</td>
                <td className="p-4">{renderBadge(row.field)}</td>
                <td className="p-4">{renderBadge(row.senior)}</td>
                <td className="p-4">{renderBadge(row.op)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex gap-4 p-4 text-xs text-white/40">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-500/20 font-bold text-orange-400">O</span>
          <span>Ответствен</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 font-bold text-blue-400">C</span>
          <span>Согласует</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-white/10 font-bold text-white/60">I</span>
          <span>Информирован</span>
        </div>
      </div>
    </GlassCard>
  );
}

function renderBadge(code: string) {
  if (!code) return null;
  if (code === "O") return <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 font-bold text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.2)]">O</span>;
  if (code === "C") return <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 font-bold text-blue-400">C</span>;
  if (code === "I") return <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 font-bold text-white/40">I</span>;
  return code;
}
