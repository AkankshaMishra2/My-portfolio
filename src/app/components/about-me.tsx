"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function AboutMe() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto px-4 py-12 bg-black text-foreground rounded-lg shadow-2xl border border-gray-800 __className_1deade"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div className="flex-1 space-y-6" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-300 text-lg">
            Hi, I&apos;m Akanksha! Currently a Computer Science Engineering student with a passion for web development and problem-solving. I enjoy building clean, efficient code and continuously expanding my knowledge in full-stack development.
          </p>
          <p className="text-gray-300 text-lg">
            My primary skills include web development, C/C++, Python, and version control with Git & GitHub. Always eager to dive into new technologies, I&apos;m on a journey to become a well-rounded developer, ready to tackle real-world challenges.
          </p>
          <motion.div className="mt-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-3">Key Skills</h3>
            <ul className="grid grid-cols-2 gap-2">
              <Skill title="Web Development" />
              <Skill title="C/C++" />
              <Skill title="Python" />
              <Skill title="Git & GitHub" />
            </ul>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex-1 flex justify-center relative z-20"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative z-20 w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/images/akanksha2.jpg" // Update to your image path
              alt="Akanksha"
              layout="fill"
              objectFit="cover"
            />
            <motion.div
              className="absolute inset-0 bg-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Skill = ({ title }: { title: string }) => {
  return (
    <motion.li 
      className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2"
      whileHover={{ scale: 1.05, backgroundColor: "#2a4365" }}
      whileTap={{ scale: 0.95 }}
    >
      <CheckIcon />
      <span className="text-white">{title}</span>
    </motion.li>
  )
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-500"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
