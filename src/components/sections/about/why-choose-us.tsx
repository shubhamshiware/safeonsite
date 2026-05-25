"use client";

import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionContainer } from "@/components/ui/section-container";
import { Shield, Zap, TrendingUp, Users, Lock, Rocket } from "lucide-react";

const reasons = [
  {
    title: "High Performance",
    description: "Optimized codebases and efficient architectures ensure your enterprise systems run at peak performance.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Security is baked into every layer of our development process, protecting your most sensitive enterprise data.",
    icon: Shield,
  },
  {
    title: "Unmatched Scalability",
    description: "We build systems that grow with your business, ensuring long-term value and adaptability.",
    icon: TrendingUp,
  },
  {
    title: "SAP Specialists",
    description: "Our team consists of elite architects who live and breathe the SAP ecosystem every single day.",
    icon: Rocket,
  },
  {
    title: "Agile Delivery",
    description: "Fast-paced development cycles combined with enterprise-grade quality control for rapid ROI.",
    icon: Users,
  },
  {
    title: "Zero Compromise",
    description: "We never compromise on code quality, documentation, or security standards.",
    icon: Lock,
  }
];

const ReasonCard = ({ reason, index }: { reason: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1]as [number, number, number, number] }}
      className="flex flex-col gap-6 group relative p-8 rounded-3xl hover:bg-white/[0.03] transition-colors duration-500"
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
         <div className="absolute inset-0 bg-brand-blue/20 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-premium" />
         <reason.icon className="size-8 text-brand-blue relative z-10 group-hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors duration-500">{reason.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {reason.description}
        </p>
      </div>

      {/* Border Highlight Effect */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-brand-blue/30 transition-colors duration-700" />
    </motion.div>
  );
};

export const WhyChooseUs = () => {
  return (
    <SectionContainer id="why-us" spacing="large" className="bg-white/[0.01]">
      <AnimatedHeading
        level="h2"
        tagline="Our Competitive Edge"
        title="Why Global Leaders Choose SafeOnSite"
        subtitle="We combine technical brilliance with business acumen to deliver solutions that outperform expectations."
        align="center"
      />

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, i) => (
          <ReasonCard key={i} reason={reason} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
};
