"use client"
import React, { useState, useEffect } from 'react'

/**
 * Асистентус v7.0: PERFECT HQ RECONSTRUCTION
 * Density, Scale, and Perspective matching reference.
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

interface DeskProps {
  label: string;
  isMe?: boolean;
  character?: string;
}

const Desk: React.FC<DeskProps> = ({ label, isMe = false, character = "🧑‍💻" }) => (
  <div className="relative group scale-[2.0]">
    {/* Lamp above desk */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
       <div className="w-1 h-20 bg-zinc-800" />
       <div className="w-16 h-8 bg-yellow-400/90 rounded-t-full shadow-[0_20px_40px_rgba(250,204,21,0.4)]" />
       <div className="w-40 h-60 bg-yellow-400/5 blur-3xl -mt-10" />
    </div>

    {/* Desk Surface */}
    <div className="w-40 h-20 bg-[#5d4037] border-[3px] border-black relative rounded-sm shadow-2xl">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_95%,rgba(0,0,0,0.5)_95%)] bg-[size:10px_100%]" />
      
      {/* Monitor */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-16 bg-zinc-900 border-[3px] border-black rounded-sm shadow-xl">
        <div className="absolute inset-1 bg-cyan-950 border border-cyan-400/30 overflow-hidden flex flex-col p-1">
            <div className="w-full h-1 bg-cyan-400/40 mb-1 animate-pulse" />
            <div className="w-3/4 h-0.5 bg-cyan-400/20" />
        </div>
      </div>
    </div>

    {/* Chair */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#2c1b18] border-[3px] border-black rounded-t-xl -z-10 shadow-lg" />

    {/* Character */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div className={`mb-3 px-3 py-1 bg-black border-2 ${isMe ? 'border-cyan-400 text-cyan-400' : 'border-[#d4af37] text-white'} text-[8px] font-bold uppercase tracking-widest rounded shadow-2xl whitespace-nowrap`}>
        {label}
      </div>
      <div className="text-7xl filter drop-shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
        {character}
      </div>
    </div>
  </div>
)

const Bookshelf = () => (
  <div className="w-32 h-64 bg-[#3d2b1f] border-[4px] border-black relative overflow-hidden flex flex-col shadow-2xl">
     {[...Array(5)].map((_, i) => (
       <div key={i} className="h-12 border-b-2 border-black flex items-end px-1 gap-0.5">
          {[...Array(6)].map((_, j) => (
            <div key={j} className={`w-3 h-${8 + Math.floor(Math.random()*4)} ${['bg-red-800', 'bg-blue-800', 'bg-green-800', 'bg-yellow-700'][Math.floor(Math.random()*4)]} border border-black/30`} />
          ))}
       </div>
     ))}
  </div>
)

export function Office() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden">
      
      {/* 1. WALL (15%) */}
      <div className="absolute top-0 w-full h-[15%] bg-[#1a1a2e] border-b-[8px] border-zinc-900 z-10">
         {/* Clock */}
         <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-zinc-800 rounded-full flex items-center justify-center shadow-lg">
           <div className="w-1 h-4 bg-black absolute bottom-1/2 origin-bottom rotate-45" />
           <div className="w-2 h-2 bg-zinc-900 rounded-full" />
         </div>

         {/* Whiteboard */}
         <div className="absolute top-2 left-[20%] w-40 h-24 bg-white border-4 border-zinc-800 shadow-xl p-2 overflow-hidden">
            <div className="flex gap-1 mb-2">
               <div className="w-3 h-3 bg-yellow-200 border border-zinc-300 rotate-3" />
               <div className="w-3 h-3 bg-pink-200 border border-zinc-300 -rotate-2" />
            </div>
            <div className="space-y-1 opacity-10">
               <div className="w-full h-1 bg-zinc-400" />
               <div className="w-2/3 h-1 bg-zinc-400" />
            </div>
         </div>

         {/* Bookshelves on the Wall */}
         <div className="absolute top-2 left-[5%] transform scale-50 origin-top">
            <Bookshelf />
         </div>
         <div className="absolute top-2 right-[5%] transform scale-50 origin-top">
            <Bookshelf />
         </div>
      </div>

      {/* 2. FLOOR (85%) */}
      <div className="absolute bottom-0 w-full h-[85%] bg-[#1c1c1c]">
        {/* Dark wood texture */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(#2a2a2a_2px,transparent_2px),linear-gradient(90deg,#2a2a2a_2px,transparent_2px)] bg-[size:100px_100px]" 
          style={{ transform: 'perspective(1000px) rotateX(60deg) scale(3)', transformOrigin: 'top' }}
        />

        {/* 3. ISOMETRIC ASSETS */}
        <div className="relative w-full h-full">
          
          {/* MASCOT (Center, Large) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0">
            <div className="text-[300px] filter blur-sm">🦞</div>
          </div>
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 z-[500] pointer-events-none">
            <div className="text-[200px] filter drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">🦞</div>
          </div>

          {/* MEETING AREA (Large) */}
          <IsometricObject x={1.5} y={-1.5} scale={1.5}>
            <div className="relative">
              {/* Rug */}
              <div className="absolute -inset-10 bg-[#4a1a1a] border-4 border-black/40 rounded-xl shadow-2xl -z-10" />
              {/* Table */}
              <div className="w-[300px] h-40 bg-[#3d2b1f] border-[6px] border-black shadow-2xl flex items-center justify-center">
                 <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:10px_10px] opacity-10" />
              </div>
              {/* Chairs */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute w-12 h-12 bg-zinc-900 border-[3px] border-black rounded-lg shadow-xl" 
                  style={{ 
                    top: i < 3 ? '-20px' : 'auto', 
                    bottom: i >= 3 ? '-20px' : 'auto',
                    left: `${(i % 3) * 35 + 5}%` 
                  }} 
                />
              ))}
            </div>
          </IsometricObject>

          {/* MAIN CHARACTERS (Larger) */}
          <IsometricObject x={-1.2} y={1.2}>
            <Desk label="айтішнік розраб" isMe={true} />
          </IsometricObject>

          <IsometricObject x={1.2} y={1.2}>
            <Desk label="Асистентус" character="🤖" />
          </IsometricObject>

          {/* Props for density */}
          <IsometricObject x={-2.5} y={-1}>
            <div className="text-9xl filter drop-shadow-2xl">🪴</div>
          </IsometricObject>
          <IsometricObject x={2.5} y={1}>
            <div className="text-9xl filter drop-shadow-2xl">☕</div>
          </IsometricObject>

        </div>
      </div>

      {/* 4. VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none z-[5000] shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
    </div>
  )
}
