"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "SAP Implementation",
  "Custom Fiori Apps",
  "Process Automation",
  "Enterprise Consulting",
  "System Integration"
];

const FloatingInput = ({ 
  label, 
  id, 
  type = "text", 
  required = false,
  value,
  onChange,
  name
}: { 
  label: string; 
  id: string; 
  type?: string; 
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isValueExist = value.length > 0;

  return (
    <div className="relative group w-full">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 focus:border-brand-blue/50",
          isValueExist || isFocused ? "border-brand-blue/30" : ""
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground",
          isValueExist || isFocused 
            ? "top-1.5 text-[10px] uppercase tracking-wider text-brand-blue font-bold" 
            : "top-4 text-base"
        )}
      >
        {label} {required && <span className="text-brand-cyan">*</span>}
      </label>
      <div className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-blue transition-all duration-500",
        isFocused ? "w-[90%]" : "w-0"
      )} />
    </div>
  );
};

const FloatingTextarea = ({ 
  label, 
  id, 
  required = false,
  value,
  onChange,
  name
}: { 
  label: string; 
  id: string; 
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isValueExist = value.length > 0;

  return (
    <div className="relative group w-full">
      <textarea
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={4}
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 focus:border-brand-blue/50 resize-none",
          isValueExist || isFocused ? "border-brand-blue/30" : ""
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground",
          isValueExist || isFocused 
            ? "top-1.5 text-[10px] uppercase tracking-wider text-brand-blue font-bold" 
            : "top-4 text-base"
        )}
      >
        {label} {required && <span className="text-brand-cyan">*</span>}
      </label>
      <div className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-blue transition-all duration-500",
        isFocused ? "w-[90%]" : "w-0"
      )} />
    </div>
  );
};

export const ContactFormPremium = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="relative mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="size-24 rounded-full bg-brand-blue/20 flex items-center justify-center border border-brand-blue/30"
          >
            <CheckCircle2 className="size-12 text-brand-cyan" />
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-brand-blue/30 blur-2xl"
          />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Inquiry Received</h3>
        <p className="text-muted-foreground max-w-sm mb-10 text-lg leading-relaxed">
          Thank you for reaching out. Our enterprise specialists are reviewing your request and will contact you within 4 hours.
        </p>
        <Button 
          variant="glass" 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", company: "", service: "", message: "" });
          }}
          className="rounded-full px-8 h-12"
        >
          Send Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FloatingInput 
          id="name" 
          name="name" 
          label="Full Name" 
          required 
          value={formData.name} 
          onChange={handleChange} 
        />
        <FloatingInput 
          id="email" 
          name="email" 
          type="email" 
          label="Work Email" 
          required 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FloatingInput 
          id="company" 
          name="company" 
          label="Company Name" 
          required 
          value={formData.company} 
          onChange={handleChange} 
        />
        <div className="relative group w-full">
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={cn(
              "w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 focus:border-brand-blue/50 appearance-none cursor-pointer",
              formData.service ? "border-brand-blue/30" : ""
            )}
          >
            <option value="" disabled className="bg-brand-navy">Select a Service</option>
            {services.map((s) => (
              <option key={s} value={s.toLowerCase().replace(/\s+/g, '-')} className="bg-brand-navy">
                {s}
              </option>
            ))}
          </select>
          <label
            className={cn(
              "absolute left-4 transition-all duration-300 pointer-events-none",
              formData.service 
                ? "top-1.5 text-[10px] uppercase tracking-wider text-brand-blue font-bold" 
                : "top-4 text-base text-muted-foreground"
            )}
          >
            Service Interested In <span className="text-brand-cyan">*</span>
          </label>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <FloatingTextarea 
        id="message" 
        name="message" 
        label="Your Message" 
        required 
        value={formData.message} 
        onChange={handleChange} 
      />

      <div className="pt-4">
        <Button
          type="submit"
          variant="premium"
          disabled={isSubmitting}
          className="w-full h-14 text-lg rounded-xl relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? "Processing..." : "Securely Send Inquiry"}
            {!isSubmitting && <Send className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Button>
        <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground mt-4 flex items-center justify-center gap-2">
          <span className="size-1 rounded-full bg-brand-cyan animate-pulse" />
          Average Response Time: 4 Hours
        </p>
      </div>
    </form>
  );
};
