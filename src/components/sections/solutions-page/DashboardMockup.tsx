"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardMockupProps {
  type?: string;
  className?: string;
}

export const DashboardMockup = ({ type, className }: DashboardMockupProps) => {
  const isSap = type?.includes("sap");
  const isHR = type?.includes("hr");
  const isERP = type?.includes("erp");

  return (
    <div className={cn(
      "relative bg-[#0a0c14] rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[16/10] w-full group",
      className
    )}>
      {/* OS Header */}
      <div className="h-8 w-full bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-500/40" />
          <div className="size-2.5 rounded-full bg-yellow-500/40" />
          <div className="size-2.5 rounded-full bg-green-500/40" />
        </div>
        <div className="mx-auto text-[10px] text-white/20 font-mono tracking-widest uppercase">
          SafeOnSite Enterprise v4.0.2 {type && `| ${type.replace("-", " ")}`}
        </div>
      </div>

      <div className="flex h-[calc(100%-32px)]">
        {/* Sidebar */}
        <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue/5 transition-colors">
              <div className={cn(
                "size-3 rounded-sm opacity-30",
                isSap ? "bg-brand-cyan" : "bg-brand-blue"
              )} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6 overflow-hidden">
          {/* Header Row */}
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-white/10 rounded-full" />
              <div className="h-2 w-48 bg-white/5 rounded-full" />
            </div>
            <div className="flex gap-2">
              <div className={cn(
                "h-8 w-24 border rounded-lg",
                isSap ? "bg-brand-cyan/10 border-brand-cyan/20" : "bg-brand-blue/10 border-brand-blue/20"
              )} />
              <div className="h-8 w-8 bg-white/5 border border-white/10 rounded-lg" />
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 glass rounded-xl border-white/5 p-4 flex flex-col justify-between">
                <div className="h-2 w-16 bg-white/10 rounded-full" />
                <div className="flex items-end justify-between">
                  <div className="h-6 w-12 bg-white/20 rounded-lg" />
                  <div className={cn(
                    "size-6 rounded-full flex items-center justify-center",
                    isHR ? "bg-brand-cyan/20" : "bg-brand-blue/20"
                  )}>
                    <div className={cn(
                      "size-2 rounded-full",
                      isHR ? "bg-brand-cyan" : "bg-brand-blue"
                    )} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Visualization */}
          <div className="flex-1 glass rounded-xl border-white/5 p-6 relative">
             <div className="absolute inset-0 p-8 flex items-end justify-between gap-2 md:gap-4">
               {[40, 70, 55, 90, 60, 85, 45, 100, 75, 60, 40, 80].map((h, i) => (
                 <motion.div
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ duration: 1.5, delay: i * 0.05, ease: "circOut" }}
                   className={cn(
                     "flex-1 rounded-t-sm border-t",
                     isSap 
                      ? "bg-gradient-to-t from-brand-cyan/40 to-brand-blue/20 border-brand-blue/40" 
                      : "bg-gradient-to-t from-brand-blue/40 to-brand-cyan/20 border-brand-cyan/40"
                   )}
                 />
               ))}
             </div>
             <div className="relative z-10 flex justify-between">
               <div className="h-3 w-24 bg-white/10 rounded-full" />
               <div className="flex gap-2">
                 <div className="h-2 w-8 bg-white/5 rounded-full" />
                 <div className="h-2 w-8 bg-white/5 rounded-full" />
               </div>
             </div>
          </div>

          {/* List/Table */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-full bg-white/[0.02] border border-white/5 rounded-lg flex items-center px-4 gap-4">
                <div className="size-6 rounded bg-white/5" />
                <div className="h-2 w-32 bg-white/10 rounded-full" />
                <div className="h-2 w-full bg-white/[0.02] rounded-full mx-4" />
                <div className="h-2 w-16 bg-white/5 rounded-full ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30" />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="w-full h-[200%] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scan" />
      </div>
    </div>
  );
};
