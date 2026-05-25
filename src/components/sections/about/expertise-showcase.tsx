"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionContainer } from "@/components/ui/section-container";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Code2, 
  Layers, 
  Workflow, 
  Database, 
  Layout, 
  Cpu,
  Cloud
} from "lucide-react";

const ExpertiseCard = ({ item, index }: { item: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <GlassCard className="h-full border-white/5 hover:border-brand-blue/20 group relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        <div className="relative z-10 space-y-4" style={{ transform: "translateZ(50px)" }}>
          <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <item.icon className="size-6 text-brand-blue group-hover:text-brand-cyan transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const expertise = [
  {
    title: "SAP UI5 / Fiori",
    description: "Enterprise-grade web applications with modern UX/UI standards and seamless SAP integration.",
    icon: Layout,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "ABAP Development",
    description: "Robust backend logic and custom enhancements for SAP ECC and S/4HANA environments.",
    icon: Code2,
    color: "from-brand-blue/20 to-indigo-500/20"
  },
  {
    title: "SAP CAPM Projects",
    description: "Cloud-native application development using the powerful SAP Cloud Application Programming Model.",
    icon: Cloud,
    color: "from-cyan-500/20 to-brand-cyan/20"
  },
  {
    title: "SAP RAP Projects",
    description: "Building modern, scalable OData services and RESTful APIs with the SAP RESTful ABAP Programming Model.",
    icon: Workflow,
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Custom Enterprise Softwares",
    description: "Tailor-made software solutions designed to solve specific enterprise challenges and optimize performance.",
    icon: Cpu,
    color: "from-brand-cyan/20 to-blue-500/20"
  },
  {
    title: "SAP Integration Services",
    description: "Seamlessly connecting SAP with third-party systems using SAP BTP and Integration Suite.",
    icon: Database,
    color: "from-blue-500/20 to-indigo-500/20"
  }
];

export const ExpertiseShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SectionContainer id="expertise" className="relative overflow-hidden">
      <div ref={containerRef}>
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_50%)]" />
        </div>

        <AnimatedHeading
          level="h2"
          tagline="Our Expertise"
          title="Mastering the SAP Ecosystem"
          subtitle="We specialize in the full spectrum of SAP technologies, delivering end-to-end excellence from backend architecture to frontend experience."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <ExpertiseCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
