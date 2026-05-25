"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMetricProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedMetric = ({
  value,
  label,
  suffix = "",
  prefix = "",
  className,
}: AnimatedMetricProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extract number from string value (e.g., "250" from "250%")
  const hasNumericValue = /[0-9]/.test(value);
  const numericValue = hasNumericValue ? parseFloat(value.replace(/[^0-9.]/g, "")) : 0;
  const isCurrency = value.includes("$") && !prefix;
  const isPercentage = value.includes("%") && !suffix;

  useEffect(() => {
    if (isInView && hasNumericValue) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, hasNumericValue]);

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
      >
        {prefix || (isCurrency ? "$" : "")}
        {hasNumericValue ? (
          displayValue.toLocaleString(undefined, {
            maximumFractionDigits: displayValue > 100 ? 0 : 1,
          })
        ) : (
          value
        )}
        {suffix || (isPercentage ? "%" : "")}
      </motion.div>
      <div className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">
        {label}
      </div>
    </div>
  );
};
