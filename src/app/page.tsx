"use client"
import { Office } from "./Office"
import { TaskList } from "./TaskList"
import { FinanceHUD } from "./FinanceHUD"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#1a1a1a] text-white overflow-hidden font-pixel">
      {/* Pixel Art Agency HQ */}
      <div className="flex-grow h-screen relative group overflow-hidden">
        
        <Office />

        {/* UI Elements Overlaying Office */}
        <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between z-[100]">
          <div className="flex justify-between items-start">
            <div className="bg-[#0f172a]/90 border-4 border-[#d4af37] p-5 flex items-center gap-6 shadow-[8px_8px_0px_#000] pointer-events-auto">
               <div className="w-16 h-16 bg-[#d4af37] flex items-center justify-center relative shadow-inner border-2 border-black">
                  <span className="text-4xl filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">🦞</span>
               </div>
               <div>
                  <h1 className="font-bold text-3xl tracking-tighter leading-none mb-1 text-[#d4af37] uppercase">
                    OPENCLAW HQ
                  </h1>
                  <p className="text-[10px] text-cyan-400 uppercase tracking-[0.3em] font-bold">COMMAND CENTER v4.0.0</p>
               </div>
            </div>

            <FinanceHUD />
          </div>

          <div className="flex justify-between items-end">
             <div className="max-w-md">
                <div className="bg-[#0f172a]/95 border-4 border-[#d4af37] p-8 shadow-[10px_10px_0px_#000] pointer-events-auto relative">
                   <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-cyan-400" />
                   <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-cyan-400" />
                   
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                      <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">System Identity verified</h2>
                   </div>
                   <p className="text-sm text-white leading-relaxed font-bold mb-6 font-pixel uppercase tracking-tight">
                     "Штаб-квартиру OpenClaw повністю перебудовано. <span className="text-[#d4af37]">айтішнік розраб</span> завершив фінальні налаштування інтерфейсу. Бос буде задоволений."
                   </p>
                   <div className="flex gap-8 border-t-2 border-white/5 pt-6">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-white/30 font-bold tracking-[0.2em]">Efficiency</span>
                        <span className="text-xs text-cyan-400 font-bold tracking-widest uppercase">99.8% OPTIMAL</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-white/30 font-bold tracking-[0.2em]">Vibe Matrix</span>
                        <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase">REAL GAME ROOM</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col items-end gap-4">
                <div className="bg-red-600 text-white px-6 py-2 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_#000]">
                   HQ STATUS: OPERATIONAL
                </div>
                <div className="text-[10px] font-bold text-white/40 text-right uppercase tracking-[0.1em] leading-tight">
                  SECTOR: KYIV-CENTRAL<br/>
                  PROTOCOL: PIXEL-V4-FINAL
                </div>
             </div>
          </div>
        </div>

        {/* Scanlines Effect (Enhanced) */}
        <div className="absolute inset-0 pointer-events-none z-[110] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,4px_100%] opacity-40" />
      </div>

      {/* Task List - Right Panel */}
      <TaskList />
    </main>
  )
}
