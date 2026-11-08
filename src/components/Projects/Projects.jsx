import { motion } from 'framer-motion';
import { GitHub } from '../Common/BrandIcons';
import documindImg from '../../assets/projectImages/documind.png';
import jobvistaImg from '../../assets/projectImages/jobvista.png';
import logitrackImg from '../../assets/projectImages/Logitrack.png';
import henceCodeImg from '../../assets/projectImages/hence-code.png';
import certifyImg from '../../assets/projectImages/certifychain.png';

const Projects = () => {
  const projectsData = [
    {
      id: "01",
      category: "ENTERPRISE SYSTEMS",
      title: "JOBVISTA",
      description: "A complete job and internship portal featuring multi-role authentication dashboards (Admin, Recruiter, Job Seeker) and real-time communication integrations.",
      tech: ["REACT", "SPRING BOOT", "POSTGRESQL", "JWT", "WEBSOCKETS", "DOCKER"],
      image: jobvistaImg,
      liveUrl: "https://jobvista-git-main-jayswalhimanshu74-4107s-projects.vercel.app/",
      githubUrl: "https://github.com/jayswalhimanshu74-cmd/JobVista"
    },
    {
      id: "02",
      category: "ENTERPRISE SYSTEMS",
      title: "LOGITRACK",
      description: "A robust, scalable inventory and logistics management platform engineered for real-time tracking, complex data aggregation, and high-throughput transaction processing.",
      tech: ["JAVA", "SPRING BOOT", "REACT", "POSTGRESQL"],
      image: logitrackImg,
      liveUrl: "https://logi-track-phi.vercel.app/",
      githubUrl: "https://github.com/jayswalhimanshu74-cmd/LogiTrack"
    },
    {
      id: "03",
      category: "DISTRIBUTED ARCHITECTURE",
      title: "HENCE-CODE",
      description: "Cloud-native collaborative development environment leveraging WebSockets and Redis pub/sub for sub-millisecond latency synchronized editing and distributed state management.",
      tech: ["JAVA", "REACT", "WEBSOCKETS", "REDIS", "DOCKER"],
      image: henceCodeImg,
      liveUrl: "https://code-editor-git-main-jayswalhimanshu74-4107s-projects.vercel.app/",
      githubUrl: "https://github.com/jayswalhimanshu74-cmd/Code-Editor"
    },
    {
      id: "04",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "DOCUMIND AI",
      description: "Intelligent document processing and conversational agent utilizing Retrieval-Augmented Generation (RAG) to extract, analyze, and interact with complex unstructured data.",
      tech: ["PYTHON", "REACT", "FASTAPI", "POSTGRESQL", "GEMINI", "CHROMADB"],
      image: documindImg,
      liveUrl: null,
      githubUrl: "https://github.com/jayswalhimanshu74-cmd/DocuMind-Ai"
    },
    {
      id: "05",
      category: "DISTRIBUTED ARCHITECTURE",
      title: "CERTIFY-CHAIN",
      description: "Cloud-native collaborative development environment leveraging WebSockets and Redis pub/sub for sub-millisecond latency synchronized editing and distributed state management.",
      tech: ["REACT", "Python", "Django", "Ganache", "Solidity", "POSTGRESQL"],
      image: certifyImg,
      liveUrl: null,
      githubUrl: "https://github.com/jayswalhimanshu74-cmd/CertifyChain"
    }
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter scroll-mt-24" id="projects">
      <div className="max-w-container-max mx-auto relative z-10 flex flex-col gap-16">

        {/* Title */}
        <div className="flex flex-col gap-4 relative max-w-3xl">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-xs tracking-[0.14em] text-primary uppercase font-semibold">
              INDEXED ARCHIVES
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight font-bold">
            PROJECTS
          </h2>
          <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl leading-relaxed">
            Selected works demonstrating architectural precision, scalable systems, and premium engineering.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-gutter xl:gap-14 items-center w-full`}
              >
                {/* Visual side */}
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  className="w-full lg:w-7/12 relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-high/40 transition-transform duration-700 ease-out group-hover:scale-[1.01] block cursor-pointer border border-surface-variant hover:border-primary-container/45"
                >
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary-container/10 to-transparent pointer-events-none" />

                  {/* Floating preview badge only if live preview exists */}
                  {project.liveUrl && (
                    <div className="absolute top-3.5 right-3.5 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/40 text-on-surface font-label-caps text-xs tracking-[0.14em] uppercase font-semibold shadow-md">
                      <span>Live Preview</span>
                      <span className="material-symbols-outlined text-[13px] text-primary-container" aria-hidden="true">
                        open_in_new
                      </span>
                    </div>
                  )}

                  <img
                    className="w-full h-full object-contain rounded-xl grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 p-2"
                    src={project.image}
                    alt={project.title}
                  />
                </a>

                {/* Info side */}
                <div className={`w-full lg:w-5/12 flex flex-col gap-5 ${isEven ? 'pl-0 lg:pl-10 xl:pl-12' : 'pr-0 lg:pr-10 xl:pr-12'}`}>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-technical text-xs text-primary-container tracking-[0.14em] font-semibold">
                      {project.id} / {project.category}
                    </span>
                    <h3 className="font-headline-lg text-2xl lg:text-3xl text-on-surface uppercase leading-tight font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-body-lg text-base text-on-surface-variant leading-relaxed max-w-[60ch]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-surface-container-high rounded-full font-label-caps text-xs tracking-[0.14em] text-on-surface font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-container hover:bg-primary text-surface-container-lowest font-label-caps text-sm tracking-[0.14em] rounded-sm font-bold uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(214,183,122,0.3)] hover:-translate-y-0.5 group/live"
                      >
                        <span>Explore Live</span>
                        <span className="material-symbols-outlined text-[15px] transform transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" aria-hidden="true">
                          open_in_new
                        </span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 font-label-caps text-sm tracking-[0.14em] rounded-sm uppercase transition-all duration-300 hover:-translate-y-0.5 group/git ${!project.liveUrl
                          ? 'bg-primary-container hover:bg-primary text-surface-container-lowest font-bold hover:shadow-[0_0_20px_rgba(214,183,122,0.3)]'
                          : 'border border-outline-variant/60 hover:border-primary-container bg-surface-container-high/60 hover:bg-surface-container-highest text-on-surface hover:text-primary font-semibold'
                          }`}
                      >
                        <GitHub
                          size={14}
                          className={
                            !project.liveUrl
                              ? 'text-surface-container-lowest'
                              : 'text-on-surface-variant group-hover/git:text-primary transition-colors'
                          }
                        />
                        <span>GitHub</span>
                        <span className="material-symbols-outlined text-[14px] transform transition-transform group-hover/git:translate-x-0.5" aria-hidden="true">
                          arrow_forward
                        </span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
