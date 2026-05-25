"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { 
  Briefcase, 
  ShoppingCart, 
  Users, 
  Truck, 
  BarChart, 
  CheckCircle,
  ArrowRight,
  Database,
  Search,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    id: "erp",
    title: "ERP Automation",
    tagline: "Intelligent Core",
    description: "Streamline your entire business lifecycle with automated SAP S/4HANA workflows and intelligent process mining.",
    icon: Database,
    bgClass: "bg-brand-blue",
    features: ["Real-time Reporting", "Auto-reconciliation", "AI Predictions"],
    mockupType: "dashboard"
  },
  {
    id: "procurement",
    title: "Procurement Systems",
    tagline: "Spend Management",
    description: "Optimize source-to-pay processes with integrated SAP Ariba solutions and automated vendor selection.",
    icon: ShoppingCart,
    bgClass: "bg-brand-cyan",
    features: ["Smart Invoicing", "Contract Lifecycle", "Savings Tracking"],
    mockupType: "table"
  },
  {
    id: "hr",
    title: "HR Management",
    tagline: "SuccessFactors",
    description: "Empower your workforce with modern HR portals, automated onboarding, and global payroll management.",
    icon: Users,
    bgClass: "bg-blue-500",
    features: ["Talent Analytics", "Digital Onboarding", "Self-service Portals"],
    mockupType: "profile"
  },
  {
    id: "vendor",
    title: "Vendor Management",
    tagline: "Supply Chain",
    description: "Enhance transparency and collaboration across your supply chain with our centralized vendor portal solutions.",
    icon: Truck,
    bgClass: "bg-indigo-500",
    features: ["Risk Assessment", "Performance Scorecards", "Direct Messaging"],
    mockupType: "map"
  },
  {
    id: "analytics",
    title: "Analytics Platforms",
    tagline: "SAP SAC",
    description: "Convert enterprise data into strategic advantages with high-end SAP Analytics Cloud visualizations.",
    icon: BarChart,
    bgClass: "bg-sky-500",
    features: ["Predictive Modeling", "Interactive Charts", "Data Storytelling"],
    mockupType: "charts"
  },
  {
    id: "approval",
    title: "Approval Workflows",
    tagline: "Business Process",
    description: "Accelerate decision-making with multi-level Fiori approval apps and seamless mobile integration.",
    icon: CheckCircle,
    bgClass: "bg-emerald-500",
    features: ["Mobile Approvals", "Audit Trail", "SLA Monitoring"],
    mockupType: "tasks"
  }
];

const MockupUI = ({ type, color }: { type: string, color: string }) => {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4">
      {/* Search Bar Mockup */}
      <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10">
        <Search className="size-3 text-muted-foreground" />
        <div className="h-2 w-24 bg-white/10 rounded-full" />
        <div className="ml-auto flex gap-1">
          <div className="size-4 rounded-full bg-white/5" />
          <div className="size-4 rounded-full bg-white/5" />
        </div>
      </div>

      {type === "dashboard" && (
        <div className="grid grid-cols-2 gap-4 h-full">
           <div className="space-y-4">
              <div className="h-16 glass rounded-xl border-brand-blue/30" />
              <div className="h-24 bg-white/5 rounded-xl border border-white/10" />
           </div>
           <div className="h-full bg-white/5 rounded-xl border border-white/10 p-3">
              <div className="flex flex-col gap-2">
                 {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-2 w-full bg-white/10 rounded-full" />
                 ))}
              </div>
           </div>
        </div>
      )}

      {type === "table" && (
        <div className="space-y-2 h-full">
           {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex gap-2 items-center p-2 bg-white/5 rounded-lg border border-white/10">
                 <div className="size-4 rounded-md bg-brand-cyan/20" />
                 <div className="h-2 w-full bg-white/10 rounded-full" />
                 <div className="h-2 w-12 bg-white/5 rounded-full" />
              </div>
           ))}
        </div>
      )}

      {type === "charts" && (
        <div className="flex-1 flex items-end gap-2 p-2">
           {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                className="flex-1 bg-sky-500/40 rounded-t-sm border-t border-sky-400/50" 
              />
           ))}
        </div>
      )}

      {/* Default/Generic layout for others */}
      {["profile", "map", "tasks"].includes(type) && (
        <div className="grid grid-cols-12 gap-4 h-full">
           <div className="col-span-4 h-full bg-white/5 rounded-xl border border-white/10" />
           <div className="col-span-8 space-y-4">
              <div className="h-8 bg-white/10 rounded-lg" />
              <div className="h-32 bg-white/5 rounded-xl border border-white/10" />
           </div>
        </div>
      )}
    </div>
  );
};

export const Solutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-500vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={triggerRef}>
        <div 
          ref={sectionRef} 
          className="h-screen w-[600vw] flex flex-row relative bg-brand-navy"
        >
          {solutions.map((solution, i) => (
            <section 
              key={solution.id}
              className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-8 md:p-20 relative"
            >
              {/* Background Accent */}
              <div className={cn(
                "absolute inset-0 opacity-5 pointer-events-none",
                `bg-${solution.color}`
              )} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto z-10">
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-blue mb-6">
                    <solution.icon className="size-3" />
                    {solution.tagline}
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
                    {solution.title}
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="size-1.5 rounded-full bg-brand-cyan" />
                        <span className="text-white/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="group flex items-center gap-3 text-white font-bold text-lg hover:text-brand-blue transition-colors">
                    View Case Study 
                    <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>

                {/* Mockup Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="perspective-1000 hidden lg:block"
                >
                  <div className="glass-morphism rounded-3xl p-4 border border-white/20 shadow-2xl overflow-hidden aspect-video w-[600px] hover:scale-[1.02] transition-transform duration-700">
                    <div className="h-6 w-full flex gap-1 mb-4">
                      <div className="size-2 rounded-full bg-red-500/50" />
                      <div className="size-2 rounded-full bg-yellow-500/50" />
                      <div className="size-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="bg-brand-navy/50 rounded-2xl h-[calc(100%-24px)] overflow-hidden">
                       <MockupUI type={solution.mockupType} color={solution.color} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
                 {solutions.map((_, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "h-1 w-8 rounded-full transition-all duration-500",
                        i === idx ? "bg-brand-blue w-16" : "bg-white/10"
                      )}
                    />
                 ))}
              </div>

              {/* Number Background */}
              <div className="absolute top-20 right-20 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none">
                0{i + 1}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
