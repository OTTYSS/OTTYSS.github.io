
import React from 'react';
import { TranslationProject } from '../types';
import { ArrowLeft, Terminal, CheckCircle, Image as ImageIcon, ExternalLink } from 'lucide-react';

interface InstallationGuideProps {
  project: TranslationProject;
  onBack: () => void;
}

const InstallationGuide: React.FC<InstallationGuideProps> = ({ project, onBack }) => {
  const steps = project.installationSteps || [{ text: "Инструкции отсутствуют для этого протокола." }];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 animate-[fadeIn_0.3s_ease-out] min-h-[80vh] flex flex-col items-center">
       
       {/* Background Elements */}
       <div className="fixed inset-0 pointer-events-none z-[-1]">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
          {/* Large decorative circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-[#2c5bf0] rounded-full opacity-20 animate-spin-slow duration-[60s]"></div>
       </div>

       {/* HEADER */}
       <div className="w-full flex justify-between items-center mb-12 border-b-4 border-[#2c5bf0] pb-4 bg-black/40 backdrop-blur-md p-6 transform -skew-x-6">
          <div className="flex items-center gap-4">
             <Terminal className="w-10 h-10 text-[#ffd700]" />
             <div>
                <h2 className="text-[#2c5bf0] font-bold tracking-[0.5em] text-sm uppercase">ЗАЩИЩЕННЫЙ КАНАЛ</h2>
                <h1 className="text-4xl md:text-5xl font-p5-header text-white uppercase tracking-wider">
                  ИНСТРУКТАЖ
                </h1>
             </div>
          </div>
          <button 
             onClick={onBack}
             className="group flex items-center gap-2 bg-[#2c5bf0] hover:bg-white text-white hover:text-[#2c5bf0] px-6 py-2 transition-all duration-200 transform skew-x-6 border-2 border-white"
          >
             <ArrowLeft className="w-6 h-6" />
             <span className="font-bold uppercase tracking-widest">НАЗАД</span>
          </button>
       </div>

       {/* CONTENT CONTAINER */}
       <div className="w-full flex flex-col md:flex-row gap-12">
          
          {/* LEFT: Project Card Summary */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
             <div className="relative border-4 border-white bg-black p-2 transform rotate-2 shadow-[0_0_20px_rgba(44,91,240,0.5)]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c5bf0]/50 to-transparent mix-blend-overlay"></div>
             </div>
             <h2 className="mt-6 text-3xl font-p5-header text-center text-white uppercase transform -skew-x-6 drop-shadow-[2px_2px_0_#2c5bf0]">
                {project.title}
             </h2>
             <div className="mt-2 bg-[#ffd700] text-black px-4 py-1 font-bold transform -skew-x-12">
                ЦЕЛЬ: УСТАНОВКА
             </div>
          </div>

          {/* RIGHT: Steps List */}
          <div className="w-full md:w-2/3">
             <div className="bg-black/80 border-l-8 border-[#2c5bf0] p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative background letter */}
                <div className="absolute -top-10 -right-10 text-[200px] font-p5-header text-[#1e3a8a] opacity-20 select-none pointer-events-none">
                   ?
                </div>

                <ul className="space-y-12 relative z-10">
                   {steps.map((step, idx) => (
                      <li key={idx} className="group flex gap-6 items-start">
                         {/* Number Box */}
                         <div className="flex-shrink-0 w-16 h-16 bg-[#2c5bf0] text-white flex items-center justify-center font-p5-header text-4xl border-2 border-white transform transition-transform group-hover:rotate-12 shadow-[4px_4px_0_#000]">
                            {idx + 1}
                         </div>
                         
                         {/* Step Content */}
                         <div className="flex-1 pt-2">
                            <p className="text-xl md:text-2xl font-bold font-sans text-gray-200 leading-tight group-hover:text-[#ffd700] transition-colors mb-4 whitespace-pre-line">
                               {step.text}
                            </p>
                            
                            {/* Optional Link Button */}
                            {step.link && (
                               <div className="mb-6">
                                  <a 
                                    href={step.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#ffd700] text-black px-6 py-2 font-p5-header text-lg uppercase tracking-wider transform -skew-x-12 hover:bg-white hover:scale-105 transition-all duration-200 border-2 border-black shadow-[4px_4px_0_#000]"
                                  >
                                    <ExternalLink className="w-5 h-5 transform skew-x-12" />
                                    <span className="transform skew-x-12">{step.link.label}</span>
                                  </a>
                               </div>
                            )}

                            {/* Optional Image */}
                            {step.imageUrl && (
                               <div className="relative mt-4 mb-2 group-hover:scale-[1.02] transition-transform duration-300">
                                   <div className="absolute inset-0 bg-[#2c5bf0] transform translate-x-2 translate-y-2 border border-white opacity-50"></div>
                                   <div className="relative border-2 border-white bg-black">
                                       <img 
                                          src={step.imageUrl} 
                                          alt={`Step ${idx + 1}`} 
                                          className="w-full h-auto max-h-[300px] object-cover"
                                       />
                                       {/* Image overlay label */}
                                       <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 font-mono border-r border-b border-white flex items-center gap-2">
                                          <ImageIcon className="w-3 h-3" />
                                          Шаг #{idx + 1}
                                       </div>
                                   </div>
                               </div>
                            )}

                            <div className="w-full h-[2px] bg-gray-700 mt-4 group-hover:bg-[#2c5bf0] transition-colors origin-left transform scale-x-50 group-hover:scale-x-100 duration-500"></div>
                         </div>
                      </li>
                   ))}
                </ul>

                {/* Footer Message */}
                <div className="mt-12 flex items-center gap-3 text-[#2c5bf0] border-t border-gray-700 pt-6">
                   <CheckCircle className="w-6 h-6" />
                   <span className="font-bold tracking-widest uppercase text-sm">Операция подтверждена Призрачными Похитителями</span>
                </div>
             </div>
          </div>

       </div>

    </div>
  );
};

export default InstallationGuide;
