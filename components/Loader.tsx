import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');

  useEffect(() => {
    const loadingSteps = [
      { text: 'INITIALIZING', progress: 20 },
      { text: 'LOADING RESOURCES', progress: 40 },
      { text: 'CONFIGURING INTERFACE', progress: 60 },
      { text: 'FINALIZING', progress: 85 },
      { text: 'READY', progress: 100 }
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
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Central Loader */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Circular Progress Ring */}
        <div className="relative w-40 h-40">
          {/* Background Circle */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#1f1f1f"
              strokeWidth="3"
            />
            {/* Progress Circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 70}`}
              strokeDashoffset={`${2 * Math.PI * 70 * (1 - progress / 100)}`}
              className="transition-all duration-500 ease-out"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0, 255, 157, 0.4))'
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff9d" />
                <stop offset="50%" stopColor="#00f3ff" />
                <stop offset="100%" stopColor="#00ff9d" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold font-mono text-white mb-1">
                {progress}
              </div>
              <div className="text-xs font-mono text-gray-500 tracking-wider">
                PERCENT
              </div>
            </div>
          </div>

          {/* Rotating subtle ring */}
          <div className="absolute inset-0 animate-spin-slow opacity-30">
            <svg viewBox="0 0 160 160" className="w-full h-full">
              <circle
                cx="80"
                cy="80"
                r="75"
                fill="none"
                stroke="#00ff9d"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-5">
          <div>
            <h2 className="text-lg font-mono font-semibold text-white tracking-widest uppercase">
              {loadingText}
            </h2>
          </div>

          {/* Minimalistic Progress Bar */}
          <div className="w-80 h-0.5 bg-dark-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-neon-green transition-all duration-500 ease-out"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)'
              }}
            />
          </div>

          {/* Status Indicators */}
          <div className="flex items-center justify-center gap-6 text-xs font-mono text-gray-600">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${progress >= 20 ? 'bg-neon-green animate-pulse' : 'bg-gray-700'}`} />
              <span className={progress >= 20 ? 'text-gray-400' : ''}>SYSTEM</span>
            </div>
            <div className="w-px h-4 bg-gray-800" />
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${progress >= 60 ? 'bg-neon-cyan animate-pulse' : 'bg-gray-700'}`} />
              <span className={progress >= 60 ? 'text-gray-400' : ''}>NETWORK</span>
            </div>
            <div className="w-px h-4 bg-gray-800" />
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${progress >= 100 ? 'bg-neon-green animate-pulse' : 'bg-gray-700'}`} />
              <span className={progress >= 100 ? 'text-gray-400' : ''}>READY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Corner Elements */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-white/10" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/10" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-white/10" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-white/10" />
    </div>
  );
};

export default Loader;

