"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { 
  Search, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  LifeBuoy 
} from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "Deep dive into your business requirements, existing SAP landscape, and project goals to create a strategic roadmap.",
    icon: Search,
  },
  {
    title: "Architecture",
    description: "Designing scalable technical architectures using SAP BTP, RAP, CAPM, or traditional ABAP based on optimal fit.",
    icon: Layers,
  },
  {
    title: "Development",
    description: "Agile development phase where our expert engineers build your solution using clean code and enterprise standards.",
    icon: Code2,
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance, automated unit testing, and user acceptance testing (UAT) to ensure zero-defect delivery.",
    icon: CheckCircle2,
  },
  {
    title: "Deployment",
    description: "Smooth transition to production environment with comprehensive documentation and user training for immediate value.",
    icon: Rocket,
  },
  {
    title: "Support",
    description: "Post-go-live technical support and continuous optimization to ensure your systems evolve with your business.",
    icon: LifeBuoy,
  }
];

export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-white/[0.02]">
      <SectionContainer>
        <AnimatedHeading
          tagline="Our Methodology"
          title="Proven Delivery Process"
          subtitle="A systematic approach to building enterprise-grade SAP solutions that ensure quality, scalability, and performance."
          align="center"
          className="mb-24"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-blue -translate-x-1/2 hidden md:block z-10"
          />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

const TimelineItem = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Connector Node */}
      <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-black border-2 border-brand-blue z-20 hidden md:block" />
      
      {/* Content */}
      <div className="flex-1 w-full md:w-1/2">
        <div className={`p-8 rounded-3xl glass-morphism border border-white/10 hover:border-brand-blue/30 transition-colors duration-500 ${isEven ? "md:text-right" : "md:text-left"}`}>
          <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
             <div className="p-3 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
               <step.icon className="size-6 text-brand-blue" />
             </div>
             <span className="text-3xl font-bold text-white/10">{`0${index + 1}`}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};
