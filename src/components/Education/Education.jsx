import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
  return (
    <section className="py-section-gap px-gutter bg-surface-dim" id="education">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Academic <span className="text-primary">Foundation</span></h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden border-t-2 border-primary/30 group hover:glow-blue transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[80px] text-primary" aria-hidden="true">school</span>
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-primary text-xs font-bold bg-primary/10 px-4 py-1 rounded-full border border-primary/20 uppercase tracking-widest">
                    {edu.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">{edu.degree}</h3>
                  <p className="text-secondary text-lg font-medium">{edu.institution}</p>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">account_balance</span>
                    <p className="font-semibold">{edu.institution}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Key Highlights</p>
                    <ul className="text-sm text-on-surface-variant space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{edu.description}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Specialization in software development and engineering principles.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
