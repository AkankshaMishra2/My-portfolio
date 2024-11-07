'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const insights = [
    {
        title: "Smart Budgeting: Enhancing Personal Finance Management",
        date: "October 20, 2024",
        image: "/images/finance.png",
        description: "Explore how smart budgeting tools can enhance personal finance management. Learn about the key features and benefits of integrating comprehensive budgeting dashboards into your daily life."
    },
    {
        title: "Splitting Bills Made Easy: How SPEnd Simplifies Group Expenses",
        date: "October 17, 2024",
        image: "/images/split.png",
        description: "Discover how SPEnd is revolutionizing the way we split bills. This insight delves into the ways SPEnd's intuitive tools are making group expense management more accessible and hassle-free."
    },
   
    {
        title: "PlanB: A Comprehensive Blog Website",
        date: "October 15, 2024",
        image: "/images/blog.jpg",
        description: "Dive into the features and functionalities of PlanB, a comprehensive blog website. Learn how PlanB can help you create, manage, and grow your blog with ease."
    },
    

{
    title: "None Hungry: A Food Donation Website",
    date: "October 25, 2024",
    image: "/images/noonehungry.png",
    description: "Learn about None Hungry, a platform dedicated to connecting food donors with those in need. Discover how this website is making a difference in the fight against hunger."
}
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextInsight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % insights.length)
  }

  const prevInsight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + insights.length) % insights.length)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 bg-white rounded-full" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>PROJECT INSIGHTS</h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1">
              <motion.img
                src={insights[currentIndex].image}
                alt={insights[currentIndex].title}
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl relative z-20" // Increase z-index
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {insights[currentIndex].title}
              </motion.h2>
              <motion.p
                className="text-gray-400"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {insights[currentIndex].date}
              </motion.p>
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {insights[currentIndex].description}
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button
                  onClick={prevInsight}
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center transition-transform hover:scale-105"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Previous
                </button>
                <button
                  onClick={nextInsight}
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center transition-transform hover:scale-105"
                >
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-center">
          {insights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}