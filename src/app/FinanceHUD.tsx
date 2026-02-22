import React from 'react';

export function FinanceHUD() {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/5 p-4 rounded-xl flex flex-col gap-3 shadow-2xl min-w-[200px] pointer-events-auto">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-mono">ФІНАНСОВИЙ МОНІТОРИНГ</h2>
      </div>
      
      <div className="space-y-3">
        {/* Daily Usage */}
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-tighter">Денне споживання</span>
            <span className="text-xs text-cyan-400 font-mono font-bold tracking-tight">297,209</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[65%] h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </div>
          <div className="flex justify-between items-center text-[8px] font-mono">
            <span className="text-zinc-600 uppercase">Витрати</span>
            <span className="text-zinc-300 font-bold">$0.03</span>
          </div>
        </div>

        {/* Monthly Usage */}
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-tighter">Місячне споживання</span>
            <span className="text-xs text-zinc-400 font-mono font-bold tracking-tight">854,120</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[30%] h-full bg-zinc-700" />
          </div>
          <div className="flex justify-between items-center text-[8px] font-mono">
            <span className="text-zinc-600 uppercase">Витрати</span>
            <span className="text-zinc-300 font-bold">$0.09</span>
          </div>
        </div>
      </div>

      <div className="mt-1 pt-2 border-t border-white/5 flex justify-between items-center">
        <span className="text-[8px] text-zinc-600 uppercase font-mono">Статус білінгу</span>
        <span className="text-[8px] text-green-500 font-mono font-bold">АКТИВНИЙ</span>
      </div>
    </div>
  );
}
