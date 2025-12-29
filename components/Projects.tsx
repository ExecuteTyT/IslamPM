import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Cpu, Tag, Layers, Users, Rocket, CheckCircle } from 'lucide-react';
import { FeaturedProject, ContentProvider } from '../types';

interface ProjectsProps {
  content: ContentProvider['projects'];
}

// Modal Component
const ProjectModal: React.FC<{ project: FeaturedProject; onClose: () => void; closeText: string }> = ({ project, onClose, closeText }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row transition-transform duration-300 ${mounted ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Visual Sidebar (Hidden on mobile for space) */}
        <div className="hidden md:flex w-1/4 bg-gray-900 border-r border-white/5 items-center justify-center p-8 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
           <div className="text-8xl font-bold text-white/5 absolute -rotate-90 select-none whitespace-nowrap">
             {project.id.toUpperCase()}
           </div>
           
           <div className="relative z-10 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/20">
                <Cpu className="text-neon-green" size={40} />
              </div>
              <div className="text-xs font-mono text-gray-500">SYSTEM_ID: {project.id}</div>
              
              <div className="pt-8 space-y-2">
                {project.stats.map((stat, i) => (
                  <div key={i} className="text-[10px] text-gray-400 border border-white/5 rounded px-2 py-1 bg-black/20">
                    {stat}
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto no-scrollbar bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f]">
           
           {/* Header */}
           <div className="mb-8 border-b border-white/5 pb-6">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
             <div className="text-neon-green font-mono text-sm tracking-wider mb-4">{project.subtitle}</div>
             
             <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                   <Rocket size={14} className="text-neon-cyan" />
                   <span className="font-medium text-white">{project.role}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                   <Users size={14} className="text-neon-purple" />
                   <span>{project.team}</span>
                </div>
             </div>
           </div>

           {/* Tech Stack */}
           <div className="mb-8">
             <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
               <Layers size={14} /> Technology Stack
             </h4>
             <div className="flex flex-wrap gap-2">
               {project.tags.map(tag => (
                 <span key={tag} className="px-3 py-1.5 bg-black border border-white/10 rounded font-mono text-xs text-neon-green hover:bg-neon-green/10 transition-colors">
                   {tag}
                 </span>
               ))}
             </div>
           </div>

           {/* Key Achievements */}
           <div className="prose prose-invert max-w-none mb-8">
             <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
               <CheckCircle size={14} /> Key Achievements
             </h4>
             <ul className="space-y-4">
               {project.achievements.map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed group">
                   <span className="mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-neon-cyan transition-colors shrink-0"></span>
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="mt-4 pt-6 border-t border-white/10 flex justify-end">
             <button onClick={onClose} className="px-6 py-2 border border-white/10 rounded text-sm text-gray-400 hover:text-white hover:border-white transition-colors uppercase">
               {closeText}
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: FeaturedProject; index: number; onOpen: (p: FeaturedProject) => void }> = ({ project, index, onOpen }) => {
  return (
    <div className="sticky top-24 min-h-[70vh] flex items-center justify-center mb-12">
      <div className="w-full max-w-5xl glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[500px]">
          
          {/* Visual Side - Clickable to open modal */}
          <div 
            onClick={() => onOpen(project)}
            className={`relative overflow-hidden bg-gradient-to-br ${
            index === 0 ? 'from-green-900/20 to-black' : 
            index === 1 ? 'from-blue-900/20 to-black' : 'from-purple-900/20 to-black'
          } p-8 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all`}
          >
            {project.imageType === 'mobile' && (
              <div className="w-48 h-96 border-4 border-gray-800 rounded-[3rem] bg-black relative shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden flex items-center justify-center text-gray-600 font-mono group-hover:bg-gray-800 transition-colors">
                  &lt;APP_UI /&gt;
                </div>
              </div>
            )}
            {project.imageType === 'system' && (
               <div className="w-full h-64 bg-gray-900 rounded-lg border border-gray-700 p-4 font-mono text-xs text-green-500 opacity-80 shadow-[0_0_30px_rgba(0,255,157,0.1)] hover:opacity-100 transition-opacity">
                 <div className="flex gap-2 mb-4 border-b border-gray-800 pb-2">
                   <div className="w-2 h-2 rounded-full bg-red-500"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 </div>
                 <div className="space-y-1">
                    <p>GET /api/v1/orders/status... 200 OK</p>
                    <p>Processing geo-allocation...</p>
                    <p>Dispatcher assigned: ID_9291</p>
                 </div>
               </div>
            )}
             {project.imageType === 'abstract' && (
               <div className="w-40 h-40 rounded-full border-4 border-dashed border-gray-700 animate-spin-slow flex items-center justify-center">
                 <div className="w-20 h-20 bg-neon-purple/20 rounded-full blur-xl"></div>
               </div>
            )}
            
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-500">
              ID: {project.id.toUpperCase()}_SYS
            </div>
            {/* Hint overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/20">Click to Expand</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-[#0c0c0c]">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider border border-white/10 rounded text-gray-400">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-neon-green font-mono text-sm mb-6">{project.subtitle}</p>

            <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3">
              {project.description}
            </p>

            <button 
              onClick={() => onOpen(project)}
              className="self-start flex items-center gap-2 text-sm font-bold border-b border-neon-green pb-1 hover:text-neon-green transition-colors"
            >
              VIEW CASE STUDY <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">{content.title}</h2>
        <div className="relative">
          {content.items.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} closeText={content.closeText} />
      )}
    </section>
  );
};

export default Projects;