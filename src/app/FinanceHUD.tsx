"use client"
import React from 'react';

export function FinanceHUD() {
  return (
    <div className="bg-white border-4 border-[#5C4033] p-6 rounded-2xl flex flex-col gap-6 shadow-[8px_8px_0px_rgba(92,64,51,0.1)] min-w-[280px] pointer-events-auto transition-transform hover:-translate-y-1 z-30">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl">💰</div>
        <h2 className="text-lg font-black uppercase tracking-tight text-[#5C4033]">Фінанси та Токени</h2>
      </div>
      
      <div className="space-y-6">
        {/* Daily Usage */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-sm text-[#8B4513] font-bold uppercase">Сьогоднішні витрати</span>
            <span className="text-md text-[#5C4033] font-black">297,209 <span className="text-xs opacity-60">токени</span></span>
          </div>
          <div className="w-full h-4 bg-[#F5F5DC] rounded-full overflow-hidden border-2 border-[#5C4033]">
            <div className="w-[65%] h-full bg-[#DEB887] border-r-2 border-[#5C4033]" />
          </div>
          <div className="flex justify-between items-center text-xs font-bold text-[#8B4513]">
            <span className="italic">Загалом:</span>
            <span className="bg-[#F5F5DC] px-3 py-1 rounded-full border-2 border-[#5C4033]/20 text-[#5C4033]">$0.03</span>
          </div>
        </div>

        {/* Monthly Usage */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-sm text-[#8B4513] font-bold uppercase">Місячний ліміт</span>
            <span className="text-md text-[#5C4033] font-black">854,120 <span className="text-xs opacity-60">токени</span></span>
          </div>
          <div className="w-full h-4 bg-[#F5F5DC] rounded-full overflow-hidden border-2 border-[#5C4033]">
            <div className="w-[30%] h-full bg-[#8B4513] border-r-2 border-[#5C4033]" />
          </div>
          <div className="flex justify-between items-center text-xs font-bold text-[#8B4513]">
            <span className="italic">Прогноз:</span>
            <span className="bg-[#F5F5DC] px-3 py-1 rounded-full border-2 border-[#5C4033]/20 text-[#5C4033]">$0.09</span>
          </div>
        </div>
      </div>

      <div className="mt-2 pt-4 border-t-2 border-[#F5F5DC] flex justify-between items-center">
        <span className="text-xs text-[#8B4513] font-black uppercase italic">Статус білінгу</span>
        <span className="text-[10px] text-green-700 font-black tracking-wider bg-green-100 px-3 py-1 rounded-full border-2 border-green-700/20">АКТИВНИЙ</span>
      </div>
    </div>
  );
}
