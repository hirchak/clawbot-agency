import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Plane, Html } from "@react-three/drei"
import * as THREE from "three"
import { TerminalScreen } from "./TerminalScreen"

export function Office() {
  return (
    <group>
      {/* Floor */}
      <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#202020" />
      </Plane>

      {/* Desk */}
      <group position={[0, -0.5, 0]}>
        {/* Table top */}
        <Box args={[3, 0.1, 1.5]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#4a4a4a" />
        </Box>
        {/* Legs */}
        <Box args={[0.1, 0.5, 0.1]} position={[-1.4, 0.25, 0.6]}><meshStandardMaterial color="#333" /></Box>
        <Box args={[0.1, 0.5, 0.1]} position={[1.4, 0.25, 0.6]}><meshStandardMaterial color="#333" /></Box>
        <Box args={[0.1, 0.5, 0.1]} position={[-1.4, 0.25, -0.6]}><meshStandardMaterial color="#333" /></Box>
        <Box args={[0.1, 0.5, 0.1]} position={[1.4, 0.25, -0.6]}><meshStandardMaterial color="#333" /></Box>
      </group>

      {/* Screen (Claw Display) */}
      <group position={[0, 0.45, -0.4]}>
        <Box args={[1.2, 0.7, 0.05]}>
          <meshStandardMaterial color="#111" />
        </Box>
        {/* Display Content */}
        <Html
          transform
          occlude
          distanceFactor={1.5}
          position={[0, 0, 0.03]}
        >
          <div className="w-[300px] h-[175px] select-none">
            <TerminalScreen />
          </div>
        </Html>
      </group>

      {/* Walls */}
      <Plane args={[10, 5]} position={[0, 1.5, -5]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Plane>
      <Plane args={[10, 5]} rotation={[0, Math.PI / 2, 0]} position={[-5, 1.5, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Plane>
    </group>
  )
}
