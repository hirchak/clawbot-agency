"use client"
import React from 'react';

export function FinanceHUD() {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 shadow-2xl min-w-[200px] font-mono text-[10px] relative overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-3">
        <div className="text-cyan-400">📊</div>
        <h2 className="font-bold uppercase tracking-tighter text-white/80">ФІНАНСИ</h2>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[9px] text-white/50 uppercase">
            <span>UNIT Usage</span>
            <span className="text-white">65%</span>
          </div>
          <div className="w-full h-1 bg-white/5">
            <div className="w-[65%] h-full bg-cyan-500" />
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/5">
          <span className="text-white/30 uppercase text-[8px]">Total Cost</span>
          <span className="text-green-400 font-bold">$0.03</span>
        </div>
      </div>
    </div>
  );
}
