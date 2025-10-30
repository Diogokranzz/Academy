import React, { useState } from "react"
import Checkout from "../components/Checkout"

export default function Plans() {
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{type: 'FREE' | 'PRO' | 'PRO+', price: number} | null>(null)

  const handlePlanSelect = (type: 'FREE' | 'PRO' | 'PRO+', price: number) => {
    setSelectedPlan({ type, price })
    setShowCheckout(true)
  }

  return (
    <>
      <section id="plans" className="w-full max-w-[1220px] mx-auto flex flex-col gap-8 mt-24">
      <div className="w-full rounded-3xl px-2 sm:px-8 py-14 bg-[#1d263d] flex flex-col force-on-dark">
        <h2 className="text-white text-3xl font-bold text-center mb-2">Assinaturas e benefícios corporativos</h2>
        <p className="text-[18px] text-[#b9e6fc] text-center mb-9">Planos pensados para pessoas, coaches e empresas. Monetização multicanal com recompensas gamificadas.</p>
        <div className="flex flex-col lg:flex-row gap-7 justify-center items-center">
          <div className="bg-[#232e4c] rounded-2xl px-8 py-8 w-full max-w-xs flex flex-col items-center border-2 border-[#374181]">
            <div className="text-white font-bold text-lg mb-1">FREE</div>
            <div className="text-white text-3xl font-bold">R$ 0.00 <span className="text-sm font-medium">/mês</span></div>
            <ul className="mt-3 text-[#b9e6fc] text-sm list-disc list-inside">
              <li>Acesso a treinos básicos e busca de academias</li>
              <li>Check-in ilimitado</li>
              <li>Feed social</li>
              <li>Acompanhamento básico</li>
            </ul>
            <button 
              className="mt-7 bg-white font-bold rounded-full px-5 py-1 w-full max-w-[145px] text-sm hover:bg-cyan-100 transition-all duration-300 hover:scale-105 transform force-text-dark"
              onClick={() => handlePlanSelect('FREE', 0)}
            >
              AssinarFree
            </button>
          </div>
          <div className="bg-[#232e4c] border-2 border-cyan-300 rounded-2xl px-8 py-8 w-full max-w-xs flex flex-col items-center shadow-xl scale-105">
            <div className="text-white font-bold text-lg mb-1">PRO</div>
            <div className="text-cyan-300 text-3xl font-bold">R$ 19.90 <span className="text-sm font-medium text-white">/mês</span></div>
            <ul className="mt-3 text-[#b9e6fc] text-sm list-disc list-inside">
              <li>IA personalizada, nutrição inteligente, estatísticas</li>
              <li>Treinos sob medida</li>
              <li>Análise biomecânica</li>
              <li>Relatórios</li>
            </ul>
            <button 
              className="mt-7 bg-white font-bold rounded-full px-5 py-1 w-full max-w-[145px] text-sm hover:bg-cyan-100 transition-all duration-300 hover:scale-105 transform force-text-dark"
              onClick={() => handlePlanSelect('PRO', 19.90)}
            >
              AssinarPro
            </button>
          </div>
          <div className="bg-[#232e4c] rounded-2xl px-8 py-8 w-full max-w-xs flex flex-col items-center border-2 border-[#374181]">
            <div className="text-white font-bold text-lg mb-1">PRO+</div>
            <div className="text-white text-3xl font-bold">R$ 39.90 <span className="text-sm font-medium">/mês</span></div>
            <ul className="mt-3 text-[#b9e6fc] text-sm list-disc list-inside">
              <li>Academias parceiras e coaches 1:1</li>
              <li>GymPass style</li>
              <li>Videochamadas</li>
              <li>Suporte priority</li>
            </ul>
            <button 
              className="mt-7 bg-white font-bold rounded-full px-5 py-1 w-full max-w-[145px] text-sm hover:bg-cyan-100 transition-all duration-300 hover:scale-105 transform force-text-dark"
              onClick={() => handlePlanSelect('PRO+', 39.90)}
            >
              AssinarPro+
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
          <div className="bg-[#283a57] rounded-2xl px-7 py-6 flex flex-col items-center text-white">
            <div className="font-bold mb-1">Programas corporativos</div>
            <div className="text-sm text-[#b9e6fc]">Planos para empresas com dashboard de bem-estar, relatórios de engajamento e incentivos fiscais.</div>
          </div>
          <div className="bg-[#283a57] rounded-2xl px-7 py-6 flex flex-col items-center text-white">
            <div className="font-bold mb-1">Coaches certificados</div>
            <div className="text-sm text-[#b9e6fc]">Marketplace com personal trainers, videochamadas 1:1 via WebRTC e agenda integrada.</div>
          </div>
          <div className="bg-[#283a57] rounded-2xl px-7 py-6 flex flex-col items-center text-white">
            <div className="font-bold mb-1">Experiências exclusivas</div>
            <div className="text-sm text-[#b9e6fc]">Eventos imersivos, viagens Wellness e integração com marcas de suplementos parceiras.</div>
          </div>
        </div>
      </div>
    </section>

    {showCheckout && selectedPlan && (
      <Checkout
        planType={selectedPlan.type}
        price={selectedPlan.price}
        onClose={() => {
          setShowCheckout(false)
          setSelectedPlan(null)
        }}
      />
    )}
    </>
  )
}

