

export default function AnimatedBackground() {
  return (
    <div className="animated-bg-container" aria-hidden="true">
      {/* SVG Radiating Wave Lines */}
      <svg
        className="wave-lines-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00adef" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a5f3fc" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00adef" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* Layer 1 — Wide sweeping curves from left */}
        <g className="wave-group wave-group-1">
          <path d="M-100,800 Q200,600 400,450 T800,200 T1200,100 T1600,50" fill="none" stroke="url(#lineGrad1)" strokeWidth="1.5" />
          <path d="M-100,820 Q220,620 420,480 T820,250 T1220,140 T1600,100" fill="none" stroke="url(#lineGrad1)" strokeWidth="1" opacity="0.7" />
          <path d="M-100,840 Q240,640 440,510 T840,300 T1240,180 T1600,150" fill="none" stroke="url(#lineGrad1)" strokeWidth="0.8" opacity="0.5" />
          <path d="M-100,860 Q260,660 460,540 T860,350 T1260,220 T1600,200" fill="none" stroke="url(#lineGrad1)" strokeWidth="0.6" opacity="0.4" />
          <path d="M-100,880 Q280,680 480,570 T880,400 T1280,260 T1600,250" fill="none" stroke="url(#lineGrad1)" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Layer 2 — Curves from top-right */}
        <g className="wave-group wave-group-2">
          <path d="M1540,0 Q1300,150 1100,300 T700,500 T300,650 T-100,750" fill="none" stroke="url(#lineGrad2)" strokeWidth="1.5" />
          <path d="M1540,30 Q1310,170 1110,320 T710,520 T310,670 T-100,770" fill="none" stroke="url(#lineGrad2)" strokeWidth="1" opacity="0.7" />
          <path d="M1540,60 Q1320,190 1120,340 T720,540 T320,690 T-100,790" fill="none" stroke="url(#lineGrad2)" strokeWidth="0.8" opacity="0.5" />
          <path d="M1540,90 Q1330,210 1130,360 T730,560 T330,710 T-100,810" fill="none" stroke="url(#lineGrad2)" strokeWidth="0.6" opacity="0.4" />
          <path d="M1540,120 Q1340,230 1140,380 T740,580 T340,730 T-100,830" fill="none" stroke="url(#lineGrad2)" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Layer 3 — Center outward curves */}
        <g className="wave-group wave-group-3">
          <path d="M720,900 Q600,700 500,500 T350,250 T150,50 T-100,-50" fill="none" stroke="url(#lineGrad3)" strokeWidth="1.2" />
          <path d="M740,900 Q630,720 530,520 T380,270 T180,70 T-100,-30" fill="none" stroke="url(#lineGrad3)" strokeWidth="0.9" opacity="0.6" />
          <path d="M760,900 Q660,740 560,540 T410,290 T210,90 T-100,-10" fill="none" stroke="url(#lineGrad3)" strokeWidth="0.7" opacity="0.4" />
        </g>

        {/* Layer 4 — Additional accent lines */}
        <g className="wave-group wave-group-4">
          <path d="M-50,100 Q300,200 600,350 T1000,500 T1300,650 T1540,800" fill="none" stroke="url(#lineGrad1)" strokeWidth="1" opacity="0.35" />
          <path d="M-50,130 Q310,220 610,370 T1010,520 T1310,670 T1540,820" fill="none" stroke="url(#lineGrad1)" strokeWidth="0.7" opacity="0.25" />
          <path d="M-50,160 Q320,240 620,390 T1020,540 T1320,690 T1540,840" fill="none" stroke="url(#lineGrad1)" strokeWidth="0.5" opacity="0.18" />
        </g>
      </svg>

      {/* Glowing Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      <style>{`
        .animated-bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .wave-lines-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .wave-group {
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
        }

        .wave-group-1 {
          animation: waveShift1 12s ease-in-out infinite;
        }
        .wave-group-2 {
          animation: waveShift2 15s ease-in-out infinite;
        }
        .wave-group-3 {
          animation: waveShift3 18s ease-in-out infinite;
        }
        .wave-group-4 {
          animation: waveShift4 20s ease-in-out infinite;
        }

        @keyframes waveShift1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(15px, -10px); }
          50% { transform: translate(-10px, -20px); }
          75% { transform: translate(20px, -5px); }
        }

        @keyframes waveShift2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-20px, 10px); }
          50% { transform: translate(15px, 15px); }
          75% { transform: translate(-10px, -10px); }
        }

        @keyframes waveShift3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(10px, -15px); }
          66% { transform: translate(-15px, 10px); }
        }

        @keyframes waveShift4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, -12px); }
        }

        /* Glowing Orbs */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .orb-1 {
          top: 5%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
          animation: orbFloat1 10s ease-in-out infinite;
        }

        .orb-2 {
          top: 40%;
          right: 5%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(0, 173, 239, 0.2) 0%, transparent 70%);
          animation: orbFloat2 14s ease-in-out infinite;
        }

        .orb-3 {
          bottom: 10%;
          left: 30%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
          animation: orbFloat3 12s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 30px) scale(1.1); }
        }

        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.08); }
          66% { transform: translate(-15px, 20px) scale(0.93); }
        }

        @media (max-width: 768px) {
          .glow-orb {
            filter: blur(60px);
          }
          .orb-1 { width: 250px; height: 250px; }
          .orb-2 { width: 200px; height: 200px; }
          .orb-3 { width: 180px; height: 180px; }
        }
      `}</style>
    </div>
  );
}
