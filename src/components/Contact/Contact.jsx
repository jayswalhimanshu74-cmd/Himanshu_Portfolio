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

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;
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
      href: "https://www.linkedin.com/in/himanshu-jayswal-dev/"
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
                  <span className="material-symbols-outlined text-primary-container text-[18px]" aria-hidden="true">{card.icon}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-caps text-[9.5px] text-on-surface-variant tracking-[0.2em] uppercase">{card.label}</span>
                  {card.href ? (
                    <a href={card.href} className="font-body-md text-xs sm:text-sm text-on-surface hover:text-primary-container transition-colors" target={card.href.startsWith('mailto:') ? undefined : "_blank"} rel={card.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}>
                      {card.value}
                    </a>
                  ) : (
                    <span className="font-body-md text-xs sm:text-sm text-on-surface">{card.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA Block (Fixed heading skip h4 -> h3) */}
            <div className="mt-4 p-6 bg-surface-container border border-surface-variant rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d6b77a 1px, transparent 0)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10 flex flex-col gap-3">
                <span className="font-technical text-[10.5px] text-primary-container tracking-wider font-bold">OPEN FOR</span>
                <h3 className="font-headline-md text-base text-on-surface font-bold uppercase">Full-Time Opportunities</h3>
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
                  <label htmlFor="contact-name" className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
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
                    placeholder="Himanshu Jayswal"
                    className={`w-full px-4 py-3 bg-surface-container-high border rounded-sm text-on-surface font-body-md text-sm placeholder:text-outline outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
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
                  <label htmlFor="contact-email" className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
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
                    placeholder="jayswalhimanshu74@gmail.com"
                    className={`w-full px-4 py-3 bg-surface-container-high border rounded-sm text-on-surface font-body-md text-sm placeholder:text-outline outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
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
                <label htmlFor="contact-subject" className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
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
                  placeholder="Project Discussion"
                  className={`w-full px-4 py-3 bg-surface-container-high border rounded-sm text-on-surface font-body-md text-sm placeholder:text-outline outline-none transition-colors ${
                    errors.subject ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
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
                <label htmlFor="contact-message" className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
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
                  className={`w-full px-4 py-3 bg-surface-container-high border rounded-sm text-on-surface font-body-md text-sm placeholder:text-outline resize-none outline-none transition-colors ${
                    errors.message ? 'border-red-500 focus:border-red-400' : 'border-surface-variant focus:border-primary-container'
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
                className="w-full py-3.5 bg-primary-container text-surface-container-lowest font-label-caps text-[11px] tracking-[0.15em] uppercase rounded-sm flex justify-center items-center gap-2.5 font-bold hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer group relative overflow-hidden"
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
