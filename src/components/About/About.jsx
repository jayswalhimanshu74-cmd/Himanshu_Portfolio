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
    <section className="relative w-full bg-surface-container py-section-gap px-gutter overflow-hidden scroll-mt-24" id="about">

      {/* Atmospheric glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-18">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-xs tracking-[0.14em] text-primary uppercase font-semibold">
              BACKGROUND & PHILOSOPHY
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight font-bold">
            ABOUT
          </h2>
        </div>

        {/* Story + Photo Grid - Vertically centered to eliminate dead space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Photo & Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-5 flex flex-col gap-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-high group border border-surface-variant">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src={profileImg}
                alt={personalInfo.name}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-surface-container-lowest/90 to-transparent">
                <span className="font-technical text-xs text-primary-container tracking-wider font-semibold">
                  Bhavnagar, Gujarat, India
                </span>
              </div>
            </div>

            {/* Identity strip */}
            <div className="flex flex-col gap-3 p-5 bg-surface-container-lowest border border-surface-variant rounded-xl">
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">NAME</span>
                <span className="font-headline-md text-sm text-on-surface font-semibold uppercase">{personalInfo.name}</span>
              </div>
              <div className="h-px w-full bg-surface-variant" />
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">ROLE</span>
                <span className="font-headline-md text-sm text-primary-container font-semibold uppercase">ASPIRING JAVA FULL STACK</span>
              </div>
              <div className="h-px w-full bg-surface-variant" />
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">STATUS</span>
                <span className="font-technical text-xs text-primary-container flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
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
            className="col-span-1 lg:col-span-7 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <p className="font-body-lg text-lg text-on-surface leading-relaxed font-medium">
                I'm {personalInfo.name} — IT Engineering student at Gujarat Technological University building Java full-stack applications with Spring Boot, React and PostgreSQL.
              </p>
              <p className="font-body-lg text-base text-on-surface-variant leading-relaxed max-w-[60ch]">
                {personalInfo.about}
              </p>
              <p className="font-body-lg text-base text-on-surface-variant leading-relaxed max-w-[60ch]">
                My work philosophy is rooted in precision, security, and data integrity. Clean architecture and unwavering reliability are the foundation of everything I build.
              </p>
            </div>

            {/* Verifiable Stats Row (Counted from data) */}
            <div className="grid grid-cols-2 gap-5 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-1 p-5 rounded-xl bg-surface-container-high/40 border border-surface-variant"
              >
                <span className="font-display-lg text-3xl lg:text-4xl text-primary-container font-bold">
                  {portfolioData.projects.length}
                </span>
                <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">
                  Projects Delivered
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="flex flex-col gap-1 p-5 rounded-xl bg-surface-container-high/40 border border-surface-variant"
              >
                <span className="font-display-lg text-3xl lg:text-4xl text-primary-container font-bold">
                  24
                </span>
                <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">
                  Technologies in Stack
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* 5 Foundations Timeline */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="font-technical text-xs text-primary-container tracking-wider font-bold">
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
                  <span className="font-technical text-xs text-primary-container font-bold">{f.year}</span>
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
