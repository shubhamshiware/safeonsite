"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, animate, useSpring } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { 
  Award, 
  Target, 
  Users2, 
  Globe2, 
  CheckCircle2, 
  History,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Successful Implementations", value: 250, suffix: "+", icon: CheckCircle2 },
  { label: "Years of SAP Expertise", value: 15, suffix: "+", icon: History },
  { label: "Global Clients", value: 80, suffix: "+", icon: Globe2 },
  { label: "Industry Leaders", value: 45, suffix: "", icon: Award },
];

const expertise = [
  "SAP S/4HANA Transformation",
  "BTP Extension Suite",
  "Intelligent RPA",
  "Fiori/UI5 Modernization",
  "Cloud ALM Integration",
  "Strategic IT Consulting"
];

const timeline = [
  { year: "2010", title: "Company Founded", description: "Established with a vision to revolutionize SAP consulting." },
  { year: "2014", title: "SAP Silver Partnership", description: "Recognized for excellence in delivering enterprise solutions." },
  { year: "2018", title: "Global Expansion", description: "Opened international offices to serve global Fortune 500 clients." },
  { year: "2022", title: "Innovation Hub Launch", description: "Dedicated center for AI and automation in SAP landscapes." },
  { year: "2024", title: "Leading SAP Modernizer", description: "The preferred partner for next-gen SAP UI5 and BTP development." },
];

const Counter = ({ value, suffix, label, icon: Icon }: typeof stats[0]) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <div className="flex flex-col items-center text-center p-6 glass-morphism rounded-3xl border border-white/10 hover-lift">
      <div className="p-3 rounded-2xl bg-brand-blue/10 mb-4">
        <Icon className="size-6 text-brand-blue" />
      </div>
      <div className="text-4xl font-bold text-white mb-2">
        <span ref={nodeRef}>0</span>{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-brand-navy/30">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />
      </div>

      <SectionContainer className="relative z-10">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
          >
            <AnimatedHeading
              tagline="Our Story"
              title="Pioneering the Future of Enterprise Software"
              align="left"
              className="mx-0"
            />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Since our inception, we have been committed to helping businesses navigate the complexities of digital transformation. Our mission is to empower enterprises with intelligent SAP solutions that drive efficiency, foster innovation, and enable sustainable growth.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              {expertise.map((item, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <div className="size-1.5 rounded-full bg-brand-blue group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
            className="relative"
          >
            <div className="aspect-square glass-morphism rounded-4xl border border-white/10 flex items-center justify-center p-12 relative overflow-hidden group">
               {/* Abstract Image Placeholder with Animations */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent group-hover:opacity-50 transition-opacity duration-700" />
               <Target className="size-48 text-brand-blue/20 animate-pulse" />
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/4 right-1/4 p-6 glass rounded-2xl border-white/20 shadow-2xl"
               >
                 <Briefcase className="size-8 text-brand-cyan" />
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-1/4 left-1/4 p-6 glass rounded-2xl border-white/20 shadow-2xl"
               >
                 <Users2 className="size-8 text-brand-blue" />
               </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} />
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative" ref={timelineRef}>
          <div className="text-center mb-20">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-blue mb-4">Milestones</h3>
            <h2 className="text-4xl font-bold text-gradient-silver tracking-tight">A Decade of Excellence</h2>
          </div>

          <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
              <motion.div 
                style={{ scaleY: pathLength, transformOrigin: "top" }}
                className="absolute inset-0 w-full bg-brand-blue shadow-[0_0_15px_rgba(0,186,255,0.5)]" 
              />
            </div>

            <div className="space-y-24">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0",
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Point */}
                  <div className="absolute left-8 md:left-1/2 size-4 rounded-full bg-brand-navy border-2 border-brand-blue -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,186,255,0.5)]" />
                  
                  {/* Content */}
                  <div className={cn(
                    "w-full md:w-[calc(50%-40px)]",
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  )}>
                    <div className="text-brand-cyan font-bold text-2xl mb-1">{item.year}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="hidden md:block w-[80px]" />
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
