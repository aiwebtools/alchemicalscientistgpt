
import React from 'react';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div>
      <h4 className="text-white font-medieval text-lg mb-6">{title}</h4>
      {children}
    </div>
  );
};

export default FooterColumn;
