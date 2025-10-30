import React from "react"

export default function Footer() {
  return (
    <footer className="w-full py-7 mt-24 bg-[#141b2d] rounded-t-3xl">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col items-center justify-between md:flex-row text-xs text-[#b9e6fc]">
        <div className="mb-2 md:mb-0">© 2025 GymVerse. Todos os direitos reservados.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">Política de privacidade</a>
          <a href="#" className="hover:text-white transition">Termos de uso</a>
          <a href="#" className="hover:text-white transition">Contato para parcerias</a>
        </div>
      </div>
    </footer>
  )
}
