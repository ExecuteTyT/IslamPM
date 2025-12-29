import React, { useState } from 'react';
import { GitCommit, Folder, FolderOpen, ChevronDown, ChevronRight, Terminal } from 'lucide-react';
import { ContentProvider, ExperienceItem } from '../types';

interface ExperienceProps {
  content: ContentProvider['experience'];
}

const JobItem: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.active || false);

  return (
    <div className="relative pl-8 md:pl-12 group">
      {/* Timeline Dot */}
      <div className={`absolute -left-[5px] top-1.5 w-3 h-3 rounded-full border-2 ${
        item.active ? 'bg-neon-green border-neon-green shadow-[0_0_10px_#00ff9d]' : 'bg-black border-gray-600 group-hover:border-white'
      } transition-colors z-10`}></div>
      
      {/* Connector Line overlay to fix gaps */}
      <div className="absolute left-[0px] top-4 bottom-0 w-[1px] bg-gray-800 -translate-x-[0.5px]"></div>

      <div className="mb-12">
        <div 
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors flex items-center gap-2">
              {item.company}
              {item.projects && (
                 <span className="text-xs font-normal text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5 flex items-center gap-1">
                   {isOpen ? <FolderOpen size={10} /> : <Folder size={10} />}
                   {item.projects.length} Projects
                 </span>
              )}
            </h3>
            <span className="font-mono text-sm text-gray-500">{item.period}</span>
          </div>
          
          <h4 className="text-md text-gray-300 font-medium mb-3">{item.role}</h4>
          
          {item.desc && (
             <p className="text-sm text-gray-400 mb-4 max-w-2xl">{item.desc}</p>
          )}

          {/* Fallback Achievements if no sub-projects */}
          {item.achievements && !item.projects && (
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-500 max-w-2xl">
              {item.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Nested Projects - "Module" Look */}
        {item.projects && isOpen && (
          <div className="mt-6 ml-0 md:ml-4 space-y-4 border-l-2 border-dashed border-gray-800 pl-6 animate-in fade-in slide-in-from-top-4 duration-300">
            {item.projects.map((proj, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-5 hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-3">
                   <div>
                     <h5 className="text-white font-semibold text-sm flex items-center gap-2">
                       <Terminal size={14} className="text-neon-purple" />
                       {proj.title}
                     </h5>
                     <div className="text-xs text-neon-cyan mt-1">{proj.role}</div>
                   </div>
                   <div className="hidden sm:block text-[10px] font-mono text-gray-500 bg-black/40 px-2 py-1 rounded max-w-[150px] truncate">
                      {proj.tech}
                   </div>
                </div>
                
                <div className="sm:hidden mb-3 text-[10px] font-mono text-gray-500 bg-black/40 px-2 py-1 rounded inline-block">
                    {proj.tech}
                </div>

                <ul className="space-y-2">
                  {proj.achievements.map((ach, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mt-1.5 shrink-0"></span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ content }) => {
  return (
    <section id="experience" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
             <GitCommit className="text-neon-purple" />
             {content.title}
          </h2>

          <div className="relative border-l border-gray-800 ml-3 pb-4">
            {content.items.map((item) => (
              <JobItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
