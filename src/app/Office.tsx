"use client"
import React from 'react'

interface DeskProps {
  label: string;
  active?: boolean;
  className?: string;
  isMain?: boolean;
}

const Desk = ({ label, active, className, isMain }: DeskProps) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Desk Surface */}
      <div className={`
        relative w-48 h-24 
        ${isMain ? 'bg-cyan-900/40 border-cyan-400' : 'bg-slate-800/40 border-slate-600'} 
        border-2 rounded-lg 
        shadow-[8px_8px_0px_rgba(0,0,0,0.4)]
        flex items-center justify-center
        backdrop-blur-sm
      `}>
        {/* Monitor */}
        <div className={`
          absolute -top-8 left-6 w-20 h-14 
          bg-slate-900 border 
          ${active ? 'border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'border-slate-700'}
          rounded-sm flex items-center justify-center overflow-hidden
        `}>
          {active && (
            <div className="w-full h-full relative">
               <div className="absolute inset-0 bg-cyan-500/10 animate-pulse" />
               <div className="absolute top-2 left-2 w-8 h-1 bg-cyan-500/40 rounded-full" />
               <div className="absolute top-4 left-2 w-12 h-1 bg-cyan-500/20 rounded-full" />
               <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full border border-cyan-500/30" />
            </div>
          )}
        </div>

        {/* Keyboard area */}
        <div className="absolute bottom-4 left-6 w-16 h-3 bg-slate-700/50 rounded-sm" />
        
        {/* Character/Avatar placeholder */}
        <div className={`
          absolute -top-12 right-6 w-10 h-10 
          rounded-full border-2 
          ${isMain ? 'bg-cyan-500 border-white shadow-[0_0_15px_rgba(6,182,212,0.8)]' : 'bg-slate-600 border-slate-400'}
          flex items-center justify-center text-[10px] font-bold text-white
          animate-bounce
        `}>
          {isMain ? '💻' : '🤖'}
        </div>

        {/* Label Tag */}
        <div className={`
          absolute -bottom-6 left-1/2 -translate-x-1/2 
          px-2 py-0.5 rounded text-[10px] font-mono border
          ${active ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'bg-slate-900/80 border-slate-700 text-slate-500'}
          whitespace-nowrap uppercase tracking-tighter
        `}>
          {label}
        </div>
      </div>
    </div>
  )
}

export function Office() {
  const others = Array.from({ length: 12 });

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#020617]">
      {/* Infinite Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Stylized Floor Lines */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent" />

      {/* Office Content Area - Perspective Wrapper */}
      <div className="relative h-full w-full flex flex-col items-center pt-32 pb-64 overflow-y-auto no-scrollbar">
        
        {/* Main Agent Section */}
        <div className="mb-32 z-10 scale-125">
          <Desk label="айтішнік розраб" active={true} isMain={true} />
        </div>

        {/* Grid of Other Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-32 gap-y-48 pb-32 opacity-80">
          {others.map((_, i) => (
            <Desk 
              key={i} 
              label={`Субагент #${i + 104}`} 
              active={i % 3 === 0} 
            />
          ))}
        </div>

        {/* Infinite Fade out */}
        <div className="w-full h-64 bg-gradient-to-b from-transparent to-[#020617]" />
      </div>

      {/* Decorative Overlays */}
      <div className="vignette" />
      <div className="scanline" />
      
      {/* Anime Speed Lines Effect (Static or CSS anim) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
         <div className="absolute top-0 left-10 w-px h-full bg-cyan-500" />
         <div className="absolute top-0 right-20 w-px h-1/2 bg-cyan-500" />
         <div className="absolute bottom-0 left-1/4 w-px h-1/3 bg-cyan-500" />
      </div>
    </div>
  )
}
