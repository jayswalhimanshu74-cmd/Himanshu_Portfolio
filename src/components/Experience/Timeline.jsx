import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import Blueprint from './Blueprint';

const Timeline = () => {
  const { education } = portfolioData;

  const pillars = [
    {
      num: "01",
      title: "SECURITY",
      desc: "Zero-trust request routing, OAuth2/JWT stateless tokens, secure cookie storage, strict CORS policies, and protection against common vulnerability vectors."
    },
    {
      num: "02",
      title: "ARCHITECTURE",
      desc: "Layered service isolation, API Gateway patterns, clean separation of domain boundaries, and event-driven data flow between client and databases."
    },
    {
      num: "03",
      title: "RELIABILITY",
      desc: "Connection pooling, centralized exception boundaries, structured health probes, Docker container isolation, and fail-safe transactional rollbacks."
    },
    {
      num: "04",
      title: "PERFORMANCE",
      desc: "Sub-millisecond WebSockets, optimized query indexing, memory caching layers, compressed assets, and fast, lightweight client deployment bundles."
    }
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter" id="experience">
      
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d6b77a 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-18">
        
        {/* Section Title */}
        <div className="flex flex-col gap-5 md:w-3/4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-primary uppercase font-bold">
              02 / BEYOND THE UI
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight">
            ENGINEERING
          </h2>
          <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl leading-relaxed">
            True elegance in software lies beneath the surface. We engineer systems designed for extreme scale, demanding absolute precision, uncompromising security, and ruthless performance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {pillars.map((pillar) => (
            <div 
              key={pillar.num}
              className="flex flex-col gap-3.5 p-6 bg-surface-container border border-surface-variant rounded-xl group hover:border-primary-container/30 transition-colors duration-300"
            >
              <span className="font-technical text-[13px] text-primary-container tracking-wider font-bold">
                {pillar.num} / {pillar.title}
              </span>
              <p className="font-body-md text-[13.5px] text-on-surface-variant leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Topology Blueprint */}
        <div className="flex flex-col gap-8 mt-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-technical text-[11px] text-primary-container tracking-wider font-bold">
              SYSTEM INFRASTRUCTURE MAPPING
            </span>
            <h3 className="font-headline-lg text-xl lg:text-2xl text-on-surface uppercase font-bold">
              TOPOLOGY BLUEPRINT
            </h3>
          </div>
          <Blueprint />
        </div>

        {/* Technical Matrix Bento Grid */}
        <div className="flex flex-col gap-8 mt-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-technical text-[11px] text-primary-container tracking-wider font-bold">
              SYSTEM CAPABILITIES MATRIX
            </span>
            <h3 className="font-headline-lg text-xl lg:text-2xl text-on-surface uppercase font-bold">
              CORE INFRASTRUCTURE MATRIX
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit">
            <div className="bg-surface-container flex flex-col p-6 gap-5 hover:bg-surface-container-high transition-colors rounded-l-md border border-surface-variant/40">
              <h4 className="font-label-caps text-[10.5px] text-primary-container tracking-widest uppercase font-bold">LANGUAGES</h4>
              <ul className="flex flex-col gap-2.5 font-technical text-[12px] text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> Java 21</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> JavaScript (ES6+)</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> SQL (DML/DDL)</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> HTML5 & CSS3</li>
              </ul>
            </div>
            
            <div className="bg-surface-container flex flex-col p-6 gap-5 hover:bg-surface-container-high transition-colors border border-surface-variant/40">
              <h4 className="font-label-caps text-[10.5px] text-primary-container tracking-widest uppercase font-bold">BACKEND & CLOUD</h4>
              <ul className="flex flex-col gap-2.5 font-technical text-[12px] text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> Spring Boot Core</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> Spring Security</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> Spring Data JPA</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> Docker Containers</li>
              </ul>
            </div>

            <div className="bg-surface-container flex flex-col p-6 gap-5 hover:bg-surface-container-high transition-colors border border-surface-variant/40">
              <h4 className="font-label-caps text-[10.5px] text-primary-container tracking-widest uppercase font-bold">FRONTEND</h4>
              <ul className="flex flex-col gap-2.5 font-technical text-[12px] text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> React Hooks / Context</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> Framer Motion</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> Tailwind CSS v4</li>
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> WebGL / Three.js</li>
              </ul>
            </div>

            <div className="bg-surface-container flex flex-col p-6 gap-5 hover:bg-surface-container-high transition-colors rounded-r-md border border-surface-variant/40">
              <h4 className="font-label-caps text-[10.5px] text-primary-container tracking-widest uppercase font-bold">DATA & INTELLIGENCE</h4>
              <ul className="flex flex-col gap-2.5 font-technical text-[12px] text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="text-primary-container text-[10px]">■</span> PostgreSQL</li>
                <li className="flex items-center gap-2"><span className="text-primary-container">■</span> MySQL Database</li>
                <li className="flex items-center gap-2"><span className="text-primary-container">■</span> Gemini AI Models</li>
                <li className="flex items-center gap-2"><span className="text-primary-container">■</span> RAG pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chronological Log (Timeline & Education) */}
        <div className="flex flex-col gap-12 mt-8">
          <div className="flex flex-col gap-2">
            <span className="font-technical text-[12px] text-primary-container tracking-wider font-bold">
              ACADEMIC BACKGROUND
            </span>
            <h3 className="font-headline-lg text-2xl lg:text-3xl text-on-surface uppercase font-bold">
              EDUCATION HISTORY
            </h3>
          </div>

          <div className="flex flex-col gap-8">
              <h4 className="font-label-caps text-xs text-primary tracking-[0.2em] uppercase font-bold">ACADEMIC FOUNDATION</h4>
              <div className="relative pl-6 border-l border-outline-variant/30 flex flex-col gap-10">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col gap-2"
                  >
                    {/* Bullet marker */}
                    <div className="absolute left-[-29.5px] top-1.5 w-3 h-3 rounded-full bg-primary-container border border-surface-container-lowest" />
                    
                    <span className="font-technical text-[11px] text-primary-container font-semibold uppercase">{edu.period}</span>
                    <h5 className="font-headline-md text-lg text-on-surface font-semibold">{edu.degree}</h5>
                    <span className="font-body-md text-sm text-on-surface-variant font-medium">{edu.institution}</span>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
