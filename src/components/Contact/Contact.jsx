import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const web3formsKey = import.meta.env.WEB3FORMS_KEY;
  const fallbackEmail = portfolioData.personalInfo.email;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);

    // Focus the first invalid field
    if (newErrors.name) {
      nameInputRef.current?.focus();
    } else if (newErrors.email) {
      emailInputRef.current?.focus();
    } else if (newErrors.subject) {
      subjectInputRef.current?.focus();
    } else if (newErrors.message) {
      messageInputRef.current?.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Silently return if honeypot was checked
    if (formData.botcheck) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', botcheck: false });
      return;
    }

    if (!validate()) {
      return;
    }

    if (!web3formsKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          from_name: 'Portfolio contact form'
        }),
        signal: controller.signal
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', botcheck: false });
        setErrors({});
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const contactCards = [
    {
      type: "mail",
      label: "EMAIL",
      value: portfolioData.personalInfo.email,
      href: `mailto:${portfolioData.personalInfo.email}`
    },
    {
      type: "location",
      label: "LOCATION",
      value: portfolioData.personalInfo.location,
      href: null
    },
    {
      type: "github",
      label: "GITHUB",
      value: "jayswalhimanshu74-cmd",
      href: "https://github.com/jayswalhimanshu74-cmd"
    },
    {
      type: "linkedin",
      label: "LINKEDIN",
      value: "himanshu-jayswal-dev",
      href: "https://www.linkedin.com/in/himanshu-jayswal-dev"
    }
  ];

  const renderCardIcon = (type) => {
    if (type === "mail") {
      return <span className="material-symbols-outlined text-primary-container text-[18px]" aria-hidden="true">mail</span>;
    }
    if (type === "location") {
      return <span className="material-symbols-outlined text-primary-container text-[18px]" aria-hidden="true">location_on</span>;
    }
    if (type === "github") {
      return (
        <svg className="w-4.5 h-4.5 fill-current text-primary-container" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    }
    if (type === "linkedin") {
      return (
        <svg className="w-4 h-4 fill-current text-primary-container" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <section className="relative w-full bg-surface-container-lowest py-section-gap px-gutter overflow-hidden scroll-mt-24" id="contact">

      {/* Atmospheric background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-5 md:w-3/4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-label-caps text-xs tracking-[0.14em] text-primary uppercase font-semibold">
              LET'S CONNECT
            </span>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-on-surface uppercase tracking-tight font-bold">
            CONTACT
          </h2>
          <p className="font-body-lg text-base lg:text-[17px] text-on-surface-variant max-w-2xl leading-relaxed">
            Ready to build something exceptional? Whether it's a collaboration, an opportunity, or just a conversation — my inbox is always open.
          </p>
        </div>

        {/* Contact Cards + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

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
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={card.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between p-4 bg-surface-container border border-surface-variant rounded-xl hover:border-primary-container/45 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-container"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
                        {renderCardIcon(card.type)}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">{card.label}</span>
                        <span className="font-body-md text-sm text-on-surface group-hover:text-primary-container transition-colors">{card.value}</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary-container text-[16px] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-surface-container border border-surface-variant rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      {renderCardIcon(card.type)}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">{card.label}</span>
                      <span className="font-body-md text-sm text-on-surface">{card.value}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* CTA Block */}
            <div className="mt-2 p-6 bg-surface-container border border-surface-variant rounded-xl relative overflow-hidden group hover:border-primary-container/45 transition-colors duration-300">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d6b77a 1px, transparent 0)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10 flex flex-col gap-3">
                <span className="font-technical text-xs text-primary-container tracking-[0.14em] font-bold">OPEN FOR</span>
                <h3 className="font-headline-md text-lg text-on-surface font-bold uppercase">Full-Time Opportunities</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed max-w-[60ch]">
                  Actively seeking roles in Java Full Stack Development, Backend Engineering, or Software Architecture positions where I can contribute to meaningful, high-impact systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form - Sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 lg:col-span-7 bg-surface-container border border-surface-variant rounded-xl p-6 md:p-8 lg:sticky lg:top-28 lg:self-start"
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

              {/* Honeypot anti-spam field */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
                style={{ display: 'none' }}
                checked={formData.botcheck}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">
                    FULL NAME
                  </label>
                  <input
                    ref={nameInputRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 bg-surface-container-high border rounded-lg text-on-surface font-body-md text-base placeholder:text-outline outline-none transition-colors ${errors.name ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
                      }`}
                  />
                  {errors.name && (
                    <span id="contact-name-error" role="alert" className="text-red-400 text-xs font-technical">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">
                    EMAIL
                  </label>
                  <input
                    ref={emailInputRef}
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 bg-surface-container-high border rounded-lg text-on-surface font-body-md text-base placeholder:text-outline outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
                      }`}
                  />
                  {errors.email && (
                    <span id="contact-email-error" role="alert" className="text-red-400 text-xs font-technical">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">
                  SUBJECT
                </label>
                <input
                  ref={subjectInputRef}
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  placeholder="Project Inquiry"
                  className={`w-full px-4 py-3 bg-surface-container-high border rounded-lg text-on-surface font-body-md text-base placeholder:text-outline outline-none transition-colors ${errors.subject ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
                    }`}
                />
                {errors.subject && (
                  <span id="contact-subject-error" role="alert" className="text-red-400 text-xs font-technical">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-label-caps text-xs text-on-surface-variant tracking-[0.14em] uppercase font-semibold">
                  MESSAGE
                </label>
                <textarea
                  ref={messageInputRef}
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-3 bg-surface-container-high border rounded-lg text-on-surface font-body-md text-base placeholder:text-outline resize-none outline-none transition-colors ${errors.message ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
                    }`}
                />
                {errors.message && (
                  <span id="contact-message-error" role="alert" className="text-red-400 text-xs font-technical">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Missing key notice */}
              {!web3formsKey && (
                <div role="status" className="p-3.5 rounded-sm bg-surface-container-high border border-outline-variant/40 text-xs text-on-surface-variant flex flex-col gap-1">
                  <p>
                    Contact form is currently in offline mode. Please reach out directly via email at{' '}
                    <a href={`mailto:${fallbackEmail}`} className="underline text-primary-container hover:text-primary font-semibold">
                      {fallbackEmail}
                    </a>.
                  </p>
                </div>
              )}

              {/* Status Announcements */}
              <div aria-live="polite" className="flex flex-col gap-2">
                {status === 'success' && (
                  <div role="status" className="p-4 rounded-sm bg-primary-container/15 border border-primary-container/40 text-xs text-primary-container font-technical">
                    MESSAGE SENT SUCCESSFULLY. Thank you, I will get back to you shortly!
                  </div>
                )}
                {status === 'error' && (
                  <div role="alert" className="p-4 rounded-sm bg-red-950/40 border border-red-800/50 text-xs text-red-200 font-technical flex flex-col gap-1.5">
                    <p>Failed to send message via Web3Forms.</p>
                    <p>
                      Please email me directly at{' '}
                      <a href={`mailto:${fallbackEmail}`} className="underline text-primary hover:text-primary-container font-bold">
                        {fallbackEmail}
                      </a>.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending' || !web3formsKey}
                className="w-full py-3.5 bg-primary-container text-surface-container-lowest font-label-caps text-sm tracking-[0.14em] uppercase rounded-sm flex justify-center items-center gap-2.5 font-bold hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">
                  {status === 'sending' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT SUCCESSFULLY' : 'SEND MESSAGE'}
                </span>
                {status !== 'sending' && status !== 'success' && (
                  <span className="material-symbols-outlined relative z-10 text-[16px]" aria-hidden="true">send</span>
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
