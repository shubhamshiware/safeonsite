import { constructMetadata } from "@/lib/seo";
import { ServiceHero } from "@/components/sections/services/service-hero";
import { ServiceGrid } from "@/components/sections/services/service-grid";
import { ProcessTimeline } from "@/components/sections/services/process-timeline";
import { TechStack } from "@/components/sections/services/tech-stack";
import { EnterpriseBenefits } from "@/components/sections/services/enterprise-benefits";
import { PremiumCTA } from "@/components/ui/premium-cta";

export const metadata = constructMetadata({ 
  title: "SAP Enterprise Services",
  description: "Explore our premium SAP development services: UI5/Fiori, ABAP, CAPM, RAP, and custom enterprise software. Drive digital transformation with SafeOnSite's expert consulting."
});

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <ServiceHero />
      
      <div className="space-y-0">
        <ServiceGrid />
        
        <ProcessTimeline />
        
        <TechStack />
        
        <EnterpriseBenefits />
        
        <div className="py-20">
          <PremiumCTA 
            title="Let's Build Enterprise SAP Solutions Together"
            subtitle="Ready to transform your business operations with next-gen SAP technology? Contact our experts for a personalized consultation."
            primaryButtonText="Get Started Now"
            primaryButtonHref="/contact"
            secondaryButtonText="Explore Case Studies"
            secondaryButtonHref="/solutions"
          />
        </div>
      </div>
    </main>
  );
}
