import React from 'react';

interface Task {
  id: number;
  title: string;
  status: 'active' | 'todo' | 'done';
}

const dummyTasks: Task[] = [
  { id: 1, title: 'Додати 2D/3D візуалізацію в дашборд', status: 'active' },
  { id: 2, title: 'Мобільна версія дашборду', status: 'todo' },
  { id: 3, title: 'Інтеграція голосового керування для Асистентус', status: 'todo' },
  { id: 4, title: 'Щотижневий звіт по токенах та бюджету', status: 'todo' },
  { id: 5, title: 'П’ятничний огляд роботи субагентів', status: 'todo' },
  { id: 6, title: 'Ініціалізація проєкту Дашборду', status: 'done' },
  { id: 7, title: 'Визначення структури пам’яті', status: 'done' },
];

export function TaskList() {
  return (
    <div className="flex flex-col h-full bg-zinc-900/80 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-white/10 w-full lg:w-80 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold tracking-tight text-white">Завдання системи</h2>
        <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30 font-mono uppercase">
          Беклог
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Активні цілі</h3>
          <div className="space-y-3">
            {dummyTasks.filter(t => t.status === 'active').map(task => (
              <div key={task.id} className="group bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <p className="text-sm text-zinc-200 leading-snug">{task.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Черга</h3>
          <div className="space-y-2">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-zinc-800/40 border border-white/5 p-3 rounded-lg hover:bg-zinc-800/60 transition-colors">
                <p className="text-xs text-zinc-400">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Завершено</h3>
          <div className="space-y-2 opacity-50">
            {dummyTasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="flex items-center gap-2 px-1">
                <div className="w-3 h-3 border border-zinc-700 rounded flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-zinc-600 rounded-sm" />
                </div>
                <p className="text-xs text-zinc-500 line-through decoration-zinc-700">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5">
        <div className="bg-black/20 rounded-lg p-3 text-[10px] font-mono text-zinc-500">
          <div className="flex justify-between mb-1">
            <span>Статус синхронізації:</span>
            <span className="text-green-500/70 text-right font-bold uppercase tracking-tighter">Захищений зв'язок</span>
          </div>
          <div className="flex justify-between">
             <span>Останнє оновлення:</span>
             <span className="text-right uppercase tracking-tighter">Щойно</span>
          </div>
        </div>
      </div>
    </div>
  );
}
