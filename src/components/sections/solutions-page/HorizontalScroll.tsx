"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SOLUTIONS } from "@/constants/solutions";
import { DashboardMockup } from "./DashboardMockup";
import { AnimatedMetric } from "./AnimatedMetric";
import { CheckCircle2, Cpu, Globe, Rocket, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const icons = [Cpu, Globe, Rocket, ShieldCheck, Zap, CheckCircle2, Cpu, Globe];

export const HorizontalScroll = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-${(SOLUTIONS.length - 1) * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${SOLUTIONS.length * 1000} top`,
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
          style={{ width: `${SOLUTIONS.length * 100}vw` }}
        >
          {SOLUTIONS.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <section 
                key={item.id}
                className="h-screen w-[100vw] flex-shrink-0 flex items-center justify-center p-6 md:p-20 relative overflow-hidden"
              >
                {/* Parallax Background Text */}
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute top-20 left-20 text-[25vw] font-bold text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter leading-none whitespace-nowrap"
                >
                  {item.title.split(' ')[0]}
                </motion.div>

                {/* Animated Background Gradients */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-brand-blue/10 rounded-full blur-[160px]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-8xl mx-auto z-10 w-full">
                  {/* Content Column */}
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10"
                    >
                      <Icon className="size-5 text-brand-blue" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                        Module {i + 1}
                      </span>
                    </motion.div>

                    <motion.h2 
                      initial={{ opacity: 0, y: 50, rotateX: 45 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
                      className="text-5xl md:text-7xl xl:text-9xl font-bold text-white tracking-tighter leading-[0.85]"
                    >
                      {item.title}
                    </motion.h2>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5"
                    >
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase text-brand-blue">Problem</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.problem}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase text-brand-cyan">Approach</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.approach}
                        </p>
                      </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-x-12 gap-y-6">
                      <AnimatedMetric 
                        value={item.metrics.roi} 
                        label="Projected ROI" 
                        className="scale-90 origin-left"
                      />
                      <AnimatedMetric 
                        value={item.metrics.savings} 
                        label="Est. Annual Savings" 
                        className="scale-90 origin-left"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Business Benefits</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="size-1 rounded-full bg-brand-blue" />
                            <span className="text-xs text-white/70 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ duration: 1, delay: 0.5 }}
                       className="flex flex-wrap gap-2 pt-4"
                    >
                      {item.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase">
                          {t}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Visualization Column */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="relative group perspective-2000 hidden lg:block"
                  >
                    <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                    <DashboardMockup type={item.id} className="relative z-10" />
                    
                    {/* Key Features floating cards */}
                    <div className="absolute -bottom-10 -left-10 z-20 space-y-3">
                      {item.features.slice(0, 3).map((f, idx) => (
                        <motion.div
                          key={f}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          className="glass p-4 border-brand-blue/20 rounded-xl flex items-center gap-4 min-w-[240px] shadow-2xl"
                        >
                          <div className="size-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                            <CheckCircle2 className="size-4 text-brand-blue" />
                          </div>
                          <span className="text-sm font-semibold text-white/90">{f}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="absolute -top-10 -right-10 z-20">
                      <motion.div
                         initial={{ scale: 0 }}
                         whileInView={{ scale: 1 }}
                         transition={{ type: "spring", delay: 1 }}
                         className="glass p-6 rounded-2xl border-brand-cyan/20 flex flex-col items-center gap-1 shadow-2xl"
                      >
                         <div className="text-2xl font-bold text-brand-cyan">{item.metrics.time}</div>
                         <div className="text-[10px] font-bold uppercase text-white/40 whitespace-nowrap">Process Time</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Vertical Progress */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {SOLUTIONS.map((_, idx) => (
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
