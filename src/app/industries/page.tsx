import { constructMetadata } from "@/lib/seo";
import { IndustriesHero } from "@/components/sections/industries-page/IndustriesHero";
import { IndustryShowcase } from "@/components/sections/industries-page/IndustryShowcase";
import { InteractiveIndustryGrid } from "@/components/sections/industries-page/InteractiveIndustryGrid";
import { IndustryStats } from "@/components/sections/industries-page/IndustryStats";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const metadata = constructMetadata({ 
  title: "Industries Served | SafeOnSite",
  description: "Bespoke SAP solutions for Manufacturing, Healthcare, Retail, Finance, and other major global sectors."
});

export default function IndustriesPage() {
  return (
    <main className="bg-brand-navy selection:bg-brand-blue/30">
      <IndustriesHero />
      
      <div className="relative z-10">
        <IndustryStats />
      </div>

      <IndustryShowcase />

      <InteractiveIndustryGrid />

      {/* Footer CTA Section */}
      <section className="py-32 relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-brand-blue/5 blur-3xl rounded-full translate-y-1/2 scale-150 opacity-20" />
        
        <div className="container relative z-10">
          <div className="glass-morphism rounded-[3rem] p-12 md:p-24 border-white/10 text-center flex flex-col items-center gap-12">
            <AnimatedHeading
              tagline="Industry Transformation"
              title="Ready to Lead Your Industry into the Digital Future?"
              subtitle="Partner with SafeOnSite to leverage deep sector expertise and next-generation SAP solutions tailored to your unique challenges."
              level="h2"
              className="max-w-3xl"
            />
            
            <div className="flex flex-wrap justify-center gap-6">
              <MagneticButton>
                <Button variant="premium" size="lg">Consult with Industry Experts</Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="glass" size="lg">Request Industry Portfolio</Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
