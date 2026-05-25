"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionContainer } from "@/components/ui/section-container";

export const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const circles = containerRef.current.querySelectorAll(".glowing-circle");
    
    // Floating animation
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(15, 25)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2
      });
    });

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 60;
      const yPos = (clientY / window.innerHeight - 0.5) * 60;

      circles.forEach((circle, i) => {
        const factor = (i + 1) * 0.5;
        gsap.to(circle, {
          x: `+=${xPos * factor}`,
          y: `+=${yPos * factor}`,
          duration: 2,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="glowing-circle absolute top-[-10%] left-[10%] w-[35%] h-[35%] rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="glowing-circle absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-brand-cyan/15 blur-[120px]" />
      </div>

      <SectionContainer className="relative z-10">
        <motion.div style={{ y, opacity }}>
          <AnimatedHeading
            level="display"
            tagline="Our Legacy & Vision"
            title="Redefining Enterprise Excellence Through SAP Innovation"
            subtitle="We are a team of elite SAP architects and developers dedicated to modernizing the world's most complex enterprise environments."
            align="center"
          />
        </motion.div>

        {/* Cinematic Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
        </motion.div>
      </SectionContainer>
    </section>
  );
};
