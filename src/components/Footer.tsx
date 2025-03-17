
import React from 'react';
import { Mail, Phone, ArrowRight, FlaskConical } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-alchemist-grid bg-[size:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 - Logo & About */}
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
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-medieval text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Alchemist Scientist GPT
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div>
            <h4 className="text-white font-medieval text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
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
              href="https://aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-alchemist-purple to-alchemist-blue text-white font-medium text-sm transition-all hover:shadow-neon-purple"
            >
              More AI Tools
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
        
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
      </div>
    </footer>
  );
};

export default Footer;
