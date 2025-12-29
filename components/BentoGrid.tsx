import React, { useEffect, useRef, useState } from 'react';
import { Activity, Users, Network, TrendingUp, Layers } from 'lucide-react';
import { ContentProvider } from '../types';

interface BentoGridProps {
  content: ContentProvider['metrics'];
}

// Reusable animated card component
const BentoCard: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if hover is supported (Desktop) vs Touch
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsTouchDevice(!mediaQuery.matches);

    // Only set up intersection observer for touch devices
    if (!mediaQuery.matches) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: '-20% 0px -20% 0px', 
          threshold: 0.1
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) observer.disconnect();
      };
    }
  }, []);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        // Apply active styles if it's touch device AND visible
        isTouchDevice && isVisible ? 'scale-[1.02] border-opacity-100 bg-white/10' : 'border-opacity-50'
      }`}
      // data-active helps us target styles conditionally in CSS if needed, 
      // but we primarily use the conditional classes above and standard group-hover for desktop
      data-active={isTouchDevice && isVisible}
    >
      {children}
    </div>
  );
};

const BentoGrid: React.FC<BentoGridProps> = ({ content }) => {
  return (
    <section id="metrics" className="py-24 bg-dark-bg relative overflow-hidden">
       {/* Decorative background element */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
          <Activity className="text-neon-green" size={40} />
          <span className="tracking-tighter text-white">{content.title}</span>
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:auto-rows-[240px]">
          
          {/* Card 1: Experience (Large, spans 2x2 on Desktop) */}
          <BentoCard className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-between group hover:border-neon-green/50 data-[active=true]:border-neon-green/50 bg-gradient-to-br from-[#111] to-black">
            <div className="flex justify-between items-start">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-green">
                 <TrendingUp size={12} />
                 <span>SENIORITY</span>
               </div>
               <Activity className="text-gray-800 group-hover:text-neon-green group-data-[active=true]:text-neon-green transition-colors duration-500 transform group-hover:scale-110 group-data-[active=true]:scale-110" size={60} />
            </div>
            
            <div className="mt-8">
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4 tracking-tighter">
                {content.exp.val}
              </div>
              <div className="text-lg md:text-xl text-gray-400 font-medium leading-tight group-hover:text-white group-data-[active=true]:text-white transition-colors uppercase tracking-wide">
                {content.exp.label}
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Budget */}
          <BentoCard className="col-span-1 glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center group hover:bg-white/5 data-[active=true]:bg-white/5 border-t border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-neon-purple/10 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 blur-xl"></div>
             <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 group-data-[active=true]:scale-110 transition-transform duration-300">{content.budget.val}</div>
                <div className="text-xs md:text-sm text-gray-500 font-mono uppercase tracking-widest">{content.budget.label}</div>
             </div>
          </BentoCard>

          {/* Card 3: Integrations (Replaced Scale) */}
          <BentoCard className="col-span-1 glass-panel p-8 rounded-3xl flex flex-col justify-between group hover:border-neon-cyan/50 data-[active=true]:border-neon-cyan/50 transition-all duration-300">
             <div className="flex justify-end">
                <Network className="text-neon-cyan/50 group-hover:text-neon-cyan group-data-[active=true]:text-neon-cyan transition-colors duration-300" size={32} />
             </div>
             <div>
                <div className="font-bold text-4xl text-white mb-1 group-hover:text-neon-cyan group-data-[active=true]:text-neon-cyan transition-colors">{content.integrations.val}</div>
                <div className="text-xs text-gray-500 leading-relaxed font-mono uppercase tracking-wider">{content.integrations.label}</div>
             </div>
          </BentoCard>

          {/* Card 4: Team */}
          <BentoCard className="col-span-1 glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-green/30 group-data-[active=true]:bg-neon-green/30 transition-colors"></div>
             <div className="p-4 bg-white/5 rounded-full mb-4 group-hover:rotate-12 group-data-[active=true]:rotate-12 transition-transform duration-300">
               <Users className="text-white" size={28} />
             </div>
             <div className="font-bold text-xl text-white">{content.team.title}</div>
             <div className="text-sm text-gray-500 mt-1">{content.team.label}</div>
          </BentoCard>

          {/* Card 5: Scope (Web/Mobile/IoT) */}
          <BentoCard className="col-span-1 glass-panel p-8 rounded-3xl flex flex-col justify-center items-center border border-neon-green/10 hover:border-neon-green/40 data-[active=true]:border-neon-green/40 transition-colors group text-center">
            <div className="text-5xl font-bold text-white mb-2 flex flex-col items-center gap-2">
               {content.scope.val}
            </div>
            <div className="flex items-center gap-2 mt-2 justify-center">
               <Layers size={14} className="text-neon-green" />
               <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-mono">
                 {content.scope.label}
               </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;