"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Office } from "./Office"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <div className="z-10 w-full p-6 font-mono text-sm flex justify-between items-center absolute top-0">
        <div className="bg-zinc-800/50 backdrop-blur-xl border border-white/10 p-4 rounded-xl">
          Claw Virtual Office <span className="text-cyan-400">v0.1</span> 👣
        </div>
        <div className="text-xs opacity-50">
          Status: Synchronizing with Reality...
        </div>
      </div>

      <div className="w-full h-screen">
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={["#050505", 5, 20]} />
          
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={2} castShadow />
          
          <Office />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
        </Canvas>
      </div>

      <div className="absolute bottom-10 left-10 max-w-sm">
        <div className="bg-zinc-900/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-bold mb-2">Workspace Alpha</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Ваш цифровий кабінет розгортається. Додано робочу зону, базове освітлення та імітацію терміналу Claw.
          </p>
          <div className="mt-4 flex gap-2">
            <div className="h-1 w-full bg-cyan-500/20 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
