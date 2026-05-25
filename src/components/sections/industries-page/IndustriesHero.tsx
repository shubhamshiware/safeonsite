"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

export const IndustriesHero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-start items-center overflow-hidden pt-32 md:pt-40 bg-brand-navy">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] size-[800px] bg-brand-blue/10 rounded-full blur-[150px] opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] size-[600px] bg-brand-cyan/10 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,12,1)_100%)] z-1" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        {/* Animated Industry Icons Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="text-[40vw] font-bold text-white tracking-tighter"
          >
            INDUSTRIES
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <AnimatedHeading
              tagline="Global Sector Expertise"
              title="Tailored SAP Excellence for Every Industry"
              subtitle="From manufacturing shop floors to digital banking, SafeOnSite delivers bespoke digital transformation capabilities that redefine industry standards."
              level="display"
              className="max-w-6xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <MagneticButton>
              <Button variant="premium" size="lg">Explore Sector Insights</Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="glass" size="lg">Talk to an Expert</Button>
            </MagneticButton>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/5 w-full max-w-4xl"
          >
            {[
              { label: "Industries Served", value: "12+ Major" },
              { label: "Successful Projects", value: "500+" },
              { label: "Regulatory Compliance", value: "100%" },
              { label: "Efficiency Gains", value: "Up to 45%" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
      </motion.div>
    </section>
  );
};
