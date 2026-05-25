"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  BarChart3, 
  Cpu, 
  ShieldCheck,
  Zap,
  Layers
} from "lucide-react";

export const ServiceHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const circles = containerRef.current.querySelectorAll(".glowing-circle");
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        x: "random(-80, 80)",
        y: "random(-80, 80)",
        duration: "random(12, 24)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 1.5
      });
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="glowing-circle absolute top-[-5%] left-[10%] w-[35%] h-[35%] rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="glowing-circle absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-brand-cyan/15 blur-[120px]" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: y1, opacity }}
            className="flex flex-col gap-8"
          >
            <AnimatedHeading
              level="display"
              tagline="Enterprise SAP Services"
              title="Scalable SAP Solutions for Modern Enterprises"
              subtitle="From custom Fiori applications to complex backend integrations, we provide the technical expertise to power your digital transformation."
              align="left"
              className="mx-0"
            />
            
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { label: "High Performance", icon: Zap },
                { label: "Enterprise Secure", icon: ShieldCheck },
                { label: "Cloud Native", icon: Layers },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10"
                >
                  <item.icon className="size-4 text-brand-blue" />
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Button variant="premium" size="lg" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/solutions">
                  View Case Studies
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative h-[500px] w-full perspective-1000">
            {/* Floating UI Mockups */}
            <motion.div
              style={{ 
                x: useTransform(mouseX, [-30, 30], [-15, 15]),
                y: useTransform(mouseY, [-30, 30], [-15, 15]),
                rotateX: useTransform(mouseY, [-30, 30], [5, -5]),
                rotateY: useTransform(mouseX, [-30, 30], [-5, 5]),
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Main Card */}
              <GlassCard className="absolute z-20 w-[80%] h-[60%] border-brand-blue/20 p-0 overflow-hidden shadow-2xl">
                <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
                  <div className="size-2 rounded-full bg-red-500/30" />
                  <div className="size-2 rounded-full bg-yellow-500/30" />
                  <div className="size-2 rounded-full bg-green-500/30" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-24 bg-brand-blue/30 rounded" />
                    <div className="h-8 w-8 rounded-full bg-white/5" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white/5 rounded-lg border border-white/10" />
                    <div className="h-20 bg-white/5 rounded-lg border border-white/10" />
                    <div className="h-20 bg-white/5 rounded-lg border border-white/10" />
                  </div>
                  <div className="h-32 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent" />
                  </div>
                </div>
              </GlassCard>

              {/* Secondary Cards */}
              <motion.div
                style={{ 
                  x: useTransform(mouseX, [-30, 30], [20, -20]),
                  y: useTransform(mouseY, [-30, 30], [20, -20]),
                }}
                className="absolute z-30 -top-4 -right-4"
              >
                <GlassCard className="p-4 w-40 border-brand-cyan/30 backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-brand-cyan/20">
                      <BarChart3 className="size-4 text-brand-cyan" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Analytics</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="h-full bg-brand-cyan" 
                      />
                    </div>
                    <div className="h-1 w-[60%] bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="h-full bg-brand-blue" 
                      />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                style={{ 
                  x: useTransform(mouseX, [-30, 30], [-25, 25]),
                  y: useTransform(mouseY, [-30, 30], [25, -25]),
                }}
                className="absolute z-10 -bottom-8 -left-8"
              >
                <GlassCard className="p-4 w-44 border-brand-blue/30 backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-brand-blue/20">
                      <Cpu className="size-4 text-brand-blue" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Processing</span>
                  </div>
                  <div className="flex items-end gap-1 h-8">
                    {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 100}%` }}
                        transition={{ delay: 1.5 + i * 0.1, duration: 1 }}
                        className="flex-1 bg-brand-blue/40 rounded-t-[1px]"
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -z-10 size-64 bg-brand-blue/10 blur-[80px] rounded-full" />
            </motion.div>
          </div>
        </div>
      </SectionContainer>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
      </motion.div>
    </section>
  );
};
