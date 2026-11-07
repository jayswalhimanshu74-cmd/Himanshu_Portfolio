import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(portfolioData.skills[0].category);

  return (
    <section className="py-section-gap px-gutter" id="skills">
      <div className="max-w-container-max mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Tech <span className="text-primary">Arsenal</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.skills.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`glass-card px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.category 
                    ? 'text-primary border-primary/50' 
                    : 'text-on-surface-variant'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {portfolioData.skills
              .find(c => c.category === activeCategory)
              ?.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <span className={`material-symbols-outlined ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`} aria-hidden="true">
                      {getIconName(skill.name)}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                  <p className="text-sm text-on-surface-variant mb-6">Expertise and implementation in {skill.name}.</p>
                  <div className="w-full bg-surface-container rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      className={`h-1 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                    />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const getIconName = (skillName) => {
  const name = skillName.toLowerCase();
  if (name.includes('java')) return 'coffee';
  if (name.includes('android')) return 'smartphone';
  if (name.includes('react') || name.includes('web')) return 'language';
  if (name.includes('sql') || name.includes('db') || name.includes('postgre')) return 'storage';
  if (name.includes('git')) return 'terminal';
  if (name.includes('docker')) return 'terminal';
  return 'code';
};

export default Skills;
