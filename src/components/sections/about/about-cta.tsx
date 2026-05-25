"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const AboutCTA = () => {
  return (
    <SectionContainer spacing="large" className="pb-32">
      <div className="relative rounded-[3rem] overflow-hidden bg-brand-blue/5 border border-brand-blue/10 p-12 md:p-24 text-center group">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-blue/15 blur-[120px] transition-transform duration-1000 group-hover:scale-125 group-hover:bg-brand-blue/25" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-cyan/15 blur-[120px] transition-transform duration-1000 group-hover:scale-125 group-hover:bg-brand-cyan/25" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-[0.3em]"
          >
            <Sparkles className="size-3 animate-pulse" />
            Join the Revolution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]"
          >
            Ready to <span className="text-gradient-blue">Transform</span> Your Enterprise?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            Partner with SafeOnSite to architect high-performance SAP solutions that drive innovation and security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 pt-6"
          >
            <MagneticButton>
              <Button 
                variant="premium" 
                size="lg" 
                className="h-20 px-16 text-xl rounded-2xl group shadow-[0_0_50px_rgba(0,102,255,0.3)] hover:shadow-[0_0_80px_rgba(0,102,255,0.5)] transition-shadow duration-500"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </Button>
            </MagneticButton>
            
            <MagneticButton>
              <Button 
                variant="glass" 
                size="lg" 
                className="h-20 px-16 text-xl rounded-2xl border-white/10 hover:bg-white/10"
                asChild
              >
                <Link href="/services">
                  Our Expertise
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};
