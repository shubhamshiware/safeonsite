"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { INDUSTRIES } from "@/constants/industries";
import { AnimatedMetric } from "@/components/sections/solutions-page/AnimatedMetric";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const IndustryShowcase = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-${(INDUSTRIES.length - 1) * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${INDUSTRIES.length * 1000} top`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-brand-navy">
      <div ref={triggerRef}>
        <div 
          ref={sectionRef} 
          className="h-screen flex flex-row relative"
          style={{ width: `${INDUSTRIES.length * 100}vw` }}
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <section 
                key={industry.id}
                className="h-screen w-[100vw] flex-shrink-0 flex items-center justify-center p-6 md:p-20 relative overflow-hidden"
              >
                {/* Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-white/[0.01] select-none pointer-events-none uppercase tracking-tighter leading-none whitespace-nowrap">
                  {industry.title}
                </div>

                <div className="container relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10"
                      >
                        <Icon className="size-5 text-brand-blue" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                          Industry Excellence
                        </span>
                      </motion.div>

                      <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-[0.9]"
                      >
                        {industry.title}
                      </motion.h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                        <div className="space-y-3">
                          <div className="text-xs font-bold uppercase text-brand-blue">Sector Challenges</div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {industry.challenges}
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="text-xs font-bold uppercase text-brand-cyan">SAP Solutions</div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {industry.sapSolutions}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Digital Transformation Capabilities</div>
                        <div className="flex flex-wrap gap-2">
                          {industry.capabilities.split(", ").map((cap) => (
                            <span key={cap} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase">
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6">
                        <motion.div 
                           whileHover={{ x: 10 }}
                           className="flex items-center gap-4 text-brand-blue font-bold text-xs uppercase tracking-widest cursor-pointer group"
                        >
                          View Case Studies <ArrowRight className="size-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Stats & Visuals */}
                    <div className="relative lg:pl-12">
                      <div className="absolute -inset-10 bg-brand-blue/10 blur-[100px] rounded-full opacity-30 animate-pulse-slow" />
                      
                      <div className="glass p-10 rounded-[2.5rem] border-white/10 relative z-10 space-y-12">
                        <div className="space-y-2">
                          <div className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Business Benefits</div>
                          <p className="text-xl font-medium text-white leading-tight">
                            {industry.benefits}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                          {Object.entries(industry.stats).map(([key, val]) => (
                            <div key={key} className="space-y-1">
                               <div className="text-3xl font-bold text-white tracking-tighter">{val}</div>
                               <div className="text-[10px] font-bold uppercase text-white/30 tracking-widest">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                          <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="size-10 rounded-full border-2 border-brand-navy bg-white/5 backdrop-blur-sm" />
                            ))}
                          </div>
                          <div className="text-[10px] font-medium text-white/40">Trusted by industry leaders</div>
                        </div>
                      </div>

                      {/* Floating Decorative Elements */}
                      <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 size-20 glass rounded-2xl flex items-center justify-center border-brand-blue/20 z-20"
                      >
                        <CheckCircle2 className="size-8 text-brand-blue" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {INDUSTRIES.map((_, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "w-1 rounded-full transition-all duration-500",
                        i === idx ? "h-12 bg-brand-blue" : "h-4 bg-white/10"
                      )}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
