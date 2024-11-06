import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, CheckCircle } from 'lucide-react';

const LetsTask = () => {
  const [formState, setFormState] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    message: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Animation variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  return (
    <section className="w-full min-h-screen bg-black py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, #purple-500 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #pink-500 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, #purple-500 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, #pink-500 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-7xl mx-auto mt-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="overflow-hidden"
            custom={0}
            variants={textVariants}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Have a Project in Mind?
              <br />
              <motion.span 
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%'],
                  filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                Let's Talk
              </motion.span>
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm relative overflow-hidden">
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    'linear-gradient(to right, purple 0%, pink 100%)',
                    'linear-gradient(to left, purple 0%, pink 100%)',
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <h3 className="text-3xl font-semibold text-white mb-6 relative">Let's Create Magic Together</h3>
              <ul className="space-y-6">
                {[
                  "Turn your vision into reality",
                  "Create impactful digital experiences",
                  "Build something extraordinary",
                  "Elevate your digital presence"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300 text-lg"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight className="h-6 w-6 mr-3 text-purple-500" />
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { name: 'name', type: 'text', placeholder: 'Your Name' },
                    { name: 'email', type: 'email', placeholder: 'Your Email' },
                    { name: 'project', type: 'text', placeholder: 'Project Type' }
                  ].map((input, index) => (
                    <motion.div
                      key={input.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <input
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-black border border-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        onChange={handleChange}
                        value={formState[input.name]}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={4}
                      className="w-full px-6 py-4 rounded-xl bg-black border border-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      onChange={handleChange}
                      value={formState.message}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-all duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        className="h-6 w-6 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <span className="text-lg">Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 360]
                    }}
                    transition={{ duration: 1.5 }}
                  >
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-semibold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg">
                    I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetsTask;