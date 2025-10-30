import React from "react"

export default function ExploreGyms() {
  return (
    <section id="explore" className="w-full max-w-[1220px] mx-auto flex flex-col gap-8 mt-24">
      <div className="w-full rounded-3xl px-2 sm:px-8 py-14 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 flex flex-col" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80) center/cover' }}>
        <h2 className="text-white text-3xl font-bold mb-2 drop-shadow-lg">Descubra academias com inteligência geoespacial</h2>
        <p className="text-[18px] text-white/90 mb-7 max-w-[680px] drop-shadow-md">Mapa interativo, filtros contextualizados, lotação em tempo real e rotas otimizada para todos os modais em uma experiência fluida.</p>
        <div className="flex flex-wrap gap-3 mb-9">
          <span className="px-6 py-2 rounded-full bg-blue-600 text-white text-[14px] font-semibold shadow transition">Mapa vivo</span>
          <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-[14px] font-semibold shadow transition border border-white/30">Atualização milissegundos</span>
          <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-[14px] font-semibold shadow transition border border-white/30">Rotas turn-by-turn</span>
          <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-[14px] font-semibold shadow transition border border-white/30">Geofencing + QR</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-2">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex flex-row gap-6">
              <div className="flex-1 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-0 overflow-hidden flex flex-col justify-end border border-gray-600/50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80) center/cover' }}>
                <div className="bg-gray-700/80 backdrop-blur-sm px-6 pb-4 pt-9 border-t border-gray-600/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="bg-green-400 w-2 h-2 rounded-full mr-2" />
                    <span className="text-white font-bold text-lg">Pulse Gym</span>
                    <span className="text-blue-400 text-sm ml-auto">1.3 km</span>
                  </div>
                  <div className="text-gray-300 text-sm">Lotação: 38%</div>
                </div>
              </div>
              <div className="flex-1 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-0 overflow-hidden flex flex-col justify-end border border-gray-600/50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80) center/cover' }}>
                <div className="bg-gray-700/80 backdrop-blur-sm px-6 pb-4 pt-9 border-t border-gray-600/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="bg-green-400 w-2 h-2 rounded-full mr-2" />
                    <span className="text-white font-bold text-lg">UrbanBox</span>
                    <span className="text-blue-400 text-sm ml-auto">4.2 km</span>
                  </div>
                  <div className="text-gray-300 text-sm">Lotação: 24%</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-y-2 items-center justify-center text-center min-h-[120px] border border-white/30">
                <div className="text-blue-400 text-sm font-semibold">CHECK-IN</div>
                <div className="text-white font-bold">QR Code ou geofencing automático</div>
                <div className="text-gray-300 text-xs">Usuário recebe confirmação instantânea, compartilhamento com amigos e desbloqueio de badges.</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-y-2 items-center justify-center text-center min-h-[120px] border border-white/30">
                <div className="text-blue-400 text-sm font-semibold">INSIGHTS</div>
                <div className="text-white font-bold">Heatmap comunitário</div>
                <div className="text-gray-300 text-xs">Veja hotspots por horário, classes mais buscadas e rotas preferidas da comunidade.</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-3 border border-white/30">
              <div className="text-blue-400 text-[12px]">TEMPO REAL</div>
              <div className="text-white font-bold text-lg">Mapa Vivo com 5 m de precisão</div>
              <div className="text-gray-300 text-sm">Rastreamento contínuo por GPS, Wi-Fi e antenas celulares com atualização em milissegundos e fallback offline inteligente.</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-3 border border-white/30">
              <div className="text-blue-400 text-[12px]">Filtros avançados</div>
              <div className="text-white font-bold text-lg">Filtros avançados</div>
              <div className="text-gray-300 text-sm">Tipo de academia, faixa de preço, lotação, horários e amenities com ajustes instantâneos usando cache inteligente.</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-3 border border-white/30">
              <div className="text-blue-400 text-[12px]">Rotas otimizadas</div>
              <div className="text-white font-bold text-lg">Rotas otimizadas</div>
              <div className="text-gray-300 text-sm">Distância e tempo estimado para caminhada, bike, carro e transporte público com navegação turn-by-turn.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
