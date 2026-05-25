"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Database, 
  ShoppingCart, 
  Users, 
  Truck, 
  BarChart, 
  CheckCircle,
  LayoutDashboard,
  Smartphone,
  Box,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    id: "erp",
    title: "ERP Automation Systems",
    problem: "Manual data entry and fragmented processes leading to operational delays and inaccuracies.",
    approach: "Automating core business cycles with AI-driven SAP S/4HANA workflows.",
    features: ["Process Mining", "Automated Reconciliation", "Real-time Auditing"],
    benefits: ["40% Reduction in manual effort", "100% Data accuracy", "Faster closing cycles"],
    tech: ["SAP BTP", "SAP S/4HANA", "AI/ML"],
    icon: Database,
    color: "brand-blue",
    stats: { label: "Efficiency Boost", value: "+45%" }
  },
  {
    id: "vendor",
    title: "Vendor Management Systems",
    problem: "Lack of transparency and difficulty in tracking vendor performance and compliance.",
    approach: "A centralized portal for end-to-end vendor lifecycle management and collaboration.",
    features: ["Compliance Tracking", "Performance Scorecards", "Self-service Portals"],
    benefits: ["Enhanced compliance", "Better negotiation power", "Reduced procurement risk"],
    tech: ["SAP Ariba", "SAP UI5", "OData"],
    icon: Truck,
    color: "brand-cyan",
    stats: { label: "Risk Reduction", value: "30%" }
  },
  {
    id: "procurement",
    title: "Procurement Platforms",
    problem: "Disorganized sourcing and uncontrolled spending across departments.",
    approach: "Guided buying experiences and automated spend management integrated with SAP.",
    features: ["Smart Sourcing", "Catalog Management", "Budget Control"],
    benefits: ["20% Cost savings", "Policy compliance", "Streamlined approvals"],
    tech: ["SAP Ariba", "CAPM", "Node.js"],
    icon: ShoppingCart,
    color: "blue-500",
    stats: { label: "Cost Savings", value: "22%" }
  },
  {
    id: "hr",
    title: "HR Management Systems",
    problem: "Disconnected employee data and slow HR administrative processes.",
    approach: "Modernizing HR with integrated employee experiences and automated administration.",
    features: ["Employee Self-Service", "Onboarding Workflows", "Skills Mapping"],
    benefits: ["Improved retention", "Reduced HR overhead", "Global compliance"],
    tech: ["SAP SuccessFactors", "Fiori", "BTP"],
    icon: Users,
    color: "indigo-500",
    stats: { label: "Retention Rate", value: "+15%" }
  },
  {
    id: "approval",
    title: "Approval Workflow Systems",
    problem: "Bottlenecks in decision-making due to manual approval chains and lack of visibility.",
    approach: "Unified, mobile-ready approval hubs that consolidate requests from multiple systems.",
    features: ["Multi-level Routing", "Mobile Notifications", "Full Audit Trail"],
    benefits: ["Zero bottlenecks", "Instant decision making", "Policy enforcement"],
    tech: ["SAP Workflow Management", "Fiori", "RAP"],
    icon: CheckCircle,
    color: "emerald-500",
    stats: { label: "Approval Time", value: "-60%" }
  },
  {
    id: "analytics",
    title: "SAP Analytics Dashboards",
    problem: "Information silos preventing data-driven decision making at the executive level.",
    approach: "High-end visualizations and predictive modeling using SAP Analytics Cloud.",
    features: ["Live Data Connection", "Predictive Analytics", "Executive Storyboards"],
    benefits: ["Strategic insights", "Proactive management", "Unified data truth"],
    tech: ["SAP Analytics Cloud", "HANA", "CDS"],
    icon: BarChart,
    color: "sky-500",
    stats: { label: "Insights Speed", value: "3x Faster" }
  },
  {
    id: "mobility",
    title: "Enterprise Mobility Solutions",
    problem: "Inability for field workers and managers to access critical data and perform tasks on the go.",
    approach: "Fiori-based mobile applications designed for offline capability and native performance.",
    features: ["Offline Synchronization", "Device Integration", "Native UX"],
    benefits: ["Enhanced field productivity", "Real-time data entry", "Improved UX"],
    tech: ["SAP Mobile Services", "UI5/MDK", "Swift/Kotlin"],
    icon: Smartphone,
    color: "violet-500",
    stats: { label: "Mobile Adoption", value: "95%" }
  },
  {
    id: "inventory",
    title: "Inventory Management Systems",
    problem: "Overstocking or stockouts due to poor visibility and manual tracking methods.",
    approach: "Real-time inventory tracking with IoT integration and automated replenishment.",
    features: ["IoT Tracking", "Automated Replenishment", "Warehouse Optimization"],
    benefits: ["Optimized stock levels", "Reduced carrying costs", "Perfect order fulfillment"],
    tech: ["SAP EWM", "IoT Service", "HANA"],
    icon: Box,
    color: "teal-500",
    stats: { label: "Stock Accuracy", value: "99.9%" }
  }
];

