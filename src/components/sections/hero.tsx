"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionContainer } from "@/components/ui/section-container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { 
  ArrowRight, 
  Zap,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { label: "Efficiency Boost", value: "45%", icon: Zap },
  { label: "Cost Reduction", value: "30%", icon: TrendingUp },
  { label: "Secure Integration", value: "100%", icon: ShieldCheck },
];

const companies = [
  "SAP Gold Partner", "Fortune 500 Trusted", "Global Enterprise", "Tech Innovator"
];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // GSAP floating animations for background elements
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
      className="relative min-h-[90vh] flex flex-col justify-start items-center overflow-hidden pt-24 md:pt-32"
    >
      <motion.div
  className="cursor-glow"
  style={{
    x: mouseX,
    y: mouseY,
  }}
/>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Floating Glowing Gradients */}
        <div className="glowing-circle absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="glowing-circle absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-brand-cyan/20 blur-[120px]" />
        <div className="glowing-circle absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-brand-blue/10 blur-[100px]" />
      </div>

      {/* Hero Content */}
      <SectionContainer spacing="none" className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          style={{ y: y1, opacity }}
          className="flex flex-col items-center gap-8"
        >
          <AnimatedHeading
            level="display"
            tagline="Next-Gen Enterprise Solutions"
            title="Transform Enterprise Operations with Intelligent SAP Solutions"
            subtitle="We build scalable SAP software, SAP UI5/Fiori applications, automation platforms, and enterprise integrations for modern businesses."
            align="center"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
            className="flex flex-wrap justify-center gap-4"
          >
  <MagneticButton className="group relative overflow-hidden rounded-2xl">
    <Button
      variant="premium"
      size="lg"
      className="px-10 h-14 text-base"
    >
      <span className="relative z-10 flex items-center">
        Book Consultation
        <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Button>
  </MagneticButton>

  <MagneticButton className="group relative overflow-hidden rounded-2xl">
    <Button
      variant="glass"
      size="lg"
      className="px-10 h-14 text-base"
    >
      Explore Solutions
    </Button>
  </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-4 rounded-2xl glass-morphism border-white/10 group-hover:border-brand-blue/50 transition-colors duration-500">
                <stat.icon className="size-6 text-brand-blue" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Companies */}
        <div className="mt-24 w-full">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Trusted by Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {companies.map((company, i) => (
              <span key={i} className="text-xl font-bold text-white whitespace-nowrap">
                {company}
              </span>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Particle Effects (Subtle) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
       {Array.from({ length: 20 }).map((_, i) => {
  const left = (i * 17) % 100;
  const top = (i * 23) % 100;

  return (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-white/20 rounded-full"
      style={{
        left: `${left}%`,
        top: `${top}%`,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 10 + i,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.5,
      }}
    />
  );
})}
      </div>
    </section>
  );
};
