"use client";

import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionContainer } from "@/components/ui/section-container";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";

const teamValues = [
  {
    title: "Collaborative Innovation",
    description: "We believe the best solutions are born from collective intelligence and diverse perspectives.",
    image: "https://images.unsplash.com/photo-1522071823991-b9671f99128f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Continuous Learning",
    description: "The SAP landscape is always evolving, and so are we. We invest heavily in our team's growth.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Excellence as Standard",
    description: "We don't settle for 'good enough'. We strive for perfection in every line of code.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  }
];

export const TeamCulture = () => {
  return (
    <SectionContainer id="culture" spacing="large">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
        <AnimatedHeading
          level="h2"
          tagline="Our Culture"
          title="The People Behind the Innovation"
          subtitle="Our strength lies in our people—a global collective of SAP enthusiasts driven by a passion for excellence."
          align="left"
          className="mx-0"
        />
        
        <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-brand-blue/20 to-transparent ml-12 mb-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamValues.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-brand-blue/30 transition-all duration-700 h-full flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src={value.image} 
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-blue/30 group-hover:bg-transparent transition-colors duration-700" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   {value.title.split(' ')[0]}
                </div>
              </div>
              
              <div className="p-10 space-y-4 relative z-10 flex-1">
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
                
                <div className="pt-4 flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Read More <div className="h-px w-8 bg-brand-blue" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};
