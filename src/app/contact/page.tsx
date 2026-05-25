import { constructMetadata } from "@/lib/seo";
import { SectionContainer } from "@/components/ui/section-container";
import { GlassCard } from "@/components/ui/glass-card";
import { PremiumCTA } from "@/components/ui/premium-cta";
import { ContactHero } from "@/components/sections/contact-page/hero";
import { ContactFormPremium } from "@/components/sections/contact-page/contact-form-premium";
import { ContactInfo } from "@/components/sections/contact-page/contact-info";
import { MapSection } from "@/components/sections/contact-page/map-section";
import { TrustSection } from "@/components/sections/contact-page/trust-section";
import { FAQSection } from "@/components/sections/contact-page/faq";
import { ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({ 
  title: "Contact Us | SafeOnSite",
  description: "Get in touch with SafeOnSite's enterprise SAP experts. Let's build your next-generation intelligent solutions together."
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-navy">
      <ContactHero />
      
      <SectionContainer className="pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <ContactInfo />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Global Presence</h3>
              <MapSection />
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 md:p-12 border-brand-blue/10 shadow-2xl relative overflow-hidden">
              {/* Decorative background for the card */}
              <div className="absolute -top-24 -right-24 size-48 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 size-48 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-white mb-2">Project Inquiry</h3>
                  <p className="text-muted-foreground text-lg">Fill out the form below and our strategy team will craft a custom enterprise solution for your business.</p>
                </div>

                <ContactFormPremium />
                
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-brand-cyan" />
                    Secure & Encrypted
                  </div>
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </SectionContainer>

      <TrustSection />
      
      <FAQSection />

      <PremiumCTA 
        title="Ready to Transform Your Enterprise?"
        subtitle="Join the leading companies already using SafeOnSite's intelligent SAP solutions to drive efficiency and innovation."
        primaryButtonText="Explore Our Solutions"
        primaryButtonHref="/solutions"
        secondaryButtonText="View Case Studies"
        secondaryButtonHref="/case-studies"
        className="pb-32"
      />
    </main>
  );
}
