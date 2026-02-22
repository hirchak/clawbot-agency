"use client"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { Office } from "./Office"
import { TaskList } from "./TaskList"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-cyan-500/30">
      {/* 3D Scene - Main View */}
      <div className="flex-grow h-screen relative group">
        <Canvas 
          orthographic 
          camera={{ 
            position: [10, 10, 10], 
            zoom: 120, 
            near: 0.1, 
            far: 1000 
          }} 
          shadows
        >
          <color attach="background" args={["#010101"]} />
          <fog attach="fog" args={["#010101", 15, 30]} />
          
          <ambientLight intensity={0.15} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          <spotLight 
            position={[-8, 12, 8]} 
            angle={0.25} 
            penumbra={1} 
            intensity={4} 
            castShadow 
            shadow-mapSize={[1048, 1048]}
          />
          
          <Office />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>

        {/* HUD Elements Overlaying Canvas */}
        <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-black/60 backdrop-blur-md border border-white/5 p-4 rounded-xl flex items-center gap-4 shadow-2xl">
               <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
               </div>
               <div>
                  <h1 className="font-bold text-lg tracking-tight leading-none mb-1">Office <span className="text-cyan-500 font-mono text-sm ml-1">v2.0-Alpha</span></h1>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Claw Sub-Agent Infrastructure Monitoring</p>
               </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/5 p-3 rounded-lg flex flex-col gap-1 items-end shadow-xl">
               <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-tighter">System Latency:</span>
                  <span className="text-[10px] text-green-500 font-mono font-bold tracking-tight">12ms</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-tighter">Load:</span>
                  <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-[42%] h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </div>
               </div>
            </div>
          </div>

          <div className="flex justify-between items-end">
             <div className="max-w-xs space-y-4">
                <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl pointer-events-auto hover:border-cyan-500/30 transition-all group/card">
                   <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                      <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Infrastructure Node-1</h2>
                   </div>
                   <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                     Sub-agent dev-agent-overhaul-dashboard is currently performing overhaul procedures on primary interface components.
                   </p>
                   <div className="flex gap-4">
                      <div className="text-[9px] uppercase text-zinc-500 font-bold border-r border-white/5 pr-4">CPU <span className="text-zinc-200 ml-1">4.2%</span></div>
                      <div className="text-[9px] uppercase text-zinc-500 font-bold">MEM <span className="text-zinc-200 ml-1">1.8GB</span></div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col items-end gap-2">
                <div className="bg-black/60 px-3 py-1 rounded text-[10px] font-mono text-cyan-500 border border-cyan-500/20">
                   LIVE BROADCAST
                </div>
                <div className="text-[10px] font-mono opacity-20 text-zinc-500 text-right">
                  AUTH_ID: agent_main_subagent_overhaul<br/>
                  STABILITY: NOMINAL
                </div>
             </div>
          </div>
        </div>

        {/* Scanline / Vignette Effects */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      {/* Task List - Right Panel */}
      <TaskList />
    </main>
  )
}
