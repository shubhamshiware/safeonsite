"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  level?: "h1" | "h2" | "h3" | "display";
  align?: "left" | "center" | "right";
  className?: string;
  animate?: boolean;
}

export const AnimatedHeading = ({
  title,
  subtitle,
  tagline,
  level = "h2",
  align = "center",
  className,
  animate = true,
}: AnimatedHeadingProps) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const levelClasses = {
    display: "text-display font-bold leading-tight",
    h1: "text-h1 font-bold leading-tight",
    h2: "text-h2 font-semibold leading-snug",
    h3: "text-h3 font-semibold leading-snug",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1] as [number, number, number, number], // ease-premium
      },
    },
  };

  const Tag = level === "display" ? "h1" : level;

  return (
    <motion.div
      className={cn("flex flex-col gap-4 max-w-4xl mx-auto", alignmentClasses[align], className)}
      variants={animate ? containerVariants : {}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {tagline && (
        <motion.span
          variants={animate ? itemVariants : {}}
          className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs sm:text-sm"
        >
          {tagline}
        </motion.span>
      )}
      
      <motion.div variants={animate ? itemVariants : {}}>
        <Tag className={cn("text-gradient-silver tracking-tight", levelClasses[level])}>
          {title}
        </Tag>
      </motion.div>

      {subtitle && (
        <motion.p
          variants={animate ? itemVariants : {}}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl text-balance leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
