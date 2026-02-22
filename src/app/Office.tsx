import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Plane, Html, Sphere } from "@react-three/drei"
import * as THREE from "three"
import { TerminalScreen } from "./TerminalScreen"

function Desk({ position, active = false, label = "Субагент" }: { position: [number, number, number], active?: boolean, label?: string }) {
  return (
    <group position={position}>
      {/* Table top */}
      <Box args={[2.5, 0.1, 1.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.2} />
      </Box>
      {/* Legs */}
      <Box args={[0.08, 0.5, 0.08]} position={[-1.15, -0.25, 0.5]}><meshStandardMaterial color="#111" /></Box>
      <Box args={[0.08, 0.5, 0.08]} position={[1.15, -0.25, 0.5]}><meshStandardMaterial color="#111" /></Box>
      <Box args={[0.08, 0.5, 0.08]} position={[-1.15, -0.25, -0.5]}><meshStandardMaterial color="#111" /></Box>
      <Box args={[0.08, 0.5, 0.08]} position={[1.15, -0.25, -0.5]}><meshStandardMaterial color="#111" /></Box>

      {/* Visual Sub-Agent */}
      <group position={[0, 0.35, 0]}>
         {/* Avatar sphere */}
         <Sphere args={[0.2, 32, 32]}>
            <meshStandardMaterial 
              color={active ? "#06b6d4" : "#27272a"} 
              emissive={active ? "#06b6d4" : "#000"} 
              emissiveIntensity={active ? 2 : 0} 
            />
         </Sphere>
         {/* Orbit ring if active */}
         {active && (
           <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.3, 0.35, 32]} />
              <meshStandardMaterial color="#06b6d4" transparent opacity={0.3} side={THREE.DoubleSide} />
           </mesh>
         )}
         {/* Label */}
         <Html position={[0, 0.5, 0]} center distanceFactor={10}>
            <div className="flex flex-col items-center">
              <div className={`px-2 py-0.5 rounded text-[8px] font-mono border ${active ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400' : 'bg-zinc-900/80 border-white/5 text-zinc-600'} backdrop-blur-md uppercase tracking-widest whitespace-nowrap shadow-xl`}>
                {label}
              </div>
              {active && (
                <div className="w-0.5 h-3 bg-gradient-to-t from-cyan-500/50 to-transparent mt-0.5" />
              )}
            </div>
         </Html>
      </group>
    </group>
  )
}

export function Office() {
  const deskCount = 25;
  const spacing = 5;
  const rows = [];

  for (let i = 0; i < deskCount; i++) {
    const z = -i * spacing;
    // We alternate or place some active ones to make it look alive
    const isFirst = i === 0;
    
    rows.push(
      <group key={`row-${i}`} position={[0, 0, z]}>
        {/* Left Desk */}
        <Desk position={[-4, 0, 0]} label={`Агент-L${i}`} active={i % 7 === 2} />
        {/* Right Desk */}
        <Desk position={[4, 0, 0]} label={`Агент-R${i}`} active={i % 9 === 4} />
      </group>
    );
  }

  return (
    <group>
      {/* Floor - extended for infinite effect */}
      <Plane args={[100, 500]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -200]} receiveShadow>
        <meshStandardMaterial color="#050505" roughness={0.8} />
      </Plane>

      {/* Grid helper - also extended */}
      <gridHelper args={[100, 50, "#111", "#080808"]} position={[0, -0.49, -200]} />

      {/* Desk Layout */}
      <group position={[0, 0.25, 5]}>
        {/* Main Dev Desk in the foreground */}
        <Desk position={[0, 0, 0]} active={true} label="Головний термінал" />
        
        {/* Infinite Rows */}
        <group position={[0, 0, -8]}>
          {rows}
        </group>
      </group>

      {/* Side walls for depth perception */}
      <Plane args={[500, 20]} rotation={[0, Math.PI / 2, 0]} position={[-15, 9.5, -200]}>
        <meshStandardMaterial color="#020202" />
      </Plane>
      <Plane args={[500, 20]} rotation={[0, -Math.PI / 2, 0]} position={[15, 9.5, -200]}>
        <meshStandardMaterial color="#020202" />
      </Plane>
    </group>
  )
}
