"use client"
import { Office } from "./Office"
import { TaskList } from "./TaskList"
import { FinanceHUD } from "./FinanceHUD"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#020617] text-slate-200 overflow-hidden selection:bg-cyan-500/30 font-sans">
      {/* 2D Stylized Office View */}
      <div className="flex-grow h-screen relative group overflow-hidden">
        
        <Office />

        {/* HUD Elements Overlaying Office */}
        <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between z-20">
          <div className="flex justify-between items-start">
            <div className="bg-slate-900/80 backdrop-blur-md border-2 border-cyan-500/30 p-5 rounded-lg flex items-center gap-5 shadow-[4px_4px_0px_rgba(6,182,212,0.2)]">
               <div className="w-12 h-12 rounded bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center relative">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500 relative z-10" />
               </div>
               <div>
                  <h1 className="font-black text-2xl tracking-tighter leading-none mb-1 italic uppercase text-white">
                    Асистентус <span className="text-cyan-400 not-italic font-mono text-sm ml-1 underline decoration-2">CMD_CENTER</span>
                  </h1>
                  <p className="text-[10px] text-cyan-500/70 uppercase tracking-[0.2em] font-bold">Система управління віртуальним офісом</p>
               </div>
            </div>

            <FinanceHUD />
          </div>

          <div className="flex justify-between items-end">
             <div className="max-w-xs space-y-4">
                <div className="bg-slate-900/90 backdrop-blur-md border-2 border-slate-700 p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.5)] pointer-events-auto hover:border-cyan-500/50 transition-all group/card">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                      <h2 className="text-xs font-black uppercase tracking-widest text-white italic">Статус розробки</h2>
                   </div>
                   <p className="text-[11px] text-slate-300 leading-relaxed font-medium mb-5 border-l-2 border-cyan-500/30 pl-3">
                     Перехід на стилізований 2D інтерфейс завершено. Продуктивність оптимізована. <span className="text-cyan-400">айтішнік розраб</span> на позиції.
                   </p>
                   <div className="flex gap-6">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-slate-500 font-black tracking-tighter">Навантаження</span>
                        <span className="text-xs text-white font-mono font-bold">12.5%</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-slate-500 font-black tracking-tighter">Пам&apos;ять</span>
                        <span className="text-xs text-white font-mono font-bold">1.8 GB</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col items-end gap-3">
                <div className="bg-cyan-500 text-slate-950 px-4 py-1 font-black text-[11px] uppercase tracking-tighter skew-x-[-12deg] shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                   LIVE: АКТИВНА СЕСІЯ
                </div>
                <div className="text-[10px] font-mono text-slate-500 text-right font-bold uppercase tracking-tight">
                  NODE_ID: OC-DEV-ALPHA-01<br/>
                  REGION: KYIV_UKRAINE
                </div>
             </div>
          </div>
        </div>

        {/* CRT Scanline / Noise Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Task List - Right Panel */}
      <TaskList />
    </main>
  )
}
