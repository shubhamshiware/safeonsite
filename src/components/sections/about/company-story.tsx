"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionContainer } from "@/components/ui/section-container";
import { GlassCard } from "@/components/ui/glass-card";
import { History, Target, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const storyItems = [
  {
    icon: History,
    title: "The Beginning",
    description: "Founded by a group of SAP veterans, SafeOnSite was born from a vision to simplify complex enterprise workflows through cutting-edge technology.",
    color: "brand-blue"
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower global enterprises by delivering high-performance, secure, and scalable SAP solutions that drive real business value and digital transformation.",
    color: "brand-cyan"
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the global gold standard for custom SAP development, setting new benchmarks for innovation, security, and enterprise efficiency.",
    color: "brand-purple"
  }
];

export const CompanyStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".story-card");
    
    gsap.fromTo(cards, 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <SectionContainer id="story" spacing="large">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <AnimatedHeading
            level="h2"
            tagline="Our Narrative"
            title="Building the Future of Enterprise Software"
            subtitle="At SafeOnSite, we don't just write code; we architect solutions that define the next generation of business operations."
            align="left"
            className="mx-0"
          />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              The journey of SafeOnSite began with a simple observation: enterprise software was often lagging behind the speed of modern innovation. We saw a gap between robust legacy systems and the agile, user-centric experiences users have come to expect.
            </p>
            <p>
              By combining deep SAP expertise with modern development practices like CAPM and RAP, we help organizations bridge this gap, transforming their SAP landscapes into engines of growth and innovation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {storyItems.map((item, i) => (
            <GlassCard 
              key={i} 
              className="story-card group hover:border-brand-blue/30 transition-all duration-500 opacity-0"
            >
              <div className="flex gap-6 items-start">
                <div className={`p-4 rounded-2xl bg-${item.color}/10 border border-${item.color}/20 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`size-6 text-white`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
