"use client"
import React, { useState, useEffect } from 'react'

/**
 * Асистентус v5.0.2: ЧИСТИЙ PIXEL-ART ОФІС (Стабільна версія)
 */

interface DeskProps {
  label: string;
  character?: string;
  x?: number;
  y?: number;
  isMe?: boolean;
}

const Desk: React.FC<DeskProps> = ({ label, character = "🧑‍💻", x = 0, y = 0, isMe = false }) => (
  <div 
    className="absolute flex flex-col items-center group transition-all duration-500 hover:scale-110"
    style={{ left: `${x}%`, top: `${y}%`, zIndex: Math.floor(y) }}
  >
    {/* Floating Name */}
    <div className={`mb-2 px-2 py-0.5 bg-black/80 border ${isMe ? 'border-cyan-400 text-cyan-400' : 'border-white/20 text-white'} text-[8px] font-mono uppercase tracking-tighter rounded shadow-lg`}>
      {label}
    </div>
    
    {/* Character & Chair */}
    <div className="relative">
      {/* Chair Back */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#2c1b18] border border-black rounded-t-lg -z-10" />
      <div className="text-4xl filter drop-shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
        {character}
      </div>
    </div>

    {/* Desk */}
    <div className="w-24 h-12 bg-[#3d2b1f] border-b-4 border-r-4 border-black relative rounded-sm">
      {/* Laptop */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-6 bg-zinc-800 border border-black rounded-sm overflow-hidden">
        <div className="w-full h-full bg-cyan-500/10 animate-pulse" />
      </div>
      {/* Mug */}
      <div className="absolute top-1 right-2 w-2 h-2 bg-white border border-black rounded-full text-[4px] flex items-center justify-center">☕</div>
    </div>
  </div>
)

interface PropProps {
  icon: string;
  x: number;
  y: number;
  label?: string;
}

const Prop: React.FC<PropProps> = ({ icon, x, y, label = "" }) => (
  <div 
    className="absolute flex flex-col items-center"
    style={{ left: `${x}%`, top: `${y}%`, zIndex: Math.floor(y) }}
  >
    <div className="text-4xl filter drop-shadow-lg">{icon}</div>
    {label && <div className="mt-1 text-[6px] text-white/40 uppercase">{label}</div>}
  </div>
)

export function Office() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="relative w-full h-full bg-[#1a1a2e] overflow-hidden">
      {/* Wall & Floor Split */}
      <div className="absolute top-0 w-full h-[35%] bg-[#1a1a2e] border-b-4 border-[#d4af37]" />
      <div className="absolute bottom-0 w-full h-[65%] bg-[#3d2b1f]/20 bg-[radial-gradient(#3d2b1f_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* BACK WALL DECOR */}
      {/* Windows */}
      <div className="absolute top-[5%] left-[10%] w-20 h-24 bg-gradient-to-t from-orange-500 to-transparent border-2 border-[#3d2b1f] rounded-t-lg opacity-40" />
      <div className="absolute top-[5%] left-[25%] w-20 h-24 bg-gradient-to-t from-orange-500 to-transparent border-2 border-[#3d2b1f] rounded-t-lg opacity-40" />
      
      {/* Whiteboard */}
      <div className="absolute top-[10%] right-[30%] w-40 h-24 bg-white border-4 border-[#3d2b1f] shadow-xl p-2 flex flex-wrap gap-1">
        <div className="w-4 h-4 bg-yellow-300" />
        <div className="w-4 h-4 bg-pink-300" />
        <div className="w-4 h-4 bg-cyan-300" />
      </div>

      {/* CLOCK */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center">
        <div className="w-0.5 h-4 bg-black absolute bottom-1/2 origin-bottom rotate-45" />
        <div className="w-0.5 h-3 bg-red-500 absolute bottom-1/2 origin-bottom" />
      </div>

      {/* MASCOT */}
      <div className="absolute top-[15%] left-[45%] opacity-10 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
        <div className="text-[120px]">🦞</div>
        <div className="text-center font-bold tracking-[1em] text-white -mt-4 text-xs">OPENCLAW</div>
      </div>

      {/* OFFICE FURNITURE & AGENTS */}
      
      {/* Meeting Area */}
      <div className="absolute top-[45%] right-[10%] w-64 h-40 bg-[#5a1a1a]/40 border-2 border-[#3d0a0a] rounded flex items-center justify-center shadow-inner">
        <div className="w-48 h-12 bg-[#3d2b1f] border-b-4 border-black rounded shadow-lg" />
        {/* Chairs around */}
        <div className="absolute -top-4 left-4 w-6 h-6 bg-[#1a1a2e] border border-black rounded" />
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#1a1a2e] border border-black rounded" />
        <div className="absolute -top-4 right-4 w-6 h-6 bg-[#1a1a2e] border border-black rounded" />
      </div>

      {/* Props */}
      <Prop icon="🌿" x={5} y={45} label="Фікус" />
      <Prop icon="🚰" x={15} y={40} label="Кулер" />
      <Prop icon="🛋️" x={10} y={80} />

      {/* ACTIVE AGENTS */}
      <Desk label="айтішнік розраб" character="🧑‍💻" x={45} y={60} isMe={true} />

      {/* Floor Shadows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  )
}
