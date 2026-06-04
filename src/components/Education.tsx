
import { GraduationCap, Award, Heart, Trophy, Medal } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: "BSc (Hons) in Applied Psychology",
      school: "Plymouth Marjon University, UK",
      duration: "Feb 2027 – Feb 2028 (Reading)",
      desc: "Focusing on cognitive psychology, research methods, and behavioral heuristics."
    },
    {
      degree: "Advanced Diploma in Psychology",
      school: "TVEC / IMC-AIC Campus, Sri Lanka",
      duration: "Feb 2025 – Feb 2027",
      desc: "Practical foundation in clinical, developmental, and social psychology."
    }
  ];

  const communityList = [
    { role: "Youth Coordinator", org: "SSSC Child & Youth Services" },
    { role: "Member & Volunteer", org: "Lions Club International, Jaffna" },
    { role: "Child & Youth Services Support", org: "Shanthikam Counselling Centre" },
    { role: "National Youth Consultation (Health & Wellbeing)", org: "Ministry of Health, UNICEF & YouPAH (2025)" },
    { role: "OBA Active Member", org: "Jaffna Hindu College (Jaffna & Colombo)" }
  ];

  const achievementsList = [
    {
      title: "National Inventions & Innovations Award (SAHASAK NIMAVUM)",
      year: "2016",
      type: "award"
    },
    {
      title: "Champions — Keerthikan Memorial Trophy, Kokuvil Hindu College",
      year: "2025",
      type: "trophy"
    },
    {
      title: "National C & B Division Basketball Champions (Under-20)",
      year: "2019",
      type: "trophy"
    },
    {
      title: "Provincial Basketball Champions (Under-17)",
      year: "2018",
      type: "trophy"
    },
    {
      title: "Provincial Basketball Champions (Under-15)",
      year: "2016",
      type: "trophy"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education & Achievements</h2>
      
      <div className="edu-ach-grid">
        <div className="edu-column">
          <div className="section-subtitle-group">
            <GraduationCap className="sub-icon purple" />
            <h3 className="sub-title">Education</h3>
          </div>
          
          <div className="edu-list">
            {educationList.map((edu, idx) => (
              <div key={idx} className="edu-item glass-card">
                <span className="edu-duration">{edu.duration}</span>
                <h4 className="edu-degree">{edu.degree}</h4>
                <p className="edu-school text-glow">{edu.school}</p>
                <p className="edu-desc">{edu.desc}</p>
              </div>
            ))}
          </div>

          <div className="section-subtitle-group volunteer-margin">
            <Heart className="sub-icon teal" />
            <h3 className="sub-title">Community & Volunteerism</h3>
          </div>
          
          <div className="volunteer-list glass-panel">
            {communityList.map((item, idx) => (
              <div key={idx} className="volunteer-item">
                <span className="volunteer-role">{item.role}</span>
                <span className="volunteer-org">{item.org}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ach-column">
          <div className="section-subtitle-group">
            <Award className="sub-icon teal" />
            <h3 className="sub-title">Achievements & Honors</h3>
          </div>
          
          <div className="ach-list">
            {achievementsList.map((ach, idx) => (
              <div key={idx} className="ach-item glass-panel">
                <div className="ach-icon-container">
                  {ach.type === "award" ? (
                    <Medal className="ach-icon medal" />
                  ) : (
                    <Trophy className="ach-icon trophy" />
                  )}
                </div>
                
                <div className="ach-detail">
                  <span className="ach-year">{ach.year}</span>
                  <h4 className="ach-title">{ach.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .education-section {
          position: relative;
        }

        .edu-ach-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          text-align: left;
        }

        .section-subtitle-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .sub-icon {
          width: 24px;
          height: 24px;
        }

        .sub-icon.purple {
          color: var(--accent-magenta);
        }

        .sub-icon.teal {
          color: var(--accent-purple);
        }

        .sub-title {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .edu-item {
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .edu-duration {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-magenta);
          background: rgba(232, 121, 249, 0.08);
          border: 1px solid rgba(232, 121, 249, 0.15);
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
          margin-bottom: 0.75rem;
        }

        .edu-degree {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }

        .edu-school {
          font-size: 0.95rem;
          color: var(--accent-magenta);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .edu-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .volunteer-margin {
          margin-top: 2.5rem;
        }

        .volunteer-list {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .volunteer-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding-bottom: 0.75rem;
        }

        .volunteer-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .volunteer-role {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .volunteer-org {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        /* Achievements side */
        .ach-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ach-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
        }

        .ach-item:hover {
          border-color: rgba(232, 121, 249, 0.2) !important;
          box-shadow: 0 8px 30px rgba(232, 121, 249, 0.08);
        }

        .ach-icon-container {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.06);
          flex-shrink: 0;
        }

        .ach-icon {
          width: 20px;
          height: 20px;
        }

        .ach-icon.medal {
          color: var(--accent-magenta);
        }

        .ach-icon.trophy {
          color: var(--accent-purple);
        }

        .ach-detail {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .ach-year {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .ach-title {
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.4;
          color: var(--text-primary);
        }

        @media (max-width: 900px) {
          .edu-ach-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 480px) {
          .ach-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
            padding: 1rem;
          }
          .ach-detail {
            align-items: center;
          }
          .edu-item, .volunteer-list {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
