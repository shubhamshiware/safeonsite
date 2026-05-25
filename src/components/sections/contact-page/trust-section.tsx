"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

const trustItems = [
  {
    icon: Zap,
    title: "Fast Response Time",
    description: "Our enterprise strategy team reviews all inquiries within 4 hours to ensure your project stays on track."
  },
  {
    icon: ShieldCheck,
    title: "Secure Communication",
    description: "All communications are encrypted with AES-256 standards, ensuring your enterprise data remains private."
  },
  {
    icon: Award,
    title: "Expert SAP Team",
    description: "Work directly with SAP-certified architects and developers with decades of collective experience."
  }
];

export const TrustSection = () => {
  return (
    <div className="py-20 border-t border-b border-white/5 bg-white/2">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-brand-blue/5 border border-white/5 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 transition-all duration-500">
                <item.icon className="size-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                {item.title}
                <CheckCircle2 className="size-4 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};
