import React, { useState } from 'react';
import { Menu, Globe, X } from 'lucide-react';
import { Language, ContentProvider } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentProvider['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu on click
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 h-16 flex items-center justify-between px-6 lg:px-12 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          <span className="font-mono text-sm tracking-widest text-white/80 font-bold">{content.title}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-gray-400">
          <button onClick={() => scrollTo('metrics')} className="hover:text-neon-green transition-colors">{content.items[0]}</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-neon-green transition-colors">{content.items[1]}</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-neon-green transition-colors">{content.items[2]}</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-neon-green transition-colors">{content.items[3]}</button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === Language.EN ? Language.RU : Language.EN)}
            className="flex items-center gap-2 text-xs font-mono border border-white/10 px-3 py-1 rounded hover:border-neon-green hover:text-neon-green transition-colors"
          >
            <Globe size={14} />
            {lang}
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-black/95 backdrop-blur-xl border-t border-white/10 md:hidden flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-4">
          <button onClick={() => scrollTo('metrics')} className="text-xl font-mono text-gray-300 hover:text-neon-green">{content.items[0]}</button>
          <button onClick={() => scrollTo('skills')} className="text-xl font-mono text-gray-300 hover:text-neon-green">{content.items[1]}</button>
          <button onClick={() => scrollTo('projects')} className="text-xl font-mono text-gray-300 hover:text-neon-green">{content.items[2]}</button>
          <button onClick={() => scrollTo('experience')} className="text-xl font-mono text-gray-300 hover:text-neon-green">{content.items[3]}</button>
        </div>
      )}
    </>
  );
};

export default Navbar;