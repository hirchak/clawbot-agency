"use client"
import React from 'react';

export function FinanceHUD() {
  return (
    <div className="bg-[#0f172a]/80 backdrop-blur-md border-4 border-[#d4af37] p-6 rounded-none flex flex-col gap-6 shadow-[8px_8px_0px_#000] min-w-[300px] pointer-events-auto z-30 font-pixel">
      <div className="flex items-center gap-3 border-b-2 border-cyan-400/30 pb-4">
        <div className="text-2xl filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">💎</div>
        <h2 className="text-lg font-bold uppercase tracking-widest text-cyan-400">RESOURCE MONITOR</h2>
      </div>
      
      <div className="space-y-6">
        {/* Daily Usage */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-tighter">Daily Consumption</span>
            <span className="text-md text-white font-bold">297,209 <span className="text-[8px] text-cyan-400">UNITS</span></span>
          </div>
          <div className="w-full h-5 bg-black border-2 border-[#d4af37] p-0.5">
            <div className="w-[65%] h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold text-cyan-400/80">
            <span className="">CREDITS EXPENDED:</span>
            <span className="text-white">$0.03</span>
          </div>
        </div>

        {/* Monthly Usage */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-tighter">Quota Utilization</span>
            <span className="text-md text-white font-bold">854,120 <span className="text-[8px] text-cyan-400">UNITS</span></span>
          </div>
          <div className="w-full h-5 bg-black border-2 border-[#d4af37] p-0.5">
            <div className="w-[30%] h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold text-[#d4af37]/80">
            <span className="">PROJECTED COST:</span>
            <span className="text-white">$0.09</span>
          </div>
        </div>
      </div>

      <div className="mt-2 pt-4 border-t-2 border-white/10 flex justify-between items-center">
        <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Billing Engine</span>
        <span className="text-[9px] text-green-400 font-bold tracking-widest px-2 py-0.5 bg-green-400/10 border border-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]">STABLE</span>
      </div>
    </div>
  );
}
