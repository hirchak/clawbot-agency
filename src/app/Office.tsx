"use client"
import React, { useState, useEffect } from 'react'

/**
 * OpenClaw Agency HQ - Pixel Art Style (FINAL FIX)
 */

const PixelWindow = ({ position }: { position: string }) => (
  <div className={`absolute ${position} w-24 h-32 border-4 border-[#3d2b1f] bg-[#2a3a4a] overflow-hidden`}>
    {/* Sunset Glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#ff8c00] via-[#ffd700]/30 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full h-8 bg-[#ff4500]/40 blur-sm" />
    {/* Window Frame Details */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#3d2b1f]" />
    <div className="absolute top-0 left-1/2 w-1 h-full bg-[#3d2b1f]" />
    <div className="absolute top-0 left-0 w-full h-1 bg-[#3d2b1f]" />
    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3d2b1f]" />
  </div>
)

const HangingLamp = ({ position }: { position: string }) => (
  <div className={`absolute ${position} flex flex-col items-center z-50`}>
    <div className="w-0.5 h-32 bg-[#1a1a2e]" />
    <div className="w-8 h-4 bg-[#3d2b1f] rounded-t-full border-x-2 border-t-2 border-black" />
    <div className="w-10 h-2 bg-yellow-200 shadow-[0_5px_20px_rgba(253,224,71,0.6)]" />
  </div>
)

