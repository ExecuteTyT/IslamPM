import React from 'react';
import { Shield, Snowflake, Award } from 'lucide-react';
import { ContentProvider } from '../types';
import { METADATA } from '../constants';

interface ExtraProps {
  content: ContentProvider['extra'];
}

const Extra: React.FC<ExtraProps> = ({ content }) => {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pet Project */}
          <div className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-colors">
             <div className="flex items-center gap-3 mb-6">
               <Shield className="text-neon-cyan" />
               <h3 className="font-bold text-lg">{content.pet.title}</h3>
             </div>
             <p className="text-gray-400 text-sm mb-6">
               {content.pet.desc}
             </p>
             <a href={METADATA.telegramBot} target="_blank" rel="noreferrer">
                <button className="text-xs font-mono border border-neon-cyan text-neon-cyan px-4 py-2 rounded hover:bg-neon-cyan hover:text-black transition-colors">
                  {content.pet.btn}
                </button>
             </a>
          </div>

          {/* Education & Hobbies */}
          <div className="glass-panel p-8 rounded-xl border border-white/5 flex flex-col justify-center">
             <div className="mb-6">
                <h3 className="text-sm font-mono text-gray-500 mb-2">{content.edu.title}</h3>
                <p className="text-white font-bold">{content.edu.uni}</p>
                <p className="text-gray-400 text-sm">{content.edu.degree}</p>
                <p className="text-gray-500 text-xs mt-1">{content.edu.period}</p>
             </div>
             
             <div className="flex gap-6 mt-4">
                <div className="text-center group">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-2 group-hover:text-neon-purple transition-colors">
                     <Snowflake size={20} />
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase">{content.hobbies.sports}</span>
                </div>
                <div className="text-center group">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-2 group-hover:text-neon-purple transition-colors">
                     <Award size={20} />
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase">{content.hobbies.martial}</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Extra;
