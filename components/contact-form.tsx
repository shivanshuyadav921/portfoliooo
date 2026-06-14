'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (field: keyof ContactFormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setStatus('idle');
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!formData.subject.trim()) nextErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) nextErrors.message = 'Please enter a message.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus('error');
      setSubmissionMessage('Please correct the highlighted fields.');
      return;
    }

    setStatus('loading');
    setSubmissionMessage('Opening your email app...');

    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:shivanshuy921@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setStatus('success');
    setSubmissionMessage('Your email app should now be open. Review the message there before sending.');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { label: 'Full Name', field: 'name', type: 'text' },
          { label: 'Email Address', field: 'email', type: 'email' },
        ].map((input) => (
          <label key={input.field} className="space-y-3 text-sm text-slate-200">
            <span className="block text-slate-300">{input.label}</span>
            <input
              type={input.type}
              name={input.field}
              autoComplete={input.field === 'name' ? 'name' : 'email'}
              value={formData[input.field as keyof ContactFormData]}
              onChange={handleChange(input.field as keyof ContactFormData)}
              className={`w-full rounded-3xl border px-4 py-3 bg-slate-900 text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${
                errors[input.field] ? 'border-rose-500/70' : 'border-slate-800'
              }`}
              aria-invalid={Boolean(errors[input.field])}
              aria-describedby={`${input.field}-error`}
            />
            {errors[input.field] ? (
              <p id={`${input.field}-error`} className="text-xs text-rose-300">
                {errors[input.field]}
              </p>
            ) : null}
          </label>
        ))}
      </div>

      <label className="space-y-3 text-sm text-slate-200">
        <span className="block text-slate-300">Subject</span>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange('subject')}
          className={`w-full rounded-3xl border px-4 py-3 bg-slate-900 text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${
            errors.subject ? 'border-rose-500/70' : 'border-slate-800'
          }`}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby="subject-error"
        />
        {errors.subject ? (
          <p id="subject-error" className="text-xs text-rose-300">
            {errors.subject}
          </p>
        ) : null}
      </label>

      <label className="space-y-3 text-sm text-slate-200">
        <span className="block text-slate-300">Message</span>
        <textarea
          value={formData.message}
          name="message"
          onChange={handleChange('message')}
          rows={5}
          className={`w-full rounded-3xl border px-4 py-3 bg-slate-900 text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${
            errors.message ? 'border-rose-500/70' : 'border-slate-800'
          }`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-error"
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-rose-300">
            {errors.message}
          </p>
        ) : null}
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">Let me know how I can help with your next research or engineering challenge.</p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Opening...' : 'Open Email App'}
        </button>
      </div>

      {submissionMessage ? (
        <div
          role="status"
          aria-live={status === 'success' ? 'polite' : 'assertive'}
          className={`rounded-3xl px-4 py-3 text-sm ${
            status === 'success' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'
          }`}
        >
          {submissionMessage}
        </div>
      ) : null}
    </motion.form>
  );
}
