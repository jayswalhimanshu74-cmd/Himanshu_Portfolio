import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const contactCards = [
    {
      icon: "mail",
      label: "EMAIL",
      value: portfolioData.personalInfo.email,
      href: `mailto:${portfolioData.personalInfo.email}`
    },
    {
      icon: "location_on",
      label: "LOCATION",
      value: portfolioData.personalInfo.location,
      href: null
    },
    {
      icon: "code",
      label: "GITHUB",
      value: "jayswalhimanshu74-cmd",
      href: "https://github.com/jayswalhimanshu74-cmd"
    },
    {
      icon: "public",
      label: "LINKEDIN",
      value: "himanshujayswal",
      href: "https://linkedin.com/in/himanshujayswal"
    }
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter overflow-hidden" id="contact">
      
      {/* Atmospheric background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-5 md:w-3/4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-primary uppercase font-bold">
              LET'S CONNECT
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight">
            CONTACT.
          </h2>
          <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl leading-relaxed">
            Ready to build something exceptional? Whether it's a collaboration, an opportunity, or just a conversation — my inbox is always open.
          </p>
        </div>

        {/* Contact Cards + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Left: Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-5 flex flex-col gap-3.5"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-4 p-4 bg-surface-container border border-surface-variant rounded-lg hover:border-primary-container/30 transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">{card.icon}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-caps text-[9.5px] text-on-surface-variant tracking-[0.2em] uppercase">{card.label}</span>
                  {card.href ? (
                    <a href={card.href} className="font-body-md text-xs sm:text-sm text-on-surface hover:text-primary-container transition-colors" target="_blank" rel="noopener noreferrer">
                      {card.value}
                    </a>
                  ) : (
                    <span className="font-body-md text-xs sm:text-sm text-on-surface">{card.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA Block */}
            <div className="mt-4 p-6 bg-surface-container border border-surface-variant rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d6b77a 1px, transparent 0)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10 flex flex-col gap-3">
                <span className="font-technical text-[10.5px] text-primary-container tracking-wider font-bold">OPEN FOR</span>
                <h4 className="font-headline-md text-base text-on-surface font-bold uppercase">Full-Time Opportunities</h4>
                <p className="font-body-md text-[13.5px] text-on-surface-variant leading-relaxed">
                  Actively seeking roles in Java Full Stack Development, Backend Engineering, or Software Architecture positions where I can contribute to meaningful, high-impact systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 lg:col-span-7 bg-surface-container border border-surface-variant rounded-xl p-6 md:p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">FULL NAME</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-on-surface font-body-md text-sm placeholder:text-outline"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">EMAIL</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 text-on-surface font-body-md text-sm placeholder:text-outline"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">SUBJECT</label>
                <input 
                  type="text" 
                  required
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 text-on-surface font-body-md text-sm placeholder:text-outline"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">MESSAGE</label>
                <textarea 
                  required
                  rows="5" 
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 text-on-surface font-body-md text-sm placeholder:text-outline resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 bg-primary-container text-surface-container-lowest font-label-caps text-[11px] tracking-[0.15em] uppercase rounded-sm flex justify-center items-center gap-2.5 font-bold hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">
                  {loading ? 'SENDING...' : success ? 'MESSAGE SENT SUCCESSFULLY' : 'SEND MESSAGE'}
                </span>
                {!loading && !success && (
                  <span className="material-symbols-outlined relative z-10 text-[16px]">send</span>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
