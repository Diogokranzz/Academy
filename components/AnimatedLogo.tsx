import React, { useState, useEffect } from "react"

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div 
      className="flex items-center gap-3 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div 
          className={`w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-cyan-400 flex items-center justify-center transition-all duration-300 ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          } ${isHovered ? 'scale-105 rotate-3' : 'scale-100 rotate-0'}`}
        >
          <div className="w-4 h-4 relative">
            <div 
              className="absolute inset-0 bg-white rounded-sm"
              style={{
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)'
              }}
            />
          </div>
        </div>
        <div 
          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-0 blur-sm transition-all duration-300 ${
            isHovered ? 'opacity-20' : ''
          }`}
        />
      </div>
      
      <div className="relative">
        <div 
          className={`font-bold text-xl tracking-tight transition-all duration-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          } text-black dark:text-white`}
          style={{}}
        >
          GymVerse
        </div>
      </div>
      
      <div 
        className={`absolute -bottom-0.5 left-10 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
          isHovered ? 'w-20' : 'w-0'
        }`}
      />
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}

