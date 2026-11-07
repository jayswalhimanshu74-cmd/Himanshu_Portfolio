import { motion } from 'framer-motion';

const Stack = () => {
  const stackData = [
    {
      category: "LANGUAGES",
      icon: "code",
      mainSkills: [
        { name: "Java", level: "95%" },
        { name: "JavaScript", level: "80%" }
      ],
      chips: ["SQL", "HTML", "CSS"]
    },
    {
      category: "BACKEND",
      icon: "dns",
      mainSkills: [
        { name: "Spring Boot", level: "92%" }
      ],
      chips: ["Spring Security", "JPA / Hibernate", "REST APIs", "JWT", "WebSockets"]
    },
    {
      category: "FRONTEND",
      icon: "web",
      mainSkills: [
        { name: "React", level: "88%" }
      ],
      chips: ["Vite", "Tailwind CSS"]
    },
    {
      category: "DATABASE",
      icon: "database",
      mainSkills: [
        { name: "PostgreSQL", level: "85%" }
      ],
      chips: ["MySQL", "Firebase"]
    },
    {
      category: "INFRASTRUCTURE",
      icon: "hub",
      mainSkills: [
        { name: "Docker", level: "80%" }
      ],
      chips: ["Git", "GitHub Actions", "Vercel", "Render", "Cloudflare"]
    },
    {
      category: "AI & DATA",
      icon: "memory",
      mainSkills: [
        { name: "Gemini API", level: "85%" }
      ],
      chips: ["RAG", "Embeddings", "PDF Processing", "OCR"]
    }
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter" id="skills">

      {/* Background decoration */}
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-5 md:w-3/4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-primary uppercase font-bold">
              ENGINEERING ARSENAL
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight">
            TECH STACK
          </h2>
          <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl leading-relaxed">
            A disciplined approach to full-stack development, prioritizing performance, security, and scalability. Tools are selected for their precision and reliability in enterprise environments.
          </p>
        </div>

        {/* Stack Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {stackData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-surface-container border border-surface-variant p-6 flex flex-col gap-5 group hover:border-primary-container/45 transition-colors duration-500 rounded-xl relative overflow-hidden"
            >
              {/* Category Icon */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="material-symbols-outlined text-primary-container text-[20px]" aria-hidden="true">
                  {group.icon}
                </span>
              </div>

              {/* Category Label */}
              <h3 className="font-label-caps text-[11px] text-primary-container tracking-[0.2em] uppercase font-bold">
                {group.category}
              </h3>

              {/* Progress bars */}
              <div className="flex flex-col gap-4 mt-1">
                {group.mainSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-headline-md text-base text-on-surface uppercase font-medium">
                        {skill.name}
                      </span>
                      <span className="font-technical text-[11px] text-on-surface-variant">
                        {skill.level}
                      </span>
                    </div>

                    {/* Bar track */}
                    <div className="h-[2px] w-full bg-surface-variant rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary-container"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Supporting chips */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {group.chips.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface border border-surface-variant rounded-full font-technical text-[10px] text-on-surface-variant font-medium uppercase"
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
