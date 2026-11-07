const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-gutter">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left: Brand */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-display-lg text-2xl text-on-surface tracking-tight uppercase font-bold">
            Himanshu Jayswal
          </span>
          <p className="font-technical text-[10px] text-outline tracking-[0.2em] uppercase">
            DESIGNED FOR COMMANDING SILENCE
          </p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {['PROJECTS', 'STACK', 'ENGINEERING', 'ABOUT', 'CONTACT'].map((link) => (
            <a
              key={link}
              href={`#${link === 'STACK' ? 'skills' : link === 'ENGINEERING' ? 'experience' : link.toLowerCase()}`}
              className="font-label-caps text-[10px] tracking-[0.2em] text-on-surface-variant hover:text-primary-container transition-colors uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Social + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/jayswalhimanshu74-cmd" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-8 h-8 rounded-full bg-surface-container border border-surface-variant flex items-center justify-center hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-[16px]" aria-hidden="true">terminal</span>
            </a>
            <a href="https://www.linkedin.com/in/himanshu-jayswal-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-8 h-8 rounded-full bg-surface-container border border-surface-variant flex items-center justify-center hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-[16px]" aria-hidden="true">public</span>
            </a>
            <a href="mailto:jayswalhimanshu74@gmail.com" aria-label="Email Himanshu" className="w-8 h-8 rounded-full bg-surface-container border border-surface-variant flex items-center justify-center hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-[16px]" aria-hidden="true">mail</span>
            </a>
          </div>
          <p className="font-technical text-[10px] text-outline tracking-wider">
            © {new Date().getFullYear()} HIMANSHU JAYSWAL
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
