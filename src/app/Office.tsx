"use client"
import React, { useState, useEffect } from 'react'

/**
 * Асистентус v6.0.1: СПРАВЖНІЙ ПІКСЕЛЬНИЙ ШТАБ (TypeScript Stable)
 */

interface IsoProps {
  x: number;
  y: number;
  children: React.ReactNode;
  z?: number;
}

const IsometricObject: React.FC<IsoProps> = ({ x, y, children, z = 0 }) => (
  <div 
    className="absolute transition-all duration-700"
    style={{ 
      left: `calc(50% + ${(x - y) * 80}px)`, 
      top: `calc(40% + ${(x + y) * 40}px - ${z}px)`,
      zIndex: Math.floor((x + y) * 100) 
    }}
  >
    {children}
  </div>
)

interface DeskProps {
  label: string;
  isMe?: boolean;
  character?: string;
}

const Desk: React.FC<DeskProps> = ({ label, isMe = false, character = "🧑‍💻" }) => (
  <div className="relative group scale-[1.2]">
    {/* Desk Surface */}
    <div className="w-40 h-20 bg-[#3d2b1f] border-[3px] border-black relative rounded-sm shadow-2xl">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_95%,rgba(0,0,0,0.5)_95%)] bg-[size:20px_100%]" />
      
      {/* Monitor */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-14 bg-zinc-900 border-[3px] border-black rounded-sm shadow-xl">
        <div className="absolute inset-1 bg-cyan-900/90 border border-cyan-400/30 overflow-hidden flex flex-col p-1">
            <div className="w-full h-1 bg-cyan-400/40 mb-1 animate-pulse" />
            <div className="w-3/4 h-0.5 bg-cyan-400/20" />
        </div>
      </div>

      {/* Accessories */}
      <div className="absolute top-2 right-4 w-4 h-4 bg-white border-2 border-black rounded-full" />
      <div className="absolute top-2 left-4 w-8 h-1 bg-black/20 rounded-full" />
    </div>

    {/* Chair */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#1a1a2e] border-[3px] border-black rounded-t-xl -z-10 shadow-lg" />

    {/* Character */}
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div className={`mb-3 px-4 py-1.5 bg-black/90 border-2 ${isMe ? 'border-cyan-400 text-cyan-400 shadow-[0_0_15px_#22d3ee66]' : 'border-[#d4af37] text-white'} text-xs font-black uppercase tracking-widest rounded-lg shadow-2xl whitespace-nowrap`}>
        {label}
      </div>
      <div className="text-7xl filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] animate-bounce" style={{ animationDuration: '3s' }}>
        {character}
      </div>
    </div>
  </div>
)

const Window = () => (
  <div className="w-32 h-44 border-[6px] border-[#3d2b1f] bg-[#1a1a2e] relative overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-orange-400/20 to-transparent" />
    <div className="absolute top-1/2 w-full h-1.5 bg-[#3d2b1f]" />
    <div className="absolute left-1/2 h-full w-1.5 bg-[#3d2b1f]" />
    <div className="absolute inset-0 border-[2px] border-black/20" />
  </div>
)

export function Office() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="relative w-full h-full bg-[#050505] overflow-hidden">
      
      {/* 1. WALLS */}
      <div className="absolute top-0 w-full h-[42%] bg-[#1a1a2e] border-b-[12px] border-[#d4af37] shadow-2xl">
        <div className="absolute top-10 left-[8%] flex gap-12">
          <Window /><Window />
        </div>
        <div className="absolute top-10 right-[8%] flex gap-12">
          <Window /><Window />
        </div>

        {/* Clock */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-20 bg-white border-[6px] border-[#3d2b1f] rounded-full flex items-center justify-center shadow-2xl z-20">
          <div className="w-1.5 h-8 bg-black absolute bottom-1/2 origin-bottom rotate-[45deg] rounded-full" />
          <div className="w-1 h-6 bg-red-600 absolute bottom-1/2 origin-bottom rounded-full" />
          <div className="w-3 h-3 bg-black rounded-full z-10" />
        </div>

        {/* Whiteboard */}
        <div className="absolute top-16 left-[30%] w-64 h-40 bg-[#f8fafc] border-[6px] border-[#3d2b1f] p-6 shadow-2xl">
          <div className="flex gap-3 mb-4">
            <div className="w-6 h-6 bg-yellow-300 border-2 border-yellow-500 rotate-3" />
            <div className="w-6 h-6 bg-pink-300 border-2 border-pink-500 -rotate-2" />
            <div className="w-6 h-6 bg-cyan-300 border-2 border-cyan-500 rotate-6" />
          </div>
          <div className="space-y-2 opacity-20">
            <div className="w-full h-1.5 bg-gray-300 rounded" />
            <div className="w-3/4 h-1.5 bg-gray-300 rounded" />
          </div>
        </div>
      </div>

      {/* 2. FLOOR */}
      <div className="absolute bottom-0 w-full h-[58%] bg-[#2c1b18]">
        <div 
          className="absolute inset-0 opacity-60" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v40H0z' fill='none'/%3E%3Cpath d='M0 38h120v2H0z' fill='%23000'/%3E%3Cpath d='M59 0h2v40h-2z' fill='%23000'/%3E%3C/svg%3E")`,
            backgroundSize: '240px 80px',
            transform: 'perspective(800px) rotateX(55deg) scale(2.5)',
            transformOrigin: 'top'
          }} 
        />

        {/* 3. ISOMETRIC ASSETS */}
        <div className="relative w-full h-full">
          
          {/* MASCOT */}
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 opacity-[0.05] pointer-events-none">
            <div className="text-[400px]">🦞</div>
          </div>

          {/* MEETING ZONE */}
          <IsometricObject x={1.8} y={-0.5}>
            <div className="w-[450px] h-[280px] bg-[#5a1a1a] border-[6px] border-black rounded-sm shadow-[20px_20px_0px_rgba(0,0,0,0.3)] flex items-center justify-center relative">
              <div className="absolute inset-4 border-2 border-white/5 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="w-[320px] h-24 bg-[#3d2b1f] border-[4px] border-black shadow-2xl relative">
                 <div className="absolute inset-2 border border-white/5" />
              </div>
              {/* Chairs */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute w-10 h-10 bg-[#1a1a2e] border-[3px] border-black rounded-lg shadow-lg" 
                  style={{ 
                    top: i < 3 ? '-15px' : 'auto', 
                    bottom: i >= 3 ? '-15px' : 'auto',
                    left: `${(i % 3) * 35 + 12}%` 
                  }} 
                />
              ))}
            </div>
          </IsometricObject>

          {/* PROPS */}
          <IsometricObject x={-2.2} y={0.5}>
            <div className="text-9xl filter drop-shadow-2xl">🌿</div>
          </IsometricObject>
          
          <IsometricObject x={-2.2} y={-1.2}>
            <div className="flex flex-col items-center">
              <div className="w-14 h-24 bg-cyan-100/30 border-[4px] border-white/20 rounded-t-full relative">
                <div className="absolute bottom-4 w-full h-1/2 bg-cyan-400/20 animate-pulse" />
              </div>
              <div className="w-16 h-12 bg-gray-400 border-x-[4px] border-b-[6px] border-gray-600" />
            </div>
          </IsometricObject>

          {/* AGENTS */}
          <IsometricObject x={-0.2} y={1.2}>
            <Desk label="айтішнік розраб" isMe={true} />
          </IsometricObject>

          <IsometricObject x={0.8} y={1.2}>
            <Desk label="Асистентус" character="👣" />
          </IsometricObject>

        </div>
      </div>

      {/* 4. ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none z-[200] shadow-[inset_0_0_400px_rgba(0,0,0,0.8)]" />
    </div>
  )
}
