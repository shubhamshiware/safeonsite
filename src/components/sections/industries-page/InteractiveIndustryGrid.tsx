"use client";

import React from "react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/constants/industries";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveIndustryGrid = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em]"
          >
            Sectors we serve
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Comprehensive <span className="text-white/40">Industry Coverage</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <IndustryCard key={industry.id} industry={industry} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ industry, index }: { industry: typeof INDUSTRIES[0], index: number }) => {
  const Icon = industry.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative h-[380px] rounded-3xl overflow-hidden glass border-white/5 hover:border-brand-blue/30 transition-all duration-500 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative h-full p-8 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all duration-500">
             <Icon className="size-7 text-white/40 group-hover:text-brand-blue transition-colors" />
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="size-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowUpRight className="size-5 text-white" />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
          {industry.title}
        </h3>
        
        <p className="text-sm text-white/40 leading-relaxed mb-auto group-hover:text-white/60 transition-colors line-clamp-3">
          {industry.challenges}
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {industry.sapSolutions.split(", ").slice(0, 1).map(s => (
              <span key={s} className="text-[10px] font-mono text-brand-cyan/60 uppercase">{s}</span>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Key Result</span>
                <span className="text-lg font-bold text-brand-blue">{Object.values(industry.stats)[0]}</span>
             </div>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Details</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
