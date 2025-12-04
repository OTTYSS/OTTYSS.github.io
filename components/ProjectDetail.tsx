
import React from 'react';
import { TranslationProject } from '../types';
import { P5Button } from './UI/P5Button';
import { ArrowLeft, Download, BookOpen } from 'lucide-react';

interface ProjectDetailProps {
  project: TranslationProject;
  onBack: () => void;
  onOpenInstructions: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onOpenInstructions }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 animate-[fadeIn_0.3s_ease-out] min-h-[80vh] flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
      
      {/* BACKGROUND GEOMETRY */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
         {/* The big blue slash */}
         <div className="absolute top-0 right-[-10%] w-[70%] h-full bg-[#172554] opacity-90 transform -skew-x-12 border-l-[10px] border-[#ffd700]"></div>
         {/* Decorative shapes */}
         <div className="absolute bottom-20 left-10 w-40 h-40 border-[20px] border-[#2c5bf0] opacity-20 transform rotate-45"></div>
      </div>

      {/* LEFT: CHARACTER / IMAGE VISUAL */}
      <div className="w-full lg:w-1/3 flex flex-col relative">
        <button 
          onClick={onBack}
          className="absolute -top-12 left-0 z-50 group flex items-center gap-2"
        >
          <div className="bg-white text-black p-2 clip-p5-slant group-hover:bg-[#ffd700] transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </div>
          <span className="font-p5-header text-2xl text-white uppercase tracking-widest drop-shadow-md group-hover:text-[#ffd700]">НАЗАД</span>
        </button>

        {/* Portrait Container */}
        <div className="relative mt-8 group">
          <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 border-2 border-[#2c5bf0]"></div>
          <div className="relative bg-[#000] border-4 border-white p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
             <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover grayscale contrast-125 border border-white/20" 
            />
          </div>
        </div>

        {/* Arcana Card Stats */}
        <div className="mt-12 bg-black/80 backdrop-blur border-l-[6px] border-[#ffd700] p-6 transform skew-x-[-5deg]">
           <h3 className="text-[#2c5bf0] font-p5-header text-2xl uppercase border-b border-gray-700 pb-2 mb-4 transform skew-x-[5deg]">
             ОТДЕЛЬНОЕ СПАСИБО
           </h3>
           <ul className="space-y-4 transform skew-x-[5deg]">
             {project.features.map((feature, idx) => (
               <li key={idx} className="flex items-center gap-3 text-white font-bold tracking-wide">
                  <div className="w-2 h-2 bg-[#ffd700] rotate-45"></div>
                  {feature}
               </li>
             ))}
           </ul>
        </div>
      </div>

      {/* RIGHT: INFO & ACTIONS */}
      <div className="w-full lg:w-2/3 relative text-white pt-10 lg:pl-12 flex flex-col">
         
         {/* HEADER SECTION - LOGO */}
         <div className="relative mb-8 min-h-[140px] flex items-end">
            {project.logoUrl ? (
               <img 
                 src={project.logoUrl} 
                 alt={project.title}
                 className="max-w-full h-auto max-h-[180px] object-contain filter drop-shadow-[5px_5px_0_#000] animate-[fadeIn_0.5s_ease-out_0.2s] hover:scale-105 transition-transform duration-300 origin-bottom-left"
               />
            ) : (
               <div className="relative">
                 <h1 
                   data-text={project.title}
                   className="text-7xl md:text-8xl font-p5-header uppercase leading-[0.85] text-white drop-shadow-[5px_5px_0_#000] transform -skew-x-6 relative z-10 animate-glitch"
                 >
                   {project.title}
                 </h1>
                 <h1 className="absolute top-0 left-1 text-7xl md:text-8xl font-p5-header uppercase leading-[0.85] text-[#2c5bf0] transform -skew-x-6 -z-10 opacity-50 blur-sm">
                   {project.title}
                 </h1>
               </div>
            )}
         </div>

         {/* DESCRIPTION BOX */}
         <div className="relative bg-black/60 p-8 border-t-4 border-[#2c5bf0] mb-8 clip-p5-shard flex-1">
            <div className="absolute top-0 right-0 p-2 bg-[#2c5bf0] text-black font-bold text-xs uppercase">ИНФО</div>
            <p className="font-medium text-xl leading-relaxed text-gray-100 font-sans border-l-2 border-gray-600 pl-4 whitespace-pre-line">
              {project.longDescription}
            </p>
         </div>

         {/* ACTION BUTTONS */}
         <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <P5Button 
              variant="primary" 
              href={project.downloadLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-6 text-2xl flex justify-center items-center gap-3 shadow-[5px_5px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0_#000] transition-all duration-200 group/btn"
            >
               <Download className="w-8 h-8 group-hover/btn:animate-bounce" />
               <span className="relative z-10">СКАЧАТЬ</span>
            </P5Button>
             <P5Button 
               variant="black" 
               className="flex-1 py-6 text-2xl flex justify-center items-center gap-3 shadow-[5px_5px_0_#2c5bf0] hover:shadow-[8px_8px_0_#2c5bf0] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0_#2c5bf0] transition-all duration-200 group/btn"
               onClick={onOpenInstructions}
             >
               <BookOpen className="w-8 h-8 group-hover/btn:animate-pulse" />
               <span className="relative z-10">ИНСТРУКЦИЯ</span>
            </P5Button>
         </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
