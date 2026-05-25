"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MapSection = () => {
  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
      {/* Map Background Placeholder */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-grid-premium opacity-20" />
        
        {/* Abstract Map Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
          <path d="M0 200 Q 250 150 500 200 T 1000 200" stroke="#00d2ff" strokeWidth="0.5" fill="none" />
          <path d="M0 400 Q 250 350 500 400 T 1000 400" stroke="#00d2ff" strokeWidth="0.5" fill="none" />
          <path d="M0 600 Q 250 550 500 600 T 1000 600" stroke="#00d2ff" strokeWidth="0.5" fill="none" />
          <path d="M200 0 Q 150 250 200 500 T 200 1000" stroke="#00d2ff" strokeWidth="0.5" fill="none" />
          <path d="M500 0 Q 450 250 500 500 T 500 1000" stroke="#00d2ff" strokeWidth="0.5" fill="none" />
          <path d="M800 0 Q 750 250 800 500 T 800 1000" stroke="#00d2ff" strokeWidth="0.5" fill="none" />
        </svg>

        {/* Pulsing Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-12 bg-brand-blue/30 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.2, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 bg-brand-cyan/20 rounded-full blur-lg"
          />
          <div className="relative z-10 p-4 rounded-full bg-brand-navy border border-brand-blue/50 shadow-[0_0_30px_rgba(0,210,255,0.3)] group-hover:scale-110 transition-transform duration-500">
            <MapPin className="size-8 text-brand-cyan" />
          </div>
        </div>

        {/* Location Card */}
        <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-6 border-white/10 shadow-2xl"
          >
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Navigation className="size-4 text-brand-blue" />
              Global Headquarters
            </h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              123 Enterprise Plaza, Innovation District<br />
              Tech City, TC 54321, United States
            </p>
            <Button variant="premium" size="sm" className="w-full text-xs h-10 group/btn">
              Get Directions 
              <ExternalLink className="ml-2 size-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-brand-navy/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
    </div>
  );
};
