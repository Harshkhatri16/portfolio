import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-textSecondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xl font-bold gradient-text mb-4">HK.</div>
        <p className="text-sm">© {new Date().getFullYear()} Harsh Khatri. All rights reserved.</p>
        <p className="text-xs mt-2 opacity-50">Designed & Built with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
