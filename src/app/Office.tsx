"use client"
import React, { useState, useEffect } from 'react'

/**
 * Асистентус v8.0: ПРОФЕСІЙНИЙ ІГРОВИЙ ШТАБ (Scaled & Detailed)
 * - Зменшені персонажі (більш реалістично)
 * - Покращені ізометричні столи
 * - Чиста композиція
 */

interface IsoProps {
  x: number;
  y: number;
  children: React.ReactNode;
  z?: number;
  scale?: number;
}

const IsometricObject: React.FC<IsoProps> = ({ x, y, children, z = 0, scale = 1 }) => (
  <div 
    className="absolute transition-all duration-700"
    style={{ 
      left: `calc(50% + ${(x - y) * 120}px)`, 
      top: `calc(35% + ${(x + y) * 60}px - ${z}px)`,
      zIndex: Math.floor((x + y) * 100) + 1000,
      transform: `scale(${scale})`
    }}
  >
    {children}
  </div>
)

interface AgentProps {
  label: string;
  isMe?: boolean;
  character?: string;
  status?: string;
}

const AgentDesk: React.FC<AgentProps> = ({ label, isMe = false, character = "🧑‍💻", status = "Працюю..." }) => (
  <div className="relative group scale-[1.2]">
    {/* Desk Surface (Better Proportions) */}
    <div className="w-32 h-16 bg-[#5d4037] border-[3px] border-black relative rounded-sm shadow-xl">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_95%,rgba(0,0,0,0.5)_95%)] bg-[size:8px_100%]" />
      
      {/* Monitor (Scaled down) */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-12 bg-zinc-900 border-[2px] border-black rounded-sm shadow-lg">
        <div className="absolute inset-1 bg-cyan-950 border border-cyan-400/20 overflow-hidden flex flex-col p-1">
            <div className="w-full h-0.5 bg-cyan-400/30 mb-0.5 animate-pulse" />
            <div className="w-2/3 h-0.5 bg-cyan-400/10" />
        </div>
      </div>
      
      {/* Small Accessories */}
      <div className="absolute top-1 right-2 w-2 h-2 bg-white border border-black rounded-full" />
    </div>

    {/* Chair */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#2c1b18] border-[2px] border-black rounded-t-lg -z-10 shadow-md" />

    {/* Character (Smaller, more 'in' the scene) */}
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
      {/* Status Bubble */}
      <div className="mb-1 px-2 py-0.5 bg-black/80 text-[6px] text-cyan-400 border border-cyan-400/30 rounded uppercase tracking-tighter animate-pulse">
        {status}
      </div>
      {/* Character Name */}
      <div className={`mb-1 px-2 py-0.5 bg-white border-2 ${isMe ? 'border-cyan-500' : 'border-black'} text-[7px] font-black uppercase rounded whitespace-nowrap shadow-sm text-black`}>
        {label}
      </div>
      {/* Sprite */}
      <div className="text-4xl filter drop-shadow-lg animate-bounce" style={{ animationDuration: '5s' }}>
        {character}
      </div>
    </div>
  </div>
)

export function Office() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden">
      
      {/* 1. WALLS */}
      <div className="absolute top-0 w-full h-[20%] bg-[#1a1a2e] border-b-[6px] border-[#d4af37] shadow-2xl flex items-center justify-around px-20">
         {/* Windows */}
         <div className="w-20 h-24 border-4 border-[#3d2b1f] bg-gradient-to-t from-orange-600/40 to-transparent" />
         <div className="w-20 h-24 border-4 border-[#3d2b1f] bg-gradient-to-t from-orange-600/40 to-transparent" />
         
         {/* Central Clock */}
         <div className="w-14 h-14 bg-white border-4 border-black rounded-full flex items-center justify-center">
            <div className="w-0.5 h-5 bg-black absolute bottom-1/2 origin-bottom rotate-45" />
         </div>

         <div className="w-20 h-24 border-4 border-[#3d2b1f] bg-gradient-to-t from-orange-600/40 to-transparent" />
         <div className="w-20 h-24 border-4 border-[#3d2b1f] bg-gradient-to-t from-orange-600/40 to-transparent" />
      </div>

      {/* 2. FLOOR */}
      <div className="absolute bottom-0 w-full h-[80%] bg-[#1c1c1c]">
        {/* Dark Wood Pattern */}
        <div className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h120v1H0z' fill='%23000'/%3E%3Cpath d='M59 0h2v40h-2z' fill='%23000'/%3E%3C/svg%3E")`,
            backgroundSize: '240px 80px',
            transform: 'perspective(1000px) rotateX(60deg) scale(3)', 
            transformOrigin: 'top' 
          }}
        />

        {/* 3. ASSETS */}
        <div className="relative w-full h-full">
          
          {/* MASCOT MURAL */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
            <div className="text-[400px]">🦞</div>
          </div>

          {/* MEETING AREA */}
          <IsometricObject x={2.2} y={-1.5}>
            <div className="w-[300px] h-48 bg-[#5a1a1a]/60 border-4 border-black rounded relative flex items-center justify-center shadow-2xl">
               <div className="w-48 h-12 bg-[#3d2b1f] border-2 border-black rounded shadow-inner" />
               <div className="absolute -top-4 left-4 w-6 h-6 bg-[#1a1a2e] border-2 border-black rounded shadow" />
               <div className="absolute -top-4 right-4 w-6 h-6 bg-[#1a1a2e] border-2 border-black rounded shadow" />
            </div>
          </IsometricObject>

          {/* TEAM MEMBERS (Clean spacing, smaller scale) */}
          
          {/* Row 1 */}
          <IsometricObject x={-1.5} y={1.2}>
            <AgentDesk label="айтішнік розраб" character="🧑‍💻" status="Оптимізація UI..." isMe={true} />
          </IsometricObject>

          <IsometricObject x={0} y={1.2}>
            <AgentDesk label="Асистентус" character="🤖" status="Оркестрація..." />
          </IsometricObject>

          <IsometricObject x={1.5} y={1.2}>
            <AgentDesk label="Дослідник" character="🧐" status="Аналіз ринку..." />
          </IsometricObject>

          {/* Row 2 */}
          <IsometricObject x={-0.8} y={2.5}>
            <AgentDesk label="Креативник" character="🎨" status="Брейнштормінг..." />
          </IsometricObject>

          <IsometricObject x={0.8} y={2.5}>
            <AgentDesk label="Аналітик" character="📊" status="Рахую ROI..." />
          </IsometricObject>

          {/* DECOR */}
          <IsometricObject x={-3} y={0}>
            <div className="text-8xl filter drop-shadow-2xl opacity-80">🌿</div>
          </IsometricObject>
          <IsometricObject x={3} y={1.5}>
            <div className="text-7xl filter drop-shadow-2xl opacity-80">🚰</div>
          </IsometricObject>

        </div>
      </div>

      {/* 4. POST-PROCESSING */}
      <div className="absolute inset-0 pointer-events-none z-[5000] shadow-[inset_0_0_300px_rgba(0,0,0,0.8)]" />
    </div>
  )
}
