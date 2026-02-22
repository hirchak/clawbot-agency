"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Office } from "./Office"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#050505] text-white overflow-hidden">
      {/* HUD Header */}
      <div className="z-10 w-full p-6 font-mono text-sm flex justify-between items-start absolute top-0 pointer-events-none">
        <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-cyan-500 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-cyan-500 relative" />
            </div>
            <div>
              <h1 className="font-bold tracking-tight">Claw Virtual Office <span className="text-cyan-400 font-normal">v1.0</span></h1>
              <div className="text-[10px] text-cyan-500/70 uppercase tracking-widest mt-0.5">System Status: Online</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <div className="bg-zinc-900/60 backdrop-blur-md border border-white/5 p-3 rounded-lg text-[10px] pointer-events-auto">
            <div className="text-zinc-500 mb-1 uppercase tracking-tighter">Active Sub-Agents</div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-zinc-300">dev-agent-task-1</span>
              </div>
              <div className="flex items-center gap-2 opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="text-zinc-500 italic">No active sub-agents</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] font-mono opacity-30 text-right">
            LATENCY: 14ms<br/>
            UPTIME: 04:22:11
          </div>
        </div>
      </div>

      {/* 3D Scene */}
      <div className="w-full h-screen">
        <Canvas camera={{ position: [6, 4, 6], fov: 45 }} shadows>
          <color attach="background" args={["#020202"]} />
          <fog attach="fog" args={["#020202", 8, 25]} />
          
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={1} castShadow />
          <spotLight 
            position={[-5, 8, 5]} 
            angle={0.2} 
            penumbra={1} 
            intensity={3} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          
          <Office />
          <Stars radius={100} depth={60} count={6000} factor={4} saturation={0} fade speed={0.5} />
          <OrbitControls 
            makeDefault 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 1.8}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Bottom Info Card */}
      <div className="absolute bottom-10 left-10 max-w-sm pointer-events-none">
        <div className="bg-zinc-950/90 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-2xl pointer-events-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold tracking-tight">Workspace Alpha</h2>
            <span className="text-[9px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 uppercase">Primary</span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            Your digital sanctuary is evolving. Neural links established. Sub-agent orchestration is ready for deployment.
          </p>
          <div className="mt-5 space-y-2">
            <div className="flex justify-between text-[9px] uppercase tracking-wider text-zinc-500">
              <span>Environment Stability</span>
              <span>98%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[98%] transition-all duration-1000 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </main>
  )
}
