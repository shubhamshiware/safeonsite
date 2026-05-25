"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { 
  Code2, 
  Database, 
  Share2, 
  Cpu, 
  LayoutDashboard, 
  Settings, 
  Wrench,
  Layers,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "SAP UI5/Fiori Development",
    description: "Creating intuitive, enterprise-grade user experiences with modern SAP Fiori guidelines and UI5 flexibility for seamless operations.",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "SAP ABAP Development",
    description: "High-performance backend development, custom reports, and enhancement of standard SAP functionality tailored to your needs.",
    icon: Database,
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "group-hover:border-indigo-500/50"
  },
  {
    title: "SAP CAPM Development",
    description: "Building robust, scalable applications using the SAP Cloud Application Programming Model for cloud-native excellence.",
    icon: Layers,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    title: "SAP RAP Development",
    description: "Implementing modern, RESTful ABAP programming models to create future-ready enterprise applications on HANA.",
    icon: Zap,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "group-hover:border-orange-500/50"
  },
  {
    title: "Custom Enterprise Software",
    description: "End-to-end custom software development designed specifically for complex enterprise environments and unique workflows.",
    icon: Settings,
    color: "from-blue-600/20 to-indigo-600/20",
    borderColor: "group-hover:border-blue-600/50"
  },
  {
    title: "SAP Workflow Automation",
    description: "Optimizing business processes through automated workflows and intelligent task management systems to boost efficiency.",
    icon: Cpu,
    color: "from-cyan-600/20 to-teal-600/20",
    borderColor: "group-hover:border-cyan-600/50"
  },
  {
    title: "SAP Integration Services",
    description: "Seamlessly connecting SAP systems with third-party applications using SAP BTP, CPI, and modern API Management.",
    icon: Share2,
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "group-hover:border-sky-500/50"
  },
  {
    title: "SAP Analytics Dashboards",
    description: "Transforming raw data into actionable insights with real-time SAP Analytics Cloud and data visualization solutions.",
    icon: LayoutDashboard,
    color: "from-slate-500/20 to-gray-500/20",
    borderColor: "group-hover:border-slate-500/50"
  },
  {
    title: "SAP Support & Maintenance",
    description: "Providing 24/7 technical support, system health checks, and routine maintenance for your entire SAP landscape.",
    icon: Wrench,
    color: "from-zinc-500/20 to-neutral-500/20",
    borderColor: "group-hover:border-zinc-500/50"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

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
      transition={{ delay: (index % 3) * 0.1, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="perspective-1000 group h-full"
    >
      <div 
        ref={cardRef}
        className={cn(
          "relative h-full glass-morphism rounded-3xl p-8 border border-white/10 transition-all duration-500",
          "hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white/[0.05]",
          service.borderColor
        )}
      >
        {/* Animated Background Gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10",
          service.color
        )} />

        {/* Glow Border Effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />

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
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors duration-300">
          {service.description}
        </p>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-brand-blue transition-colors">Enterprise Solution</span>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue group-hover:text-brand-cyan transition-colors duration-300 cursor-pointer">
             <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
      </div>
    </motion.div>
  );
};

export const ServiceGrid = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <SectionContainer>
        <AnimatedHeading
          tagline="Our Core Services"
          title="Premium SAP Development & Consulting"
          subtitle="Expert-led solutions designed to optimize your SAP landscape and drive business growth through technical excellence."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
