"use client";

import React, { useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Clock,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    title: "Global Retailer ERP Transformation",
    client: "EuroMart Group",
    impact: "Migrated legacy systems to SAP S/4HANA for 450+ stores.",
    metrics: [
      { label: "Revenue Increase", value: 24, suffix: "%", icon: TrendingUp },
      { label: "Productivity", value: 35, suffix: "%", icon: Zap },
      { label: "Automation", value: 60, suffix: "%", icon: CheckCircle2 },
    ],
    before: "Fragmented data silos and 15-minute checkout delays.",
    after: "Unified real-time inventory and sub-second transaction processing.",
    image: "retail-bg"
  },
  {
    title: "Supply Chain Automation Hub",
    client: "LogiTech Industries",
    impact: "Automated procurement and vendor management for 2,000+ suppliers.",
    metrics: [
      { label: "Cost Reduction", value: 18, suffix: "%", icon: BarChart3 },
      { label: "Lead Time", value: 40, suffix: "%", icon: Clock },
      { label: "Accuracy", value: 99, suffix: ".9%", icon: Target },
    ],
    before: "Manual paper-based invoicing and 12% error rate in orders.",
    after: "Fully digital SAP Ariba integration with AI-powered error detection.",
    image: "manufacturing-bg"
  }
];

const MetricCounter = ({ value, suffix, label, icon: Icon }: { value: number, suffix: string, label: string, icon: LucideIcon }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(value % 1 === 0 ? 0 : 1);
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-brand-blue">
        <Icon className="size-4" />
        <span className="text-2xl font-bold text-white">
          <span ref={ref}>0</span>{suffix}
        </span>
      </div>
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</span>
    </div>
  );
};

export const CaseStudies = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy/20 -z-10" />
      
      <SectionContainer>
        <AnimatedHeading
          tagline="Success Stories"
          title="Delivering Measurable Business Impact"
          subtitle="Explore how our SAP solutions have transformed operations and driven significant ROI for global enterprises."
          align="center"
          className="mb-20"
        />

        <div className="flex flex-col gap-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <GlassCard className="p-0 overflow-hidden border-white/5 bg-white/[0.02]">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Content Side */}
                  <div className="lg:col-span-7 p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                        Case Study
                      </div>
                      <span className="text-sm font-bold text-white/40">{study.client}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                      {study.title}
                    </h3>

                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                      {study.impact}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-4">
                        <div className="text-xs font-bold uppercase tracking-widest text-red-400/80">The Challenge</div>
                        <p className="text-sm text-white/60 italic leading-relaxed">&quot;{study.before}&quot;</p>
                      </div>
                      <div className="space-y-4">
                        <div className="text-xs font-bold uppercase tracking-widest text-emerald-400/80">The Result</div>
                        <p className="text-sm text-white/60 italic leading-relaxed">&quot;{study.after}&quot;</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
                      {study.metrics.map((metric, idx) => (
                        <MetricCounter key={idx} {...metric} />
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="lg:col-span-5 relative min-h-[300px] bg-brand-navy/40 group">
                    <div className="absolute inset-0 bg-linear-to-br from-brand-blue/20 to-brand-cyan/20 opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                    
                    {/* Abstract UI Elements */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="relative w-full aspect-square max-w-[280px]">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full" 
                        />
                        <div className="absolute inset-4 glass rounded-3xl border-white/10 flex flex-col p-6 gap-4">
                           <div className="h-2 w-1/2 bg-brand-blue/30 rounded" />
                           <div className="flex-1 space-y-3">
                              {[1, 2, 3].map(i => (
                                <div key={i} className="h-8 bg-white/5 rounded-lg border border-white/5" />
                              ))}
                           </div>
                        </div>
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -top-4 -right-4 size-16 glass rounded-2xl border-brand-cyan/30 flex items-center justify-center"
                        >
                           <TrendingUp className="size-8 text-brand-cyan" />
                        </motion.div>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                       <Button variant="premium" className="w-full group/btn">
                          Read Full Case Study <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                       </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
