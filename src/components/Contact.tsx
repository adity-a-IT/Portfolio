import React, { useState } from 'react';
import {
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Lock
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submittedStatus, setSubmittedStatus] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  const directEmail = '2adityaverma2@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedSubject = formState.subject.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSubmittedStatus({
        type: 'error',
        message: 'Please fill out all required fields (Name, Email, and Message).',
      });
      return;
    }

    // Strict email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      setSubmittedStatus({
        type: 'error',
        message: 'Please enter a valid work email address (e.g. name@domain.com).',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmittedStatus(null);

    // Sanitize subject against header injection (remove newlines/carriage returns)
    const sanitizedSubject = (trimmedSubject || `Portfolio Inquiry from ${trimmedName}`)
      .replace(/[\r\n]+/g, ' ')
      .slice(0, 120);

    const sanitizedMessage = trimmedMessage.slice(0, 2500);

    const bodyText = `Hi Aditya,

${sanitizedMessage}

---
Sender Details:
Name: ${trimmedName.slice(0, 80)}
Work Email: ${trimmedEmail.slice(0, 100)}
Sent directly via Portfolio Contact`;

    // Direct 100% Client-to-Client TLS Gmail Web Compose URL (zero third-party)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      directEmail
    )}&su=${encodeURIComponent(sanitizedSubject)}&body=${encodeURIComponent(bodyText)}`;

    // Standard RFC-compliant mailto fallback for Outlook / Apple Mail
    const mailtoUrl = `mailto:${encodeURIComponent(directEmail)}?subject=${encodeURIComponent(
      sanitizedSubject
    )}&body=${encodeURIComponent(bodyText)}`;

    // Open Gmail directly in new window/tab
    const opened = window.open(gmailUrl, '_blank');

    // If popup was blocked or client prefers native handler, fallback to mailto
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }

    setSubmittedStatus({
      type: 'success',
      message: 'Direct mail composer opened securely! Hit "Send" in your mail tab to deliver straight to Aditya Verma.',
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            I'm open to software development opportunities, internships, collaborative projects, and conversations around technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-700 uppercase tracking-wider font-semibold">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-700 border border-slate-200 transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm sm:text-base text-slate-900 font-semibold break-all mb-2 hover:text-brand-600 transition-colors block"
                title="Compose email in Gmail"
              >
                {directEmail}
              </a>
              <p className="text-xs text-slate-600 leading-relaxed">
                Preferred for placement inquiries, campus interview schedules, and technical role discussions.
              </p>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/aditya-verma-52565936b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all group flex items-start justify-between shadow-xs"
              >
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">PROFESSIONAL</div>
                  <div className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Connect with Aditya Verma</div>
                </div>
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors" />
              </a>

              <a
                href="https://github.com/adity-a-IT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all group flex items-start justify-between shadow-xs"
              >
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">SOURCE CODE</div>
                  <div className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                    GitHub
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Review repositories</div>
                </div>
                <Github className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors" />
              </a>
            </div>

            {/* Recruiter Response Notice */}
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/90 text-xs font-mono text-slate-600 flex items-center gap-2.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Available for immediate interviews and technical evaluations.</span>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill in the details below. This will prepare a direct mail dispatch to Aditya Verma.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-medium" htmlFor="contact-name">
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      maxLength={80}
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-500 shadow-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-medium" htmlFor="contact-email">
                      YOUR WORK EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={100}
                      placeholder="e.g. sjenkins@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-500 shadow-xs transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 font-medium" htmlFor="contact-subject">
                    SUBJECT / ROLE
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    maxLength={120}
                    placeholder="e.g. Software Developer Placement Opportunity / Project Discussion"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-500 shadow-xs transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono text-slate-700 font-medium" htmlFor="contact-message">
                      MESSAGE *
                    </label>
                    <span className="text-[10px] font-mono text-slate-400">
                      {formState.message.length} / 2500
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    maxLength={2500}
                    placeholder="Hi Aditya Verma, we came across your MealBites project and would love to discuss an engineering role..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-500 shadow-xs transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200/80">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% Zero-Third-Party • Direct TLS Dispatch</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white font-semibold text-sm shadow-xs transition-all disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-brand-400" />
                        <span>Opening Composer...</span>
                      </>
                    ) : (
                      <>
                        <span>Compose & Send</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {submittedStatus && (
                  <div
                    className={`p-3.5 rounded-xl border text-xs font-mono flex items-start gap-2.5 mt-3 transition-all ${
                      submittedStatus.type === 'success'
                        ? 'bg-emerald-50/90 border-emerald-200 text-emerald-800'
                        : submittedStatus.type === 'info'
                        ? 'bg-sky-50/90 border-sky-200 text-sky-800'
                        : 'bg-rose-50/90 border-rose-200 text-rose-800'
                    }`}
                  >
                    {submittedStatus.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{submittedStatus.message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
