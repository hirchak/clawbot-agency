"use client"
import { Office } from "./Office"
import { TaskList } from "./TaskList"
import { FinanceHUD } from "./FinanceHUD"

export default function Home() {
  return (
    <main className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden font-mono">
      
      {/* 3D / PIXEL VIEWPORT (90% of the screen) */}
      <div className="relative flex-grow h-full bg-black border-r border-white/5 overflow-hidden">
        
        {/* THE OFFICE */}
        <div className="absolute inset-0">
          <Office />
        </div>

        {/* MINIMAL OVERLAY HUD */}
        {/* Top Left: Title */}
        <div className="absolute top-6 left-6 z-[100] bg-black/60 backdrop-blur-md border border-cyan-500/30 p-4 rounded shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="text-2xl animate-pulse">🦞</div>
            <div>
              <h1 className="text-lg font-bold tracking-tighter text-cyan-400">ШТАБ АСИСТЕНТУСА</h1>
              <p className="text-[8px] text-white/40 uppercase tracking-widest">Protocol v5.0.1 • Operational</p>
            </div>
          </div>
        </div>

        {/* Bottom Left: Terminal Mini */}
        <div className="absolute bottom-6 left-6 z-[100] w-64 bg-black/80 border border-white/10 p-3 rounded font-mono text-[9px] text-green-500/80">
          <div className="flex gap-2 mb-1">
            <span className="animate-ping">●</span>
            <span>СИСТЕМА: СТАБІЛЬНО</span>
          </div>
          <div className="opacity-50">
            &gt; Реконструкцію завершено<br/>
            &gt; айтішнік розраб на зв&apos;язку<br/>
            &gt; чекаю вказівок...
          </div>
        </div>

        {/* Top Right: Finance HUD (Minimal) */}
        <div className="absolute top-6 right-6 z-[100] pointer-events-auto">
          <FinanceHUD />
        </div>

        {/* Scanlines / Retro Effect */}
        <div className="absolute inset-0 pointer-events-none z-[110] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_2px,2px_100%] opacity-20" />
      </div>

      {/* Task List - Always Sidebar */}
      <div className="w-80 h-full flex-shrink-0">
        <TaskList />
      </div>
    </main>
  )
}
