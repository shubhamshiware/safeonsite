"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

export const SolutionsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-navy">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] size-[600px] bg-brand-blue/20 rounded-full blur-[150px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] size-[600px] bg-brand-cyan/20 rounded-full blur-[150px] opacity-50 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,12,1)_100%)] z-1" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        {/* Floating Particles/Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className={cn(
              "absolute size-1 rounded-full bg-brand-blue blur-sm",
              i % 2 === 0 ? "top-1/4" : "bottom-1/4",
              `left-[${(i + 1) * 15}%]`
            )}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <AnimatedHeading
              tagline="The Enterprise Standard"
              title="Next-Generation Enterprise Automation"
              subtitle="Empowering global organizations with bespoke, SAP-integrated solutions that redefine operational efficiency and digital transformation."
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
              <Button variant="premium" size="lg">Start Transformation</Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="glass" size="lg">View Global Success</Button>
            </MagneticButton>
          </motion.div>

          {/* Floating Stats or Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/5 w-full max-w-4xl"
          >
            {[
              { label: "Implementation Speed", value: "3x Faster" },
              { label: "System Integration", value: "100% Secure" },
              { label: "Global Reach", value: "50+ Countries" },
              { label: "ROI Potential", value: "Up to 300%" },
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
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Explore Solutions</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
      </motion.div>
    </section>
  );
};
