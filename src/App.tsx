import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleToggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <div className="portfolio-app">
      <AnimatedBackground />
      <Navbar onOpenChat={handleOpenChat} />
      
      <main className="main-content">
        <Hero onOpenChat={handleOpenChat} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      <Chatbot 
        isOpen={isChatOpen} 
        onClose={handleCloseChat} 
        onToggle={handleToggleChat} 
      />

      <style>{`
        .portfolio-app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
        }

        .main-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
