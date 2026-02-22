"use client"
import React from 'react';

interface Task {
  id: number;
  title: string;
  status: 'active' | 'todo' | 'done';
}

const dummyTasks: Task[] = [
  { id: 1, title: 'РЕКОНСТРУКЦІЯ ШТАБУ 2.0', status: 'done' },
  { id: 2, title: 'МАСШТАБУВАННЯ ОБ’ЄКТІВ 2X', status: 'done' },
  { id: 3, title: 'ОПТИМІЗАЦІЯ UI HUD', status: 'done' },
  { id: 4, title: 'Глобальне освітлення (Lamps)', status: 'active' },
  { id: 5, title: 'Деталізація книжкових полиць', status: 'todo' },
];

export function TaskList() {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 w-64 shadow-2xl font-mono relative overflow-hidden text-[10px]">
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
        <h2 className="font-bold text-cyan-400 uppercase tracking-tighter flex items-center gap-2">
          <span>📂</span> МІСІЇ
        </h2>
        <span className="text-[8px] text-white/40 uppercase">v6.0</span>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-[9px] uppercase text-cyan-400/60 mb-2 font-bold flex items-center gap-1">
            <span className="w-1 h-1 bg-cyan-400" /> АКТИВНІ
          </h3>
          <div className="space-y-2">
            {dummyTasks.filter(t => t.status === 'active').map(task => (
              <div key={task.id} className="bg-cyan-900/10 border border-cyan-500/20 p-2 text-white/90">
                {task.title}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[9px] uppercase text-white/20 mb-2 font-bold flex items-center gap-1">
            <span className="w-1 h-1 bg-white/20" /> ЧЕРГА
          </h3>
          <div className="space-y-1">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="text-white/40 px-1 border-l border-white/10">
                {task.title}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[9px] uppercase text-green-500/40 mb-2 font-bold flex items-center gap-1">
            <span className="w-1 h-1 bg-green-500/40" /> ВИКОНАНО
          </h3>
          <div className="space-y-1 opacity-40">
            {dummyTasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="text-white/30 line-through truncate">
                {task.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
