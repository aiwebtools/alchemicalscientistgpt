
import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const FooterContact = () => {
  return (
    <div>
      <h4 className="text-white font-medieval text-lg mb-6">Contact Us</h4>
      <ul className="space-y-3">
        <li>
          <a 
            href="tel:+14758008096"
            className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
          >
            <Phone size={16} className="mr-3" />
            (475) 800-8096
          </a>
        </li>
        <li>
          <a 
            href="mailto:Contact@ai-webtools.com"
            className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
          >
            <Mail size={16} className="mr-3" />
            Contact@ai-webtools.com
          </a>
        </li>
      </ul>
      
      <a
        href="https://aiwebtools.lovable.app/?via=aiwebtools"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-alchemist-purple to-alchemist-blue text-white font-medium text-sm transition-all hover:shadow-neon-purple"
      >
        More AI Tools
        <ArrowRight size={14} className="ml-1" />
      </a>
    </div>
  );
};

export default FooterContact;
