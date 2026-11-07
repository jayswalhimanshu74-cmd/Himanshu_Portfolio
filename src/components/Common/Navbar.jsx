import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects', path: 'projects' },
    { name: 'STACK', href: '#skills', path: 'stack' },
    { name: 'ENGINEERING', href: '#experience', path: 'engineering' },
    { name: 'ABOUT', href: '#about', path: 'about' },
    { name: 'CONTACT', href: '#contact', path: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const element = document.querySelector(link.href);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.path);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-[12px] border-b border-outline-variant/10">
      <div className="h-16 md:h-18 max-w-container-max mx-auto px-gutter flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            alt="Himanshu Jayswal Logo" 
            className="h-7 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOXtsNgDNK_eOzbDLQkcJbMNm--PXoa2Y1AfxJlkyg6WY3wdBRFX96T5Bjwn5oVmwNgTveIio_3RRz2rp_XC68Z6h9W8nstTGbtXnerEhhEHtVWWrNP2uAnhuGipqft50zCLU9l_eVc8y2cC1LiPS7Vxv95s8IgB24LiIHEepp4B8nEVDtv_6VDEEVdOdryDfT1zVNjBEHKDqyRyWZRUnUYNKfCpYbqUHfovTLSBNFQ_bmLB1jg0coAQ"
          />
          <span className="font-headline-md text-xl text-on-surface tracking-tight uppercase font-bold">ENGINEER</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-label-caps text-[11px] tracking-[0.2em] transition-all duration-300 ${
                activeSection === link.path
                  ? 'text-primary font-bold underline underline-offset-8 decoration-2'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button / Profile */}
        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-on-primary text-[16px]">person</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden material-symbols-outlined text-on-surface text-[24px] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-label-caps text-[12px] tracking-[0.2em] transition-colors py-2 ${
                  activeSection === link.path ? 'text-primary font-bold' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
