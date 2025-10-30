import React from "react"

export default function Roadmap() {
  return (
    <section id="roadmap" className="w-full max-w-[1220px] mx-auto flex flex-col gap-8 mt-24">
      <div className="w-full rounded-3xl px-2 sm:px-8 py-14 bg-[#1d263d] flex flex-col force-on-dark">
        <h2 className="text-white text-3xl font-bold text-center mb-2">Fases para chegar do protótipo ao superapp completo</h2>
        <p className="text-[18px] text-[#b9e6fc] text-center mb-9">Estratégia em ondas para entregar valor rapidamente, integrar backend em tempo real e expandir para mobile nativo.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#232e4c] rounded-2xl px-6 py-8 flex flex-col">
            <div className="text-[#af9aff] font-bold text-md mb-3">SPRINT 0</div>
            <div className="text-white text-lg font-bold mb-2">Landing interativa & protótipos</div>
            <div className="text-[#a2c4fd] text-base">Design tokens, storytelling completo, dashboards simulados e documentação estratégica.</div>
          </div>
          <div className="bg-[#232e4c] rounded-2xl px-6 py-8 flex flex-col">
            <div className="text-[#af9aff] font-bold text-md mb-3">SPRINT 1</div>
            <div className="text-white text-lg font-bold mb-2">Navegação SPA & AI Mock</div>
            <div className="text-[#a2c4fd] text-base">React Router, Zustand, animações Lottie e integração de IA em modo simulado.</div>
          </div>
          <div className="bg-[#232e4c] rounded-2xl px-6 py-8 flex flex-col">
            <div className="text-[#af9aff] font-bold text-md mb-3">SPRINT 2</div>
            <div className="text-white text-lg font-bold mb-2">Youware Backend + tempo real</div>
            <div className="text-[#a2c4fd] text-base">Autenticação, endpoints REST, WebSockets location e persistência em D1 e KV.</div>
          </div>
          <div className="bg-[#222d4a] rounded-2xl px-6 py-8 flex flex-col">
            <div className="text-[#af9aff] font-bold text-md mb-3">SPRINT 3</div>
            <div className="text-white text-lg font-bold mb-2">Premium & integrações externas</div>
            <div className="text-[#a2c4fd] text-base">Pagamentos, coaches, gamificação avançada, planos corporativos e conectores externos.</div>
          </div>
          <div className="bg-[#222d4a] rounded-2xl px-6 py-8 flex flex-col">
            <div className="text-[#af9aff] font-bold text-md mb-3">FASE MOBILE</div>
            <div className="text-white text-lg font-bold mb-2">Apps nativos</div>
            <div className="text-[#a2c4fd] text-base">React Native/Flutter com mesmo design system, integrações com wearables e App Store/Play Store.</div>
          </div>
          <div className="bg-[#222d4a] rounded-2xl px-6 py-8 flex flex-col">
            <div className="text-[#af9aff] font-bold text-md mb-3">GO LIVE</div>
            <div className="text-white text-lg font-bold mb-2">Infraestrutura escalável</div>
            <div className="text-[#a2c4fd] text-base">Docker Compose, CI/CD, monitoramento, observabilidade e CDN global.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
