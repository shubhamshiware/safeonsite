"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const infoItems = [
  {
    icon: Mail,
    label: "Email Us",
    value: "solutions@safeonsite.io",
    sub: "Enterprise Support",
    link: "mailto:solutions@safeonsite.io"
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (800) SAFE-SAP",
    sub: "Mon-Fri, 9am - 6pm EST",
    link: "tel:+18007233727"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Enterprise Plaza",
    sub: "Tech City, TC 54321",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24/7 Monitoring",
    sub: "Office: 9:00 - 18:00",
    link: null
  }
];

export const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {infoItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <GlassCard className="p-6 h-full border-white/5 hover:border-brand-blue/30 transition-all duration-500 group">
            <div className="flex flex-col h-full">
              <div className="size-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-500">
                <item.icon className="size-6 text-brand-blue" />
              </div>
              
              <div className="space-y-1 mb-6">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors duration-300">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.sub}
                </p>
              </div>

              {item.link && (
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors"
                >
                  Connect Now <ArrowRight className="size-3" />
                </a>
              )}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
};
