import { constructMetadata } from "@/lib/seo";
import { SolutionsHero } from "@/components/sections/solutions-page/SolutionsHero";
import { HorizontalScroll } from "@/components/sections/solutions-page/HorizontalScroll";
import { SolutionTabs } from "@/components/sections/solutions-page/SolutionTabs";
import { InteractiveSolutionCards } from "@/components/sections/solutions-page/InteractiveSolutionCards";
import { StickyScrollDetails } from "@/components/sections/solutions-page/StickyScrollDetails";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export const metadata = constructMetadata({ 
  title: "Enterprise Solutions | SafeOnSite",
  description: "Bespoke enterprise solutions for business automation, vendor management, and SAP analytics dashboards."
});

export default function SolutionsPage() {
  return (
    <main className="bg-brand-navy selection:bg-brand-blue/30">
      <SolutionsHero />
      
      <div className="relative z-10">
        <SolutionTabs />
      </div>

      <HorizontalScroll />

      <InteractiveSolutionCards />

      <StickyScrollDetails />

      {/* Footer CTA Section */}
      <section className="py-32 relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-brand-blue/5 blur-3xl rounded-full translate-y-1/2 scale-150 opacity-20" />
        
        <div className="container relative z-10">
          <div className="glass-morphism rounded-[3rem] p-12 md:p-24 border-white/10 text-center flex flex-col items-center gap-12">
            <AnimatedHeading
              tagline="Get Started"
              title="Ready to Transform Your Enterprise Operations?"
              subtitle="Join the ranks of world-class organizations that have optimized their business processes with SafeOnSite."
              level="h2"
              className="max-w-3xl"
            />
            
            <div className="flex flex-wrap justify-center gap-6">
              <MagneticButton>
                <Button variant="premium" size="lg">Schedule a Consultation</Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="glass" size="lg">Download Capabilities Deck</Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
