import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareCode, X, Send, Sparkles, User, BrainCircuit } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export default function Chatbot({ isOpen, onClose, onToggle }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I am Sharaniyan's AI Portfolio Assistant. Ask me anything about his work experience, psychology-driven marketing methods, education, or achievements!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { text: "What is his psychology marketing edge?", keyword: "psychology" },
    { text: "List his work experience", keyword: "experience" },
    { text: "What are his skills & tools?", keyword: "skills" },
    { text: "How can I contact him?", keyword: "contact" }
  ];

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const normalizeQuery = (text: string) => {
    return text.toLowerCase().trim();
  };

  // Chatbot intelligence / response matcher based strictly on CV
  const getBotResponse = (query: string): string => {
    const q = normalizeQuery(query);

    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('greet')) {
      return "Hello! I am here to help you learn more about Sharaniyan Kannathasan. You can ask me about his psychology studies, digital marketing experience, achievements, or contact details!";
    }

    if (q.includes('psychology') || q.includes('behavior') || q.includes('cognitive') || q.includes('edge') || q.includes('value') || q.includes('why')) {
      return "Sharaniyan's unique value is Psychology-driven Marketing. Reading for a BSc (Hons) in Applied Psychology at Plymouth Marjon University, UK, he understands WHY people make decisions. He applies cognitive principles to design marketing strategies, copy, and campaigns that connect with human motivations and drive higher conversions.";
    }

    if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('company') || q.includes('career') || q.includes('executive') || q.includes('media') || q.includes('aic') || q.includes('samugam') || q.includes('arivithal') || q.includes('dcn') || q.includes('vallunar') || q.includes('txtmsg')) {
      return "Sharaniyan's professional experience includes:\n\n" +
             "1. AIC Campus — Sales & Marketing Executive (April 2025 – Present): Promoting education programs, student counselling, and client communication.\n\n" +
             "2. Samugam Media Pvt Ltd — Marketing Executive (Oct 2025 – Present): Content creation, digital branding, and audience growth.\n\n" +
             "3. Arivithal @rippage — Social Media Executive: Content and campaign management.\n\n" +
             "4. DCN Stars Constructions — Marketing and Lead Gen Lead: Generating targeted customer leads.\n\n" +
             "5. Vallunar Experts & txtmsg.lk — Marketing Head: Leading SMS and digital marketing operations.";
    }

    if (q.includes('skill') || q.includes('tool') || q.includes('excel') || q.includes('canva') || q.includes('psytoolkit') || q.includes('language') || q.includes('tamil') || q.includes('english')) {
      return "Here are Sharaniyan's skills and tools:\n\n" +
             "• Marketing: Digital Marketing, Social Media Management, Content Creation, Email Marketing, Lead Generation, Analytics, Brand Promotion.\n\n" +
             "• Tools: Canva, PsyToolkit (psychology experiment builder), Microsoft Excel, and various data analysis tools.\n\n" +
             "• Languages: Tamil (Native), English (Fluent), and Sinhala (Basic).";
    }

    if (q.includes('education') || q.includes('study') || q.includes('degree') || q.includes('university') || q.includes('diploma') || q.includes('school') || q.includes('college')) {
      return "Sharaniyan's education details:\n\n" +
             "• BSc (Hons) Applied Psychology — Plymouth Marjon University, UK (Feb 2027 – Feb 2028)\n\n" +
             "• Advanced Diploma — TVEC, IMC-AIC Campus, Sri Lanka (Feb 2025 – Feb 2027)\n\n" +
             "• Secondary Education — Jaffna Hindu College.";
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('gmail')) {
      return "You can get in touch with Sharaniyan directly:\n\n" +
             "• Email: sharaniyan650@gmail.com\n" +
             "• Phone: +94 74 090 5585\n\n" +
             "Alternatively, you can fill out the contact form at the bottom of this portfolio page!";
    }

    if (q.includes('achievement') || q.includes('award') || q.includes('basketball') || q.includes('sport') || q.includes('champion') || q.includes('sahasak')) {
      return "Sharaniyan has achieved success across innovation, sports, and community leadership:\n\n" +
             "• SAHASAK NIMAVUM — National Inventions & Innovations Award (2016)\n" +
             "• Provincial Basketball Champions (Under-15 in 2016, Under-17 in 2018)\n" +
             "• National Basketball Champions (Under-20 C & B Division in 2019)\n" +
             "• Keerthikan Memorial Trophy Champions (2025)\n" +
             "• Active Member & Volunteer — Lions Club International (2025).";
    }

    if (q.includes('volunteer') || q.includes('community') || q.includes('youth') || q.includes('services') || q.includes('unicef') || q.includes('counsell') || q.includes('shanthikam')) {
      return "Sharaniyan is highly active in social & community organizations:\n\n" +
             "• Youth Coordinator for SSSC Child & Youth Services.\n" +
             "• Child & Youth Services Volunteer at Shanthikam Counselling Centre.\n" +
             "• UNICEF & Ministry of Health National Youth Consultation (Health & Wellbeing, 2025).\n" +
             "• Member & Volunteer for Lions Club International, Jaffna.\n" +
             "• Coordinator for OBF Foundations.";
    }

    // Default Fallback
    return "I want to make sure I give you exact information. Sharaniyan is a Psychology-driven Marketer and Student Counsellor based in Jaffna. Ask me about his 'experience', 'psychology edge', 'education', 'skills', 'achievements', or how to 'contact' him!";
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const responseText = getBotResponse(textToSend);
      setMessages(prev => [...prev, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        onClick={onToggle} 
        className={`chatbot-float-btn ${isOpen ? 'active' : ''}`}
        aria-label="Ask AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquareCode size={24} />}
        {!isOpen && <span className="tooltip-indicator">Chat with AI</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window glass-panel animate-slide-up">
          <div className="chat-header">
            <div className="chat-bot-identity">
              <div className="avatar-container">
                <BrainCircuit size={20} className="avatar-icon" />
                <span className="online-indicator"></span>
              </div>
              <div className="identity-text">
                <h4>Sharan's AI Assistant</h4>
                <span>Online & Ready</span>
              </div>
            </div>
            <button onClick={onClose} className="chat-close-btn" aria-label="Close Chat">
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message-wrapper ${msg.sender}`}>
                <div className="message-avatar">
                  {msg.sender === 'bot' ? <BrainCircuit size={14} /> : <User size={14} />}
                </div>
                <div className="message-bubble">
                  {msg.text.split('\n').map((paragraph, idx) => (
                    <p key={idx} className={paragraph.trim() === '' ? 'paragraph-spacer' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message-wrapper bot">
                <div className="message-avatar">
                  <BrainCircuit size={14} />
                </div>
                <div className="message-bubble typing-bubble">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="chat-quick-replies">
            {quickPrompts.map((prompt, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSend(prompt.text)}
                className="quick-reply-btn"
              >
                <Sparkles size={10} className="spark-icon" />
                <span>{prompt.text}</span>
              </button>
            ))}
          </div>

          {/* Input Panel */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputText);
            }} 
            className="chat-input-form"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about my experience, skills, contact..."
              className="chat-input"
            />
            <button type="submit" className="chat-send-btn" disabled={!inputText.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .chatbot-float-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-purple) 0%, #6366f1 100%);
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 99;
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chatbot-float-btn:hover {
          transform: scale(1.08) translateY(-3px);
          box-shadow: 0 12px 35px rgba(124, 58, 237, 0.6);
        }

        .chatbot-float-btn.active {
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          color: var(--text-primary);
        }

        .tooltip-indicator {
          position: absolute;
          right: 75px;
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          pointer-events: none;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }

        .chatbot-float-btn:hover .tooltip-indicator {
          opacity: 1;
          transform: translateX(0);
        }

        /* Chat window */
        .chatbot-window {
          position: fixed;
          bottom: 6.5rem;
          right: 2rem;
          width: 380px;
          height: 520px;
          display: flex;
          flex-direction: column;
          z-index: 98;
          overflow: hidden;
          background: rgba(10, 11, 16, 0.9) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
        }

        .chat-bot-identity {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar-container {
          position: relative;
          width: 32px;
          height: 32px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-purple);
        }

        .avatar-icon {
          animation: float 3s ease-in-out infinite;
        }

        .online-indicator {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid var(--bg-primary);
        }

        .identity-text {
          text-align: left;
        }

        .identity-text h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .identity-text span {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .chat-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
        }

        .chat-close-btn:hover {
          color: var(--text-primary);
        }

        /* Messages */
        .chat-messages-container {
          flex: 1;
          padding: 1.25rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .message-wrapper {
          display: flex;
          gap: 0.75rem;
          max-width: 85%;
          text-align: left;
        }

        .message-wrapper.bot {
          align-self: flex-start;
          flex-direction: row;
        }

        .message-wrapper.user {
          align-self: flex-end;
          flex-direction: row-reverse;
          max-width: 80%;
        }

        .message-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .message-wrapper.bot .message-avatar {
          color: var(--accent-purple);
          background: rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.15);
        }

        .message-bubble {
          padding: 0.75rem 1rem;
          border-radius: 14px;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .message-wrapper.bot .message-bubble {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border-top-left-radius: 2px;
        }

        .message-wrapper.user .message-bubble {
          background: var(--accent-purple);
          color: #ffffff;
          border-top-right-radius: 2px;
          box-shadow: 0 4px 10px rgba(124, 58, 237, 0.2);
        }

        .message-bubble p {
          margin-bottom: 0.4rem;
        }

        .message-bubble p:last-child {
          margin-bottom: 0;
        }

        .paragraph-spacer {
          height: 0.5rem;
          margin: 0 !important;
        }

        /* Typing indicator */
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.75rem 1.25rem !important;
        }

        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          animation: typing-bounce 1.4s infinite ease-in-out both;
        }

        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        /* Quick Replies */
        .chat-quick-replies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          background: rgba(255,255,255,0.01);
        }

        .quick-reply-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.35rem 0.65rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-reply-btn:hover {
          background: rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.2);
          color: var(--text-primary);
        }

        .spark-icon {
          color: var(--accent-teal);
        }

        /* Input Form */
        .chat-input-form {
          display: flex;
          padding: 0.75rem 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(15, 23, 42, 0.4);
          gap: 0.5rem;
        }

        .chat-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 0.6rem 0.85rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          transition: all 0.2s;
        }

        .chat-input:focus {
          outline: none;
          border-color: var(--accent-purple);
          background: rgba(255, 255, 255, 0.05);
        }

        .chat-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--accent-purple);
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s, opacity 0.2s;
        }

        .chat-send-btn:hover {
          background: #8b5cf6;
        }

        .chat-send-btn:disabled {
          background: rgba(255,255,255,0.05);
          color: var(--text-muted);
          cursor: not-allowed;
        }

        @media (max-width: 480px) {
          .chatbot-window {
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 0 !important;
            border: none !important;
          }
          .chatbot-float-btn {
            bottom: 1.25rem;
            right: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
