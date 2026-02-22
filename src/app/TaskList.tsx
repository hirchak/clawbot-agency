import React from 'react';

interface Task {
  id: number;
  title: string;
  status: 'active' | 'todo' | 'done';
}

const dummyTasks: Task[] = [
  { id: 1, title: 'Add 2D/3D visual presence to the dashboard', status: 'active' },
  { id: 2, title: 'Mobile-friendly version of the dashboard', status: 'todo' },
  { id: 3, title: 'Voice control integration for Claw', status: 'todo' },
  { id: 4, title: 'Weekly summary of token usage vs budget', status: 'todo' },
  { id: 5, title: 'Friday review of sub-agent performance', status: 'todo' },
  { id: 6, title: 'Dashboard Project initialization', status: 'done' },
  { id: 7, title: 'Memory structure definition', status: 'done' },
];

export function TaskList() {
  return (
    <div className="flex flex-col h-full bg-zinc-900/80 backdrop-blur-xl border-l border-white/10 w-80 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold tracking-tight text-white">System Tasks</h2>
        <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30 font-mono uppercase">
          Backlog
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Active Objectives</h3>
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
          <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Queue</h3>
          <div className="space-y-2">
            {dummyTasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-zinc-800/40 border border-white/5 p-3 rounded-lg hover:bg-zinc-800/60 transition-colors">
                <p className="text-xs text-zinc-400">{task.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Completed</h3>
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
            <span>Sync Status:</span>
            <span className="text-green-500/70 text-right font-bold uppercase tracking-tighter">Encrypted Link</span>
          </div>
          <div className="flex justify-between">
             <span>Last Update:</span>
             <span className="text-right uppercase tracking-tighter">Just Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
