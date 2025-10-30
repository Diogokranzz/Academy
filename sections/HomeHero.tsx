import React from "react"
import { BMICalculator } from '../components/BMICalculator'

export default function HomeHero() {
  const sessions = React.useMemo(
    () => [
      { coach: 'Coach digital', title: 'Lower Body Fire', subtitle: 'Back Squat · 4 séries', duration: 75 },
      { coach: 'Coach digital', title: 'Upper Pump Express', subtitle: 'Bench Press · 5 séries', duration: 90 },
      { coach: 'Coach digital', title: 'HIIT Core Blast', subtitle: 'Circuito · 6 blocos', duration: 60 },
    ],
    []
  )
  const [currentIdx, setCurrentIdx] = React.useState(0)
  const [totalSeconds, setTotalSeconds] = React.useState(sessions[0].duration)
  const [remaining, setRemaining] = React.useState(sessions[0].duration)
  const [meetLink, setMeetLink] = React.useState<string>(
    (process.env.NEXT_PUBLIC_MEET_URL as string) || 'https://meet.new'
  )

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const progressPercent = Math.max(0, Math.min(100, ((totalSeconds - remaining) / totalSeconds) * 100))
  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0')
  const seconds = String(remaining % 60).padStart(2, '0')

  React.useEffect(() => {
    if (remaining === 0) {
      const next = (currentIdx + 1) % sessions.length
      setCurrentIdx(next)
      setTotalSeconds(sessions[next].duration)
      setRemaining(sessions[next].duration)
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      const start = new Date().toISOString()
      const end = new Date(Date.now() + sessions[next].duration * 1000).toISOString()
      fetch('/api/live/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          summary: sessions[next].title,
          description: sessions[next].subtitle,
          start,
          end,
          timeZone: tz,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          setMeetLink(data.meetLink || ((process.env.NEXT_PUBLIC_MEET_URL as string) || 'https://meet.new') + `?t=${Date.now()}`)
        })
        .catch(() => {
          setMeetLink(((process.env.NEXT_PUBLIC_MEET_URL as string) || 'https://meet.new') + `?t=${Date.now()}`)
        })
    }
  }, [remaining, currentIdx, sessions])

  return (
    <section id="hero" className="relative w-full max-w-[1200px] mx-auto mt-8 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 md:p-12 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1)), url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80) center/cover' }}>
      <div className="flex-1 flex flex-col gap-8 justify-center force-on-dark">
        <span className="inline-flex items-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full w-fit mb-2">GymVerse · Plataforma fitness 360º</span>
        <h1 className="text-white text-3xl md:text-4xl leading-tight font-bold max-w-[480px] drop-shadow-lg">Superapp fitness para explorar, treinar e evoluir</h1>
        <p className="text-white/90 mt-3 max-w-[380px] text-base drop-shadow-md">Academias parceiras, IA personalizada e comunidade gamificada em uma experiência mobile-first.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button 
            className="bg-blue-600 text-white font-semibold rounded-full px-6 py-3 text-lg shadow-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
            onClick={() => {
              const element = document.getElementById('plans');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Começar agora
          </button>
          <button 
            className="bg-blue-600 text-white font-semibold rounded-full px-6 py-3 text-lg shadow-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
            onClick={() => {
              const element = document.getElementById('roadmap');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Ver roadmap completo
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 max-w-[600px]">
          <div className="bg-blue-500/80 backdrop-blur-sm text-white rounded-xl px-4 py-3 text-center hover:scale-105 transition-transform duration-300 border border-blue-400/50">
            <div className="text-sm font-bold">+650 academias</div>
            <div className="text-xs text-blue-100">lotação ao vivo</div>
          </div>
          <div className="bg-purple-500/80 backdrop-blur-sm text-white rounded-xl px-4 py-3 text-center hover:scale-105 transition-transform duration-300 border border-purple-400/50">
            <div className="text-sm font-bold">IA Coach</div>
            <div className="text-xs text-purple-100">treinos personalizados</div>
          </div>
          <div className="bg-green-500/80 backdrop-blur-sm text-white rounded-xl px-4 py-3 text-center hover:scale-105 transition-transform duration-300 border border-green-400/50">
            <div className="text-sm font-bold">Modo Outdoor</div>
            <div className="text-xs text-green-100">desafios locais</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center space-y-6">
        <div className="w-full max-w-[350px] h-[400px] bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg flex flex-col gap-6 p-6 hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-gray-600/50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80) center/cover' }}>
          <span className="text-xs text-blue-400 tracking-[.3em] font-medium">LIVE SESSION</span>
          <div className="rounded-2xl bg-gray-700/80 backdrop-blur-sm px-4 py-3 border border-gray-600/50">
            <div className="text-blue-400 text-sm">{sessions[currentIdx].coach}</div>
            <div className="text-white font-bold text-lg">{sessions[currentIdx].title}</div>
            <div className="text-gray-300 text-xs mt-1">{sessions[currentIdx].subtitle}</div>
          </div>
          <div>
            <div className="text-gray-300 text-xs mb-2">Tempo restante</div>
            <div className="w-full h-8 bg-gray-700/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-600/50">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-8 rounded-lg transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="mt-2 text-lg text-white font-bold">{minutes}:{seconds}</div>
          </div>
          <a
            href={meetLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold rounded-full px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Entrar no Meet
          </a>
          <div className="mt-auto bg-gray-700/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-600/50">
            <div className="text-xs text-gray-300 mb-2">Últimos PRs</div>
            <div className="flex justify-between text-sm">
              <span className="text-white">Deadlift</span>
              <span className="text-blue-400 font-bold">180 kg</span>
            </div>
          </div>
        </div>
        
        <BMICalculator />
      </div>
    </section>
  )
}
