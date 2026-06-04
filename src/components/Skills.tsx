
import { Award, Laptop, Languages, Check } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Marketing Capabilities",
      icon: <Award className="category-icon purple" />,
      skills: [
        "Digital Marketing",
        "Social Media Management",
        "Content Creation",
        "Email Marketing",
        "Lead Generation",
        "Analytics & Reporting",
        "Brand Promotion"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Laptop className="category-icon teal" />,
      skills: [
        "Canva (Graphic Design)",
        "PsyToolkit (Psychology Experiments)",
        "Microsoft Excel (Data & Reports)",
        "Social Analytics Tools"
      ]
    },
    {
      title: "Languages",
      icon: <Languages className="category-icon purple" />,
      languages: [
        { name: "Tamil", level: "Native Proficiency" },
        { name: "English", level: "Professional Fluency" },
        { name: "Sinhala", level: "Basic Communication" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Capabilities</h2>
      
      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <div key={index} className="skills-card glass-panel">
            <div className="skills-card-header">
              {cat.icon}
              <h3>{cat.title}</h3>
            </div>
            
            {cat.skills ? (
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="check-bullet">
                      <Check size={12} />
                    </div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="languages-list">
                {cat.languages?.map((lang, lIdx) => (
                  <div key={lIdx} className="lang-item">
                    <div className="lang-info">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <div className="lang-bar-container">
                      <div 
                        className="lang-bar" 
                        style={{ 
                          width: lang.name === "Tamil" ? "100%" : lang.name === "English" ? "90%" : "40%",
                          background: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-teal)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }

        .skills-card {
          padding: 2.5rem;
          text-align: left;
          height: 100%;
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1rem;
        }

        .category-icon {
          width: 24px;
          height: 24px;
        }

        .category-icon.purple {
          color: #a78bfa;
        }

        .category-icon.teal {
          color: var(--accent-teal);
        }

        .skills-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .check-bullet {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-teal);
          flex-shrink: 0;
        }

        .skills-card:nth-child(even) .check-bullet {
          background: rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.2);
          color: #a78bfa;
        }

        .languages-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .lang-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .lang-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .lang-name {
          color: var(--text-primary);
          font-weight: 500;
        }

        .lang-level {
          color: var(--text-muted);
        }

        .lang-bar-container {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 9999px;
          overflow: hidden;
        }

        .lang-bar {
          height: 100%;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
