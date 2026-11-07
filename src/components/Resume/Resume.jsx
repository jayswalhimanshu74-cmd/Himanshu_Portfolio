import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import SectionWrapper from '../Common/SectionWrapper';

const Resume = () => {
  return (
    <SectionWrapper id="resume">
      <div className="glass-card p-12 md:p-20 relative overflow-hidden text-center max-w-5xl mx-auto">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-[80px]" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-[80px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-12 group hover:rotate-0 transition-all duration-500">
            <FileText size={40} className="text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to see my <br /><span className="text-gradient">Full Credentials?</span></h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            I've put together a comprehensive resume that details my technical skills, academic background, and project experience in depth. Feel free to download it or view it online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/Himanshu_Jayswal_Resume.pdf"
              download
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center px-10 py-3 rounded-lg font-bold"
            >
              <Download size={20} />
              Download PDF
            </a>
            <a
              href="/Himanshu_Jayswal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center px-10 py-3 rounded-lg font-bold"
            >
              <ExternalLink size={20} />
              View Online
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Resume;
