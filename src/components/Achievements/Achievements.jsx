import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Achievements = () => {
  return (
    <section className="py-section-gap px-gutter bg-surface-container-lowest" id="achievements">
      <div className="max-w-container-max mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Key <span className="text-primary">Milestones</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 text-center rounded-3xl group border-t-2 border-primary/20 hover:glow-blue transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-8 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl" aria-hidden="true">{getIconName(item.title)}</span>
              </div>
              <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getIconName = (title) => {
  const t = title.toLowerCase();
  if (t.includes('projects')) return 'rocket_launch';
  if (t.includes('android')) return 'smartphone';
  if (t.includes('apis') || t.includes('scalable')) return 'dns';
  if (t.includes('java')) return 'coffee';
  return 'stars';
};

export default Achievements;
