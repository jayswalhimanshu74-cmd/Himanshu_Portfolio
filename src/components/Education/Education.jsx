import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;
  const edu = education[0] || {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Gujarat Technological University",
    period: "2023 - 2027",
    description: "Pursuing B.E. in Information Technology, Gujarat Technological University (expected 2027)"
  };

  const coreFocusAreas = [
    "Object-Oriented Programming (Java)",
    "Data Structures & Algorithms",
    "Database Management Systems (SQL)",
    "Web Application Architecture",
    "Computer Networks & Security",
    "Operating Systems & Linux Fundamentals"
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter scroll-mt-24" id="education">
      <div className="max-w-container-max mx-auto w-full flex flex-col gap-10">

        {/* Section Header - Single clear label */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-xs tracking-[0.14em] text-primary uppercase font-semibold">
              ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight font-bold">
            EDUCATION
          </h2>
        </div>

        {/* 2-Column Balanced Card Layout (Eliminates dead space) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container border border-surface-variant rounded-xl p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Degree & Institutional Status */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-primary-container/15 border border-primary-container/30 text-primary-container font-technical text-xs font-semibold rounded-full uppercase tracking-wider">
                {edu.period}
              </span>
              <span className="px-3 py-1 bg-surface-container-high border border-surface-variant text-primary-container font-technical text-xs font-semibold rounded-full">
                CGPA: {edu.cgpa || '8.37 / 10'}
              </span>
              <span className="px-3 py-1 bg-surface-container-high border border-surface-variant text-primary-container font-technical text-xs font-semibold rounded-full">
                CGPA: {edu.cgpa || '8.34 / 10'}
              </span>
              <span className="text-on-surface-variant font-technical text-xs">
                Expected Graduation: 2027
              </span>
            </div>

            <h3 className="font-headline-lg text-xl sm:text-2xl text-on-surface font-bold">
              {edu.degree}
            </h3>

            <p className="font-headline-md text-base text-primary-container font-medium">
              {edu.institution}
            </p>

            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-[60ch] mt-1">
              {edu.description}
            </p>
          </div>

          {/* Right Column: Academic Foundations & Relevant Coursework */}
          <div className="lg:col-span-6 flex flex-col gap-4 lg:border-l lg:border-surface-variant/40 lg:pl-8">
            <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">
              CORE COURSEWORK & FOUNDATIONS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {coreFocusAreas.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-container-high/40 border border-surface-variant/30 text-xs text-on-surface font-body-md"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
