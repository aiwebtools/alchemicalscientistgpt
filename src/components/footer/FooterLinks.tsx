
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label, isExternal = false }) => {
  return (
    <li>
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-gray-400 hover:text-alchemist-purple transition-colors flex items-center"
      >
        <ArrowRight size={14} className="mr-2" />
        {label}
      </a>
    </li>
  );
};

export const QuickLinks = () => {
  return (
    <ul className="space-y-3">
      <FooterLink 
        href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt" 
        label="Alchemist Scientist GPT" 
        isExternal={true} 
      />
      <FooterLink href="#features" label="Features" />
      <FooterLink href="#faq" label="FAQ" />
      <FooterLink href="#disclaimer" label="Disclaimer" />
      <FooterLink href="https://aiwebtools.ai" label="More AI Tools" isExternal={true} />
    </ul>
  );
};

export const LegalLinks = () => {
  return (
    <ul className="space-y-3">
      <FooterLink 
        href="https://openai.com/policies/privacy-policy/" 
        label="Privacy Policy" 
        isExternal={true} 
      />
      <FooterLink 
        href="https://aiwebtools.lovable.app/disclaimers" 
        label="Terms of Service" 
        isExternal={true} 
      />
      <FooterLink href="#disclaimer" label="Disclaimer" />
    </ul>
  );
};
