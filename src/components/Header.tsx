
import { useState, useEffect } from 'react';
import { Menu, X, FlaskConical, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo & Brand */}
        <a 
          href="/" 
          className="flex items-center space-x-2 font-medieval text-2xl text-white group"
        >
          <span className="bg-alchemist-purple/20 border border-alchemist-purple/30 rounded-full p-2 group-hover:bg-alchemist-purple/30 transition-all duration-300">
            <FlaskConical 
              className="h-6 w-6 text-alchemist-purple group-hover:text-white transition-colors duration-300" 
              strokeWidth={1.5} 
            />
          </span>
          <div className="flex flex-col">
            <span className="text-gradient-primary font-bold leading-tight text-sm md:text-base lg:text-xl">
              Alchemist Scientist GPT
            </span>
            {!isMobile && (
              <span className="text-xs text-gray-400 font-sans">
                Presented by <span className="text-alchemist-blue hover:text-alchemist-blue/80 transition-colors">AiWebTools.AI</span>
              </span>
            )}
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a 
            href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-alchemist-purple transition-colors"
          >
            Alchemist Scientist GPT
          </a>
          <a 
            href="#features" 
            className="text-white hover:text-alchemist-purple transition-colors"
          >
            Features
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-alchemist-purple transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-alchemist-purple transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-alchemist-purple transition-colors"
          >
            More AI Tools
          </a>
        </nav>
        
        {/* CTA Button */}
        <a
          href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center font-medium px-4 py-2 rounded-full bg-gradient-to-r from-alchemist-purple to-alchemist-blue hover:opacity-90 transition-all shadow-neon-purple"
        >
          <span>Try Now</span>
          <ArrowRight size={16} className="ml-1" />
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 text-white md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-alchemist-darker/95 backdrop-blur-lg border-t border-white/10 py-4 px-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-alchemist-purple transition-colors py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Alchemist Scientist GPT
            </a>
            <a 
              href="#features" 
              className="text-white hover:text-alchemist-purple transition-colors py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-alchemist-purple transition-colors py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-alchemist-purple transition-colors py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-alchemist-purple transition-colors py-2 px-3 rounded-md hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
            <a
              href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center font-medium mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-alchemist-purple to-alchemist-blue hover:opacity-90 transition-all shadow-neon-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Try Now</span>
              <ArrowRight size={16} className="ml-1" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
