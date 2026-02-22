import React from 'react';

interface Task {
  id: number;
  title: string;
  status: 'active' | 'todo' | 'done';
}

const dummyTasks: Task[] = [
  { id: 1, title: 'Реалізувати стилізований 2D інтерфейс', status: 'done' },
  { id: 2, title: 'Мобільна версія дашборду', status: 'active' },
  { id: 3, title: 'Інтеграція голосового керування для Асистентус', status: 'todo' },
  { id: 4, title: 'Щотижневий звіт по токенах та бюджету', status: 'todo' },
  { id: 5, title: 'П’ятничний огляд роботи субагентів', status: 'todo' },
  { id: 6, title: 'Ініціалізація проєкту Дашборду', status: 'done' },
  { id: 7, title: 'Визначення структури пам’яті', status: 'done' },
];

export function TaskList() {
  return (
    <div className="flex flex-col h-full bg-slate-900/90 backdrop-blur-xl border-t lg:border-t-0 lg:border-l-4 border-slate-800 w-full lg:w-80 p-6 overflow-y-auto z-30">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-black italic tracking-tighter text-white uppercase">Цілі системи</h2>
        <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-sm border border-cyan-500/30 font-mono font-bold uppercase tracking-tighter shadow-[2px_2px_0px_rgba(6,182,212,0.2)]">
          RELEASES
        </span>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-5 font-black flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500" /> Активні
          </h3>
          <div className="space-y-4">
            {dummyTasks.filter(t => t.status === 'active').map(task => (
              <div key={task.id} className="group bg-slate-800/50 border-2 border-cyan-500/40 p-5 rounded-lg hover:border-cyan-400 transition-all shadow-[4px_4px_0px_rgba(6,182,212,0.1)]">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,1)]" />
                  <p className="text-xs text-white font-bold leading-tight">{task.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-5 font-black flex items-center gap-2">
            <span className="w-2 h-2 bg-slate-700" /> Беклог
          </h3>
          <div className="space-y-3">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-slate-800/30 border-2 border-slate-700/50 p-4 rounded-lg hover:bg-slate-800/60 transition-colors">
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-5 font-black flex items-center gap-2">
            <span className="w-2 h-2 bg-green-900" /> Завершено
          </h3>
          <div className="space-y-3 opacity-40">
            {dummyTasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="flex items-center gap-3 px-1">
                <div className="w-3 h-3 border-2 border-green-500/50 rounded-sm flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-px" />
                </div>
                <p className="text-[11px] text-slate-500 font-bold line-through decoration-slate-700 italic tracking-tight">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t-2 border-slate-800/50">
        <div className="bg-slate-950/50 rounded p-4 text-[9px] font-mono text-slate-500 border border-slate-800">
          <div className="flex justify-between mb-2">
            <span className="font-bold">МЕРЕЖА:</span>
            <span className="text-cyan-500 text-right font-black uppercase tracking-tighter">ШИФРОВАНА</span>
          </div>
          <div className="flex justify-between">
             <span className="font-bold">СИНХРОНІЗАЦІЯ:</span>
             <span className="text-right uppercase tracking-tighter text-slate-300">100.00%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
