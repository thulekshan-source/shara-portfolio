import { useState, useEffect } from 'react';
import { Menu, X, MessageSquareCode } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#hero" className="logo">
          SK<span className="dot">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button onClick={onOpenChat} className="btn btn-primary chat-cta-btn">
            <MessageSquareCode size={18} />
            <span>Ask AI Assistant</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-toggle" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="mobile-menu-panel animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenChat();
            }}
            className="btn btn-primary mobile-chat-btn"
          >
            <MessageSquareCode size={18} />
            <span>Ask AI Assistant</span>
          </button>
        </div>
      )}

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
          padding: 1.25rem 2rem;
          background: transparent;
        }

        .navbar-container.scrolled {
          padding: 0.75rem 2rem;
          background: rgba(8, 15, 33, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .navbar-content {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -0.03em;
        }

        .logo .dot {
          color: var(--accent-teal);
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.25s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-magenta));
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .chat-cta-btn {
          font-size: 0.875rem !important;
          padding: 0.5rem 1.25rem !important;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-menu-panel {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--glass-border);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .mobile-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-chat-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 1rem 1.2rem;
          }
          .navbar-container.scrolled {
            padding: 0.8rem 1.2rem;
          }
          .desktop-menu {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
