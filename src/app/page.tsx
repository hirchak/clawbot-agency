"use client"
import { Office } from "./Office"
import { TaskList } from "./TaskList"
import { FinanceHUD } from "./FinanceHUD"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#1a1a1a] text-white overflow-hidden font-sans">
      {/* Pixel Art Agency HQ */}
      <div className="flex-grow h-screen relative group overflow-hidden border-r-4 border-[#3d2b1f]">
        
        <Office />

        {/* UI Elements Overlaying Office */}
        <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between z-50">
          <div className="flex justify-between items-start">
            <div className="bg-[#2c3e50] border-4 border-[#d4af37] p-4 rounded-xl flex items-center gap-4 shadow-[0_8px_0px_#1a252f] pointer-events-auto">
               <div className="w-12 h-12 rounded-lg bg-[#d4af37] flex items-center justify-center relative shadow-inner overflow-hidden border-2 border-[#5C4033]">
                  <span className="text-2xl">🦞</span>
               </div>
               <div>
                  <h1 className="font-black text-2xl tracking-tighter leading-none mb-1 text-[#d4af37] uppercase">
                    Асистентус
                  </h1>
                  <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">ЦЕНТРАЛЬНИЙ ШТАБ АГЕНЦІЇ</p>
               </div>
            </div>

            <FinanceHUD />
          </div>

          <div className="flex justify-between items-end">
             <div className="max-w-md">
                <div className="bg-[#2c3e50]/90 backdrop-blur-md border-2 border-white/20 p-6 rounded-lg shadow-2xl pointer-events-auto">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                      <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">System Log v3.0</h2>
                   </div>
                   <p className="text-sm text-white leading-relaxed font-medium mb-4 font-pixel">
                     "Штаб-квартиру OpenClaw успішно модернізовано. <span className="text-orange-400">айтішнік розраб</span> заступив на чергування. Всі системи в нормі."
                   </p>
                   <div className="flex gap-6 border-t border-white/10 pt-4">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-white/40 font-bold tracking-widest">Load Index</span>
                        <span className="text-xs text-cyan-400 font-bold">OPTIMAL (12%)</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-white/40 font-bold tracking-widest">Vibe Check</span>
                        <span className="text-xs text-orange-400 font-bold">PIXEL PERFECT</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col items-end gap-3">
                <div className="bg-red-600 text-white px-4 py-1.5 font-black text-[10px] uppercase tracking-tighter rounded border-b-4 border-red-800 shadow-lg">
                   HQ STATUS: ONLINE
                </div>
                <div className="text-[9px] font-bold text-white/40 text-right uppercase tracking-tighter">
                  NODE: KYIV-CENTRAL<br/>
                  PROTOCOL: OPENCLAW-V3
                </div>
             </div>
          </div>
        </div>

        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none z-[60] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
      </div>

      {/* Task List - Right Panel */}
      <TaskList />
    </main>
  )
}

