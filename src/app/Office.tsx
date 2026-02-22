"use client"
import React from 'react'

const Window = () => (
  <div className="absolute top-10 right-20 w-48 h-64 bg-white border-4 border-[#8B4513] rounded-sm shadow-lg overflow-hidden flex flex-col z-0">
    {/* Sky View */}
    <div className="flex-grow bg-sky-300 relative">
      {/* Sun */}
      <div className="absolute top-4 left-6 w-10 h-10 bg-yellow-200 rounded-full blur-[2px]" />
      {/* Clouds */}
      <div className="absolute top-10 right-4 w-16 h-6 bg-white/80 rounded-full blur-[4px]" />
      <div className="absolute top-24 left-10 w-20 h-8 bg-white/60 rounded-full blur-[6px]" />
      {/* Distant Hills */}
      <div className="absolute bottom-0 w-full h-12 bg-green-500/40 rounded-t-full translate-y-4" />
    </div>
    {/* Window Frame Inner */}
    <div className="absolute inset-0 border-t-2 border-b-2 border-r-2 border-l-2 border-[#8B4513]/20 pointer-events-none" />
    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#8B4513]/40 pointer-events-none" />
    <div className="absolute top-0 left-1/2 w-1 h-full bg-[#8B4513]/40 pointer-events-none" />
  </div>
)

const Plant = () => (
  <div className="absolute -top-12 -left-8 w-12 h-16 flex flex-col items-center">
    {/* Pot */}
    <div className="w-8 h-8 bg-orange-700 rounded-b-lg border-2 border-[#5C4033]" />
    {/* Leaves */}
    <div className="absolute -top-6 w-10 h-10 flex flex-wrap justify-center content-center">
       <div className="w-4 h-6 bg-green-600 rounded-full -rotate-45" />
       <div className="w-4 h-6 bg-green-500 rounded-full rotate-45 -ml-2" />
       <div className="w-5 h-7 bg-green-400 rounded-full -mt-2" />
    </div>
  </div>
)

const CoffeeMug = () => (
  <div className="absolute top-2 right-4 w-6 h-6">
    {/* Steam */}
    <div className="absolute -top-4 left-2 w-0.5 h-3 bg-slate-400/30 rounded-full animate-pulse" />
    {/* Mug Body */}
    <div className="w-full h-full bg-cream-100 border-2 border-[#5C4033] rounded-sm relative">
       {/* Handle */}
       <div className="absolute top-1 -right-2 w-2 h-3 border-2 border-[#5C4033] rounded-r-full" />
    </div>
  </div>
)

const Desk = ({ label }: { label: string }) => {
  return (
    <div className="relative group scale-150">
      <Plant />
      {/* Desk Surface */}
      <div className="relative w-64 h-32 bg-[#DEB887] border-4 border-[#8B4513] rounded-xl shadow-[12px_12px_0px_rgba(139,69,19,0.2)] flex items-center justify-center">
        <CoffeeMug />
        
        {/* Laptop/Monitor (Cartoonish) */}
        <div className="relative w-24 h-16 bg-[#5C4033] rounded-t-md p-1">
           <div className="w-full h-full bg-[#2F4F4F] rounded-sm flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-cyan-400/10 flex flex-col p-1 gap-1">
                 <div className="w-1/2 h-1 bg-cyan-400/40 rounded-full" />
                 <div className="w-3/4 h-1 bg-cyan-400/20 rounded-full" />
                 <div className="mt-auto flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="w-full h-1 bg-white/10 rounded-full" />
                 </div>
              </div>
           </div>
           {/* Base */}
           <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#8B4513] rounded-sm" />
        </div>

        {/* Keyboard area */}
        <div className="absolute bottom-6 left-12 w-20 h-2 bg-[#5C4033]/20 rounded-sm" />

        {/* Character/Avatar (Cozy version) */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-14 h-14 animate-float">
          <div className="w-full h-full bg-white rounded-full border-4 border-[#8B4513] flex items-center justify-center text-2xl shadow-lg">
            🧑‍💻
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
            UKR
          </div>
        </div>

        {/* Label Tag */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white border-2 border-[#8B4513] px-4 py-1 rounded-full text-sm font-bold text-[#8B4513] shadow-md whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  )
}

export function Office() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F5F5DC]">
      {/* Wall Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      
      {/* Floor */}
      <div className="absolute bottom-0 w-full h-1/2 bg-[#DEB887] border-t-8 border-[#A0522D]">
         {/* Wooden Planks */}
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, #8B4513 60px, #8B4513 61px)' }} />
      </div>

      <Window />

      {/* Office Content Area */}
      <div className="relative h-full w-full flex flex-col items-center justify-center pb-24">
        {/* Only YOUR Desk */}
        <div className="z-10">
          <Desk label="айтішнік розраб" />
        </div>
      </div>

      {/* Soft Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(92,64,51,0.1)]" />
    </div>
  )
}
