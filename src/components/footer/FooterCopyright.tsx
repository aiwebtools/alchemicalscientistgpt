
import React from 'react';

const FooterCopyright = () => {
  return (
    <div className="py-6 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
      <p className="text-gray-500 text-sm mb-4 md:mb-0">
        © 2025 <a href="https://aiwebtools.ai" className="hover:text-alchemist-purple transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
      </p>
      <div className="flex justify-center md:justify-end space-x-4">
        <a 
          href="https://openai.com/policies/privacy-policy/"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 text-sm hover:text-alchemist-purple transition-colors"
        >
          Privacy
        </a>
        <a 
          href="https://aiwebtools.ai/terms-of-services"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 text-sm hover:text-alchemist-purple transition-colors"
        >
          Terms
        </a>
        <a 
          href="#disclaimer"
          className="text-gray-500 text-sm hover:text-alchemist-purple transition-colors"
        >
          Disclaimer
        </a>
      </div>
    </div>
  );
};

export default FooterCopyright;
