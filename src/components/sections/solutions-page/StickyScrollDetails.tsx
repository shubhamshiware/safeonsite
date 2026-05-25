"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DashboardMockup } from "./DashboardMockup";
import { cn } from "@/lib/utils";
import { CheckCircle2, LayoutDashboard, LineChart, ShieldCheck, Zap } from "lucide-react";

export const StickyScrollDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const features = [
    {
      title: "Real-time KPI Tracking",
      description: "Monitor critical business metrics as they happen with sub-second latency and high-fidelity visualizations.",
      icon: LineChart,
      color: "text-brand-blue"
    },
    {
      title: "Predictive Trend Analysis",
      description: "Leverage AI-driven forecasting to anticipate market shifts and operational bottlenecks before they occur.",
      icon: Zap,
      color: "text-brand-cyan"
    },
    {
      title: "Enterprise-grade Security",
      description: "Rest easy with biometric authentication, end-to-end encryption, and comprehensive audit trails.",
      icon: ShieldCheck,
      color: "text-brand-blue"
    },
    {
      title: "Bespoke Dashboards",
      description: "Custom-tailored visualization layers designed specifically for executive decision-making and field operations.",
      icon: LayoutDashboard,
      color: "text-brand-cyan"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-brand-navy py-20">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: Sticky Visual */}
          <div className="lg:w-1/2 lg:sticky lg:top-40 h-fit">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em]">Deep Dive</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  SAP Analytics <span className="text-white/40">Command Center</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  Our flagship analytics solution transforms complex SAP data into a strategic asset, providing a 360-degree view of your enterprise health.
                </p>
              </div>

              <div className="relative group perspective-2000">
                <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                <DashboardMockup type="sap-analytics" className="relative z-10" />
                
                {/* Floating Metric Card */}
                <motion.div 
                   style={{ 
                     rotateY: useTransform(scrollYProgress, [0, 1], [0, 15]),
                     y: useTransform(scrollYProgress, [0, 1], [0, -40])
                   }}
                   className="absolute -top-10 -right-10 glass p-6 rounded-2xl border-white/10 z-20 hidden md:block"
                >
                   <div className="text-4xl font-bold text-brand-cyan">300%</div>
                   <div className="text-[10px] font-bold uppercase text-white/40">Avg. ROI Performance</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Content */}
          <div className="lg:w-1/2 space-y-32 py-20">
            {features.map((feature, i) => (
              <FeatureSection 
                key={i} 
                feature={feature} 
                index={i} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ feature, index }: { feature: any, index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ margin: "-20%" }}
      className="space-y-6"
    >
      <div className={cn("size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center", feature.color)}>
        <Icon className="size-6" />
      </div>
      <h3 className="text-3xl font-bold text-white tracking-tight">{feature.title}</h3>
      <p className="text-lg text-white/50 leading-relaxed">
        {feature.description}
      </p>
      <div className="flex items-center gap-4 pt-4">
        <div className="h-px w-12 bg-brand-blue" />
        <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Operational Excellence</span>
      </div>
    </motion.div>
  );
};
