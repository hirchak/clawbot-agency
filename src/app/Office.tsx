"use client"
import React from 'react'

/**
 * Isometric Ghibli-style Office
 * 
 * DESIGN NOTES:
 * 1. Isometric Perspective (2.5D): Uses a container with 60deg/30deg or rotateX(45)/rotateZ(45) logic.
 *    We'll use a manual isometric grid (30-degree angles) for better control with CSS transforms.
 * 2. Infinite Grid: Recursive rows of desks fading into the distance.
 * 3. VOLUME: Objects have faces (top, side-left, side-right) to feel 3D.
 * 4. Style: Warm Ghibli lines, soft colors, cozy details.
 */

const ISO_ANGLE = 30; // degrees

// 3D Cuboid Helper
const Cube = ({ 
  w, h, d, 
  colorTop = "#DEB887", 
  colorFront = "#C19A6B", 
  colorSide = "#A67B5B",
  className = "" 
}) => (
  <div className={`relative ${className}`} style={{ width: w, height: d }}>
    {/* Top Face */}
    <div 
      className="absolute inset-0 z-20 border-2 border-[#5C4033]" 
      style={{ 
        backgroundColor: colorTop,
        transform: `rotateX(60deg) rotateZ(45deg) scale(1.414)`,
      }} 
    />
    {/* Front Face (Right-facing in ISO) */}
    <div 
      className="absolute z-10 border-2 border-[#5C4033]" 
      style={{ 
        backgroundColor: colorFront,
        width: w,
        height: h,
        transform: `skewY(${ISO_ANGLE}deg)`,
        top: d * 0.5,
        left: w * 0.5,
      }} 
    />
    {/* Side Face (Left-facing in ISO) */}
    <div 
      className="absolute z-10 border-2 border-[#5C4033]" 
      style={{ 
        backgroundColor: colorSide,
        width: d,
        height: h,
        transform: `skewY(-${ISO_ANGLE}deg)`,
        top: d * 0.5,
        left: -d * 0.5 + w * 0.5,
      }} 
    />
  </div>
)

const ISOPlant = () => (
  <div className="absolute -top-16 -left-10 z-30">
    {/* Pot */}
    <div className="relative w-8 h-8">
        <div className="absolute w-6 h-6 bg-[#D2691E] border-2 border-[#5C4033] rounded-sm" style={{ transform: `rotateX(60deg) rotateZ(45deg)` }} />
        <div className="absolute w-6 h-4 bg-[#8B4513] border-2 border-[#5C4033] top-2 -left-1" style={{ transform: `skewY(${ISO_ANGLE}deg)` }} />
        <div className="absolute w-4 h-4 bg-[#5C4033] border-2 border-[#5C4033] top-2 left-2" style={{ transform: `skewY(-${ISO_ANGLE}deg)` }} />
    </div>
    {/* Leaves - with VOLUME (two sides) */}
    <div className="absolute -top-10 left-0">
       <div className="relative w-6 h-10">
          <div className="absolute inset-0 bg-green-600 border-2 border-[#5C4033] rounded-full" style={{ transform: `rotateY(45deg)` }} />
          <div className="absolute inset-0 bg-green-500 border-2 border-[#5C4033] rounded-full" style={{ transform: `rotateY(-45deg)` }} />
       </div>
    </div>
  </div>
)

const ISOMug = () => (
  <div className="absolute top-4 right-8 z-30">
     {/* Mug Top */}
     <div className="w-5 h-5 bg-[#F5F5DC] border-2 border-[#5C4033] rounded-full" style={{ transform: `scaleY(0.5)` }} />
     {/* Mug Body */}
     <div className="relative w-5 h-4 bg-[#F5F5DC] border-x-2 border-b-2 border-[#5C4033] -mt-2">
        {/* Coffee level shadow */}
        <div className="absolute top-0 w-full h-1 bg-[#5C4033]/20" />
     </div>
     {/* Handle */}
     <div className="absolute top-1 -right-2 w-2 h-3 border-2 border-[#5C4033] rounded-r-full" />
  </div>
)

