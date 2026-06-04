import React from 'react';
import { Eye, TrendingUp, Target, ShieldCheck, HelpCircle, Activity } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Eye size={24} className="value-icon purple" />,
      title: "Decision Psychology",
      desc: "Analyzing visual hierarchy, attention spans, and decision patterns to guide user action naturally."
    },
    {
      icon: <TrendingUp size={24} className="value-icon teal" />,
      title: "Conversion Optimization",
      desc: "Crafting marketing copy and layout triggers centered around consumer motivation, reducing purchase hesitation."
    },
    {
      icon: <Target size={24} className="value-icon purple" />,
      title: "Audience Profiling",
      desc: "Segmenting demographics not just by age, but by behavioral drivers, cognitive biases, and psychological triggers."
    },
    {
      icon: <ShieldCheck size={24} className="value-icon teal" />,
      title: "Ethical Persuasion",
      desc: "Creating value-driven marketing setups that build long-term trust, rather than aggressive, spammy ads."
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Who is Sharaniyan?</h2>
      
      <div className="about-intro-grid">
        <div className="about-bio glass-panel">
          <h3 className="gradient-text">The Psychology Edge</h3>
          <p>
            I am a Psychology-driven Marketing Professional and Student Counsellor currently studying for my <strong>BSc (Hons) in Applied Psychology</strong> at Plymouth Marjon University, UK. 
          </p>
          <p>
            Traditional marketing relies on spreadsheets and general guesses. My approach starts with <strong>human behavior</strong>. By applying cognitive and behavioral science principles, I design digital strategies that match *how* the human brain perceives information, processes trust, and makes decisions.
          </p>
          <div className="counselor-callout">
            <Activity size={18} className="icon-pulse" />
            <span>Dual expertise as a <strong>Student Counsellor</strong>, specializing in active listening, student guidance, and professional client advisory at IMC-AIC Campus.</span>
          </div>
        </div>

        <div className="about-details glass-panel">
          <h3 className="accent-gradient-text">Quick Profile</h3>
          <ul className="profile-details-list">
            <li><strong>Name:</strong> Sharaniyan Kannathasan</li>
            <li><strong>Role:</strong> Marketing & Lead Gen Professional</li>
            <li><strong>Expertise:</strong> Psychology-Driven Marketing</li>
            <li><strong>Location:</strong> Jaffna, Sri Lanka</li>
            <li><strong>Email:</strong> sharaniyan650@gmail.com</li>
            <li><strong>Phone:</strong> +94 74 090 5585</li>
          </ul>
        </div>
      </div>

      <div className="psychology-deep-dive">
        <h3 className="section-subtitle">Why Psychology-Driven Marketing?</h3>
        <p className="deep-dive-lead">
          I apply scientific understanding of motivation, perception, and behavior to double-down on campaign performance.
        </p>

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card glass-card">
              <div className="value-icon-container">
                {v.icon}
              </div>
              <h4 className="value-title">{v.title}</h4>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-intro-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .about-bio, .about-details {
          padding: 2.5rem;
          text-align: left;
        }

        .about-bio h3, .about-details h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .about-bio p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .about-bio p strong {
          color: var(--text-primary);
        }

        .counselor-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.1);
          padding: 1.25rem;
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .counselor-callout .icon-pulse {
          color: var(--accent-teal);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .profile-details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-details-list li {
          color: var(--text-secondary);
          font-size: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding-bottom: 0.75rem;
        }

        .profile-details-list li strong {
          color: var(--text-primary);
          display: inline-block;
          width: 90px;
        }

        .section-subtitle {
          font-size: 1.75rem;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .deep-dive-lead {
          color: var(--text-secondary);
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
          font-size: 1.05rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .value-card {
          text-align: left;
        }

        .value-icon-container {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .value-icon.purple {
          color: #a78bfa;
        }

        .value-icon.teal {
          color: var(--accent-teal);
        }

        .value-title {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
        }

        .value-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .about-intro-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
