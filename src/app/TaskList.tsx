"use client"
import React from 'react';

interface Task {
  id: number;
  title: string;
  status: 'active' | 'todo' | 'done';
}

const dummyTasks: Task[] = [
  { id: 1, title: 'ПОВНА ПЕРЕБУДОВА ОФІСУ (UI-UX PRO MAX)', status: 'done' },
  { id: 2, title: 'ВІЗУАЛІЗАЦІЯ РОБОЧОЇ ЗОНИ РОЗРОБНИКА', status: 'done' },
  { id: 3, title: 'ІНТЕГРАЦІЯ HUD ПАНЕЛЕЙ ТИПУ "СКЛО"', status: 'done' },
  { id: 4, title: 'Мобільна версія дашборду', status: 'active' },
  { id: 5, title: 'Інтеграція голосового керування для Асистентус', status: 'todo' },
  { id: 6, title: 'П’ятничний огляд роботи субагентів', status: 'todo' },
];

export function TaskList() {
  return (
    <div className="flex flex-col h-full bg-[#1a1a1ae6] backdrop-blur-xl border-l-2 border-cyan-400 w-full lg:w-[400px] p-8 overflow-y-auto no-scrollbar z-30 shadow-[-15px_0_40px_rgba(0,0,0,0.8)] font-pixel relative">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-cyan-400" />

      <div className="flex items-center justify-between mb-10 border-b-2 border-cyan-400/20 pb-6">
        <h2 className="text-xl font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-3">
          <span className="animate-pulse">📂</span> СПИСОК ЗАВДАНЬ
        </h2>
        <span className="text-[10px] bg-cyan-400 text-black px-3 py-1 font-bold tracking-[0.2em] border-2 border-black">
          UI-UX PRO
        </span>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-cyan-400 mb-6 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" /> АКТИВНІ ОПЕРАЦІЇ
          </h3>
          <div className="space-y-5">
            {dummyTasks.filter(t => t.status === 'active').map(task => (
              <div key={task.id} className="bg-cyan-900/20 border-2 border-cyan-400/40 p-5 shadow-[6px_6px_0px_#000] hover:border-cyan-400 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[11px] text-white font-bold leading-relaxed tracking-tight relative z-10">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-white/20" /> У ЧЕРЗІ
          </h3>
          <div className="space-y-4">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-black/40 border border-white/5 p-4 hover:bg-black/60 transition-colors border-l-4 border-l-gray-600">
                <p className="text-[11px] text-white/50 font-medium tracking-tight leading-relaxed">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-green-500/60 mb-6 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500/40" /> ЗАВЕРШЕНО
          </h3>
          <div className="space-y-3 opacity-50">
            {dummyTasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="flex items-start gap-3 px-2">
                <div className="w-4 h-4 border-2 border-green-500/50 flex items-center justify-center shrink-0 mt-0.5">
                   <span className="text-green-500 text-[10px]">✓</span>
                </div>
                <p className="text-[10px] text-white font-medium line-through italic tracking-tight leading-relaxed">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5">
        <div className="bg-black/60 p-5 text-[10px] font-bold text-white/30 border border-cyan-400/10 shadow-2xl">
          <div className="flex justify-between mb-2">
            <span className="tracking-widest uppercase">ШИФРУВАННЯ:</span>
            <span className="text-cyan-400 text-right uppercase tracking-tighter">AES-256-PIXEL</span>
          </div>
          <div className="flex justify-between">
             <span className="tracking-widest uppercase">ЛОКАЛЬНИЙ ЧАС:</span>
             <span className="text-right text-cyan-400 uppercase">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

