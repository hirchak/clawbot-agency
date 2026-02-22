"use client"
import React from 'react';

export function FinanceHUD() {
  return (
    <div className="bg-[#1a1a1ae6] backdrop-blur-md border-2 border-cyan-400 p-6 rounded-none flex flex-col gap-6 shadow-[10px_10px_0px_#000] min-w-[320px] pointer-events-auto z-30 font-pixel relative overflow-hidden">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-cyan-400" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-cyan-400" />

      <div className="flex items-center gap-3 border-b-2 border-cyan-400/20 pb-4">
        <div className="text-2xl filter drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">📈</div>
        <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-cyan-400">ФІНАНСОВИЙ МОНІТОР</h2>
      </div>
      
      <div className="space-y-6">
        {/* Daily Usage */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Денне споживання</span>
            <span className="text-md text-white font-bold tracking-tighter">297,209 <span className="text-[8px] text-cyan-400">UNIT</span></span>
          </div>
          <div className="w-full h-4 bg-black/40 border border-cyan-400/30 p-0.5">
            <div className="w-[65%] h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold text-cyan-400/60 uppercase">
            <span>Витрати (USD):</span>
            <span className="text-white">$0.03</span>
          </div>
        </div>

        {/* Monthly Usage */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Місячна квота</span>
            <span className="text-md text-white font-bold tracking-tighter">854,120 <span className="text-[8px] text-cyan-400">UNIT</span></span>
          </div>
          <div className="w-full h-4 bg-black/40 border border-cyan-400/30 p-0.5">
            <div className="w-[30%] h-full bg-[#d4af37] shadow-[0_0_15px_#d4af37]" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold text-[#d4af37]/60 uppercase">
            <span>Прогноз витрат:</span>
            <span className="text-white">$0.09</span>
          </div>
        </div>
      </div>

      <div className="mt-2 pt-4 border-t border-white/10 flex justify-between items-center">
        <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Протокол Billing v4</span>
        <span className="text-[9px] text-green-400 font-bold tracking-widest px-2 py-0.5 bg-green-400/5 border border-green-400/40">СТАБІЛЬНО</span>
      </div>
    </div>
  );
}
