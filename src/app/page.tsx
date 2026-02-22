"use client"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { Office } from "./Office"
import { TaskList } from "./TaskList"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-[#020202] text-white overflow-x-hidden selection:bg-cyan-500/30">
      {/* 3D Scene - Main View */}
      <div className="flex-grow h-[60vh] lg:h-screen relative group">
        <Canvas 
          orthographic 
          camera={{ 
            position: [10, 10, 10], 
            zoom: isMobile ? 60 : 120, 
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
        <div className="absolute inset-0 pointer-events-none p-4 lg:p-8 flex flex-col justify-between">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="bg-black/60 backdrop-blur-md border border-white/5 p-3 lg:p-4 rounded-xl flex items-center gap-3 lg:gap-4 shadow-2xl">
               <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
               </div>
               <div>
                  <h1 className="font-bold text-base lg:text-lg tracking-tight leading-none mb-1">Офіс <span className="text-cyan-500 font-mono text-xs lg:text-sm ml-1">v2.0-Alpha</span></h1>
                  <p className="text-[8px] lg:text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Моніторинг інфраструктури субагентів Кло</p>
               </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/5 p-2 lg:p-3 rounded-lg flex flex-col gap-1 items-end shadow-xl">
               <div className="flex items-center gap-2">
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 uppercase font-mono tracking-tighter">Затримка системи:</span>
                  <span className="text-[8px] lg:text-[10px] text-green-500 font-mono font-bold tracking-tight">12мс</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 uppercase font-mono tracking-tighter">Навантаження:</span>
                  <div className="w-12 lg:w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-[42%] h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </div>
               </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-end gap-4">
             <div className="max-w-[14rem] lg:max-w-xs space-y-4">
                <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-4 lg:p-5 rounded-2xl shadow-2xl pointer-events-auto hover:border-cyan-500/30 transition-all group/card">
                   <div className="flex items-center gap-2 mb-2 lg:mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                      <h2 className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-zinc-200">Інфраструктурний вузол-1</h2>
                   </div>
                   <p className="text-[10px] lg:text-xs text-zinc-400 leading-relaxed font-light mb-3 lg:mb-4">
                     Субагент dev-agent виконує процедури оновлення основних компонентів інтерфейсу та локалізації.
                   </p>
                   <div className="flex gap-4">
                      <div className="text-[8px] lg:text-[9px] uppercase text-zinc-500 font-bold border-r border-white/5 pr-4">CPU <span className="text-zinc-200 ml-1">4.2%</span></div>
                      <div className="text-[8px] lg:text-[9px] uppercase text-zinc-500 font-bold">MEM <span className="text-zinc-200 ml-1">1.8GB</span></div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col items-end gap-2">
                <div className="bg-black/60 px-2 lg:px-3 py-1 rounded text-[8px] lg:text-[10px] font-mono text-cyan-500 border border-cyan-500/20">
                   ПРЯМА ТРАНСЛЯЦІЯ
                </div>
                <div className="text-[8px] lg:text-[10px] font-mono opacity-20 text-zinc-500 text-right">
                  AUTH_ID: claw_main_node<br/>
                  STABILITY: НОМІНАЛЬНА
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
