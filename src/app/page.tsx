"use client"
import { Office } from "./Office"
import { TaskList } from "./TaskList"
import { FinanceHUD } from "./FinanceHUD"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F5F5DC] text-[#5C4033] overflow-hidden font-sans">
      {/* Lofi Stylized Office View */}
      <div className="flex-grow h-screen relative group overflow-hidden">
        
        <Office />

        {/* UI Elements Overlaying Office */}
        <div className="absolute inset-0 pointer-events-none p-10 flex flex-col justify-between z-20">
          <div className="flex justify-between items-start">
            <div className="bg-white border-4 border-[#5C4033] p-6 rounded-2xl flex items-center gap-6 shadow-[8px_8px_0px_rgba(92,64,51,0.1)] pointer-events-auto transition-transform hover:-translate-y-1">
               <div className="w-16 h-16 rounded-2xl bg-[#DEB887] border-4 border-[#5C4033] flex items-center justify-center relative shadow-inner overflow-hidden">
                  <span className="text-4xl animate-bounce">🏠</span>
                  <div className="absolute inset-0 bg-white/10 opacity-50" />
               </div>
               <div>
                  <h1 className="font-black text-3xl tracking-tight leading-none mb-2 text-[#5C4033] uppercase">
                    Асистентус
                  </h1>
                  <p className="text-xs text-[#8B4513] uppercase tracking-[0.1em] font-black italic">Головний Центр Управління</p>
               </div>
            </div>

            <FinanceHUD />
          </div>

          <div className="flex justify-between items-end">
             <div className="max-w-md space-y-6">
                <div className="bg-white border-4 border-[#5C4033] p-8 rounded-3xl shadow-[10px_10px_0px_rgba(92,64,51,0.1)] pointer-events-auto transition-all hover:shadow-[12px_12px_0px_rgba(92,64,51,0.15)]">
                   <div className="flex items-center gap-4 mb-5">
                      <div className="w-4 h-4 rounded-full bg-orange-400" />
                      <h2 className="text-sm font-black uppercase tracking-widest text-[#5C4033]">Статус системи</h2>
                   </div>
                   <p className="text-md text-[#5C4033] leading-relaxed font-bold mb-6 border-l-4 border-[#DEB887] pl-5 italic">
                     "Перехід на затишний Lofi інтерфейс успішно завершено. <span className="text-[#8B4513] underline decoration-2 decoration-[#DEB887]">айтішнік розраб</span> почувається натхненно."
                   </p>
                   <div className="flex gap-10">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-[#8B4513] font-black tracking-widest opacity-60">Навантаження</span>
                        <span className="text-sm text-[#5C4033] font-black">СПОКІЙНЕ</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-[#8B4513] font-black tracking-widest opacity-60">Атмосфера</span>
                        <span className="text-sm text-[#5C4033] font-black">НАТХНЕННА</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col items-end gap-4">
                <div className="bg-[#8B4513] text-white px-6 py-2 font-black text-sm uppercase tracking-widest rounded-full shadow-lg border-2 border-white rotate-[-2deg]">
                   ОФЛАЙН РЕЖИМ: ВИМКНЕНО
                </div>
                <div className="text-[11px] font-bold text-[#8B4513]/60 text-right uppercase tracking-wider bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  ІДЕНТИФІКАТОР: OC-V2-COZY<br/>
                  ЛОКАЦІЯ: КИЇВ, УКРАЇНА
                </div>
             </div>
          </div>
        </div>

        {/* Soft Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      </div>

      {/* Task List - Right Panel */}
      <TaskList />
    </main>
  )
}
