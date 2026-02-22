"use client"
import React, { useState, useEffect } from 'react'

/**
 * OpenClaw Agency HQ - Pixel Art Style (FINAL FIX)
 */

const PixelWindow = ({ position }: { position: string }) => (
  <div className={`absolute ${position} w-24 h-32 border-4 border-[#5C4033] bg-[#2a3a4a] overflow-hidden`}>
    {/* Sunset Glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 via-yellow-500/30 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full h-8 bg-orange-600/40 blur-sm" />
    {/* Window Frame Details */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#5C4033]" />
    <div className="absolute top-0 left-1/2 w-1 h-full bg-[#5C4033]" />
    <div className="absolute top-0 left-0 w-full h-1 bg-[#5C4033]" />
    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5C4033]" />
  </div>
)

const HangingLamp = ({ position }: { position: string }) => (
  <div className={`absolute ${position} flex flex-col items-center z-50`}>
    <div className="w-0.5 h-32 bg-[#5C4033]" />
    <div className="w-8 h-4 bg-[#5C4033] rounded-t-full" />
    <div className="w-10 h-2 bg-yellow-200 shadow-[0_5px_15px_rgba(253,224,71,0.5)]" />
  </div>
)

const Desk = ({ label, character = "🧑‍💻", position = "", showChair = false }: { label: string, character?: string, position?: string, showChair?: boolean }) => (
  <div className={`absolute ${position} z-30 group flex flex-col items-center`}>
    {/* Pixel Bubble */}
    <div className="relative mb-8 bg-black border-2 border-white px-3 py-1 text-white text-[10px] font-pixel shadow-[2px_2px_0px_#000]">
      {label}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r-2 border-b-2 border-white rotate-45" />
    </div>
    
    {/* Avatar */}
    <div className="text-4xl mb-2 animate-bounce" style={{ animationDuration: '2s' }}>
      {character}
    </div>

    {/* Chair (for yours) */}
    {showChair && (
      <div className="absolute bottom-1 w-16 h-12 bg-[#2c1b18] border-2 border-black rounded-t-lg -z-10" />
    )}

    {/* Desk (LARGE) */}
    <div className="w-48 h-20 bg-[#5d4037] border-b-4 border-r-4 border-[#2c1b18] relative shadow-2xl">
      {/* Computer with glowing screen */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-14 bg-[#333] border-2 border-gray-800 rounded-sm">
        <div className="absolute inset-1 bg-cyan-400/90 shadow-[0_0_15px_rgba(34,211,238,1)] overflow-hidden flex flex-col p-1">
            <div className="w-full h-0.5 bg-white/20 mb-0.5" />
            <div className="w-full h-0.5 bg-white/20 mb-0.5" />
            <div className="w-2/3 h-0.5 bg-white/20" />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#222]" />
      </div>
    </div>
  </div>
)

export function Office() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full bg-[#1a1a1a] flex flex-col items-center justify-center overflow-hidden">
      {/* WALL (Top 40%) */}
      <div className="absolute top-0 w-full h-[40%] bg-[#0f172a] flex flex-col">
        {/* Windows */}
        <PixelWindow position="top-10 left-[10%]" />
        <PixelWindow position="top-10 left-1/2 -translate-x-1/2" />
        <PixelWindow position="top-10 right-[10%]" />

        {/* Whiteboard with stickers */}
        <div className="absolute top-16 left-[25%] w-48 h-32 bg-white border-4 border-[#3d2b1f] p-3 flex flex-wrap gap-2 content-start shadow-xl">
          <div className="w-5 h-5 bg-yellow-300 border border-yellow-500 shadow-sm" />
          <div className="w-5 h-5 bg-pink-300 border border-pink-500 shadow-sm" />
          <div className="w-5 h-5 bg-cyan-300 border border-cyan-500 shadow-sm" />
          <div className="w-5 h-5 bg-green-300 border border-green-500 shadow-sm" />
          <div className="w-full h-1 bg-gray-100 rounded mt-4" />
          <div className="w-3/4 h-1 bg-gray-100 rounded" />
        </div>

        {/* Mascot Mural (LARGE 200px+) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-30 select-none pointer-events-none">
            <div className="text-[240px] leading-none filter grayscale blur-[1px]">🦞</div>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 font-pixel text-4xl font-bold tracking-[1em] mt-20">OPENCLAW HQ</span>
            </div>
        </div>
      </div>

      {/* Golden Crown Molding */}
      <div className="absolute top-[40%] w-full h-4 bg-[#d4af37] border-y border-black/20 z-20 shadow-lg" />

      {/* FLOOR (Bottom 60%) */}
      <div className="absolute bottom-0 w-full h-[60%] bg-[#3d2b1f] overflow-hidden">
        {/* SVG Repeating Dark Wood Plank Pattern */}
        <div className="absolute inset-0 opacity-50" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='40' viewBox='0 0 160 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h160v40H0z' fill='%233d2b1f'/%3E%3Cpath d='M0 39h160v1H0z' fill='%232c1b18'/%3E%3Cpath d='M79 0h2v40h-2z' fill='%232c1b18'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 40px'
        }} />
        
        {/* Meeting Area (Right Side) */}
        <div className="absolute top-1/4 right-[5%] z-20">
            {/* Red Rug */}
            <div className="w-[300px] h-[180px] bg-[#7f1d1d] border-4 border-[#450a0a] rounded-sm flex items-center justify-center relative shadow-inner">
                <div className="absolute inset-2 border-2 border-[#b91c1c] opacity-30" />
                
                {/* Long Table */}
                <div className="w-48 h-12 bg-[#5d4037] border-2 border-black/40 shadow-xl z-10 relative">
                     {/* Table Top detail */}
                     <div className="absolute inset-x-2 top-2 h-1 bg-white/5" />
                </div>

                {/* Chairs around table */}
                <div className="absolute -top-4 left-4 w-10 h-10 bg-[#2c1b18] border border-black rounded" />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#2c1b18] border border-black rounded" />
                <div className="absolute -top-4 right-4 w-10 h-10 bg-[#2c1b18] border border-black rounded" />
                
                <div className="absolute -bottom-4 left-4 w-10 h-10 bg-[#2c1b18] border border-black rounded" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#2c1b18] border border-black rounded" />
                <div className="absolute -bottom-4 right-4 w-10 h-10 bg-[#2c1b18] border border-black rounded" />
            </div>
        </div>

        {/* MASCOT: Central Lobster (Middle of floor) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
            <div className="text-[200px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-pulse select-none">🦞</div>
            <div className="bg-black/90 text-[#d4af37] px-6 py-2 rounded-sm text-sm font-pixel border-2 border-[#d4af37] -mt-10 shadow-2xl tracking-widest uppercase font-bold">
                COMMANDER LOBSTER
            </div>
        </div>
      </div>

      {/* DESKS (Row of 2-3 centered) */}
      <div className="absolute bottom-[15%] w-full flex justify-center gap-24 z-50">
          {/* YOUR DESK */}
          <Desk label="айтішнік розраб" position="relative" showChair={true} />
          <Desk label="Асистентус" character="🤖" position="relative" />
          <Desk label="OpenClaw Bot" character="🦾" position="relative" />
      </div>

      {/* LIGHTING */}
      <HangingLamp position="top-0 left-1/4" />
      <HangingLamp position="top-0 right-1/4" />

      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20 z-[60]" />
    </div>
  )
}
