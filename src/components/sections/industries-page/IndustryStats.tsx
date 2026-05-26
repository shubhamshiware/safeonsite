"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedMetric } from "@/components/sections/solutions-page/AnimatedMetric";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export const IndustryStats = () => {
  const stats: { label: string; value: string; suffix: string; prefix?: string }[] = [
    { label: "Global Deployments", value: "2500", suffix: "+" },
    { label: "Client Satisfaction", value: "98", suffix: "%" },
    { label: "Avg. Efficiency ROI", value: "315", suffix: "%" },
    { label: "Regulatory Compliance", value: "100", suffix: "%" },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-navy relative">
      <div className="container px-4">
        <div className="glass-morphism rounded-[3rem] p-12 md:p-24 border-white/10 relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 size-96 bg-brand-blue/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 size-96 bg-brand-cyan/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <AnimatedHeading
              tagline="Performance at Scale"
              title="Delivering Measurable Impact Across Global Sectors"
              subtitle="Our industry-specific SAP implementations don't just transform processes—they deliver tangible business value and operational excellence."
              align="center"
              className="mb-20"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <AnimatedMetric
                    value={stat.value}
                    label={stat.label}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="items-center"
                  />
                  <div className="h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full opacity-50" />
                </motion.div>
              ))}
            </div>

            <div className="mt-20 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="flex flex-col gap-2">
                 <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Industry Standards</div>
                 <div className="text-2xl font-semibold text-white">ISO 27001 & SOC2 Certified Ecosystem</div>
               </div>
               <div className="flex -space-x-4">
                 {[1, 2, 3, 4, 5, 6].map((i) => (
                   <div key={i} className="size-12 rounded-full border-4 border-brand-navy bg-white/5 backdrop-blur-md flex items-center justify-center">
                     <div className="size-2 rounded-full bg-brand-blue/40" />
                   </div>
                 ))}
                 <div className="size-12 rounded-full border-4 border-brand-navy bg-brand-blue flex items-center justify-center text-[10px] font-bold text-white">
                   +15
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
