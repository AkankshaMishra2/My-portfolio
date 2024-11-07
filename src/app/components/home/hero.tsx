import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import IconCloud from '@/app/components/ui/icon-cloud';


const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android", "html5", "css3",
  "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", "postgresql", "firebase", "nginx",
  "vercel", "testinglibrary", "jest", "cypress", "docker", "git", "jira", "github", "gitlab",
  "visualstudiocode", "androidstudio", "sonarqube", "figma",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden __className_1deade">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Circular Icon Cloud */}
      {mounted && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000vw] h-[1000vw] pointer-events-none">
          {/* Increased to 1000vw to fill more horizontal space */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <IconCloud iconSlugs={[...slugs, ...slugs, ...slugs, ...slugs, ...slugs]} />
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-8 sm:px-10 lg:px-12 py-40 text-center relative z-10 bg-black/50 rounded-lg">
        {/* Added bg-black/50 and rounded-lg for highlighting text */}
        {/* Greeting */}
        <div className="text-white/80 font-mono mb-4 animate-fade-in">
          Hi, my name is
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
          Akanksha<span className="text-white/20">.</span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/80 mb-8 animate-slide-up delay-100">
          I build things for the web
        </h2>

        {/* Description */}
        <p className="text-lg text-white/60 mb-12 animate-fade-in delay-200">
          Software developer crafting exceptional digital experiences and accessible, human-centered products.
        </p>

        {/* CTA Button */}
        <Link
           href="https://github.com/AkankshaMishra2"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors animate-fade-in delay-300"
        >
          <span>View My Work</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}