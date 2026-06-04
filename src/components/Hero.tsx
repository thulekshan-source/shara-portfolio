import React from 'react';
import { MessageSquare, ArrowDownRight, Compass, Sparkles, Brain } from 'lucide-react';
import profileImg from '../assets/profile.png';

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content animate-slide-up">
          <div className="location-badge">
            <Compass size={14} className="icon-pulse" />
            <span>Based in Jaffna, Sri Lanka</span>
          </div>
          
          <h1 className="hero-title">
            Sharaniyan <span className="accent-gradient-text">Kannathasan</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Psychology-Driven <span className="highlight">Marketing Professional</span> & Student Counsellor
          </h2>
          
          <p className="hero-description">
            Reading for <strong className="text-glow">BSc (Hons) in Applied Psychology</strong> at Plymouth Marjon University, UK. 
            I bridge the gap between human behavior and modern digital marketing tools, understanding not just *how* to market, but *why* people decide.
          </p>

          <div className="hero-ctas">
            <button onClick={onOpenChat} className="btn btn-primary hero-btn-chat">
              <MessageSquare size={18} />
              <span>Chat with AI Assistant</span>
            </button>
            <a href="#about" className="btn btn-secondary hero-btn-explore">
              <span>Learn My Secret</span>
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-float">
          <div className="profile-image-container">
            <div className="profile-glow"></div>
            <img src={profileImg} alt="Sharaniyan Kannathasan" className="profile-img" />
          </div>
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 8rem;
          padding-bottom: 4rem;
          z-index: 1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .location-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .icon-pulse {
          color: var(--accent-teal);
          animation: pulse-glow 2s infinite;
          border-radius: 50%;
        }

        .hero-title {
          font-size: 3.75rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.04em;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .hero-subtitle .highlight {
          color: var(--text-primary);
          border-bottom: 2px solid var(--accent-purple);
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.7;
        }

        .text-glow {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          width: 100%;
        }

        .hero-btn-chat {
          box-shadow: 0 4px 20px rgba(147, 51, 234, 0.5);
        }

        .hero-btn-explore {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Hero Visual side */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-image-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        .profile-glow {
          position: absolute;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-magenta) 0%, transparent 70%);
          filter: blur(40px);
          opacity: 0.5;
          z-index: -1;
        }

        .profile-img {
          width: 100%;
          max-width: 340px;
          aspect-ratio: 1 / 1;
          border-radius: 24px;
          object-fit: cover;
          object-position: center 10%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }

        /* Floating elements */
        .floating-bubble {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          z-index: 1;
        }

        .bubble-1 {
          top: -20px;
          left: -20px;
          width: 150px;
          height: 150px;
          background: var(--accent-magenta);
          opacity: 0.2;
        }

        .bubble-2 {
          bottom: -30px;
          right: -10px;
          width: 120px;
          height: 120px;
          background: var(--accent-teal);
          opacity: 0.1;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-description {
            margin-bottom: 2rem;
          }
          .hero-ctas {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }
          .hero-ctas .btn {
            width: 100%;
            justify-content: center;
          }
          .profile-img {
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
}
