import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'PROJECTS', href: '#projects', path: 'projects' },
  { name: 'STACK', href: '#skills', path: 'stack' },
  { name: 'ENGINEERING', href: '#experience', path: 'engineering' },
  { name: 'ABOUT', href: '#about', path: 'about' },
  { name: 'CONTACT', href: '#contact', path: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const handleNavClick = (e, href, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(path);
    }
  };

  // Scroll to hash on initial page load and when hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          const matchedLink = navLinks.find((l) => l.href === hash);
          if (matchedLink) {
            setActiveSection(matchedLink.path);
          } else if (hash === '#home') {
            setActiveSection('');
          }
        }
      }
    };

    // Run after mount so DOM elements are available
    const timer = setTimeout(scrollToHash, 100);
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'projects', 'skills', 'experience', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'home') {
              setActiveSection('');
            } else if (id === 'skills') {
              setActiveSection('stack');
            } else if (id === 'experience') {
              setActiveSection('engineering');
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-[12px] border-b border-outline-variant/10">
      <div className="h-16 md:h-18 max-w-container-max mx-auto px-gutter flex items-center justify-between">
        
        {/* Logo Section */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home', '')}
          className="flex items-center gap-3 group"
        >
          <img 
            alt="Himanshu Jayswal Logo" 
            className="h-7 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOXtsNgDNK_eOzbDLQkcJbMNm--PXoa2Y1AfxJlkyg6WY3wdBRFX96T5Bjwn5oVmwNgTveIio_3RRz2rp_XC68Z6h9W8nstTGbtXnerEhhEHtVWWrNP2uAnhuGipqft50zCLU9l_eVc8y2cC1LiPS7Vxv95s8IgB24LiIHEepp4B8nEVDtv_6VDEEVdOdryDfT1zVNjBEHKDqyRyWZRUnUYNKfCpYbqUHfovTLSBNFQ_bmLB1jg0coAQ"
          />
          <span className="font-headline-md text-lg sm:text-xl text-on-surface tracking-tight uppercase font-bold">
            <span className="hidden sm:inline">Himanshu Jayswal</span>
            <span className="sm:hidden">H. Jayswal</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.path)}
              className={`font-label-caps text-xs tracking-[0.14em] font-semibold transition-all duration-300 ${
                activeSection === link.path
                  ? 'text-primary font-bold underline underline-offset-8 decoration-2'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button / Profile & Resume */}
        <div className="flex items-center gap-4">
          <a
            href="/Himanshu_Jayswal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/40 text-primary font-label-caps text-xs tracking-[0.14em] rounded-sm hover:bg-primary/10 transition-colors uppercase font-bold"
          >
            RESUME
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            aria-label="Contact Himanshu"
            className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-on-primary text-[16px]" aria-hidden="true">person</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="md:hidden text-on-surface cursor-pointer flex items-center justify-center p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
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
                onClick={(e) => handleNavClick(e, link.href, link.path)}
                className={`font-label-caps text-xs tracking-[0.14em] transition-colors py-2 font-semibold ${
                  activeSection === link.path ? 'text-primary font-bold underline underline-offset-8' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Himanshu_Jayswal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-label-caps text-xs tracking-[0.14em] text-primary font-bold py-2 border-t border-outline-variant/10 uppercase"
            >
              RESUME (PDF)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
