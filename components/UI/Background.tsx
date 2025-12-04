import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#001540] pointer-events-none transform-gpu">
       {/* 1. Base Gradient - Vibrant Velvet Blue Center */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2c5bf0_0%,_#000a20_90%)] opacity-40" />
       
       {/* 2. Deep Blue Solid Base for consistency */}
       <div className="absolute inset-0 bg-[#001030] mix-blend-multiply" />

       {/* 3. Velvet Curtains Simulation */}
       {/* Increased opacity and contrast for visibility */}
       <div className="absolute inset-0 opacity-40 mix-blend-overlay" 
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 60px,
                rgba(0, 0, 0, 0.6) 80px,
                rgba(0, 0, 0, 0.6) 100px,
                transparent 120px
              )`
            }} 
       />
       {/* Secondary highlight layer for the 'shine' on the velvet */}
       <div className="absolute inset-0 opacity-30 mix-blend-screen" 
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                rgba(44, 91, 240, 0.2) 0px,
                rgba(44, 91, 240, 0.3) 30px,
                transparent 60px,
                transparent 120px
              )`
            }} 
       />

       {/* 4. Checkered Floor (Perspective) */}
       <div className="absolute bottom-[-40%] left-[-50%] right-[-50%] h-[80%] origin-top transform-gpu"
            style={{
              transform: 'perspective(1000px) rotateX(60deg)',
              backgroundImage: `
                linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
                linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)
              `,
              backgroundColor: '#1e3a8a', // Blue squares
              backgroundSize: '100px 100px',
              backgroundPosition: '0 0, 50px 50px',
              opacity: 0.8,
              // Fade out the floor as it goes further back
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)'
            }}
       />

       {/* 5. Floating Spirit Particles */}
       {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 blur-[2px] animate-float will-change-transform"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 15 + 10 + 's',
              animationDelay: Math.random() * -20 + 's',
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
       ))}

       {/* 6. Vignette - Reduced opacity and changed from black to dark blue to avoid crushing colors */}
       <div className="absolute inset-0 bg-[radial-gradient(transparent_40%,_#000515_100%)] opacity-60" />
       
       {/* 7. Subtle Blue Fog at the bottom */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1e3a8a]/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default Background;