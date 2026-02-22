"use client"
import React, { useState, useEffect } from 'react'

/**
 * Асистентус v2.8-Alpha: Стабілізована Ізометрична Геометрія
 * 
 * DESIGN: Clean Isometric (30°) Ghibli Style
 */

interface DeskProps {
  label: string;
  isForeground?: boolean;
  opacity?: number;
  scale?: number;
  translateY?: number;
  translateX?: number;
}

const Desk: React.FC<DeskProps> = ({ 
  label, 
  isForeground = false, 
  opacity = 1, 
  scale = 1, 
  translateY = 0, 
  translateX = 0 
}) => {
  return (
    <div 
      className="absolute transition-all duration-1000"
      style={{ 
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        opacity,
        zIndex: 100 - Math.abs(translateY / 10)
      }}
    >
      <div className="relative">
        {/* Shadow */}
        <div className="absolute top-12 left-4 w-48 h-24 bg-black/10 blur-xl rounded-full transform -rotate-12" />

        {/* Desk Group */}
        <div className="relative">
          {/* Top Face */}
          <div 
            className="w-48 h-24 bg-[#DEB887] border-[3px] border-[#5C4033] rounded-sm relative z-20"
            style={{ transform: 'rotate(-30deg) skew(30deg)' }}
          >
            {isForeground && (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Laptop Top */}
                <div className="w-16 h-12 bg-[#333] border-2 border-black/40 rounded-sm" />
              </div>
            )}
          </div>

          {/* Front Right Face */}
          <div 
            className="w-[41px] h-4 bg-[#C19A6B] border-x-[3px] border-b-[3px] border-[#5C4033] absolute z-10"
            style={{ transform: 'skewY(30deg)', top: 34, left: 41.5 }}
          />
          
          {/* Front Left Face */}
          <div 
            className="w-[41px] h-4 bg-[#A67B5B] border-x-[3px] border-b-[3px] border-[#5C4033] absolute z-10"
            style={{ transform: 'skewY(-30deg)', top: 34, left: 0 }}
          />

          {/* Legs */}
          <div className="absolute top-10 left-2 w-2 h-12 bg-[#8B4513] border-2 border-[#5C4033] z-0" />
          <div className="absolute top-10 right-2 w-2 h-12 bg-[#8B4513] border-2 border-[#5C4033] z-0" />
          <div className="absolute top-2 left-1/2 w-2 h-12 bg-[#8B4513] border-2 border-[#5C4033] z-0 opacity-50" />
        </div>

        {isForeground && (
          <>
            {/* Monitor */}
            <div className="absolute -top-16 left-16 z-30">
               <div className="w-16 h-12 bg-[#2F4F4F] border-[3px] border-[#5C4033] rounded-md shadow-lg overflow-hidden relative">
                  <div className="w-full h-full bg-cyan-400/5 animate-pulse" />
                  <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white/20" />
               </div>
               <div className="w-1 h-4 bg-[#5C4033] mx-auto" />
               <div className="w-8 h-1 bg-[#5C4033] mx-auto rounded-full" />
            </div>

            {/* Coffee Mug */}
            <div className="absolute top-4 -right-4 z-30">
               <div className="w-4 h-5 bg-[#F5F5DC] border-2 border-[#5C4033] rounded-sm" />
               <div className="w-2 h-3 border-2 border-[#5C4033] rounded-r-full absolute top-1 -right-1" />
            </div>

            {/* Plant */}
            <div className="absolute -top-8 -left-4 z-30">
               <div className="w-6 h-6 bg-[#D2691E] border-2 border-[#5C4033] rounded-sm" />
               <div className="w-4 h-8 bg-green-500 border-2 border-[#5C4033] rounded-full absolute -top-6 left-1" />
            </div>

            {/* Avatar */}
            <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
               <div className="w-16 h-16 bg-white border-4 border-[#8B4513] rounded-full flex items-center justify-center text-3xl shadow-xl overflow-hidden relative animate-bounce" style={{ animationDuration: '3s' }}>
                  🧑‍💻
                  <div className="absolute bottom-0 w-full h-1/3 bg-[#DEB887]/20" />
               </div>
               <div className="mt-1 px-2 py-0.5 bg-blue-600 border-2 border-white rounded-full text-[10px] text-white font-bold shadow-md">UA</div>
            </div>
          </>
        )}

        {/* Label */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white border-[3px] border-[#8B4513] px-4 py-1 rounded-lg text-sm font-bold text-[#8B4513] shadow-[3px_3px_0px_#8B4513] whitespace-nowrap z-50">
          {label}
        </div>
      </div>
    </div>
  )
}

export function Office() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#FDF5E6] flex items-center justify-center">
      {/* Wall Texture */}
      <div className="absolute top-0 w-full h-1/2 bg-[#FFFACD]/30 border-b-4 border-[#DEB887]/20" />
      
      {/* Floor Tiles */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div 
           className="w-full h-full" 
           style={{ 
             backgroundImage: `
               linear-gradient(30deg, #8B4513 1px, transparent 1px),
               linear-gradient(150deg, #8B4513 1px, transparent 1px)
             `,
             backgroundSize: '100px 173px',
           }} 
         />
      </div>

      {/* Infinite Horizon Area */}
      <div className="relative w-full h-full flex flex-col items-center justify-center pt-40">
        
        {/* Infinite Grid */}
        <div className="relative w-full flex flex-col items-center">
           {/* Deep Background */}
           {[5, 4, 3, 2, 1].map((i) => (
             <Desk 
               key={`back-${i}`}
               label=""
               opacity={0.15 / i}
               scale={0.4 / (i * 0.5 + 1)}
               translateY={-i * 80 - 100}
               translateX={(i % 2 === 0 ? 300 : -300) * i}
             />
           ))}

           {/* Central Row */}
           {[3, 2, 1].map((i) => (
             <Desk 
               key={`row-${i}`}
               label=""
               opacity={0.2 / i}
               scale={0.6 / i}
               translateY={-i * 120 - 50}
             />
           ))}

           {/* ACTIVE DESK */}
           <div className="relative z-50 mt-20">
             <Desk 
               label="айтішнік розраб" 
               isForeground={true}
               scale={1.2}
             />
           </div>
        </div>
      </div>

      {/* Decorative Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden opacity-30">
         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
         <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_300px_rgba(139,69,19,0.1)]" />
    </div>
  )
}
