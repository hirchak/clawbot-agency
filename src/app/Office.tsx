import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Plane, Html, Sphere } from "@react-three/drei"
import * as THREE from "three"
import { TerminalScreen } from "./TerminalScreen"

function Desk({ position, active = false, label = "Sub-Agent" }: { position: [number, number, number], active?: boolean, label?: string }) {
  return (
    <group position={position}>
      {/* Table top */}
      <Box args={[2.5, 0.1, 1.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3a3a3a" roughness={0.2} metalness={0.1} />
      </Box>
      {/* Legs */}
      <Box args={[0.08, 0.5, 0.08]} position={[-1.15, -0.25, 0.5]}><meshStandardMaterial color="#222" /></Box>
      <Box args={[0.08, 0.5, 0.08]} position={[1.15, -0.25, 0.5]}><meshStandardMaterial color="#222" /></Box>
      <Box args={[0.08, 0.5, 0.08]} position={[-1.15, -0.25, -0.5]}><meshStandardMaterial color="#222" /></Box>
      <Box args={[0.08, 0.5, 0.08]} position={[1.15, -0.25, -0.5]}><meshStandardMaterial color="#222" /></Box>

      {/* Visual Sub-Agent */}
      <group position={[0, 0.35, 0]}>
         {/* Avatar sphere */}
         <Sphere args={[0.2, 32, 32]}>
            <meshStandardMaterial 
              color={active ? "#06b6d4" : "#4b5563"} 
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
         <Html position={[0, 0.5, 0]} center>
            <div className="flex flex-col items-center">
              <div className={`px-2 py-0.5 rounded text-[8px] font-mono border ${active ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400' : 'bg-zinc-800/80 border-white/5 text-zinc-500'} backdrop-blur-md uppercase tracking-widest whitespace-nowrap shadow-xl`}>
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
  return (
    <group>
      {/* Floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <meshStandardMaterial color="#111" roughness={0.4} />
      </Plane>

      {/* Grid helper style lines */}
      <gridHelper args={[20, 20, "#222", "#111"]} position={[0, -0.49, 0]} />

      {/* Desk Layout */}
      <group position={[0, 0.25, 0]}>
        {/* Main Dev Desk */}
        <Desk position={[0, 0, 0]} active={true} label="Dev Agent" />
        
        {/* Other Desks */}
        <Desk position={[-4, 0, -2]} label="Research Node" />
        <Desk position={[4, 0, -2]} label="Task Processor" />
      </group>

      {/* Walls / Environment */}
      <Plane args={[20, 8]} position={[0, 3.5, -8]}>
        <meshStandardMaterial color="#080808" />
      </Plane>
      <Plane args={[20, 8]} rotation={[0, Math.PI / 2, 0]} position={[-8, 3.5, 0]}>
        <meshStandardMaterial color="#080808" />
      </Plane>
    </group>
  )
}
