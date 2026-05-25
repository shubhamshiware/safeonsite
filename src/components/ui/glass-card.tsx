"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  animate?: boolean;
}

export const GlassCard = ({
  children,
  className,
  hoverGlow = true,
  animate = true,
}: GlassCardProps) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      className={cn(
        "glass-morphism rounded-2xl p-6 relative overflow-hidden group",
        hoverGlow && "hover-glow hover-lift",
        className
      )}
    >
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
