import React from "react"

export default function Nutrition() {
  return (
    <section id="nutrition" className="w-full max-w-[1220px] mx-auto flex flex-col gap-8 mt-24">
      <div className="w-full rounded-3xl px-2 sm:px-8 py-14 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 flex flex-col" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1)), url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80) center/cover' }}>
        <h2 className="text-white text-3xl font-bold text-center mb-2 drop-shadow-lg">Controle total da alimentação com IA e integrações</h2>
        <p className="text-[18px] text-white/90 text-center mb-10 drop-shadow-md">Combine scanner inteligente, planos personalizados e integrações com restaurantes e wearables para atingir seus objetivos nutricionais.</p>
        <div className="flex flex-col lg:flex-row gap-10 mt-6">
          <div className="flex-1 flex flex-col gap-5">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl px-8 py-7 w-full max-w-[430px] mx-auto mb-2 relative overflow-hidden border border-gray-600/50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80) center/cover' }}>
              <div className="flex justify-between text-gray-300 text-xs mb-3">
                <span>PLANNER DIÁRIO</span>
                <span>META 2.450 KCAL</span>
              </div>
              <div className="rounded-xl bg-gray-700/80 backdrop-blur-sm px-4 py-3 mb-4 flex flex-col gap-2 border border-gray-600/50">
                <div className="text-xs text-blue-400 font-medium">MANUAL</div>
                <div className="text-white text-lg font-semibold">Salmão + Quinoa</div>
                <div className="text-gray-300 text-sm mt-1">Prot 42g   Carb 45g   Gord 18g</div>
              </div>
              <div className="rounded-xl bg-gray-700/80 backdrop-blur-sm px-4 py-3 flex flex-col gap-2 border border-gray-600/50">
                <div className="text-xs text-blue-400 font-medium">SCAN</div>
                <div className="text-white text-lg font-semibold">Iogurte grego + frutas</div>
                <div className="text-gray-300 text-sm mt-1">Prot 18g   Carb 20g   Gord 5g</div>
              </div>
              <div className="mt-4 text-[13px] text-gray-300">Lembrete: agende refeição com restaurante parceiro FitMeals às 12h30 · Delivery com desconto Pro.</div>
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-500/80 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-white flex-1 border border-blue-400/50">
                <div className="text-sm font-semibold mb-1">Prot 42g · Carb 45g · Gord 18g</div>
                <div className="text-xs text-blue-100">MACROS</div>
              </div>
              <div className="bg-green-500/80 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-white flex-1 border border-green-400/50">
                <div className="text-xl font-bold mb-1">2.3 L hoje</div>
                <div className="text-xs text-green-100">HIDRATAÇÃO</div>
                <div className="text-xs text-green-200 mt-1">+0.4 L vs meta</div>
              </div>
              <div className="bg-purple-500/80 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-white flex-1 border border-purple-400/50">
                <div className="text-xl font-bold mb-1">Streak 12 dias</div>
                <div className="text-xs text-purple-100">CONSISTÊNCIA</div>
                <div className="text-xs text-purple-200 mt-1">Atingindo 92% da meta</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 max-w-[430px] mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-3 border border-white/30">
              <div className="text-blue-400 text-[15px] font-semibold">Scanner inteligente</div>
              <div className="text-gray-300 text-[15px]">Código de barras + IA generativa para fotos de prato com estimativa de macros e porções.</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-3 border border-white/30">
              <div className="text-blue-400 text-[15px] font-semibold">Planos personalizados</div>
              <div className="text-gray-300 text-[15px]">Sugestões de refeições alinhadas ao objetivo calórico, restrições e disponibilidade local.</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-3 border border-white/30">
              <div className="text-blue-400 text-[15px] font-semibold">Integrações externas</div>
              <div className="text-gray-300 text-[15px]">Nutritionix, restaurantes parceiros e lembretes de hidratação com insights semanais.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