const Desk = ({ label, character = "🧑‍💻", position = "", showChair = false, isMe = false }: { label: string, character?: string, position?: string, showChair?: boolean, isMe?: boolean }) => (
  <div className={`absolute ${position} z-30 group flex flex-col items-center`}>
    {/* Pixel Bubble */}
    <div className={`relative mb-8 bg-[#1a1a2e] border-2 ${isMe ? 'border-cyan-400' : 'border-[#d4af37]'} px-3 py-1 text-white text-[10px] font-pixel shadow-[4px_4px_0px_#000] uppercase tracking-widest`}>
      {label}
      <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a2e] border-r-2 border-b-2 ${isMe ? 'border-cyan-400' : 'border-[#d4af37]'} rotate-45`} />
    </div>
    
    {/* Avatar */}
    <div className="text-5xl mb-2 animate-bounce flex flex-col items-center" style={{ animationDuration: '2s' }}>
      <span className="filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">{character}</span>
      {isMe && <div className="text-[8px] bg-cyan-400 text-black px-1 font-bold -mt-2 z-10">PRO MAX</div>}
    </div>

    {/* Chair */}
    {showChair && (
      <div className="absolute bottom-6 w-16 h-16 bg-[#2c1b18] border-2 border-black rounded-t-xl -z-10 shadow-lg">
         <div className="absolute top-2 left-2 right-2 h-1 bg-white/5 rounded-full" />
      </div>
    )}

    {/* Desk (LARGE) */}
    <div className="w-56 h-24 bg-[#3d2b1f] border-b-8 border-r-8 border-black relative shadow-2xl">
      {/* Wood texture */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_95%,rgba(0,0,0,0.4)_95%)] bg-[length:20px_100%]" />
      
      {/* Desk Lamp */}
      <div className="absolute -top-8 left-4 w-6 h-8 flex flex-col items-center">
         <div className="w-4 h-1 bg-gray-800" />
         <div className="w-1 h-4 bg-gray-700" />
         <div className="w-6 h-4 bg-orange-500 rounded-t-full border border-black shadow-[0_-2px_10px_rgba(249,115,22,0.5)]" />
      </div>

      {/* Computer with glowing screen */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-18 bg-[#111] border-2 border-gray-900 rounded-sm shadow-xl">
        <div className="absolute inset-1 bg-cyan-900/90 border border-cyan-400/30 overflow-hidden flex flex-col p-1">
            <div className="w-full h-1 bg-cyan-400/40 mb-1 animate-pulse" />
            <div className="w-3/4 h-0.5 bg-cyan-400/20 mb-1" />
            <div className="w-full h-0.5 bg-cyan-400/20 mb-1" />
            <div className="w-1/2 h-0.5 bg-cyan-400/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent" />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-[#111] border-x border-black" />
      </div>

      {/* Coffee cup */}
      <div className="absolute -top-4 right-6 w-4 h-4 bg-white border border-gray-300 rounded-sm">
         <div className="absolute top-1 left-1 w-2 h-2 bg-amber-900 rounded-full" />
         <div className="absolute -right-1 top-1 w-2 h-2 border-2 border-gray-300 rounded-full" />
      </div>
    </div>
  </div>
)

export function Office() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full bg-[#1a1a2e] flex flex-col items-center justify-center overflow-hidden">
      {/* WALL (Top 40%) */}
      <div className="absolute top-0 w-full h-[40%] bg-[#1a1a2e] flex flex-col">
        {/* Windows with Sunset */}
        <PixelWindow position="top-10 left-[8%]" />
        <PixelWindow position="top-10 left-[35%]" />
        <PixelWindow position="top-10 right-[35%]" />
        <PixelWindow position="top-10 right-[8%]" />

        {/* Analog Clock */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#eee] border-4 border-[#3d2b1f] rounded-full flex items-center justify-center shadow-lg z-20">
           <div className="w-1 h-6 bg-black absolute origin-bottom bottom-1/2" style={{ transform: 'rotate(45deg)' }} />
           <div className="w-1 h-4 bg-red-600 absolute origin-bottom bottom-1/2" style={{ transform: 'rotate(180deg)' }} />
           <div className="w-2 h-2 bg-black rounded-full z-10" />
        </div>

        {/* Whiteboard with sticky notes */}
        <div className="absolute top-16 left-[18%] w-56 h-36 bg-[#f8fafc] border-4 border-[#3d2b1f] p-4 flex flex-wrap gap-2 content-start shadow-2xl">
          <div className="w-6 h-6 bg-yellow-300 border border-yellow-500 shadow-sm rotate-3" />
          <div className="w-6 h-6 bg-pink-300 border border-pink-500 shadow-sm -rotate-2" />
          <div className="w-6 h-6 bg-cyan-300 border border-cyan-500 shadow-sm rotate-6" />
          <div className="w-6 h-6 bg-green-300 border border-green-500 shadow-sm -rotate-3" />
          <div className="w-full h-1 bg-gray-200 rounded mt-6" />
          <div className="w-3/4 h-1 bg-gray-200 rounded" />
          <div className="w-1/2 h-1 bg-gray-200 rounded" />
        </div>

        {/* Mascot Mural (HUGE LOBSTER) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-10 select-none pointer-events-none">
            <div className="text-[350px] leading-none filter blur-[2px]">🦞</div>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-pixel text-6xl font-bold tracking-[0.5em] mt-32">OPENCLAW</span>
            </div>
        </div>

        {/* Water Cooler */}
        <div className="absolute bottom-4 left-[5%] w-12 h-24 flex flex-col items-center z-20">
           <div className="w-10 h-14 bg-cyan-200/50 border-2 border-white/20 rounded-t-full relative">
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-8 bg-cyan-400/30 rounded-full animate-pulse" />
           </div>
           <div className="w-12 h-10 bg-gray-300 border-x-2 border-b-4 border-gray-400 rounded-b-sm" />
        </div>
      </div>

      {/* Golden Trim Molding (10px) */}
      <div className="absolute top-[40%] w-full h-[10px] bg-[#d4af37] border-y-2 border-black/40 z-20 shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />

      {/* FLOOR (Bottom 60%) */}
      <div className="absolute bottom-0 w-full h-[60%] bg-[#3d2b1f] overflow-hidden">
        {/* Deep Walnut Wood Plank Pattern */}
        <div className="absolute inset-0 opacity-80" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='40' viewBox='0 0 200 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h200v40H0z' fill='%233d2b1f'/%3E%3Cpath d='M0 38h200v2H0z' fill='%232c1b18'/%3E%3Cpath d='M99 0h2v40h-2z' fill='%232c1b18'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 40px'
        }} />
        
        {/* Meeting Zone (Right Side) */}
        <div className="absolute top-[10%] right-[8%] z-20">
            {/* Patterned Rug */}
            <div className="w-[340px] h-[220px] bg-[#5a1a1a] border-8 border-[#3d0a0a] rounded-sm flex items-center justify-center relative shadow-2xl">
                <div className="absolute inset-2 border-4 border-[#7f1d1d] opacity-40 bg-[radial-gradient(#b91c1c_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Large Wooden Conference Table */}
                <div className="w-64 h-20 bg-[#3d2b1f] border-b-4 border-r-4 border-black shadow-2xl z-10 relative">
                     <div className="absolute inset-2 border border-white/5" />
                </div>

                {/* Office Chairs */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1a1a2e] border-2 border-black rounded shadow-lg" />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1a1a2e] border-2 border-black rounded shadow-lg" />
                <div className="absolute -top-6 right-8 w-12 h-12 bg-[#1a1a2e] border-2 border-black rounded shadow-lg" />
                
                <div className="absolute -bottom-6 left-8 w-12 h-12 bg-[#1a1a2e] border-2 border-black rounded shadow-lg" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1a1a2e] border-2 border-black rounded shadow-lg" />
                <div className="absolute -bottom-6 right-8 w-12 h-12 bg-[#1a1a2e] border-2 border-black rounded shadow-lg" />
            </div>
        </div>

        {/* Large Plant */}
        <div className="absolute bottom-10 left-10 z-30 flex flex-col items-center">
           <div className="w-12 h-10 bg-[#3d2b1f] border-b-4 border-r-4 border-black" />
           <div className="text-6xl -mt-16 animate-pulse">🌿</div>
        </div>

        {/* THE CRAB MASCOT (HUGE, CENTER) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
            <div className="relative">
                <div className="text-[280px] filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] select-none">🦞</div>
                {/* Headphones */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[240px] h-[140px] border-[20px] border-gray-800 rounded-full border-b-0 opacity-80" />
            </div>
            <div className="bg-[#1a1a2e]/95 text-cyan-400 px-10 py-4 border-4 border-cyan-400 -mt-16 shadow-[10px_10px_0px_#000] tracking-[0.3em] font-bold uppercase text-lg">
                BIG BOSS CRAB
            </div>
        </div>
      </div>

      {/* DESKS (Prominent Placement) */}
      <div className="absolute bottom-[10%] w-full flex justify-center gap-40 z-50">
          {/* YOUR DESK: Prominent */}
          <Desk label="айтішнік розраб" character="🧑‍💻" position="relative" showChair={true} isMe={true} />
          
          {/* Assistant Desk */}
          <Desk label="Дизайнер-Про" character="🎨" position="relative" showChair={true} />
      </div>

      {/* LIGHTING */}
      <HangingLamp position="top-0 left-[20%]" />
      <HangingLamp position="top-0 right-[20%]" />

      {/* Immersive shadows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,transparent_20%,rgba(0,0,0,0.4)_100%)] z-[60]" />
    </div>
  )
}
