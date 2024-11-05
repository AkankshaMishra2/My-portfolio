'use client'

import { Inter } from 'next/font/google'
import { Navbar } from './components/layout/Navbar'
import Loader from './components/Loader'
import '../app/globals.css'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { GridPattern } from './components/ui/animated-grid-pattern'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Wait for loader animations (2s fill + 1.5s slide + 1s hide = 4.5s total)
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // Adjust this timing to match your loader's total animation duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-foreground`}>
        <Loader />
        <div
          className={cn(
            'fixed inset-0 -z-10 overflow-hidden',
            `transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`
          )}
        >
          <GridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          />
        </div>
        <div
          className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}