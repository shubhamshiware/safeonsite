"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";


import { 
  Code2, 
  Database, 
  Share2, 
  Cpu, 
  LayoutDashboard, 
  Smartphone, 
  Cloud, 
  Wrench,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "SAP UI5/Fiori Development",
    description: "Creating intuitive, enterprise-grade user experiences with modern SAP Fiori guidelines and UI5 flexibility.",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "SAP ABAP Development",
    description: "High-performance backend development, custom reports, and enhancement of standard SAP functionality.",
    icon: Database,
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "group-hover:border-indigo-500/50"
  },
  {
    title: "SAP Integration",
    description: "Seamlessly connecting SAP systems with third-party applications using SAP PI/PO, CPI, and API Management.",
    icon: Share2,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    title: "SAP Workflow Automation",
    description: "Optimizing business processes through automated workflows and intelligent task management systems.",
    icon: Cpu,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "group-hover:border-orange-500/50"
  },
  {
    title: "SAP Analytics Dashboards",
    description: "Transforming raw data into actionable insights with real-time SAP Analytics Cloud and BW/4HANA solutions.",
    icon: LayoutDashboard,
    color: "from-blue-600/20 to-indigo-600/20",
    borderColor: "group-hover:border-blue-600/50"
  },
  {
    title: "Enterprise Mobility",
    description: "Building secure, multi-platform mobile applications integrated directly with your SAP core systems.",
    icon: Smartphone,
    color: "from-cyan-600/20 to-teal-600/20",
    borderColor: "group-hover:border-cyan-600/50"
  },
  {
    title: "Cloud Integration",
    description: "Migrating and integrating enterprise operations with SAP Business Technology Platform (BTP) and hyperscalers.",
    icon: Cloud,
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "group-hover:border-sky-500/50"
  },
  {
    title: "SAP Support & Maintenance",
    description: "Providing 24/7 technical support, system health checks, and routine maintenance for SAP landscapes.",
    icon: Wrench,
    color: "from-slate-500/20 to-gray-500/20",
    borderColor: "group-hover:border-slate-500/50"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  // const cardRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

//   const isInView = useInView(cardRef, {
//   once: true,
//   margin: "-100px",
// });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="perspective-1000 group"
    >
      <div 
        ref={cardRef}
        className={cn(
          "relative h-full glass-morphism rounded-3xl p-8 border border-white/10 transition-all duration-500",
          "hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
          service.borderColor
        )}
      >
        {/* Animated Background Gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10",
          service.color
        )} />

        {/* Floating Icon Container */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-brand-blue/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
          <div className="relative glass p-4 rounded-2xl border border-white/20 group-hover:border-brand-blue/50 group-hover:scale-110 transition-all duration-500">
            <service.icon className="size-8 text-brand-blue" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue group-hover:text-brand-cyan transition-colors duration-300 cursor-pointer">
          Learn More <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>

        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Decorative Shapes */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[150px] animate-pulse delay-1000" />
      </motion.div>

      <SectionContainer className="relative z-10">
        <AnimatedHeading
          tagline="Our Expertise"
          title="World-Class SAP Development Services"
          subtitle="We deliver end-to-end enterprise solutions that bridge the gap between complex technology and seamless user experience."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
