import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import TechRadar from './components/TechRadar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Extra from './components/Extra';
import Footer from './components/Footer';
import { Language } from './types';
import { GET_CONTENT } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const content = GET_CONTENT(lang);

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-green selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      
      <main>
        <Hero content={content.hero} lang={lang} />
        <BentoGrid content={content.metrics} />
        <TechRadar content={content.skills} />
        <Projects content={content.projects} />
        <Experience content={content.experience} />
        <Extra content={content.extra} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

export default App;
