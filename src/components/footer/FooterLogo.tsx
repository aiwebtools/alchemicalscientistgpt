
import React from 'react';
import { FlaskConical } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <a href="/" className="flex items-center space-x-2 font-medieval text-2xl text-white mb-4">
        <span className="bg-alchemist-purple/20 border border-alchemist-purple/30 rounded-full p-2">
          <FlaskConical className="h-6 w-6 text-alchemist-purple" strokeWidth={1.5} />
        </span>
        <div className="flex flex-col">
          <span className="text-gradient-primary font-bold leading-tight">Alchemist Scientist GPT</span>
          <span className="text-xs text-gray-400 font-sans">Presented by AiWebTools.AI</span>
        </div>
      </a>
      
      <p className="text-gray-400 text-sm">
        A mystical journey through medieval alchemy and science, bringing chemistry to life through immersive storytelling and interactive learning.
      </p>
      
      <div className="flex space-x-4 pt-2">
        <a
          href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-alchemist-purple/20 border border-alchemist-purple/30 text-white hover:bg-alchemist-purple/30 transition-colors"
        >
          <FlaskConical size={18} />
        </a>
      </div>
    </div>
  );
};

export default FooterLogo;
