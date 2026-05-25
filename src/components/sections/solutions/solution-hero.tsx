"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { MousePointer2, Sparkles, Layout } from "lucide-react";

export const SolutionHero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[45%] h-[45%] rounded-full bg-brand-cyan/10 blur-[120px]" />
      </div>

      <SectionContainer className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-blue mb-8">
            <Sparkles className="size-3" />
            Next-Gen Enterprise
          </div>
          
          <AnimatedHeading
            level="display"
            title="Intelligent SAP Solutions for the Modern Enterprise"
            subtitle="Transforming complex business challenges into seamless digital experiences through advanced automation and predictive analytics."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { label: "Custom Workflows", icon: Layout },
              { label: "Predictive Analytics", icon: Sparkles },
              { label: "Seamless Integration", icon: MousePointer2 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-morphism border border-white/10"
              >
                <item.icon className="size-4 text-brand-blue" />
                <span className="text-sm font-semibold text-white/80">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll to explore solutions</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
      </motion.div>
    </section>
  );
};
