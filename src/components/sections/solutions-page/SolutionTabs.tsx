"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOLUTIONS } from "@/constants/solutions";
import { DashboardMockup } from "./DashboardMockup";
import { AnimatedMetric } from "./AnimatedMetric";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const SolutionTabs = () => {
  const [activeTab, setActiveTab] = useState(SOLUTIONS[0].id);

  const activeSolution = SOLUTIONS.find((s) => s.id === activeTab) || SOLUTIONS[0];

  return (
    <section className="py-24 md:py-32 bg-brand-navy overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            System Categories
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Enterprise Solution <span className="text-white/40">Ecosystem</span>
          </motion.h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 glass rounded-2xl max-w-5xl mx-auto border-white/5">
          {SOLUTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={cn(
                "relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                activeTab === s.id ? "text-white" : "text-white/40 hover:text-white/60"
              )}
            >
              {activeTab === s.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-blue rounded-xl z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {activeSolution.title}
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                    {activeSolution.problem}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-blue">Solution Approach</div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {activeSolution.approach}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Key Features</div>
                    <div className="space-y-2">
                      {activeSolution.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3 text-brand-cyan" />
                          <span className="text-xs text-white/70">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
                  <AnimatedMetric 
                    value={activeSolution.metrics.roi} 
                    label="ROI Potential" 
                  />
                  <AnimatedMetric 
                    value={activeSolution.metrics.savings} 
                    label="Annual Savings" 
                  />
                </div>

                <div className="flex items-center gap-6 pt-4">
                   <div className="flex -space-x-3">
                     {activeSolution.tech.map((t) => (
                       <div key={t} className="size-10 rounded-full border-2 border-brand-navy bg-white/5 flex items-center justify-center backdrop-blur-sm shadow-xl" title={t}>
                         <span className="text-[8px] font-bold text-white/40">{t.substring(0, 2)}</span>
                       </div>
                     ))}
                   </div>
                   <div className="text-xs font-medium text-white/40">Powered by advanced stack</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-brand-blue/10 blur-[100px] rounded-full opacity-30 animate-pulse" />
                <DashboardMockup type={activeSolution.id} className="relative z-10" />
                
                {/* Floating Benefit Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border-white/10 shadow-2xl z-20 max-w-xs"
                >
                  <div className="text-xs font-bold uppercase text-brand-cyan mb-3">Core Benefit</div>
                  <p className="text-sm font-semibold text-white leading-tight">
                    {activeSolution.benefits[0]}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-brand-blue font-bold text-[10px] uppercase tracking-widest group cursor-pointer">
                    Read Case Study <ChevronRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
