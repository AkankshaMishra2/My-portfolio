import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center lg:text-left">
          {/* Greeting */}
          <div className="text-white/80 font-mono mb-4 animate-fade-in">
            Hi, my name is
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Akanksha
            <span className="text-white/20">.</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/80 mb-8 animate-slide-up delay-100">
            I build things for the web
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-lg text-white/60 mb-12 animate-fade-in delay-200">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>

          {/* CTA Button */}
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors animate-fade-in delay-300"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;