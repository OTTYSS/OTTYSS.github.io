
import React, { useState } from 'react';
import { PROJECTS, LOGO_URL } from './constants';
import { ViewState } from './types';
import Background from './components/UI/Background';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import InstallationGuide from './components/InstallationGuide';
import PageTransition from './components/UI/PageTransition';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  // Transition State
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  // Helper to trigger transitions
  const triggerTransition = (action: () => void) => {
    if (isTransitioning) return;
    setPendingAction(() => action);
    setIsTransitioning(true);
  };

  const onTransitionCovered = () => {
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
      window.scrollTo(0, 0);
    }
  };

  const onTransitionComplete = () => {
    setIsTransitioning(false);
  };

  // --- Actions ---

  const handleProjectSelect = (id: string) => {
    triggerTransition(() => {
      setSelectedProjectId(id);
      setViewState(ViewState.DETAIL);
    });
  };

  const handleBackToHome = () => {
    triggerTransition(() => {
      setViewState(ViewState.HOME);
      setSelectedProjectId(null);
    });
  };

  const handleOpenInstructions = () => {
    triggerTransition(() => {
      setViewState(ViewState.INSTRUCTION);
    });
  };

  const handleBackToDetail = () => {
    triggerTransition(() => {
      setViewState(ViewState.DETAIL);
    });
  };

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen text-white relative font-sans selection:bg-[#2c5bf0] selection:text-white">
      <Background />
      
      {/* Transition Overlay */}
      <PageTransition 
        isActive={isTransitioning} 
        onCovered={onTransitionCovered} 
        onComplete={onTransitionComplete} 
      />
      
      {/* Top Header / Navigation Bar simulation */}
      <header className="fixed top-0 left-0 w-full z-40 p-4 pointer-events-none">
         <div className="flex justify-between items-start">
            <div className="bg-black text-[#2c5bf0] px-6 py-2 transform skew-x-12 border-b-4 border-[#2c5bf0] pointer-events-auto shadow-[0_0_15px_rgba(44,91,240,0.5)]">
               <img 
                 src={LOGO_URL} 
                 alt="Site Logo" 
                 className="h-10 md:h-12 w-auto transform -skew-x-12 drop-shadow-[0_2px_0_rgba(255,255,255,0.3)]"
               />
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 pointer-events-auto opacity-80">
               <div className="bg-black/50 text-blue-200 px-4 py-1 transform -skew-x-12 border border-blue-500/50 font-bold text-sm backdrop-blur-md">
                  АРХИВЫ БАРХАТНОЙ КОМНАТЫ
               </div>
            </div>
         </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        
        {viewState === ViewState.HOME && (
          <div className="container mx-auto px-4 max-w-[1600px] animate-[fadeIn_0.5s_ease-out]">
             
             {/* Tarot Grid Layout - Suspended in the void */}
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-40 justify-items-center mt-12 pb-20">
                {PROJECTS.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={handleProjectSelect}
                    index={index}
                  />
                ))}
             </div>
          </div>
        )}

        {viewState === ViewState.DETAIL && selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={handleBackToHome}
            onOpenInstructions={handleOpenInstructions} 
          />
        )}

        {viewState === ViewState.INSTRUCTION && selectedProject && (
          <InstallationGuide
            project={selectedProject}
            onBack={handleBackToDetail}
          />
        )}

      </main>
    </div>
  );
};

export default App;
