import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING SYSTEM');

  useEffect(() => {
    const loadingSteps = [
      { text: 'INITIALIZING SYSTEM', progress: 20 },
      { text: 'LOADING NEURAL NETWORK', progress: 40 },
      { text: 'ESTABLISHING CONNECTION', progress: 60 },
      { text: 'COMPILING DATA', progress: 80 },
      { text: 'SYSTEM READY', progress: 100 }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);
        setProgress(loadingSteps[currentStep].progress);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 animate-grid-flow" 
        style={{ 
          backgroundImage: 'linear-gradient(#00ff9d 1px, transparent 1px), linear-gradient(90deg, #00ff9d 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      />

      {/* Central Loader */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Hexagonal Spinner */}
        <div className="relative w-32 h-32">
          {/* Outer rotating hexagon */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                fill="none" 
                stroke="#00ff9d" 
                strokeWidth="2"
                className="opacity-50"
              />
            </svg>
          </div>

          {/* Middle rotating hexagon (reverse) */}
          <div className="absolute inset-4 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                fill="none" 
                stroke="#00f3ff" 
                strokeWidth="2"
                className="opacity-70"
              />
            </svg>
          </div>

          {/* Inner pulsing circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-neon-green bg-neon-green/20 animate-pulse-slow" />
          </div>

          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2"
              style={{
                animation: `orbit 3s linear infinite`,
                animationDelay: `${i * 1}s`,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-lg shadow-neon-cyan/50" />
            </div>
          ))}
        </div>

        {/* Loading Text with Glitch Effect */}
        <div className="text-center space-y-4">
          <div className="relative">
            <h2 className="text-2xl font-mono font-bold text-neon-green neon-text tracking-wider">
              {loadingText}
            </h2>
            {/* Glitch overlay */}
            <h2 
              className="absolute inset-0 text-2xl font-mono font-bold text-neon-cyan opacity-30 animate-pulse"
              style={{ transform: 'translate(2px, 2px)' }}
            >
              {loadingText}
            </h2>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-dark-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple transition-all duration-500 ease-out shadow-lg"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(0, 255, 157, 0.5)'
              }}
            />
          </div>

          {/* Progress Percentage */}
          <div className="font-mono text-sm text-gray-500">
            <span className="text-neon-green">{progress}%</span> COMPLETE
          </div>
        </div>

        {/* Bottom Binary Code Animation */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 overflow-hidden w-full max-w-2xl">
          <div className="flex gap-2 animate-marquee font-mono text-xs text-neon-green/30">
            {Array.from({ length: 50 }, (_, i) => (
              <span key={i}>{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-neon-green/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-neon-green/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-neon-green/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-neon-green/50" />

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;

