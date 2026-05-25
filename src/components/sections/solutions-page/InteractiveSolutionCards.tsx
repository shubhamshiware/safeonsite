"use client";

import React from "react";
import { motion } from "framer-motion";
import { SOLUTIONS } from "@/constants/solutions";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const InteractiveSolutionCards = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-navy/50 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em]"
            >
              The Portfolio
            </motion.span>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              Premium Solution <span className="text-white/40">Portfolio</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-md text-right hidden md:block"
          >
            Explore our comprehensive suite of enterprise applications designed to solve complex business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SOLUTIONS.map((s, idx) => (
            <SolutionCard key={s.id} solution={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ solution, index }: { solution: typeof SOLUTIONS[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-[420px] rounded-3xl overflow-hidden glass border-white/5 hover:border-brand-blue/30 transition-colors duration-500 cursor-pointer"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Content */}
      <div className="relative h-full p-8 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all duration-500">
             <span className="text-xs font-bold text-white/40 group-hover:text-brand-blue">{index + 1}</span>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="size-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowUpRight className="size-5 text-white" />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
          {solution.title}
        </h3>
        
        <p className="text-sm text-white/40 leading-relaxed mb-auto group-hover:text-white/60 transition-colors">
          {solution.problem.length > 100 ? solution.problem.substring(0, 100) + "..." : solution.problem}
        </p>

        {/* Revealed on Hover */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {solution.tech.slice(0, 2).map(t => (
              <span key={t} className="text-[10px] font-mono text-brand-cyan/60 uppercase">{t}</span>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div>
              <div className="text-[10px] uppercase font-bold text-white/30 mb-1">ROI</div>
              <div className="text-lg font-bold text-white">{solution.metrics.roi}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-white/30 mb-1">Impact</div>
              <div className="text-lg font-bold text-white">{solution.metrics.time}</div>
            </div>
          </div>
        </div>

        {/* Feature Tags (Mobile/Static) */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
           <div className="flex items-center gap-2">
             <CheckCircle2 className="size-3 text-brand-blue" />
             <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{solution.features[0]}</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};
