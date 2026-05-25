"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  User, 
  Mail, 
  Building2, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

type FormStep = 1 | 2 | 3;

export const ContactForm = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => (prev < 3 ? (prev + 1) as FormStep : prev));
  const prevStep = () => setStep(prev => (prev > 1 ? (prev - 1) as FormStep : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="relative mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="size-20 rounded-full bg-brand-cyan/20 flex items-center justify-center"
          >
            <CheckCircle2 className="size-10 text-brand-cyan" />
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-brand-cyan/30 blur-xl"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
        <p className="text-muted-foreground max-w-xs mb-8">
          Our enterprise strategy team will review your request and get back to you within 4 hours.
        </p>
        <Button 
          variant="glass" 
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
            setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
          }}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-brand-blue -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
        
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={cn(
              "relative z-10 size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2",
              step >= s ? "bg-brand-blue border-brand-blue text-white" : "bg-brand-navy border-white/10 text-muted-foreground"
            )}
          >
            {step > s ? <CheckCircle2 className="size-4" /> : s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <User className="size-4 text-brand-cyan" /> Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <Mail className="size-4 text-brand-cyan" /> Work Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <Building2 className="size-4 text-brand-cyan" /> Company Name
                </label>
                <input
                  required
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enterprise Inc."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 transition-all"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <Sparkles className="size-4 text-brand-cyan" /> Required Service
                </label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-brand-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 transition-all appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="sap-implementation">SAP Implementation</option>
                  <option value="custom-fiori">Custom Fiori Apps</option>
                  <option value="automation">Process Automation</option>
                  <option value="consulting">Enterprise Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <Calendar className="size-4 text-brand-cyan" /> Project Timeline
                </label>
                <select
                  required
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-brand-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 transition-all appearance-none"
                >
                  <option value="" disabled>Select timeline</option>
                  <option value="urgent">Immediate (1 month)</option>
                  <option value="quarter">Within 3 months</option>
                  <option value="year">Strategic (6+ months)</option>
                </select>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <MessageSquare className="size-4 text-brand-cyan" /> Tell us about your project
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your goals and challenges..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 transition-all resize-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 pt-4">
          {step > 1 && (
            <Button
              type="button"
              variant="glass"
              onClick={prevStep}
              className="flex-1"
            >
              <ChevronLeft className="mr-2 size-4" /> Back
            </Button>
          )}
          
          {step < 3 ? (
            <Button
              type="button"
              variant="premium"
              onClick={nextStep}
              className="flex-1"
              disabled={
                (step === 1 && (!formData.name || !formData.email || !formData.company)) ||
                (step === 2 && (!formData.service || !formData.budget))
              }
            >
              Continue <ChevronRight className="ml-2 size-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="premium"
              className="flex-1"
              disabled={isSubmitting || !formData.message}
            >
              {isSubmitting ? "Processing..." : "Submit Request"}
              {!isSubmitting && <Send className="ml-2 size-4" />}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
