'use client'

import { useEffect, useState } from 'react'
import Hero from './components/home/hero'
import { GridPattern } from './components/ui/grid-pattern'
import { cn } from '@/lib/utils'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3500) // Adjust this timing to match your loader's total animation duration plus a small delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray="4 4"
          className="absolute inset-x-0 inset-y-[-30%] h-[200%] w-full skew-y-12"
          squares={[
            [0, 0],
            [1, 3],
            [2, 1],
            [4, 2],
            [6, 3],
            [8, 1],
            [10, 2],
            [12, 3],
          ]}
        />
      </div>
      <div
        className={cn(
          'transition-opacity duration-1000',
          showContent ? 'opacity-100' : 'opacity-0'
        )}
      >
        <Hero />
        {/* Other content */}
      </div>
    </div>
  )
}