const ISODesk = ({ label, isForeground = false, opacity = 1 }: { label: string, isForeground?: boolean, opacity?: number }) => {
  return (
    <div className="relative group" style={{ opacity }}>
      {/* 3D Shadow */}
      <div 
        className="absolute w-72 h-40 bg-black/10 blur-xl rounded-[50%] z-0" 
        style={{ transform: `rotateX(60deg) rotateZ(45deg) translate(20px, 20px)` }}
      />

      {/* Desk Body (Volume) */}
      <div className="relative z-10">
        {/* Table Top */}
        <div 
           className="w-64 h-32 border-4 border-[#8B4513] rounded-md relative z-20"
           style={{ 
             backgroundColor: "#DEB887",
             transform: `rotateX(60deg) rotateZ(45deg)`,
             boxShadow: `inset 0 0 20px rgba(0,0,0,0.1)`
           }}
        >
          {isForeground && (
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Laptop Flat View on Table */}
               <div className="w-20 h-14 bg-[#5C4033] rounded-sm border-2 border-black/20" />
            </div>
          )}
        </div>
        
        {/* Table Front-Right Side */}
        <div 
           className="absolute w-64 h-4 bg-[#C19A6B] border-x-4 border-b-4 border-[#8B4513] z-10"
           style={{ transform: `skewY(${ISO_ANGLE}deg)`, top: 40, left: 37 }}
        />
        {/* Table Front-Left Side */}
        <div 
           className="absolute w-32 h-4 bg-[#A67B5B] border-x-4 border-b-4 border-[#8B4513] z-10"
           style={{ transform: `skewY(-${ISO_ANGLE}deg)`, top: 40, left: -47 }}
        />

        {/* Legs */}
        <div className="absolute top-44 -left-4 w-3 h-16 bg-[#8B4513] border-2 border-[#5C4033]" />
        <div className="absolute top-56 left-32 w-3 h-16 bg-[#8B4513] border-2 border-[#5C4033]" />
        <div className="absolute top-44 right-2 w-3 h-16 bg-[#8B4513] border-2 border-[#5C4033]" />
      </div>

      {isForeground && (
        <>
          <ISOPlant />
          <ISOMug />
          {/* Monitor Volume */}
          <div className="absolute -top-12 left-24 z-30">
             {/* Stand (Box) */}
             <div className="relative w-4 h-6 bg-[#5C4033] border-2 border-[#5C4033] mt-10" style={{ transform: `rotateX(60deg) rotateZ(45deg)` }} />
             {/* Screen Body (Volume) */}
             <div className="relative transform-gpu">
                {/* Screen Main Face */}
                <div className="w-24 h-16 bg-[#2F4F4F] border-4 border-[#5C4033] rounded-md shadow-xl overflow-hidden relative">
                   <div className="w-full h-full bg-cyan-400/10 animate-pulse" />
                   {/* Ghibli style light reflection */}
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
                {/* Left Side Face */}
                <div className="absolute top-0 -left-2 w-2 h-16 bg-[#3d2b22] border-y-4 border-l-4 border-[#5C4033] rounded-l-md" style={{ transform: `skewY(-${ISO_ANGLE}deg)` }} />
                {/* Bottom Edge Face */}
                <div className="absolute -bottom-2 left-0 w-24 h-2 bg-[#1a2d2d] border-x-4 border-b-4 border-[#5C4033] rounded-b-md" style={{ transform: `skewX(-45deg)` }} />
             </div>
          </div>

          {/* Character */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-40 animate-float">
             <div className="w-20 h-20 bg-white rounded-full border-4 border-[#8B4513] flex items-center justify-center text-4xl shadow-2xl relative overflow-hidden">
                🧑‍💻
                <div className="absolute bottom-0 w-full h-1/3 bg-[#DEB887]/20" />
             </div>
             <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-xs text-white font-black shadow-lg">
                UA
             </div>
          </div>
          {/* Desk accessories shadow */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-black/5 blur-lg rounded-full z-20" style={{ transform: `rotateX(60deg) rotateZ(45deg)` }} />
        </>
      )}

      {/* Label */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white border-4 border-[#8B4513] px-6 py-2 rounded-xl text-lg font-black text-[#8B4513] shadow-[4px_4px_0px_#8B4513] whitespace-nowrap z-50">
        {label}
      </div>
    </div>
  )
}

export function Office() {
  // Infinite rows of desks
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#FDF5E6]">
      {/* Background: Distant Horizon */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#FFFACD] via-[#FDF5E6] to-[#DEB887]/40" />
      
      {/* Infinite Grid of Floor Tiles */}
      <div className="absolute inset-0 z-0">
         <div 
           className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: `
               linear-gradient(30deg, #8B4513 12%, transparent 12.5%, transparent 87%, #8B4513 87.5%, #8B4513),
               linear-gradient(150deg, #8B4513 12%, transparent 12.5%, transparent 87%, #8B4513 87.5%, #8B4513),
               linear-gradient(30deg, #8B4513 12%, transparent 12.5%, transparent 87%, #8B4513 87.5%, #8B4513),
               linear-gradient(150deg, #8B4513 12%, transparent 12.5%, transparent 87%, #8B4513 87.5%, #8B4513),
               linear-gradient(60deg, #A0522D 25%, transparent 25.5%, transparent 75%, #A0522D 75%, #A0522D),
               linear-gradient(60deg, #A0522D 25%, transparent 25.5%, transparent 75%, #A0522D 75%, #A0522D)
             `,
             backgroundSize: '100px 173px',
             backgroundPosition: '0 0, 0 0, 50px 87px, 50px 87px, 0 0, 50px 87px'
           }} 
         />
      </div>

      {/* Office Content Area */}
      <div className="relative h-full w-full flex flex-col items-center justify-center pt-96">
        
        {/* Infinite Row Container */}
        <div className="relative w-full flex flex-col items-center gap-24 transform-gpu">
           {rows.map((row) => {
             const scale = 1 - (row * 0.12);
             const opacity = 1 - (row * 0.14);
             const zIndex = 100 - row;
             const translateY = -row * 150;
             const translateX = (row % 2 === 0 ? row : -row) * 20; // Alternate slight shift

             return (
               <div 
                 key={row}
                 className="absolute transition-all duration-700"
                 style={{ 
                   transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                   opacity: opacity > 0 ? opacity : 0,
                   zIndex: zIndex
                 }}
               >
                 <ISODesk 
                    label={row === 0 ? "айтішнік розраб" : row === 1 ? "сусід" : `колега ${row}`} 
                    isForeground={row === 0}
                 />
               </div>
             )
           })}
        </div>
      </div>

      {/* Foreground Details: Big Floating Plants for 2.5D depth */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-800/20 blur-3xl rounded-full z-50 pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-[500px] h-[500px] bg-orange-800/10 blur-3xl rounded-full z-50 pointer-events-none" />

      {/* Floating dust particles */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
         <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
         <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: '5s' }} />
      </div>

      {/* Cozy Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_300px_rgba(92,64,51,0.2)] bg-gradient-to-t from-[#8B4513]/10 to-transparent" />
    </div>
  )
}
