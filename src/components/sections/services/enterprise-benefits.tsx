"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { 
  Zap, 
  Settings, 
  Maximize, 
  Lock, 
  Cloud 
} from "lucide-react";

const benefits = [
  {
    title: "Faster Operations",
    description: "Streamline complex business processes and reduce manual effort with high-performance SAP applications.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    title: "Better Automation",
    description: "Intelligent workflow automation that eliminates bottlenecks and ensures data consistency across your landscape.",
    icon: Settings,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Scalability",
    description: "Future-proof architectures built on SAP BTP and cloud-native principles that grow with your enterprise.",
    icon: Maximize,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Enterprise Security",
    description: "Adhering to strict SAP security standards and best practices to protect your critical business data.",
    icon: Lock,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "Cloud Readiness",
    description: "Modernizing legacy systems to be cloud-compatible, enabling agility and digital transformation.",
    icon: Cloud,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  }
];

export const EnterpriseBenefits = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white/[0.01]">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimatedHeading
              tagline="Why Choose Us"
              title="Drive Business Value with Enterprise-Grade Solutions"
              subtitle="Our SAP expertise translates into tangible benefits for your organization, from operational efficiency to long-term scalability."
              align="left"
              className="mx-0"
            />
            
            <div className="mt-12 space-y-6">
              <div className="p-6 rounded-2xl glass-morphism border border-white/10 flex items-start gap-6">
                 <div className="p-3 rounded-xl bg-brand-blue/20">
                    <Zap className="size-6 text-brand-blue" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white mb-2">Technical Excellence</h4>
                    <p className="text-sm text-muted-foreground">We don&apos;t just write code; we architect solutions that follow SAP best practices and industry standards.</p>
                 </div>
              </div>
              <div className="p-6 rounded-2xl glass-morphism border border-white/10 flex items-start gap-6">
                 <div className="p-3 rounded-xl bg-brand-cyan/20">
                    <Cloud className="size-6 text-brand-cyan" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white mb-2">Cloud-First Strategy</h4>
                    <p className="text-sm text-muted-foreground">Every solution we build is designed with cloud migration and hybrid landscapes in mind.</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={index === 0 ? "sm:col-span-2" : ""}
              >
                <div className="h-full p-8 rounded-3xl glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500 group">
                   <div className={`p-4 rounded-2xl ${benefit.bg} w-fit mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <benefit.icon className={`size-8 ${benefit.color}`} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
