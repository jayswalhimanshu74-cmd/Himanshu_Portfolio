import { motion } from 'framer-motion';

const Stack = () => {
  const stackData = [
    {
      category: "LANGUAGES",
      icon: "code",
      skills: [
        { name: "Java", usage: "Used in JobVista and Hence-Code" },
        { name: "Python", usage: null },
        { name: "JavaScript", usage: null }
      ],
      chips: ["SQL", "HTML5", "CSS3"]
    },
    {
      category: "BACKEND",
      icon: "dns",
      skills: [
        { name: "Spring Boot", usage: "Used in JobVista and Hence-Code" },
        { name: "FastAPI", usage: null },
        { name: "JWT", usage: "Used in JobVista and Hence-Code" }
      ],
      chips: ["Spring Security", "JPA / Hibernate", "REST APIs", "STOMP WebSockets"]
    },
    {
      category: "FRONTEND",
      icon: "web",
      skills: [
        { name: "React", usage: "Used in JobVista and this portfolio" },
        { name: "Vite", usage: "Used in JobVista and this portfolio" },
        { name: "Tailwind CSS", usage: "Used in JobVista and this portfolio" }
      ],
      chips: ["Framer Motion", "Context API", "Responsive Design"]
    },
    {
      category: "DATABASE",
      icon: "database",
      skills: [
        { name: "PostgreSQL", usage: "Used in JobVista and DocuMind AI" },
        { name: "MySQL", usage: null }
      ],
      chips: ["ChromaDB", "Flyway Migrations", "Connection Pooling"]
    },
    {
      category: "INFRASTRUCTURE",
      icon: "hub",
      skills: [
        { name: "Docker", usage: "Used in JobVista" },
        { name: "GitHub Actions", usage: "Used in JobVista" }
      ],
      chips: ["Git", "Linux", "Vercel", "Render"]
    },
    {
      category: "AI & DATA",
      icon: "memory",
      skills: [
        { name: "Gemini API", usage: null },
        { name: "RAG Architecture", usage: null }
      ],
      chips: ["Vector Embeddings", "Document Processing", "Semantic Search"]
    }
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter scroll-mt-24" id="skills">

      {/* Atmospheric accent */}
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-5 md:w-3/4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-xs tracking-[0.14em] text-primary uppercase font-semibold">
              ENGINEERING ARSENAL
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight font-bold">
            TECH STACK
          </h2>
          <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl leading-relaxed">
            A disciplined backend-first approach prioritizing security, data integrity, and scalable application architecture.
          </p>
        </div>

        {/* Stack Bento Grid (Merged single source of truth) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-surface-container border border-surface-variant p-6 flex flex-col justify-between gap-5 group hover:border-primary-container/45 transition-colors duration-300 rounded-xl relative overflow-hidden"
            >
              {/* Top row: Category & Icon */}
              <div className="flex items-center justify-between">
                <h3 className="font-label-caps text-xs text-primary-container tracking-[0.14em] uppercase font-semibold">
                  {group.category}
                </h3>
                <span className="material-symbols-outlined text-primary-container text-[20px] opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  {group.icon}
                </span>
              </div>

              {/* Verified Skills with Usage where true */}
              <div className="flex flex-col gap-3 mt-1">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-high/40 border border-surface-variant/30">
                    <span className="font-headline-md text-sm text-on-surface uppercase font-medium">
                      {skill.name}
                    </span>
                    {skill.usage && (
                      <span className="font-technical text-xs text-primary-container leading-tight">
                        {skill.usage}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Supporting chips */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-variant/30">
                {group.chips.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container-lowest border border-surface-variant/60 rounded-full font-technical text-xs text-on-surface-variant font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stack;
