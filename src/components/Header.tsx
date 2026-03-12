
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, FlaskConical, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const navLinks = [
    { href: "https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt", label: "Alchemist Scientist GPT", external: true },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQ" },
    { href: "#disclaimer", label: "Disclaimer" },
    { href: "https://aiwebtools.lovable.app/?via=aiwebtools", label: "More AI Tools", external: true },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3 px-4 sm:px-6 md:px-12",
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo & Brand */}
        <a 
          href="/" 
          className="flex items-center space-x-2 font-medieval text-2xl text-white group min-w-0 shrink"
        >
          <span className="bg-alchemist-purple/20 border border-alchemist-purple/30 rounded-full p-1.5 sm:p-2 group-hover:bg-alchemist-purple/30 transition-all duration-300 shrink-0">
            <FlaskConical 
              className="h-5 w-5 sm:h-6 sm:w-6 text-alchemist-purple group-hover:text-white transition-colors duration-300" 
              strokeWidth={1.5} 
            />
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-gradient-primary font-bold leading-tight text-xs sm:text-sm md:text-base lg:text-xl truncate">
              Alchemist Scientist GPT
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground font-sans">
              Presented by <span className="text-alchemist-blue hover:text-alchemist-blue/80 transition-colors">AiWebTools.AI</span>
            </span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-white hover:text-alchemist-purple transition-colors whitespace-nowrap text-sm lg:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <a
          href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center font-medium px-4 py-2 rounded-full bg-gradient-to-r from-alchemist-purple to-alchemist-blue hover:opacity-90 transition-all shadow-neon-purple whitespace-nowrap text-sm lg:text-base"
        >
          <span>Try Now</span>
          <ArrowRight size={16} className="ml-1" />
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 text-white md:hidden focus:outline-none active:scale-95 transition-transform touch-manipulation"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu - always rendered, animated via CSS */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border shadow-lg transition-all duration-200 ease-out overflow-hidden",
          isMobileMenuOpen 
            ? "max-h-[80vh] opacity-100 pointer-events-auto" 
            : "max-h-0 opacity-0 pointer-events-none border-t-transparent"
        )}
      >
        <nav className="flex flex-col py-4 px-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-white hover:text-alchemist-purple active:text-alchemist-purple transition-colors py-3 px-3 rounded-md hover:bg-white/10 active:bg-white/15 touch-manipulation text-base"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-medium mt-3 px-4 py-3 rounded-full bg-gradient-to-r from-alchemist-purple to-alchemist-blue hover:opacity-90 active:opacity-80 transition-all shadow-neon-purple touch-manipulation text-base"
            onClick={closeMenu}
          >
            <span>Try Now</span>
            <ArrowRight size={16} className="ml-1" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
