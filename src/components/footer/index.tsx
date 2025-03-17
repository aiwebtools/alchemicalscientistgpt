
import React from 'react';
import FooterColumn from './FooterColumn';
import FooterLogo from './FooterLogo';
import { QuickLinks, LegalLinks } from './FooterLinks';
import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-alchemist-grid bg-[size:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 - Logo & About */}
          <FooterLogo />
          
          {/* Column 2 - Quick Links */}
          <FooterColumn title="Quick Links">
            <QuickLinks />
          </FooterColumn>
          
          {/* Column 3 - Legal */}
          <FooterColumn title="Legal">
            <LegalLinks />
          </FooterColumn>
          
          {/* Column 4 - Contact */}
          <FooterContact />
        </div>
        
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
