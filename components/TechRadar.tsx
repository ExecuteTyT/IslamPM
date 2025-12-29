import React from 'react';
import { ContentProvider } from '../types';
import { Code2, Server, Globe } from 'lucide-react';

interface TechRadarProps {
  content: ContentProvider['skills'];
}

const TechRadar: React.FC<TechRadarProps> = ({ content }) => {
  // Helper to get an icon for categories (visual flair)
  const getCategoryIcon = (idx: number) => {
    switch(idx) {
      case 0: return <Code2 size={16} className="text-neon-green" />;
      case 1: return <Globe size={16} className="text-neon-cyan" />;
      default: return <Server size={16} className="text-neon-purple" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 border-b border-gray-800 pb-4">{content.title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Management & Soft Skills */}
          <div className="space-y-12">
            
            {/* Management */}
            <div>
              <h3 className="text-xl font-mono text-neon-cyan mb-8 border-l-2 border-neon-cyan pl-3">{content.mgmtTitle}</h3>
              <div className="space-y-6">
                {content.management.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="font-mono text-neon-green text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}% MASTERY
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-green to-neon-cyan group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-mono text-white/70 mb-6 border-l-2 border-gray-700 pl-3">{content.softTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {content.soft.map((skill) => (
                   <span key={skill} className="px-3 py-1.5 border border-white/20 rounded-full text-sm text-gray-300 hover:border-white hover:text-white transition-colors cursor-default">
                     {skill}
                   </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Technical Arsenal (Categorized) */}
          <div>
             <h3 className="text-xl font-mono text-neon-purple mb-8 border-l-2 border-neon-purple pl-3">{content.techTitle}</h3>
             
             <div className="grid grid-cols-1 gap-6">
               {content.tech.map((category, idx) => (
                 <div key={category.category} className="bg-white/5 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      {getCategoryIcon(idx)}
                      <h4 className="font-bold text-gray-200 text-sm tracking-wider">{category.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((item) => (
                        <span key={item} className="px-3 py-1.5 bg-black/40 text-gray-400 text-xs font-mono rounded border border-white/5 hover:text-white hover:border-white/20 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                 </div>
               ))}
             </div>

             <div className="mt-8 p-6 border border-dashed border-gray-700 rounded-lg bg-black/40">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-xs text-gray-400 space-y-2">
                  <p><span className="text-neon-purple">const</span> <span className="text-blue-400">pmStack</span> = <span className="text-yellow-300">new</span> Map();</p>
                  <p className="pl-4">pmStack.set(<span className="text-green-300">"Core"</span>, [<span className="text-orange-300">"Agile"</span>, <span className="text-orange-300">"Jira"</span>]);</p>
                  <p className="pl-4">pmStack.set(<span className="text-green-300">"Tech"</span>, [<span className="text-orange-300">"Python"</span>, <span className="text-orange-300">"AI"</span>]);</p>
                  <p className="text-gray-500">// Bridging the gap between Business and Engineering</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechRadar;