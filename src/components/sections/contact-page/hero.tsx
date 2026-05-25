"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionContainer } from "@/components/ui/section-container";

export const ContactHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const circles = containerRef.current.querySelectorAll(".glowing-circle");
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2
      });
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-premium opacity-10" />
        <div className="glowing-circle absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="glowing-circle absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-brand-cyan/20 blur-[120px]" />
      </div>

      <SectionContainer className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <AnimatedHeading
            level="display"
            tagline="Get in Touch"
            title="Let's Build Enterprise Solutions Together"
            subtitle="Connect with our SAP strategy team to discuss your digital transformation journey and explore custom-built intelligent solutions for your business."
            align="center"
          />
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-linear-to-b from-brand-blue to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Scroll to Explore</span>
        </motion.div>
      </SectionContainer>
    </section>
  );
};
