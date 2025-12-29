import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Download, ChevronRight } from 'lucide-react';
import { METADATA } from '../constants';
import { ContentProvider, Language } from '../types';

interface HeroProps {
  content: ContentProvider['hero'];
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  const d3Container = useRef<SVGSVGElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const handleDownloadCV = () => {
    // Download both resume files
    const resumeEN = content.resumeEN || '/Sabirzyanov_Islam_Resume_EN.pdf';
    const resumeRU = content.resumeRU || '/Sabirzyanov_Islam_Resume_RU.pdf';
    
    // Download English version
    const linkEN = document.createElement('a');
    linkEN.href = resumeEN;
    linkEN.download = 'Sabirzyanov_Islam_Resume_EN.pdf';
    document.body.appendChild(linkEN);
    linkEN.click();
    document.body.removeChild(linkEN);
    
    // Download Russian version with a slight delay
    setTimeout(() => {
      const linkRU = document.createElement('a');
      linkRU.href = resumeRU;
      linkRU.download = 'Sabirzyanov_Islam_Resume_RU.pdf';
      document.body.appendChild(linkRU);
      linkRU.click();
      document.body.removeChild(linkRU);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % content.role.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [content.role]);

  useEffect(() => {
    if (!d3Container.current) return;

    // Clear previous
    d3.select(d3Container.current).selectAll("*").remove();

    const width = d3Container.current.clientWidth;
    const height = d3Container.current.clientHeight;
    
    // Create Nodes
    const numNodes = 40;
    const nodes = d3.range(numNodes).map((i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      r: Math.random() * 2 + 1
    }));

    const svg = d3.select(d3Container.current);

    // Simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force("charge", d3.forceManyBody().strength(-20))
      .force("link", d3.forceLink().distance(100).strength(0.1))
      .force("center", d3.forceCenter(width / 2, height / 2).strength(0.05));

    // Draw Links
    const links = [];
    for(let i=0; i<numNodes; i++) {
        for(let j=i+1; j<numNodes; j++) {
            if(Math.random() > 0.85) {
                links.push({source: i, target: j});
            }
        }
    }

    // G groups
    const linkGroup = svg.append("g").attr("stroke", "#00ff9d").attr("stroke-opacity", 0.2);
    const nodeGroup = svg.append("g").attr("fill", "#ffffff");

    const linkSelection = linkGroup.selectAll("line")
       .data(links)
       .join("line")
       .attr("stroke-width", 1);

    const nodeSelection = nodeGroup.selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d, i) => i % 5 === 0 ? "#00ff9d" : "#ffffff");

    // Animation Tick
    simulation.on("tick", () => {
      // Boundaries
      nodes.forEach(node => {
         node.x += node.vx;
         node.y += node.vy;
         
         if (node.x <= 0 || node.x >= width) node.vx *= -1;
         if (node.y <= 0 || node.y >= height) node.vy *= -1;
      });

      nodeSelection
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      linkSelection
        .attr("x1", (d: any) => nodes[d.source].x)
        .attr("y1", (d: any) => nodes[d.source].y)
        .attr("x2", (d: any) => nodes[d.target].x)
        .attr("y2", (d: any) => nodes[d.target].y);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  const marqueeContent = (
    <>
      <span>React</span><span>•</span>
      <span>Python</span><span>•</span>
      <span>Docker</span><span>•</span>
      <span>OpenAI</span><span>•</span>
      <span>Swift</span><span>•</span>
      <span>PostgreSQL</span><span>•</span>
      <span>LangGraph</span><span>•</span>
      <span>FastAPI</span><span>•</span>
      <span>Flutter</span><span>•</span>
      <span>CI/CD</span><span>•</span>
    </>
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Grid with Animation */}
      <div className="absolute inset-0 z-0 opacity-10 animate-grid-flow" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* D3 Background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-30 md:opacity-60 pointer-events-none">
        <svg ref={d3Container} className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 border border-neon-green/30 bg-neon-green/10 rounded text-neon-green font-mono text-xs animate-pulse-slow">
            {content.status}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            {content.name}
          </h1>

          <div className="h-8 md:h-10 overflow-hidden">
            <p className="text-xl md:text-2xl text-gray-400 font-light flex items-center gap-3">
              <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
              <span className="transition-all duration-500 transform translate-y-0">
                {content.role[roleIndex]}
              </span>
            </p>
          </div>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-gray-800 pl-4">
             {content.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
              className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-neon-green transition-colors flex items-center justify-center gap-2 group"
            >
              {content.ctaPrimary}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-3 border border-white/20 text-white font-medium rounded hover:border-white transition-colors flex items-center justify-center gap-2"
            >
              {content.ctaSecondary}
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/5 bg-black/50 backdrop-blur-sm flex items-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-gray-500 font-mono text-sm uppercase tracking-widest min-w-full">
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
        </div>
      </div>
    </section>
  );
};

export default Hero;