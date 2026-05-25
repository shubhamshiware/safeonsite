"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { TrendingUp, Clock, ShieldCheck, DollarSign } from "lucide-react";

const metrics = [
  {
    label: "Average ROI",
    value: "250%",
    description: "Average return on investment within the first 18 months of implementation.",
    icon: TrendingUp,
    color: "text-emerald-400"
  },
  {
    label: "Process Speed",
    value: "65%",
    description: "Increase in business process efficiency through automated SAP workflows.",
    icon: Clock,
    color: "text-blue-400"
  },
  {
    label: "Cost Reduction",
    value: "30%",
    description: "Reduction in operational overhead and manual processing costs.",
    icon: DollarSign,
    color: "text-brand-cyan"
  },
  {
    label: "Compliance",
    value: "100%",
    description: "Regulatory and internal policy compliance through automated auditing.",
    icon: ShieldCheck,
    color: "text-purple-400"
  }
];

export const SolutionMetrics = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0070f310,transparent_70%)]" />
      </div>
      
      <SectionContainer>
        <AnimatedHeading
          tagline="The Impact"
          title="Enterprise ROI & Performance Metrics"
          subtitle="Our solutions deliver measurable business value, enabling organizations to scale efficiently while reducing operational friction."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-8 rounded-3xl glass-morphism border border-white/10 flex flex-col items-center text-center group hover:border-white/20 transition-all duration-500"
            >
              <div className="p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-500">
                <metric.icon className={`size-8 ${metric.color}`} />
              </div>
              <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                {metric.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">
                {metric.label}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[40px] glass-morphism border border-white/10 bg-brand-blue/5 text-center">
           <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Experience the SafeOnSite Advantage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond the numbers, our solutions foster a culture of innovation and agility. By removing technical debt and automating mundane tasks, we empower your teams to focus on what truly matters: strategic growth and customer value.
              </p>
           </div>
        </div>
      </SectionContainer>
    </section>
  );
};