const MockupDashboard = ({ color }: { color: string }) => {
  return (
    <div className="w-full h-full bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col">
      <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
        <div className="size-2 rounded-full bg-red-500/30" />
        <div className="size-2 rounded-full bg-yellow-500/30" />
        <div className="size-2 rounded-full bg-green-500/30" />
        <div className="ml-auto h-3 w-32 bg-white/10 rounded-full" />
      </div>
      <div className="flex-1 p-4 grid grid-cols-12 gap-4">
        <div className="col-span-3 space-y-3">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className={cn("h-8 rounded-lg", i === 1 ? `bg-${color}/20 border border-${color}/30` : "bg-white/5")} />
          ))}
        </div>
        <div className="col-span-9 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 glass rounded-xl border-white/10 p-4">
                <div className="h-2 w-12 bg-white/10 rounded-full mb-2" />
                <div className={cn("h-6 w-16 rounded-lg", i === 1 ? `bg-${color}/40` : "bg-white/5")} />
              </div>
            ))}
          </div>
          <div className="h-48 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden p-6">
            <div className="flex items-end gap-2 h-full">
              {[40, 60, 45, 90, 65, 80, 50, 75, 40].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  className={cn("flex-1 rounded-t-sm", i % 2 === 0 ? `bg-${color}/30` : "bg-white/10")} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SolutionHorizontal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        containerRef.current,
        {
          x: 0,
        },
        {
          x: () => -(containerRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${containerRef.current!.scrollWidth - window.innerWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
      return () => pin.kill();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-black">
      <div 
        ref={containerRef} 
        className="flex flex-row h-screen will-change-transform"
      >
        {solutions.map((solution, i) => (
          <section 
            key={solution.id}
            className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-8 md:p-20 relative overflow-hidden"
          >
            {/* Ambient Background */}
            <div className={cn(
              "absolute inset-0 opacity-[0.03] pointer-events-none",
              `bg-${solution.color}`
            )} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto z-10 w-full">
              {/* Content Side */}
              <div className="flex flex-col">
                <div className={cn(
                  "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest mb-6",
                  `text-${solution.color}`
                )}>
                  <solution.icon className="size-3" />
                  Solution 0{i + 1}
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
                  {solution.title}
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                      <span className="size-1 rounded-full bg-red-500" />
                      The Challenge
                    </h4>
                    <p className="text-lg text-white/70 leading-relaxed italic">
                      &quot;{solution.problem}&quot;
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                      <span className="size-1 rounded-full bg-brand-blue" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 group">
                          <div className={cn("size-6 rounded-lg flex items-center justify-center text-[10px] font-bold border border-white/10 group-hover:border-brand-blue/50 transition-colors", `bg-${solution.color}/10`)}>
                            {idx + 1}
                          </div>
                          <span className="text-sm text-white/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl glass-morphism border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue">Technology Stack</h4>
                      <Zap className="size-4 text-brand-blue" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <div className="absolute -top-12 -right-12 z-20">
                   <div className="glass-morphism p-6 rounded-3xl border-brand-blue/30 backdrop-blur-2xl shadow-2xl">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{solution.stats.label}</div>
                      <div className={cn("text-3xl font-black", `text-${solution.color}`)}>{solution.stats.value}</div>
                   </div>
                </div>
                
                <div className="perspective-2000">
                  <motion.div
                    whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative z-10"
                  >
                    <MockupDashboard color={solution.color} />
                  </motion.div>
                </div>

                <div className={cn("absolute inset-0 blur-[100px] opacity-20 -z-10 rounded-full", `bg-${solution.color}`)} />
              </div>
            </div>

            {/* Progress Label */}
            <div className="absolute top-10 right-10 flex items-center gap-4">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Scroll to Navigate</span>
               <div className="text-4xl font-black text-white/5">0{i + 1} / 08</div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
