import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const ShaderBackground = lazy(() => import('./ShaderBackground'));
const ThreeDObject = lazy(() => import('./ThreeDObject'));

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20 px-gutter" 
      id="home"
    >
      {/* WebGL Ambient Background Layer */}
      <Suspense fallback={null}>
        <ShaderBackground />
      </Suspense>

      {/* Atmospheric Gradients overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-surface-container-lowest/90 via-surface-container-lowest/50 to-transparent pointer-events-none" />
      <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full bg-primary-container/5 blur-[120px] pointer-events-none mix-blend-plus-lighter" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-container-max mx-auto flex-1 flex flex-col justify-center py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center w-full">
          
          {/* Left Content: Typographic Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* Label Marker */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-primary-container" />
              <span className="font-label-caps text-[11px] tracking-[0.25em] text-primary-container uppercase">
                JAVA FULL STACK DEVELOPER & IT ENGINEER
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2 relative">
              {/* Subtle technical watermark behind text */}
              <span aria-hidden="true" className="absolute -left-6 -top-6 font-technical text-[100px] leading-none text-surface-container-highest/10 font-bold select-none pointer-events-none -z-10">
                01
              </span>
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] 2xl:text-[68px] text-on-surface tracking-tighter uppercase leading-[1.06]">
                ENGINEERING SOFTWARE THAT <br />
                <span className="text-primary-container relative inline-block">
                  MATTERS.
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-primary-container/30" />
                  <span className="absolute -bottom-1.5 left-0 w-1/3 h-[2px] bg-primary-container animate-[scanline_3s_ease-in-out_infinite_alternate]" />
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
              I'm {personalInfo.name} — an IT engineering student and Java Full Stack Developer focused on Spring Boot, React, and building robust developer tools. I design systems where silence speaks louder than noise.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-6">
              <a 
                href="#projects" 
                className="group relative px-6 py-3.5 bg-primary-container text-surface-container-lowest font-label-caps text-[11px] tracking-[0.14em] uppercase rounded-sm flex items-center gap-2.5 overflow-hidden transition-transform hover:scale-[1.02] shadow-md font-bold"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Explore Projects</span>
                <span className="material-symbols-outlined relative z-10 text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </a>

              <a 
                href="/Himanshu_Jayswal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group px-6 py-3.5 border border-primary-container/40 text-primary-container hover:bg-primary-container/10 font-label-caps text-[11px] tracking-[0.14em] uppercase rounded-sm flex items-center gap-2.5 transition-all font-bold"
              >
                <span>Resume</span>
                <span className="material-symbols-outlined text-[16px] opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  download
                </span>
              </a>

              <a 
                href="#contact" 
                className="group px-5 py-3.5 text-on-surface-variant hover:text-on-surface font-label-caps text-[11px] tracking-[0.14em] uppercase flex items-center gap-2.5 transition-colors font-semibold"
              >
                <span>Get In Touch</span>
                <span className="material-symbols-outlined text-[16px] opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  mail
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Content: 3D Visual Mesh */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="col-span-1 lg:col-span-5 h-[360px] lg:h-[460px] xl:h-[520px] relative hidden lg:block"
          >
            <div className="absolute inset-0 z-10">
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center opacity-30"><div className="w-24 h-24 rounded-full border border-primary-container/20 animate-spin" /></div>}>
                <ThreeDObject />
              </Suspense>
            </div>
            
            {/* Decorator HUD Elements */}
            <div className="absolute right-0 top-1/4 flex flex-col items-end gap-1 font-technical text-[10px] text-outline-variant z-20 pointer-events-none select-none">
              <span>SYS.ARCH.v2.4</span>
              <span>COORDS: 22.30°N 70.80°E</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" /> 
                ACTIVE NODE
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none z-10">
        <span className="font-label-caps text-[10px] text-on-surface-variant/40 tracking-[0.25em] uppercase [writing-mode:vertical-rl] rotate-180">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-outline-variant/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-container/60 animate-[scroll-indicator_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
