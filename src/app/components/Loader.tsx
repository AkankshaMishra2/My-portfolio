'use client'

import React, { useState, useEffect } from 'react'

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true)
  const [fillComplete, setFillComplete] = useState(false)
  const letters = "AKANKSHA".split("")
  const [slideUp, setSlideUp] = useState(false)

  useEffect(() => {
    // Start fill animation
    const fillTimer = setTimeout(() => {
      setFillComplete(true)
      // Start slide up animation after fill
      const slideTimer = setTimeout(() => {
        setSlideUp(true)
        // Hide loader after slide up
        const hideTimer = setTimeout(() => {
          setShowLoader(false)
        }, 1000)
        return () => clearTimeout(hideTimer)
      }, 1500)
      return () => clearTimeout(slideTimer)
    }, 2000)
    return () => clearTimeout(fillTimer)
  }, [])

  if (!showLoader) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <div 
        className={`transform transition-transform duration-1000 ease-in-out ${
          slideUp ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="relative">
          {/* Before-after lines */}
          <div className="absolute -left-40 top-1/2 w-32 h-px bg-white/20 transform -translate-y-1/2" />
          <div className="absolute -right-40 top-1/2 w-32 h-px bg-white/20 transform -translate-y-1/2" />
          
          {/* Main text container */}
          <div className="flex space-x-4">
            {letters.map((letter, index) => (
              <div key={index} className="relative">
                {/* Letter outline */}
                <div className="relative">
                  <span className="text-6xl font-['IBM_Plex_Mono'] font-thin tracking-wider text-white/20">
                    {letter}
                  </span>
                  
                  {/* Fill effect */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      transition: `clip-path ${0.5}s ease-in-out`,
                      transitionDelay: `${index * 0.1}s`,
                      clipPath: fillComplete 
                        ? 'inset(0 0 0 0)' 
                        : 'inset(100% 0 0 0)'
                    }}
                  >
                    <span className="text-6xl font-['IBM_Plex_Mono'] font-thin tracking-wider text-white">
                      {letter}
                    </span>
                  </div>
                </div>

                {/* Decorative dot */}
                <div 
                  className="absolute -bottom-4 left-1/2 w-1 h-1 bg-white/50 transform -translate-x-1/2"
                  style={{
                    opacity: fillComplete ? 1 : 0,
                    transition: 'opacity 0.3s',
                    transitionDelay: `${(index * 0.1) + 0.5}s`
                  }}
                />
              </div>
            ))}
          </div>

          {/* Motion lines */}
          <div 
            className={`absolute -inset-8 border border-white/10 rounded-full transition-transform duration-1000 ${
              fillComplete ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          <div 
            className={`absolute -inset-16 border border-white/5 rounded-full transition-transform duration-1000 delay-100 ${
              fillComplete ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
        </div>
      </div>
    </div>
  )
}