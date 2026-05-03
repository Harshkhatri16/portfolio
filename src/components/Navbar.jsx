import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        top: scrolled ? 20 : 0,
        width: scrolled ? "90%" : "100%",
        maxWidth: scrolled ? "1200px" : "100%"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-1/2 -translate-x-1/2 z-50 flex justify-center"
    >
      <motion.div 
        layout
        className={`flex justify-between items-center w-full transition-all duration-500 ${
          scrolled 
            ? 'glass rounded-full py-3 px-8 shadow-2xl shadow-primary/10' 
            : 'py-6 px-12 bg-background/80 backdrop-blur-xl border-b border-white/5'
        }`}
      >
        <motion.div 
          layout
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text flex items-center gap-2"
        >
          <Terminal className="text-primary" size={24} />
          <span>HK.</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div layout className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a 
              layout
              key={link.name} 
              href={link.href}
              whileHover={{ y: -2, color: '#3B82F6' }}
              className="text-textSecondary transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.div layout className="flex items-center space-x-4 border-l border-white/10 pl-8">
            <a href="https://github.com/Harshkhatri16" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-khatri-183390245/" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.div layout className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass absolute top-full left-0 right-0 mt-4 mx-4 p-6 rounded-3xl space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-textSecondary hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
