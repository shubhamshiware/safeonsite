"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      // whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1] as [
          number,
          number,
          number,
          number
        ],
      }}
      className={cn(
        "glass-morphism relative overflow-hidden rounded-2xl p-6 group",
        hoverGlow && "hover-glow hover-lift",
        className
      )}
    >
      {/* Animated Spotlight Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-brand-blue/40 transition-colors duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};