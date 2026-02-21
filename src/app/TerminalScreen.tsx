"use client"
import { useState, useEffect } from "react"

export function TerminalScreen() {
  const [logs, setLogs] = useState<string[]>([
    "Initializing Claw OS...",
    "Connecting to neural grid...",
    "Status: Online",
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `> System heartbeats: ${new Date().toLocaleTimeString()}`
      setLogs((prev) => [...prev.slice(-10), newLog])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full bg-black text-cyan-400 font-mono p-2 text-[10px] overflow-hidden border border-cyan-900/50">
      <div className="flex items-center gap-1 mb-2 border-b border-cyan-900/30 pb-1">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[8px] uppercase tracking-tighter">Live System Logs</span>
      </div>
      {logs.map((log, i) => (
        <div key={i} className="mb-1 leading-tight">
          <span className="opacity-50 mr-1">[{i}]</span>
          {log}
        </div>
      ))}
      <div className="mt-2 text-white/20 text-[6px] uppercase tracking-widest">
        Claw Virtual Interface v0.1
      </div>
    </div>
  )
}
