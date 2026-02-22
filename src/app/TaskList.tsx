"use client"
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
    <div className="flex flex-col h-full bg-[#0f172a]/95 backdrop-blur-xl border-l-4 border-[#d4af37] w-full lg:w-96 p-8 overflow-y-auto no-scrollbar z-30 shadow-[-10px_0_30px_#000] font-pixel">
      <div className="flex items-center justify-between mb-10 border-b-2 border-[#d4af37]/20 pb-6">
        <h2 className="text-xl font-bold text-[#d4af37] uppercase tracking-tighter flex items-center gap-3">
          <span className="animate-pulse">💾</span> MISSION LOG
        </h2>
        <span className="text-[10px] bg-[#d4af37] text-black px-3 py-1 font-bold tracking-widest border-2 border-black">
          v4.0.0
        </span>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-cyan-400 mb-6 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" /> PRIORITY OPS
          </h3>
          <div className="space-y-5">
            {dummyTasks.filter(t => t.status === 'active').map(task => (
              <div key={task.id} className="bg-black/40 border-2 border-cyan-400/50 p-5 shadow-[4px_4px_0px_#000] hover:border-cyan-400 transition-all group relative">
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400" />
                <div className="flex items-start gap-4">
                  <p className="text-[11px] text-white font-bold leading-relaxed tracking-tight">{task.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-white/20" /> QUEUED TASKS
          </h3>
          <div className="space-y-4">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-black/20 border border-white/10 p-4 hover:bg-black/40 transition-colors border-l-4 border-l-[#d4af37]/50">
                <p className="text-[11px] text-white/60 font-medium tracking-tight leading-relaxed">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-green-500/60 mb-6 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500/40" /> ARCHIVED
          </h3>
          <div className="space-y-3 opacity-40">
            {dummyTasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="flex items-center gap-3 px-2">
                <div className="w-4 h-4 border border-green-500/50 flex items-center justify-center">
                   <span className="text-green-500 text-[10px]">✓</span>
                </div>
                <p className="text-[10px] text-white font-medium line-through italic tracking-tight leading-relaxed">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-white/10">
        <div className="bg-black/40 p-4 text-[10px] font-bold text-white/30 border border-[#d4af37]/10 shadow-inner">
          <div className="flex justify-between mb-2">
            <span className="tracking-widest">ENCRYPTION:</span>
            <span className="text-cyan-400 text-right uppercase">PIXEL-64-MAX</span>
          </div>
          <div className="flex justify-between">
             <span className="tracking-widest">CLOCK:</span>
             <span className="text-right text-[#d4af37] uppercase">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

