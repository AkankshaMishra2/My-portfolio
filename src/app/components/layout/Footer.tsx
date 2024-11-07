import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Send,
  Copy,
  Check,
  ExternalLink,
  X,
  Linkedin
} from 'lucide-react';

const AwesomeContact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [toast, setToast] = useState({ show: false, message: '' });

  const socialLinks = [
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      href: "https://github.com/AkankshaMishra2",
      color: "hover:text-purple-500",
      handle: "@AkankshaMishra2",
      bgHover: "group-hover:bg-purple-500/10"
    },
    {
      icon: <X className="w-8 h-8" />,
      label: "X",
      href: "https://x.com/udk_Akanksha",
      color: "hover:text-blue-400",
      handle: "@udk_Akanksha",
      bgHover: "group-hover:bg-blue-500/10"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/akanksha--mishra",
      color: "hover:text-blue-600",
      handle: "Akanksha Mishra",
      bgHover: "group-hover:bg-blue-600/10"
    }
  ];

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    showToast('Copied to clipboard!');
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    return (
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={`transform-gpu ${className}`}
      >
        {children}
      </motion.div>
    );
  };

  const Toast = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: toast.show ? 1 : 0, y: toast.show ? 0 : 50 }}
      className="fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl z-50 flex items-center space-x-2"
    >
      <Check className="w-5 h-5 text-green-500" />
      <span>{toast.message}</span>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900/20 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Let&apos;s bring your ideas to life. Whether it's a new venture, a creative collaboration, or just an interesting concept - I'm all ears!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <TiltCard className="rounded-xl overflow-hidden">
            <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell me about your project idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Let&apos;s Create Together
                </motion.button>
              </form>
            </div>
          </TiltCard>

          {/* Quick Connect */}
          <TiltCard className="rounded-xl overflow-hidden">
            <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Connect</h3>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleCopy('your.email@example.com', 'email')}
                  className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-cyan-500" />
                    <span className="text-gray-300">your.email@example.com</span>
                  </div>
                  {copied === 'email' ? (
                    <Check className="text-green-500" />
                  ) : (
                    <Copy className="text-gray-400 group-hover:text-cyan-500" />
                  )}
                </motion.div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg bg-gray-900/50 border border-gray-800 flex items-center gap-2 ${link.color} ${link.bgHover} transition-colors`}
            >
              {link.icon}
              <span className="text-gray-400">{link.label}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Toast Notification */}
      {toast.show && <Toast />}
    </div>
  );
};

export default AwesomeContact;
