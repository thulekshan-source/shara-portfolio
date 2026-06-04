import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get your free key at web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info-panel glass-panel">
          <h3 className="gradient-text">Let's Connect</h3>
          <p className="contact-intro-text">
            Have a project in mind, want to elevate your marketing campaigns, or interested in active student counselling advisory? Feel free to reach out directly.
          </p>

          <div className="info-items">
            <a href="mailto:sharaniyan650@gmail.com" className="info-item glass-card">
              <div className="info-icon-box purple">
                <Mail size={20} />
              </div>
              <div className="info-detail">
                <span>Email Me</span>
                <strong>sharaniyan650@gmail.com</strong>
              </div>
            </a>

            <a href="tel:+94740905585" className="info-item glass-card">
              <div className="info-icon-box teal">
                <Phone size={20} />
              </div>
              <div className="info-detail">
                <span>Call Me</span>
                <strong>+94 74 090 5585</strong>
              </div>
            </a>

            <div className="info-item glass-card">
              <div className="info-icon-box purple">
                <MapPin size={20} />
              </div>
              <div className="info-detail">
                <span>Location</span>
                <strong>Jaffna, Sri Lanka</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-panel glass-panel">
          {isSent ? (
            <div className="success-message animate-fade-in">
              <CheckCircle size={56} className="success-icon" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Sharaniyan will get back to you shortly.</p>
              <button onClick={() => setIsSent(false)} className="btn btn-secondary btn-reset">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Send a Message</h3>
              {error && <div className="form-error-banner">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we work together?"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                <Send size={16} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2rem;
          text-align: left;
        }

        .contact-info-panel, .contact-form-panel {
          padding: 2.5rem;
        }

        .contact-info-panel h3, .contact-form-panel .form-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .contact-intro-text {
          color: var(--text-secondary);
          font-size: 0.975rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-item:hover {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .info-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-icon-box.purple {
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(124, 58, 237, 0.15);
          color: #a78bfa;
        }

        .info-icon-box.teal {
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.15);
          color: var(--accent-teal);
        }

        .info-detail {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .info-detail span {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-detail strong {
          font-size: 1rem;
          color: var(--text-primary);
          word-break: break-all;
        }

        /* Form styling */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-error-banner {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #f87171;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .form-input {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-teal);
          background: rgba(255, 255, 255, 0.05);
        }

        textarea.form-input {
          resize: vertical;
        }

        .form-submit-btn {
          align-self: flex-start;
          margin-top: 0.5rem;
        }

        /* Success screen */
        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          padding: 2rem 0;
        }

        .success-icon {
          color: var(--accent-teal);
          margin-bottom: 1.5rem;
          animation: float 4s ease-in-out infinite;
        }

        .success-message h3 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
        }

        .success-message p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 320px;
        }

        .btn-reset {
          font-size: 0.875rem !important;
          padding: 0.5rem 1.25rem !important;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
