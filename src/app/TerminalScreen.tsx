"use client"
import { useState, useEffect, useRef } from "react"

interface LogEntry {
  timestamp: string
  level: "INFO" | "WARN" | "ERROR" | "SUCCESS"
  message: string
}

export function TerminalScreen() {
  const [logs, setLogs] = useState<LogEntry[]>([
    { timestamp: "18:00:01", level: "INFO", message: "Asistentus OS v1.0.4 initializing..." },
    { timestamp: "18:00:02", level: "INFO", message: "Neural grid handshake: SUCCESS" },
    { timestamp: "18:00:03", level: "SUCCESS", message: "System core: ONLINE" },
    { timestamp: "18:00:05", level: "INFO", message: "Loading sub-agent orchestration protocols..." },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const messages = [
      { level: "INFO", message: "Syncing with remote nodes..." },
      { level: "INFO", message: "Encrypted link established." },
      { level: "SUCCESS", message: "Heartbeat signal verified." },
      { level: "WARN", message: "Latency detected in sector 7G." },
      { level: "INFO", message: "Optimizing memory allocation..." },
      { level: "INFO", message: "Background tasks running: 4" },
      { level: "INFO", message: "New instruction received from master." },
    ]

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)]
      const newLog: LogEntry = {
        timestamp: new Date().toLocaleTimeString('en-GB', { hour12: false }),
        ...randomMsg
      } as LogEntry
      
      setLogs((prev) => [...prev.slice(-14), newLog])
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [logs])

  const getLevelColor = (level: string) => {
    switch (level) {
      case "ERROR": return "text-red-500"
      case "WARN": return "text-yellow-500"
      case "SUCCESS": return "text-green-500"
      default: return "text-cyan-400"
    }
  }

  return (
    <div className="w-full h-full bg-[#0a0a0a] text-cyan-500 font-mono p-3 text-[10px] overflow-hidden border border-cyan-500/30 flex flex-col shadow-[0_0_15px_rgba(0,255,255,0.1)]">
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-2 border-b border-cyan-900/50 pb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-wider">System Terminal</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-cyan-900" />
          <div className="w-1.5 h-1.5 bg-cyan-700" />
          <div className="w-1.5 h-1.5 bg-cyan-500" />
        </div>
      </div>

      {/* Log Body */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-1 scrollbar-hide">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2 items-start leading-tight">
            <span className="text-zinc-600 shrink-0">[{log.timestamp}]</span>
            <span className={`font-bold shrink-0 ${getLevelColor(log.level)}`}>{log.level}</span>
            <span className="text-zinc-300 break-words">{log.message}</span>
          </div>
        ))}
        <div className="flex gap-2 items-center">
          <span className="text-cyan-500 animate-pulse">_</span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-2 pt-1 border-t border-cyan-900/30 flex justify-between items-center opacity-40 text-[7px] uppercase tracking-[0.2em]">
        <span>User: Admin@Asistentus</span>
        <span>Node: Alpha-01</span>
      </div>
    </div>
  )
}
