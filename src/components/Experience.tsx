
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const jobs = [
    {
      company: "AIC Campus (IMC-AIC Campus)",
      role: "Sales and Marketing Executive",
      period: "April 2025 – Present",
      bullets: [
        "Promoting international and local educational programs and driving student enrollment.",
        "Providing student counselling, academic guidance, and career path alignment.",
        "Leading client engagement, school presentations, and stakeholder communications."
      ]
    },
    {
      company: "Samugam Media Pvt Ltd",
      role: "Marketing Executive",
      period: "October 2025 – Present",
      bullets: [
        "Developing social media campaigns and digital content strategies.",
        "Managing brand positioning and community outreach.",
        "Analyzing media analytics and audience engagement to scale reach."
      ]
    },
    {
      company: "Arivithal @rippage",
      role: "Social Media and Marketing Executive",
      period: "Prior Contract",
      bullets: [
        "Spearheaded creative content direction and managed active social media portals.",
        "Configured marketing campaigns to expand brand presence and user interactions."
      ]
    },
    {
      company: "DCN Stars Constructions",
      role: "Marketing & Social Media Lead Gen Specialist",
      period: "Prior Contract",
      bullets: [
        "Designed targeted social media campaigns for real estate and construction sectors.",
        "Generated high-quality leads using direct response copywriting and local ads targeting."
      ]
    },
    {
      company: "Vallunar Experts & txtmsg.lk",
      role: "Marketing Head",
      period: "Prior Contract",
      bullets: [
        "Oversaw end-to-end B2B and B2C marketing operations.",
        "Spearheaded bulk SMS campaigns and automated message-based user retention funnels."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {jobs.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <Briefcase size={16} />
            </div>
            
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div className="title-group">
                  <h3 className="job-role">{job.role}</h3>
                  <h4 className="job-company text-glow">{job.company}</h4>
                </div>
                
                <div className="timeline-period-badge">
                  <Calendar size={14} />
                  <span>{job.period}</span>
                </div>
              </div>
              
              <ul className="job-bullets">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="bullet-check" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, 
            var(--accent-purple) 0%, 
            var(--accent-teal) 50%, 
            rgba(255,255,255,0.05) 100%
          );
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 80px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: 17px;
          top: 24px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-purple);
          z-index: 2;
          box-shadow: 0 0 10px rgba(124, 58, 237, 0.4);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          background: var(--accent-purple);
          color: #fff;
          border-color: var(--accent-purple);
          box-shadow: 0 0 15px var(--accent-purple);
          transform: scale(1.1);
        }

        .timeline-content {
          padding: 2rem;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(15, 23, 42, 0.4) !important;
        }

        .timeline-content:hover {
          border-color: rgba(6, 182, 212, 0.25) !important;
          box-shadow: 0 12px 40px 0 rgba(6, 182, 212, 0.08) !important;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding-bottom: 1rem;
        }

        .job-role {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .job-company {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--accent-teal);
        }

        .timeline-period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .job-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .job-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.975rem;
          line-height: 1.5;
        }

        .bullet-check {
          color: var(--accent-teal);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          .timeline-item {
            padding-left: 50px;
          }
          .timeline-dot {
            left: 7px;
          }
          .timeline-header {
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-start;
          }
          .job-role {
            font-size: 1.15rem;
          }
          .timeline-period-badge {
            align-self: flex-start;
          }
        }
        @media (max-width: 480px) {
          .timeline-content {
            padding: 1.25rem;
          }
          .timeline-item {
            padding-left: 35px;
          }
          .timeline-line {
            left: 15px;
          }
          .timeline-dot {
            left: 2px;
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </section>
  );
}
