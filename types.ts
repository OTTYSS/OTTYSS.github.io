
export interface InstallationStep {
  text: string;
  imageUrl?: string;
  link?: {
    url: string;
    label: string;
  };
}

export interface TranslationProject {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  description: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
  logoUrl?: string; // Optional URL for the game logo
  arcana: string;   // e.g. "0. THE FOOL"
  downloadLink?: string;
  progress: number;
  installationSteps?: InstallationStep[];
}

export enum ViewState {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
  INSTRUCTION = 'INSTRUCTION',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}