"use client"
import React, { useState, useEffect } from 'react'

/**
 * OpenClaw Agency HQ - Pixel Art Style
 */

const PixelWindow = ({ position }: { position: string }) => (
  <div className={`absolute ${position} w-24 h-32 border-4 border-[#5C4033] bg-[#2a3a4a] overflow-hidden`}>
    {/* Sunset Glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 via-yellow-500/30 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full h-8 bg-orange-600/40 blur-sm" />
    {/* Window Frame */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#5C4033]" />
    <div className="absolute top-0 left-1/2 w-1 h-full bg-[#5C4033]" />
  </div>
)

const HangingLamp = ({ position }: { position: string }) => (
  <div className={`absolute ${position} flex flex-col items-center z-50`}>
    <div className="w-0.5 h-32 bg-[#5C4033]" />
    <div className="w-8 h-4 bg-[#5C4033] rounded-t-full" />
    <div className="w-10 h-2 bg-yellow-200 shadow-[0_5px_15px_rgba(253,224,71,0.5)]" />
  </div>
)

const Desk = ({ label, character = "🧑‍💻", position = "" }: { label: string, character?: string, position?: string }) => (
  <div className={`absolute ${position} z-30 group`}>
    {/* Name Tag */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/60 text-white px-2 py-0.5 rounded text-[10px] font-pixel border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </div>
    
    {/* Avatar */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl animate-bounce" style={{ animationDuration: '2s' }}>
      {character}
    </div>

    {/* Desk */}
    <div className="w-32 h-16 bg-[#5d4037] border-b-4 border-r-4 border-[#3d2b1f] relative">
      {/* Laptop with glow */}
      <div className="absolute top-2 left-4 w-12 h-8 bg-[#333] rounded-t-sm">
        <div className="absolute inset-1 bg-cyan-400/80 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
      </div>
      {/* Coffee */}
      <div className="absolute top-10 right-4 w-3 h-4 bg-white border border-gray-300 rounded-sm" />
    </div>
  </div>
)

export function Office() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
      {/* WALLS */}
      <div className="absolute top-0 w-full h-2/3 bg-[#2c3e50] border-b-[12px] border-[#3d2b1f] relative">
        {/* Golden Trim */}
        <div className="absolute bottom-0 w-full h-2 bg-[#d4af37]" />
        
        {/* Windows */}
        <PixelWindow position="top-20 left-1/4" />
        <PixelWindow position="top-20 left-1/2 -translate-x-1/2" />
        <PixelWindow position="top-20 right-1/4" />

        {/* Details: Clock */}
        <div className="absolute top-10 right-20 w-16 h-16 rounded-full border-4 border-[#5C4033] bg-white flex items-center justify-center">
          <div className="w-1 h-6 bg-black rounded-full absolute top-2 origin-bottom" />
          <div className="w-1 h-4 bg-black rounded-full absolute top-4 origin-bottom rotate-45" />
          <div className="w-1 h-1 bg-black rounded-full z-10" />
        </div>

        {/* Whiteboard */}
        <div className="absolute top-20 left-10 w-40 h-28 bg-white border-4 border-[#5C4033] p-2 flex flex-wrap gap-1 content-start shadow-lg">
          <div className="w-4 h-4 bg-yellow-300 border border-yellow-400" />
          <div className="w-4 h-4 bg-pink-300 border border-pink-400" />
          <div className="w-4 h-4 bg-cyan-300 border border-cyan-400" />
          <div className="w-4 h-4 bg-green-300 border border-green-400" />
          <div className="w-4 h-4 bg-yellow-300 border border-yellow-400" />
          <div className="w-12 h-1 bg-gray-200 rounded mt-2" />
          <div className="w-20 h-1 bg-gray-200 rounded" />
        </div>

        {/* Bookshelf */}
        <div className="absolute bottom-2 right-10 w-32 h-48 bg-[#4e342e] border-4 border-[#2c1b18] flex flex-col p-1 gap-2">
          <div className="h-1/3 border-b-2 border-[#2c1b18] flex items-end gap-1 px-1">
            <div className="w-2 h-8 bg-blue-500" /><div className="w-2 h-10 bg-red-500" /><div className="w-2 h-9 bg-green-500" />
          </div>
          <div className="h-1/3 border-b-2 border-[#2c1b18] flex items-end gap-1 px-1">
            <div className="w-2 h-10 bg-yellow-500" /><div className="w-2 h-7 bg-purple-500" />
          </div>
          <div className="h-1/3 flex items-end gap-1 px-1">
            <div className="w-2 h-9 bg-orange-500" /><div className="w-2 h-10 bg-cyan-500" />
          </div>
        </div>
      </div>

      {/* FLOOR */}
      <div className="absolute bottom-0 w-full h-1/3 bg-[#3d2b1f] overflow-hidden">
        {/* Dark Wooden Planks */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 100%'
        }} />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '100% 120px'
        }} />
        
        {/* Rug */}
        <div className="absolute top-4 left-10 w-64 h-32 bg-[#7f1d1d] border-4 border-[#450a0a] rounded-sm flex items-center justify-center opacity-80">
          <div className="w-56 h-24 border-2 border-[#b91c1c] opacity-50" />
        </div>
      </div>

      {/* PROPS & FURNITURE */}
      
      {/* Meeting Table */}
      <div className="absolute bottom-16 left-20 w-48 h-24 bg-[#5d4037] border-b-8 border-r-8 border-[#2c1b18] z-20">
        <div className="absolute -top-2 -left-2 w-full h-full border-2 border-white/10" />
      </div>

      {/* Water Cooler */}
      <div className="absolute bottom-20 left-4 z-20 flex flex-col items-center">
        <div className="w-10 h-12 bg-cyan-200/80 rounded-t-xl border-2 border-cyan-400" />
        <div className="w-12 h-16 bg-white border-x-2 border-b-4 border-gray-300" />
      </div>

      {/* Potted Plant */}
      <div className="absolute bottom-10 right-4 z-20 flex flex-col items-center">
        <div className="w-8 h-12 bg-green-600 rounded-t-full border-2 border-green-800" />
        <div className="w-10 h-10 bg-[#8d6e63] border-b-4 border-gray-800" />
      </div>

      {/* MASCOT: Lobster/Crab with Headphones */}
      <div className="absolute bottom-1/3 right-1/4 z-40 flex flex-col items-center group">
        <div className="text-[120px] filter drop-shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-pulse">🦞</div>
        <div className="absolute top-10 w-24 h-24 border-8 border-black/80 rounded-full" /> {/* Headphone band style */}
        <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold -mt-4 border-2 border-red-500">OPENCLAW</div>
      </div>

      {/* DESKS */}
      <Desk label="айтішнік розраб" position="bottom-12 right-1/2" />
      <Desk label="Асистентус" character="🤖" position="bottom-12 left-1/3" />

      {/* LIGHTING */}
      <HangingLamp position="top-0 left-1/3" />
      <HangingLamp position="top-0 right-1/3" />

      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/40 z-50" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-50" />
    </div>
  )
}
