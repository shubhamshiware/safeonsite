"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { SectionContainer } from "./section-container";
import { AnimatedHeading } from "./animated-heading";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

interface PremiumCTAProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export const PremiumCTA = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className,
}: PremiumCTAProps) => {
  return (
    <SectionContainer className={cn("relative overflow-hidden", className)}>
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-brand-blue/20 blur-[120px] rounded-full -z-10" />
      
      <div className="glass-morphism rounded-3xl p-12 md:p-20 border-white/10 text-center relative overflow-hidden">
        {/* Decorative corner light */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 blur-3xl -mr-16 -mt-16 rounded-full" />
        
        <AnimatedHeading
          level="h2"
          title={title}
          subtitle={subtitle}
          className="mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="premium" size="lg" asChild>
            <Link href={primaryButtonHref}>
              {primaryButtonText}
            </Link>
          </Button>
          {secondaryButtonText && secondaryButtonHref && (
            <Button variant="outline" size="lg" asChild>
              <Link href={secondaryButtonHref}>
                {secondaryButtonText}
              </Link>
            </Button>
          )}
        </motion.div>
      </div>
    </SectionContainer>
  );
};
