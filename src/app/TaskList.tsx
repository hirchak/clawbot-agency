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
    <div className="flex flex-col h-full bg-[#2c3e50] border-l-4 border-[#1a252f] w-full lg:w-96 p-8 overflow-y-auto no-scrollbar z-30 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl font-black text-[#d4af37] uppercase tracking-tighter flex items-center gap-2 font-pixel">
          <span>📋</span> MISSION LOG
        </h2>
        <span className="text-[9px] bg-[#d4af37] text-[#1a1a1a] px-3 py-1 rounded border border-white/20 font-black uppercase tracking-widest">
          HQ V3.0
        </span>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 mb-6 font-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> ACTIVE OPS
          </h3>
          <div className="space-y-5">
            {dummyTasks.filter(t => t.status === 'active').map(task => (
              <div key={task.id} className="bg-[#1a252f] border-2 border-cyan-400/30 p-5 rounded-lg shadow-[4px_4px_0px_rgba(34,211,238,0.2)] hover:border-cyan-400 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-ping" />
                  <p className="text-xs text-white font-bold leading-snug font-pixel tracking-tight">{task.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 font-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/20" /> BACKLOG
          </h3>
          <div className="space-y-4">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-[#1a252f]/50 border border-white/10 p-4 rounded hover:bg-[#1a252f] transition-colors border-l-4 border-l-yellow-600/50">
                <p className="text-[11px] text-white/60 font-bold tracking-tight font-pixel">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-green-500 mb-6 font-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" /> COMPLETED
          </h3>
          <div className="space-y-3 opacity-60">
            {dummyTasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="flex items-center gap-3 px-2">
                <div className="w-4 h-4 border border-green-500 rounded flex items-center justify-center bg-green-500/10">
                   <span className="text-green-500 text-[10px] font-bold">✓</span>
                </div>
                <p className="text-[10px] text-white/40 font-bold line-through italic font-pixel">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-white/10">
        <div className="bg-black/20 rounded p-4 text-[9px] font-bold text-white/30 border border-white/5 shadow-inner font-mono">
          <div className="flex justify-between mb-2">
            <span>UPLINK STATUS:</span>
            <span className="text-green-500 text-right font-black">ENCRYPTED</span>
          </div>
          <div className="flex justify-between">
             <span>LOCAL TIME:</span>
             <span className="text-right text-white/60 uppercase">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

