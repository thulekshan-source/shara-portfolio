
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          SK<span className="dot">.</span>
        </div>
        
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#education" className="footer-link">Education</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Sharaniyan Kannathasan. All Rights Reserved.
          </p>
          <p className="made-with">
            Designed with <Heart size={12} className="heart-icon" /> for the ultimate psychology-driven marketing edge.
          </p>
        </div>
        
        <button onClick={scrollToTop} className="back-to-top" aria-label="Scroll to top">
          <ArrowUp size={16} />
        </button>
      </div>

      <style>{`
        .footer-container {
          background: transparent;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 1.5rem 3rem;
          position: relative;
        }

        .footer-content {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }

        .footer-logo .dot {
          color: var(--accent-teal);
        }

        .footer-links {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: 2rem;
          width: 100%;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .made-with {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }

        .heart-icon {
          color: #ef4444;
        }

        .back-to-top {
          position: absolute;
          right: 2rem;
          bottom: 2.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .back-to-top:hover {
          background: var(--accent-purple);
          border-color: var(--accent-purple);
          color: #fff;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 3rem 1rem 2rem;
          }
          .back-to-top {
            position: static;
            margin-top: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
