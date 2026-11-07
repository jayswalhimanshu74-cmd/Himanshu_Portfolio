import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import profileImg from '../../assets/profile.jpeg';

const About = () => {
  const { personalInfo } = portfolioData;

  const foundations = [
    {
      year: "2020",
      title: "FIRST CODE",
      desc: "Wrote my first Java program and discovered the satisfaction of turning logic into living software."
    },
    {
      year: "2023",
      title: "ENGINEERING",
      desc: "Enrolled in B.E. Information Technology at Gujarat Technological University, formalizing my engineering foundation."
    },
    {
      year: "2024",
      title: "FULL STACK",
      desc: "Mastered Spring Boot + React ecosystem, building production-grade applications like JobVista with JWT auth and Docker."
    },
    {
      year: "2025",
      title: "SYSTEMS THINKING",
      desc: "Shifted from writing code to architecting systems — RAG pipelines, WebSocket infrastructure, and cloud-native deployments."
    },
    {
      year: "NOW",
      title: "COMMANDING SILENCE",
      desc: "Building software where every line has intent. Focused on engineering that speaks through its architecture, not its noise."
    }
  ];

  return (
    <section className="relative w-full bg-surface-container py-section-gap px-gutter overflow-hidden" id="about">

      {/* Atmospheric glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-18">

        {/* Header */}
        <div className="flex flex-col gap-5 md:w-3/4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-primary uppercase font-bold">
              THE ENGINEER
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight">
            ABOUT.
          </h2>
        </div>

        {/* Story + Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

          {/* Photo & Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-4 flex flex-col gap-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-high group">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src={profileImg}
                alt={personalInfo.name}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-surface-container-lowest/90 to-transparent">
                <span className="font-technical text-[10.5px] text-primary-container tracking-wider">
                  BHAVNAGER , GUJARAT — 21.0721°N 72.1323°E
                </span>
              </div>
            </div>

            {/* Identity strip */}
            <div className="flex flex-col gap-2.5 p-5 bg-surface-container-lowest border border-surface-variant rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-[9.5px] text-on-surface-variant tracking-[0.2em] uppercase">NAME</span>
                <span className="font-headline-md text-xs text-on-surface font-semibold uppercase">{personalInfo.name}</span>
              </div>
              <div className="h-px w-full bg-surface-variant" />
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-[9.5px] text-on-surface-variant tracking-[0.2em] uppercase">ROLE</span>
                <span className="font-headline-md text-xs text-primary-container font-semibold">IT ENGINEER</span>
              </div>
              <div className="h-px w-full bg-surface-variant" />
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-[9.5px] text-on-surface-variant tracking-[0.2em] uppercase">STATUS</span>
                <span className="font-technical text-xs text-primary-container flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                  AVAILABLE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 lg:col-span-8 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <p className="font-body-lg text-lg text-on-surface leading-relaxed font-medium">
                I'm {personalInfo.name} — an IT Engineering student at Gujarat Technological University and a self-driven Java Full Stack Developer based in Rajkot, India.
              </p>
              <p className="font-body-lg text-[15.5px] text-on-surface-variant leading-relaxed">
                {personalInfo.about}
              </p>
              <p className="font-body-lg text-[15.5px] text-on-surface-variant leading-relaxed">
                My work philosophy is rooted in precision. I believe great software doesn't need to announce itself — it commands through silence. Clean architecture, robust security, and unwavering reliability are not features I add. They are the foundation I build upon.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col gap-0.5"
                >
                  <span className="font-display-lg text-2xl lg:text-3xl text-primary-container font-bold">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="font-label-caps text-[9.5px] text-on-surface-variant tracking-[0.15em] uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 5 Foundations Timeline */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="font-technical text-[11px] text-primary-container tracking-wider font-bold">
              THE JOURNEY
            </span>
            <h3 className="font-headline-lg text-xl lg:text-2xl text-on-surface uppercase font-bold">
              5 FOUNDATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 relative">
            {/* Connection line */}
            <div className="absolute top-3.5 left-0 right-0 h-px bg-outline-variant/20 hidden md:block" />

            {foundations.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-3 relative"
              >
                {/* Dot on the line */}
                <div className="flex items-center gap-2.5 md:flex-col md:items-start">
                  <div className="w-2 h-2 rounded-full bg-primary-container border border-surface-container shrink-0 relative z-10" />
                  <span className="font-technical text-[11px] text-primary-container font-bold">{f.year}</span>
                </div>
                <h4 className="font-headline-md text-[13px] text-on-surface font-bold uppercase tracking-wider">{f.title}</h4>
                <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
