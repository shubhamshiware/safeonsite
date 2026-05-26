"use client";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface PremiumCTAProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export function PremiumCTA({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className,
}: PremiumCTAProps) {
  return (
    <section className={cn("relative overflow-hidden py-24", className)}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[120px] rounded-full scale-150 opacity-50" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="glass-morphism rounded-[2.5rem] p-10 md:p-20 border-white/10 text-center flex flex-col items-center gap-10">
          <AnimatedHeading
            tagline="Next-Gen Enterprise"
            title={title}
            subtitle={subtitle}
            level="h2"
            className="max-w-3xl"
          />

          <div className="flex flex-wrap justify-center gap-6">
            <MagneticButton>
              <Button variant="premium" size="lg" asChild>
                <Link href={primaryButtonHref}>
                  {primaryButtonText}
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </MagneticButton>

            {secondaryButtonText && secondaryButtonHref && (
              <MagneticButton>
                <Button variant="glass" size="lg" asChild>
                  <Link href={secondaryButtonHref}>
                    {secondaryButtonText}
                  </Link>
                </Button>
              </MagneticButton>
            )}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
