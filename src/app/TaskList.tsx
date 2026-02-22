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
    <div className="flex flex-col h-full bg-[#fdf6e3] border-t lg:border-t-0 lg:border-l-4 border-[#8B4513]/20 w-full lg:w-96 p-8 overflow-y-auto no-scrollbar z-30">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-black text-[#5C4033] uppercase tracking-tight flex items-center gap-2">
          <span>📋</span> Список справ
        </h2>
        <span className="text-[10px] bg-white text-[#8B4513] px-3 py-1 rounded-full border-2 border-[#8B4513]/30 font-bold uppercase tracking-widest shadow-sm">
          ВЕРСІЯ 2.0
        </span>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-[#8B4513] mb-6 font-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" /> В роботі
          </h3>
          <div className="space-y-5">
            {dummyTasks.filter(t => t.status === 'active').map(task => (
              <div key={task.id} className="bg-white border-2 border-[#8B4513] p-6 rounded-2xl shadow-[4px_4px_0px_#8B4513] hover:translate-x-1 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
                  <p className="text-sm text-[#5C4033] font-bold leading-snug">{task.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-[#8B4513] mb-6 font-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DEB887]" /> Плани
          </h3>
          <div className="space-y-4">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-white/50 border-2 border-[#8B4513]/20 p-5 rounded-xl hover:bg-white transition-colors">
                <p className="text-sm text-[#5C4033]/70 font-bold tracking-tight">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-[#8B4513] mb-6 font-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-700" /> Виконано
          </h3>
          <div className="space-y-4 opacity-50">
            {dummyTasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="flex items-center gap-4 px-2">
                <div className="w-5 h-5 border-2 border-green-700 rounded-lg flex items-center justify-center bg-green-100">
                   <span className="text-green-700 text-xs font-bold">✓</span>
                </div>
                <p className="text-sm text-[#5C4033] font-bold line-through decoration-green-700/40 italic">{task.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-10 border-t-2 border-[#8B4513]/10">
        <div className="bg-white/40 rounded-xl p-5 text-[10px] font-bold text-[#8B4513] border-2 border-[#8B4513]/10 shadow-inner">
          <div className="flex justify-between mb-3">
            <span>МЕРЕЖА:</span>
            <span className="text-[#5C4033] text-right font-black uppercase">ПІДТВЕРДЖЕНО</span>
          </div>
          <div className="flex justify-between">
             <span>ОСТАННЄ ОНОВЛЕННЯ:</span>
             <span className="text-right text-[#5C4033]">ЩОЙНО</span>
          </div>
        </div>
      </div>
    </div>
  );
}
