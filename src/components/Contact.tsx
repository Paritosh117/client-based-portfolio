'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, Clock, Globe, Zap, DollarSign } from 'lucide-react';

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
}

export function Contact() {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'AED' | 'INR'>('USD');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Mobile App',
    budget: '$3,000 – $10,000',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Mobile App',
    'Web Application',
    'E-Commerce',
    'Backend / API',
    'Real-Time Application',
    'AI Integration',
    'Maintenance',
    'Other'
  ];

  const budgetRanges: Record<string, string[]> = {
    USD: ['Under $1,500', '$1,500 – $3,000', '$3,000 – $10,000', '$10,000+', 'Not decided'],
    EUR: ['Under €1,500', '€1,500 – €3,000', '€3,000 – €10,000', '€10,000+', 'Not decided'],
    GBP: ['Under £1,200', '£1,200 – £2,500', '£2,500 – £8,000', '£8,000+', 'Not decided'],
    AED: ['Under AED 5K', 'AED 5K – 15K', 'AED 15K – 40K', 'AED 40K+', 'Not decided'],
    INR: ['Under ₹50K', '₹50K – ₹1L', '₹1L – ₹3L', '₹3L+', 'Not decided']
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.description.trim()) errs.description = 'Please describe your project requirements.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            WORLDWIDE CLIENT INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Have a Product Idea? Let's Build It.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Tell me what you're building, what problem you're trying to solve, and where you are in the process. Working with founders & teams across all global timezones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Verification Rules */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                <span>DIRECT GLOBAL CONTACT</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  ⚡ 12H Response
                </span>
              </div>

              <div className="space-y-6">
                {/* WhatsApp Quick Chat */}
                <a
                  href="https://wa.me/918349513774"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 block uppercase tracking-wider">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      +91-8349513774
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Click to open direct chat</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:paritoshshrouty@gmail.com"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Email Address</span>
                    <span className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      paritoshshrouty@gmail.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/paritoshshrouty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/paritoshshrouty
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918349513774"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Direct Phone</span>
                    <span className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      +91-8349513774
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Base Location</span>
                    <span className="text-sm font-bold text-slate-100">
                      Durg, Chhattisgarh, India (Global Remote)
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Feedback Placeholder Notice */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-1">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Client Reviews Policy
                </div>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  "Client feedback coming soon." — Standard studio policy ensuring 100% verified, authentic client reviews only.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Project Inquiry Submitted!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I'll review your project details and get back to you at <strong>{formData.email}</strong> within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Mobile App',
                        budget: '$3,000 – $10,000',
                        description: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Project Inquiry Form
                    </h3>
                    
                    {/* Currency Selector Toggle */}
                    <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
                      {(['USD', 'EUR', 'GBP', 'AED', 'INR'] as const).map((curr) => (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => {
                            setCurrency(curr);
                            setFormData({ ...formData, budget: budgetRanges[curr][2] });
                          }}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                            currency === curr
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global SaaS"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            formData.projectType === type
                              ? 'bg-blue-600 text-white'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Budget Range ({currency})
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges[currency].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            formData.budget === b
                              ? 'bg-blue-600 text-white'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what you're looking to build, desired timeline, or current state..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    />
                    {errors.description && <p className="text-[11px] text-rose-500 mt-1">{errors.description}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    Send Global Project Inquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
