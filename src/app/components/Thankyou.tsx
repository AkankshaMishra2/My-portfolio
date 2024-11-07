import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Code, Coffee, Brain } from 'lucide-react';

const ThankYouSection = () => {
  const [floatingElements, setFloatingElements] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate random positions after component mounts on client side
    setFloatingElements(
      Array(6).fill(null).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100
      }))
    );
  }, []);

  return (
    <div className="w-full bg-black text-foreground">
      <motion.div 
        className="relative py-24 overflow-hidden"
        initial={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        animate={{ 
          background: [
            "rgba(0, 0, 0, 1)",
          ]
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
          delay: 0.5
        }}
      >
        {floatingElements.map((pos, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ 
              x: `${pos.x}%`,
              y: `${pos.y}%`,
              scale: 0,
              opacity: 0 
            }}
            animate={{
              y: [null, '-100vh'],
              scale: [0, 1, 0.8],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 10 + Math.floor(index * 2),
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.8
            }}
          >
            {index % 3 === 0 ? (
              <Sparkles className="w-6 h-6 text-purple-400" />
            ) : index % 3 === 1 ? (
              <Star className="w-4 h-4 text-cyan-400" />
            ) : (
              <Heart className="w-5 h-5 text-pink-400" />
            )}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                background: 'linear-gradient(to right, #60efff, #c073ff, #ff73b3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto'
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              Thank You for Reaching Here!
            </motion.h2>

            <motion.div 
              className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Every great collaboration starts with a simple hello. I'm excited to explore the possibilities together and turn your vision into reality.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Code className="w-6 h-6" />, label: "Lines of Code", value: "10k+" },
                { icon: <Brain className="w-6 h-6" />, label: "Learning Hours", value: "500+" },
                { icon: <Star className="w-6 h-6" />, label: "Award Won", value: "1" },
                { icon: <Coffee className="w-6 h-6" />, label: "Cups of Coffee", value: "∞" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="group"
                >
                  <motion.div 
                    className="flex flex-col items-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-gray-800
                             hover:bg-gradient-to-b hover:from-purple-500/10 hover:to-transparent transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2 
                                  group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block"
            >
              <motion.div
                className="text-lg md:text-xl text-gray-400 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Let's make something amazing together! 🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default ThankYouSection;