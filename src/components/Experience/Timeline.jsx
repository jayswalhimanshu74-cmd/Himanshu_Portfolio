import Blueprint from './Blueprint';

const Timeline = () => {
  const pillars = [
    {
      num: "01",
      title: "SECURITY",
      desc: "JWT authentication with HttpOnly refresh-token cookies, role-based access with Spring Security, rate limiting with Bucket4j, strict CORS rules. (Built in JobVista.)"
    },
    {
      num: "02",
      title: "ARCHITECTURE",
      desc: "REST APIs on Spring Boot with a React front end, PostgreSQL persistence and real-time updates over STOMP WebSockets."
    },
    {
      num: "03",
      title: "RELIABILITY",
      desc: "Versioned database migrations with Flyway, Docker containers for repeatable environments, and a GitHub Actions CI pipeline that builds on every push."
    },
    {
      num: "04",
      title: "PERFORMANCE",
      desc: "Caffeine caching on high-traffic listing endpoints and lazy-loaded front-end bundles. I will add measured figures once benchmarked."
    }
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter scroll-mt-24" id="experience">
      
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d6b77a 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-14">
        
        {/* Section Title */}
        <div className="flex flex-col gap-5 md:w-3/4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-xs tracking-[0.14em] text-primary uppercase font-semibold">
              BEYOND THE UI
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight font-bold">
            ENGINEERING
          </h2>
          <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl leading-relaxed">
            I build backend-first systems and care about what happens beneath the interface: security, data integrity and predictable deployments.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <div 
              key={pillar.num}
              className="flex flex-col gap-3.5 p-6 bg-surface-container border border-surface-variant rounded-xl group hover:border-primary-container/45 transition-colors duration-300"
            >
              <span className="font-technical text-xs text-primary-container tracking-[0.14em] font-bold">
                {pillar.num} / {pillar.title}
              </span>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed max-w-[60ch]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Topology Blueprint */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-technical text-xs text-primary-container tracking-[0.14em] font-semibold">
              SYSTEM INFRASTRUCTURE MAPPING
            </span>
            <h3 className="font-headline-lg text-xl lg:text-2xl text-on-surface uppercase font-bold">
              TOPOLOGY BLUEPRINT
            </h3>
          </div>
          <Blueprint />
        </div>

      </div>
    </section>
  );
};

export default Timeline;
