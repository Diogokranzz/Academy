import React from "react"

export default function Community() {
  return (
    <section id="community" className="w-full max-w-[1220px] mx-auto flex flex-col gap-8 mt-24">
      <div className="w-full rounded-3xl px-2 sm:px-8 py-14 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 flex flex-col" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80) center/cover' }}>
        <h2 className="text-white text-3xl font-bold text-center mb-2 drop-shadow-lg">Rede social fitness com live streaming e desafios</h2>
        <p className="text-[18px] text-white/90 text-center mb-6 drop-shadow-md">Conecte-se a amigos, encontre novos parceiros de treino e mantenha o engajamento com conquistas, streaks e lives interativas.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className="rounded-2xl bg-gray-800/80 backdrop-blur-sm p-7 relative overflow-hidden border border-gray-600/50" style={{ background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80) center/cover' }}>
            <div className="text-xs text-blue-400 mb-1">LIVE AGORA</div>
            <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl px-5 py-4 mb-5 border border-gray-600/50">
              <div className="text-gray-300 font-semibold mb-2">Ana Monteiro</div>
              <div className="text-white font-bold">TREINO HIIT 30'</div>
              <div className="text-xs text-gray-300 mt-1">Treino com progressão + streak fire ativo (18 dias). Chat liberado para perguntas ao vivo e recompensas Pro.</div>
              <div className="flex gap-2 text-xs text-blue-400 font-medium mt-2"><span>128 amigos assistindo</span><span>Chat moderado</span></div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/20 backdrop-blur-sm p-7 flex flex-col gap-4 border border-white/30">
            <div className="font-semibold text-white">Feed imersivo</div>
            <div className="text-white/90 text-sm">Posts de treinos, PRs e fotos com comentários, reações e compartilhamento instantâneo.</div>
            <div className="font-semibold text-white mt-4">Match de treino</div>
            <div className="text-white/90 text-sm">Encontre parceiros por proximidade, objetivos e disponibilidade com chat E2E.</div>
            <div className="font-semibold text-white mt-4">Gamificação</div>
            <div className="text-white/90 text-sm">Badges, streaks, desafios mensais e leaderboards por cidade, academia e amigos.</div>
          </div>
          <div className="rounded-2xl bg-white/20 backdrop-blur-sm p-7 border border-white/30">
            <div className="font-bold text-white mb-2">DESTAQUES</div>
            <div className="flex flex-col gap-2">
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-3 text-sm text-white flex justify-between border border-gray-600/50"><span>100 treinos</span><span className="text-white/90">Badge lendária + XP + doação solidária</span></div>
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-3 text-sm text-white flex justify-between border border-gray-600/50"><span>1000 km</span><span className="text-white/90">Badge lendária + XP + doação solidária</span></div>
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-3 text-sm text-white flex justify-between border border-gray-600/50"><span>Streak 30 dias</span><span className="text-white/90">Badge lendária + XP + doação solidária</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
