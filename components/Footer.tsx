import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { METADATA } from '../constants';
import { ContentProvider } from '../types';

interface FooterProps {
  content: ContentProvider['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-black py-24 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          {content.title.start} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">
            {content.title.highlight}
          </span>
        </h2>

        <div className="flex flex-col items-center gap-6 mb-16">
          <a href={`mailto:${METADATA.email}`} className="text-xl md:text-2xl text-gray-300 hover:text-white transition-colors border-b border-gray-800 hover:border-white pb-1">
            {METADATA.email}
          </a>
          <a href={`tel:${METADATA.phone.replace(/\D/g, '')}`} className="text-lg text-gray-400 font-mono">
            {METADATA.phone}
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-500">
             <MapPin size={14} />
             {content.location} <span className="px-2 py-0.5 bg-green-900/30 text-green-500 text-[10px] rounded">{content.relocate}</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a href={METADATA.telegramBot} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <Send size={20} />
          </a>
        </div>

        <div className="text-[10px] text-gray-700 font-mono uppercase tracking-widest">
          {content.copy}
        </div>
      </div>
    </footer>
  );
};

export default Footer;