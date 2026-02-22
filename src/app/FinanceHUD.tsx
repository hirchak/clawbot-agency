import React from 'react';

export function FinanceHUD() {
  return (
    <div className="bg-slate-900/90 backdrop-blur-md border-2 border-slate-700 p-5 rounded-lg flex flex-col gap-4 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] min-w-[240px] pointer-events-auto hover:border-cyan-500/30 transition-all z-30">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-2 h-2 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]" />
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white font-mono italic">Фінанси та Токени</h2>
      </div>
      
      <div className="space-y-4">
        {/* Daily Usage */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Денне споживання</span>
            <span className="text-xs text-cyan-400 font-mono font-black tracking-tighter italic">297,209</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-sm overflow-hidden border border-slate-700">
            <div className="w-[65%] h-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono font-bold">
            <span className="text-slate-600 uppercase italic">Витрати</span>
            <span className="text-white bg-slate-800 px-2 rounded-sm">$0.03</span>
          </div>
        </div>

        {/* Monthly Usage */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Місячний ліміт</span>
            <span className="text-xs text-slate-400 font-mono font-black tracking-tighter italic">854,120</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-sm overflow-hidden border border-slate-700">
            <div className="w-[30%] h-full bg-slate-600" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono font-bold">
            <span className="text-slate-600 uppercase italic">Прогноз</span>
            <span className="text-white bg-slate-800 px-2 rounded-sm">$0.09</span>
          </div>
        </div>
      </div>

      <div className="mt-1 pt-3 border-t-2 border-slate-800 flex justify-between items-center">
        <span className="text-[9px] text-slate-500 uppercase font-black italic">Статус білінгу</span>
        <span className="text-[9px] text-green-400 font-mono font-black tracking-widest bg-green-900/30 px-2 py-0.5 rounded-sm border border-green-500/20">АКТИВНИЙ</span>
      </div>
    </div>
  );
}
