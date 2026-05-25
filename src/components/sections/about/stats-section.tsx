"use client";

import { motion, useScroll, useTransform, animate, useMotionValue } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Successful Projects", value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
  { label: "SAP Certifications", value: 120, suffix: "+" },
  { label: "Delivery Speedup", value: 40, suffix: "%" },
];

const StatItem = ({ label, value, suffix, index }: { label: string, value: number, suffix: string, index: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const count = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => setDisplayValue(Math.floor(latest))
          });
          
          observer.disconnect();
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, count]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="flex flex-col items-center text-center gap-4 group"
    >
      <div className="text-6xl md:text-8xl font-bold text-gradient-silver tracking-tighter group-hover:scale-110 transition-transform duration-500">
        {displayValue}{suffix}
      </div>
      <div className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/80 group-hover:text-brand-blue transition-colors duration-500">
        {label}
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative py-24 md:py-48 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none" />
      
      <SectionContainer>
        <motion.div 
          style={{ scale, opacity }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          {stats.map((stat, i) => (
            <StatItem 
              key={i} 
              index={i}
              label={stat.label} 
              value={stat.value} 
              suffix={stat.suffix} 
            />
          ))}
        </motion.div>
      </SectionContainer>
    </div>
  );
};
