import React from "react"

export default function PersonalizedTraining() {
  return (
    <section id="training" className="w-full max-w-[1220px] mx-auto flex flex-col gap-8 mt-24">
      <div className="w-full rounded-3xl px-2 sm:px-8 py-14 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 flex flex-col" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80) center/cover' }}>
        <h2 className="text-white text-3xl font-bold text-center mb-2 drop-shadow-lg">IA que periodiza, corrige postura e evolui com você</h2>
        <p className="text-[19px] text-white/90 text-center mb-10 drop-shadow-md">Combinação de machine learning, visão computacional e feedback em tempo real para treinos
          que se adaptam automaticamente ao seu corpo.</p>
        <div className="flex justify-center gap-3 mb-9">
          <span className="px-6 py-2 rounded-full bg-blue-600 text-white text-[14px] font-semibold shadow transition">IA Personal Coach</span>
          <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-[14px] font-semibold shadow transition border border-white/30">Modo Execução</span>
          <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-[14px] font-semibold shadow transition border border-white/30">Outdoor Tracking</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-500/80 backdrop-blur-sm rounded-2xl px-8 py-7 flex flex-col items-center border border-blue-400/50">
            <div className="text-xl font-bold text-white mb-2">CARGA TOTAL</div>
            <div className="text-3xl text-blue-100 font-bold">9200 kg</div>
            <div className="text-sm text-blue-200 mt-1">+12% vs semana passada</div>
          </div>
          <div className="bg-green-500/80 backdrop-blur-sm rounded-2xl px-8 py-7 flex flex-col items-center border border-green-400/50">
            <div className="text-xl font-bold text-white mb-2">TEMPO EM ZONA ALVO</div>
            <div className="text-3xl text-green-100 font-bold">42 min</div>
            <div className="text-sm text-green-200 mt-1">+8%</div>
          </div>
          <div className="bg-purple-500/80 backdrop-blur-sm rounded-2xl px-8 py-7 flex flex-col items-center border border-purple-400/50">
            <div className="text-xl font-bold text-white mb-2">VELOCIDADE MÉDIA</div>
            <div className="text-3xl text-purple-100 font-bold">6'15"/km</div>
            <div className="text-sm text-purple-200 mt-1">+3%</div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-2xl p-7 border border-white/30">
            <div className="text-white text-2xl font-bold mb-3">Treinos gerados sob medida</div>
            <ul className="text-gray-300 text-[17px] flex flex-col gap-2">
              <li>Algoritmo avalia histórico, objetivos, lesões e equipamentos disponíveis para entregar sessões com progressão automática e superséries inteligentes.</li>
              <li>Ajuste dinâmico de volume e intensidade</li>
              <li>Feedback com acelerômetro e postura via visão computacional</li>
              <li>Timers sincronizados com alertas hápticos e áudio</li>
            </ul>
          </div>
          <div className="flex-1 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden border border-gray-600/50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80) center/cover' }}>
            <div className="text-blue-400 mb-2 tracking-widest text-xs">SESSION SYNC · LIVE</div>
            <div className="text-white text-xl font-bold">CARGA SUGERIDA</div>
            <div className="text-blue-400 text-2xl font-bold">105 kg · Back Squat</div>
            <div className="text-gray-300 text-sm mb-2">Baseado em 1RM 150 kg · Fadiga atual 32%</div>
            <div className="mt-2 bg-gray-700/80 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50">
              <div className="text-blue-400 mb-1 text-sm">Feedback postura · Vision AI</div>
              <div className="flex gap-5 flex-wrap text-white text-xs">
                <div className="flex flex-col"><span className="font-semibold text-blue-400">Velocidade concêntrica</span>Ótima</div>
                <div className="flex flex-col"><span className="font-semibold text-blue-400">Amplitude</span>Profunda</div>
                <div className="flex flex-col"><span className="font-semibold text-blue-400">Estabilidade</span><span className="text-orange-400 font-medium">Ajustar joelhos</span></div>
              </div>
            </div>
            <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-4 mt-2 border border-gray-600/50">
              <div className="flex justify-between">
                <span className="text-white text-sm font-semibold">Superset</span>
                <span className="text-gray-300 text-sm">4 sets</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-white text-sm">Hip Thrust</span>
                <span className="text-gray-300 text-sm">12 reps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
