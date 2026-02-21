"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box } from "@react-three/drei"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Claw Virtual Office - Dev Mode 👣
        </p>
      </div>

      <div className="relative flex place-items-center w-full h-[60vh]">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box args={[1, 1, 1]}>
            <meshStandardMaterial color="orange" />
          </Box>
          <OrbitControls />
        </Canvas>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Status: Initialized{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Base Next.js + Three.js project created.
          </p>
        </div>
      </div>
    </main>
  )
}
