"use client"
import React, { useState, useEffect } from 'react'

/**
 * Асистентус v7.1: СПРАВЖНІЙ ІГРОВИЙ ШТАБ
 * Виправлено накладання об'єктів та покращено глибину.
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
      left: `calc(50% + ${(x - y) * 140}px)`, 
      top: `calc(35% + ${(x + y) * 70}px - ${z}px)`,
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
  status?: string;
}

const Desk: React.FC<DeskProps> = ({ label, isMe = false, character = "🧑‍💻", status = "Working..." }) => (
  <div className="relative group scale-[1.8]">
    {/* Lamp above desk */}
    <div className="absolute -top-48 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-80">
       <div className="w-1 h-32 bg-zinc-800" />
       <div className="w-12 h-6 bg-yellow-400 rounded-t-full shadow-[0_10px_30px_#facc15]" />
       <div className="w-32 h-40 bg-yellow-400/5 blur-3xl -mt-10" />
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
      
      {/* Accessories */}
      <div className="absolute top-2 right-4 w-4 h-4 bg-white border-2 border-black rounded-full" />
    </div>

    {/* Chair */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#2c1b18] border-[3px] border-black rounded-t-xl -z-10 shadow-lg" />

    {/* Character */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
      {/* Status Text */}
      <div className="absolute -top-16 px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[6px] text-white italic whitespace-nowrap animate-pulse">
        {status}
      </div>
      <div className={`mb-3 px-3 py-1 bg-black border-2 ${isMe ? 'border-cyan-400 text-cyan-400 shadow-[0_0_15px_#22d3ee66]' : 'border-[#d4af37] text-white'} text-[8px] font-bold uppercase tracking-widest rounded shadow-2xl whitespace-nowrap`}>
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
      <div className="absolute top-0 w-full h-[15%] bg-[#1a1a2e] border-b-[8px] border-zinc-900 z-10 flex items-center">
         {/* Clock */}
         <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-zinc-800 rounded-full flex items-center justify-center shadow-lg z-20">
           <div className="w-1 h-5 bg-black absolute bottom-1/2 origin-bottom rotate-45" />
           <div className="w-2 h-2 bg-zinc-900 rounded-full" />
         </div>

         {/* Whiteboard */}
         <div className="absolute top-2 left-[25%] w-48 h-28 bg-white border-4 border-zinc-800 shadow-xl p-3 overflow-hidden">
            <div className="flex gap-2 mb-2">
               <div className="w-4 h-4 bg-yellow-200 border border-zinc-300 rotate-3" />
               <div className="w-4 h-4 bg-pink-200 border border-zinc-300 -rotate-2" />
               <div className="w-4 h-4 bg-cyan-200 border border-zinc-300 rotate-6" />
            </div>
            <div className="space-y-1 opacity-10">
               <div className="w-full h-1.5 bg-zinc-400" />
               <div className="w-2/3 h-1.5 bg-zinc-400" />
            </div>
         </div>

         {/* Bookshelves */}
         <div className="absolute top-2 left-[10%] transform scale-50 origin-top">
            <Bookshelf />
         </div>
         <div className="absolute top-2 right-[10%] transform scale-50 origin-top">
            <Bookshelf />
         </div>
      </div>

      {/* 2. FLOOR (85%) */}
      <div className="absolute bottom-0 w-full h-[85%] bg-[#1c1c1c]">
        {/* Dark wood planks texture */}
        <div className="absolute inset-0 opacity-50" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='40' viewBox='0 0 160 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h160v40H0z' fill='none'/%3E%3Cpath d='M0 39h160v1H0z' fill='%23000'/%3E%3Cpath d='M79 0h1v40h-1z' fill='%23000'/%3E%3C/svg%3E")`,
            backgroundSize: '320px 80px',
            transform: 'perspective(1000px) rotateX(60deg) scale(3)', 
            transformOrigin: 'top' 
          }}
        />

        {/* 3. ISOMETRIC ASSETS */}
        <div className="relative w-full h-full">
          
          {/* MASCOT (Center Mural) */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 opacity-10 pointer-events-none z-0">
            <div className="text-[400px] filter blur-[1px]">🦞</div>
            <div className="text-center font-bold tracking-[1.5em] text-white -mt-10 text-xl opacity-20">OPENCLAW</div>
          </div>

          {/* MEETING AREA (Large, Right) */}
          <IsometricObject x={2.5} y={-1.5} scale={1.2}>
            <div className="relative">
              {/* Rug */}
              <div className="absolute -inset-12 bg-[#5a1a1a] border-4 border-black/60 rounded-sm shadow-2xl -z-10 overflow-hidden">
                 <div className="absolute inset-2 border-2 border-white/5 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              {/* Table */}
              <div className="w-[320px] h-48 bg-[#3d2b1f] border-[6px] border-black shadow-2xl flex items-center justify-center relative">
                 <div className="absolute inset-2 border border-white/5" />
              </div>
              {/* Chairs around table */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute w-12 h-12 bg-[#1a1a2e] border-[3px] border-black rounded shadow-lg" 
                  style={{ 
                    top: i < 3 ? '-25px' : 'auto', 
                    bottom: i >= 3 ? '-25px' : 'auto',
                    left: `${(i % 3) * 35 + 5}%` 
                  }} 
                />
              ))}
            </div>
          </IsometricObject>

          {/* MAIN CHARACTERS - SPREAD OUT */}
          
          {/* Row 1 */}
          <IsometricObject x={-2.5} y={2.5}>
            <Desk label="айтішнік розраб" isMe={true} character="🧑‍💻" status="Pushing to main..." />
          </IsometricObject>

          <IsometricObject x={2.5} y={2.5}>
            <Desk label="Асистентус" character="🤖" status="Commanding..." />
          </IsometricObject>

          {/* Row 2 */}
          <IsometricObject x={-2.5} y={0} scale={0.9}>
            <Desk label="Дослідник" character="🔍" status="Analyzing data..." />
          </IsometricObject>

          <IsometricObject x={2.5} y={0} scale={0.9}>
            <Desk label="Креативник" character="🎨" status="Brainstorming..." />
          </IsometricObject>

          {/* New Character */}
          <IsometricObject x={0} y={1.5} scale={0.95}>
            <Desk label="Дослідник" character="🧐" status="Researching..." />
          </IsometricObject>

          {/* Row 3 / Side */}
          <IsometricObject x={0} y={4} scale={0.95}>
            <Desk label="Бізнес-Аналітик" character="📊" status="Calculating ROI..." />
          </IsometricObject>

          {/* Props for Environment Density */}
          <IsometricObject x={-3} y={-1}>
            <div className="text-9xl filter drop-shadow-2xl">🪴</div>
          </IsometricObject>
          
          <IsometricObject x={-3} y={0.5}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-28 bg-cyan-100/20 border-[4px] border-white/10 rounded-t-full relative">
                <div className="absolute bottom-4 w-full h-1/2 bg-cyan-400/10 animate-pulse" />
              </div>
              <div className="w-20 h-12 bg-gray-500 border-x-[4px] border-b-[6px] border-gray-700" />
            </div>
          </IsometricObject>

        </div>
      </div>

      {/* 4. POST-PROCESSING */}
      <div className="absolute inset-0 pointer-events-none z-[5000] shadow-[inset_0_0_300px_rgba(0,0,0,0.8)]" />
    </div>
  )
}
