import React, { useRef, useState, MouseEvent } from 'react';
import { TranslationProject } from '../types';

const P5Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
  </svg>
);

interface ProjectCardProps {
  project: TranslationProject;
  onClick: (id: string) => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const animationDelay = `${index * -3.5}s`;
  const animationDuration = `${9 + (index % 3) * 2}s`;
  const [numeral, ...nameParts] = project.arcana.split('.');
  const arcanaName = nameParts.join('.').trim();

  // 3D Tilt Logic
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<string>('');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentages (-0.5 to 0.5)
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;

    // Set CSS variables for parallax effects
    cardRef.current.style.setProperty('--mouse-x', xPct.toString());
    cardRef.current.style.setProperty('--mouse-y', yPct.toString());

    // Calculate rotation (Max 8 degrees)
    // Invert Y percentage for X rotation to tilt naturally
    const rotateX = (yPct * -8).toFixed(2); 
    const rotateY = (xPct * 8).toFixed(2);

    // Combine tilt with scale and lift
    // Scaled up slightly more (1.08) for emphasis
    setTiltStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08) translateY(-16px)`);
  };

  const handleMouseLeave = () => {
    setTiltStyle(''); // Reset to default (flat)
  };

  return (
    <div 
      className="relative w-full flex justify-center h-[750px] pointer-events-none perspective-[1200px]" 
    >
      {/* Swaying Container - Now just floating */}
      <div 
        className="relative flex flex-col items-center w-[400px] md:w-[440px] animate-sway pointer-events-auto cursor-pointer group will-change-transform transform-gpu"
        style={{ 
          animationDelay,
          animationDuration
        }}
        onClick={() => onClick(project.id)}
      >
        
        {/* TAROT CARD ITSELF */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[680px] md:h-[720px] transition-transform duration-100 ease-out z-20"
          style={{ 
            transform: tiltStyle,
          }}
        >
          {/* --- PARALLAX DECORATIVE ELEMENTS --- */}
          {/* These elements move based on mouse position (CSS vars) to create depth */}
          <div className="absolute -top-8 -left-8 w-14 h-14 text-[#ffd700] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none drop-shadow-lg"
               style={{ transform: 'translate(calc(var(--mouse-x, 0) * -50px), calc(var(--mouse-y, 0) * -50px)) rotate(-15deg)' }}>
              <P5Star className="w-full h-full" />
          </div>
          <div className="absolute top-[40%] -right-10 w-10 h-10 text-[#2c5bf0] opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-50 pointer-events-none drop-shadow-md"
               style={{ transform: 'translate(calc(var(--mouse-x, 0) * -70px), calc(var(--mouse-y, 0) * -70px)) rotate(45deg)' }}>
              <P5Star className="w-full h-full" />
          </div>
          <div className="absolute -bottom-6 left-12 w-8 h-8 text-white opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-50 pointer-events-none"
               style={{ transform: 'translate(calc(var(--mouse-x, 0) * -30px), calc(var(--mouse-y, 0) * -30px))' }}>
              <P5Star className="w-full h-full" />
          </div>


          {/* Hover Glow Behind */}
          <div className="absolute inset-0 bg-[#2c5bf0] blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          
          {/* Idle Glow Pulse (Blue Fire behind card) */}
          <div 
            className="absolute inset-4 bg-[#2c5bf0] blur-[40px] animate-pulse-glow z-0" 
            style={{ animationDelay: `${index}s` }}
          />

          {/* Floating Spirit Embers (Background) */}
          <div className="absolute -bottom-10 left-10 w-2 h-2 bg-[#2c5bf0] rounded-full blur-[1px] animate-ember z-0" style={{ animationDelay: '0s', animationDuration: '5s' }}></div>
          <div className="absolute -bottom-10 right-20 w-3 h-3 bg-[#ffd700] transform rotate-45 animate-ember z-0" style={{ animationDelay: '2.5s', animationDuration: '7s' }}></div>
          <div className="absolute -bottom-10 left-1/2 w-1 h-1 bg-white animate-ember z-0" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

          {/* Main Card Frame */}
          <div className="relative h-full w-full bg-[#0a0a0a] border-[6px] border-[#e2e8f0] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-shadow duration-300 group-hover:shadow-[0_40px_80px_rgba(44,91,240,0.6)] overflow-hidden z-20">
            
            {/* Inner Gold/Blue Decorative Border */}
            <div className="absolute top-2 bottom-2 left-2 right-2 border-[2px] border-[#ffd700] z-20 pointer-events-none opacity-80" />
            <div className="absolute top-3 bottom-3 left-3 right-3 border-[1px] border-[#2c5bf0] z-20 pointer-events-none" />

            {/* Corner Flourishes */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-[4px] border-l-[4px] border-[#ffd700] z-30" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-[4px] border-r-[4px] border-[#ffd700] z-30" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-[4px] border-l-[4px] border-[#ffd700] z-30" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-[4px] border-r-[4px] border-[#ffd700] z-30" />

            {/* HEADER: Numeral */}
            <div className="h-16 flex items-center justify-center bg-[#1a1a1a] z-10 mt-5 mx-5 border border-[#333]">
               <span className="font-p5-elegant text-4xl font-bold text-[#ffd700] drop-shadow-md">
                 {numeral}
               </span>
            </div>

            {/* ARTWORK */}
            <div className="relative flex-1 mx-5 my-3 overflow-hidden bg-black border border-[#333] group-hover:border-[#2c5bf0] transition-colors duration-300">
               <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="relative w-full h-full object-cover transition-all duration-500 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-110 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Interactive Halftone Overlay (Shifts with mouse) */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
                   style={{ 
                     backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1.5px)',
                     backgroundSize: '12px 12px',
                     transform: 'translate(calc(var(--mouse-x, 0) * 20px), calc(var(--mouse-y, 0) * 20px))'
                   }}
              />
              
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_30%,_#000_100%)] z-10" />
              
              {/* Holographic Sheen Overlay */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.1)_55%,transparent_100%)] animate-sheen" 
                style={{ animationDelay: `${index * 1.5}s` }}
              />

              {/* Title / Logo Overlay */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center items-end z-30 px-4 pb-4">
                 {project.logoUrl ? (
                    <div className="relative transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                      {/* Logo Shadow/Glow */}
                      <img 
                        src={project.logoUrl} 
                        alt={project.title}
                        className="w-auto max-h-24 md:max-h-32 object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] filter brightness-110" 
                      />
                    </div>
                 ) : (
                    <h2 className="text-4xl font-p5-header text-white uppercase leading-none drop-shadow-[0_4px_0_#000] tracking-wide stroke-black transform -skew-x-6 animate-glitch text-center" data-text={project.title}>
                      {project.title}
                    </h2>
                 )}
              </div>
            </div>

            {/* FOOTER: Arcana Name */}
            <div className="h-24 flex items-center justify-center bg-[#1a1a1a] z-10 mb-5 mx-5 border-t-2 border-[#ffd700]">
               <div className="w-full h-full flex items-center justify-center bg-[#050505] relative overflow-hidden">
                  <div className="absolute inset-0 bg-halftone opacity-20"></div>
                  <span className="relative z-10 font-p5-elegant font-black text-2xl tracking-[0.15em] text-[#e2e8f0] uppercase border-b-2 border-[#2c5bf0] pb-1">
                    {arcanaName}
                  </span>
               </div>
            </div>

          </div>
          
          {/* Flash Effect on Hover */}
          <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:animate-flash pointer-events-none z-50" />
          
          {/* Foreground Sparks (Interactive/Visual flair) */}
          <div className="absolute bottom-20 left-4 w-1.5 h-1.5 bg-[#ffd700] animate-ember z-50 pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;