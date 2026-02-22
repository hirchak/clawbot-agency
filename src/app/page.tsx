"use client"
import { Office } from "./Office"
import { TaskList } from "./TaskList"
import { FinanceHUD } from "./FinanceHUD"

export default function Home() {
  return (
    <main className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden font-mono">
      
      {/* FULL PIXEL VIEWPORT */}
      <div className="relative flex-grow h-full bg-black overflow-hidden">
        
        {/* THE OFFICE */}
        <div className="absolute inset-0">
          <Office />
        </div>

        {/* HUD OVERLAY (Corner elements) */}
        
        {/* Top Left: Title (Small & Sleek) */}
        <div className="absolute top-4 left-4 z-[6000] bg-black/40 backdrop-blur-sm border border-white/10 p-2 text-[10px] uppercase tracking-widest text-cyan-400">
           <span className="font-bold">Protocol HQ</span> • Operation Active
        </div>

        {/* Top Right: Finance HUD (Minimal) */}
        <div className="absolute top-4 right-4 z-[6000]">
          <FinanceHUD />
        </div>

        {/* Bottom Right: Mission Log (TaskList as Floating Window) */}
        <div className="absolute bottom-4 right-4 z-[6000]">
          <TaskList />
        </div>

        {/* Bottom Left: Terminal Mini */}
        <div className="absolute bottom-4 left-4 z-[6000] bg-black/40 backdrop-blur-sm border border-white/10 p-2 text-[8px] text-green-500/80 font-mono">
            &gt; SYSTEM STABLE<br/>
            &gt; AOI: SECTOR 7<br/>
            &gt; AGENT: айтішнік розраб
        </div>

        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none z-[7000] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10" />
      </div>

    </main>
  )
}
