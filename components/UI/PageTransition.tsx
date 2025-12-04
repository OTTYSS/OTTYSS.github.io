
import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  isActive: boolean;
  onCovered: () => void; // Called when the screen is fully covered (time to swap content)
  onComplete: () => void; // Called when transition finishes
}

const PageTransition: React.FC<PageTransitionProps> = ({ isActive, onCovered, onComplete }) => {
  const [phase, setPhase] = useState<'idle' | 'in' | 'out'>('idle');

  useEffect(() => {
    if (isActive && phase === 'idle') {
      // Start transition IN
      setPhase('in');
      
      // Wait for coverage (approx 500ms based on animation speed)
      setTimeout(() => {
        onCovered();
        setPhase('out');
      }, 600);

      // Total duration cleanup
      setTimeout(() => {
        onComplete();
        setPhase('idle');
      }, 1200);
    }
  }, [isActive, phase, onCovered, onComplete]);

  if (phase === 'idle') return null;

  const animationStyle = phase === 'in' 
    ? { animation: 'slide-in-right 0.6s cubic-bezier(0.7, 0, 0.3, 1) forwards' }
    : { animation: 'slide-out-left 0.6s cubic-bezier(0.7, 0, 0.3, 1) forwards' };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
       {/* 1. Yellow Leading Edge */}
       <div 
         className="absolute top-0 bottom-0 right-[-100%] bg-[#ffd700] w-[150vw]"
         style={{
            ...animationStyle,
            transform: 'translateX(100%) skewX(-15deg)', // Initial state overridden by anim
            animationDelay: '0s'
         }}
       />
       
       {/* 2. Blue Secondary Layer */}
       <div 
         className="absolute top-0 bottom-0 right-[-100%] bg-[#2c5bf0] w-[150vw]"
         style={{
            ...animationStyle,
            transform: 'translateX(100%) skewX(-15deg)',
            animationDelay: '0.05s'
         }}
       />

       {/* 3. Black Core Layer (The Cover) */}
       <div 
         className="absolute top-0 bottom-0 right-[-100%] bg-black w-[150vw] flex items-center justify-center"
         style={{
            ...animationStyle,
            transform: 'translateX(100%) skewX(-15deg)',
            animationDelay: '0.1s'
         }}
       >
         {/* Decorative Star/Icon during transition */}
         <div className="text-white transform skew-x-15 opacity-50 font-p5-header text-6xl tracking-widest animate-pulse">
            СПИЗДИЛ ТВОИ ЯЙЦА...
         </div>
       </div>
    </div>
  );
};

export default PageTransition;
