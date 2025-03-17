
import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const ConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('alchemist-consent');
    
    if (!hasConsented) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleConsent = () => {
    localStorage.setItem('alchemist-consent', 'true');
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="animate-fade-in w-full max-w-md m-4">
        <div className="glass-panel rounded-xl shadow-neon-purple overflow-hidden">
          <div className="bg-gradient-to-r from-alchemist-purple/20 to-alchemist-blue/20 p-4 flex items-center space-x-3">
            <AlertTriangle size={24} className="text-alchemist-gold" />
            <h3 className="font-medieval font-semibold text-white">Important Disclaimer</h3>
          </div>
          
          <div className="p-6 space-y-4">
            <p className="text-gray-300">
              Alchemist Scientist GPT is designed for educational purposes only. The alchemical techniques and experiments described are historical representations and should not be attempted physically. AI Web Tools LLC is not responsible for any consequences arising from the use of this tool.
            </p>
            
            <p className="text-gray-300">
              By clicking "I Agree" below, you acknowledge that you have read and understand our disclaimer, and you agree to our Terms of Service and Privacy Policy.
            </p>
            
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleConsent}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-alchemist-purple to-alchemist-blue text-white font-medium transition-all hover:shadow-lg hover:shadow-alchemist-purple/20"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
