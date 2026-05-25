"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const techStack = [
  { name: "SAP UI5", category: "Frontend" },
  { name: "Fiori", category: "UX" },
  { name: "ABAP", category: "Backend" },
  { name: "CAPM", category: "Cloud" },
  { name: "RAP", category: "Backend" },
  { name: "SAP BTP", category: "Platform" },
  { name: "OData", category: "Protocol" },
  { name: "HANA", category: "Database" },
  { name: "CDS", category: "Modeling" },
  { name: "BAS", category: "IDE" },
  { name: "Node.js", category: "Runtime" },
  { name: "Git", category: "DevOps" },
];

export const TechStack = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <SectionContainer>
        <AnimatedHeading
          tagline="Our Stack"
          title="Enterprise Technology Ecosystem"
          subtitle="We leverage the latest SAP innovations and modern development tools to build robust enterprise software."
          align="center"
          className="mb-20"
        />

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="px-8 py-6 rounded-2xl glass-morphism border border-white/10 group-hover:border-brand-blue/50 transition-all duration-500 flex flex-col items-center gap-2">
                <span className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors">{tech.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{tech.category}</span>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-blue/5 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Text */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none -z-10 flex flex-col items-center opacity-[0.03]">
           <span className="text-[15vw] font-black leading-none uppercase tracking-tighter">Enterprise</span>
           <span className="text-[15vw] font-black leading-none uppercase tracking-tighter">Technology</span>
        </div>
      </SectionContainer>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
