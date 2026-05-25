import { constructMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/sections/about/about-hero";
import { CompanyStory } from "@/components/sections/about/company-story";
import { ExpertiseShowcase } from "@/components/sections/about/expertise-showcase";
import { WhyChooseUs } from "@/components/sections/about/why-choose-us";
import { StatsSection } from "@/components/sections/about/stats-section";
import { TeamCulture } from "@/components/sections/about/team-culture";
import { AboutCTA } from "@/components/sections/about/about-cta";

export const metadata = constructMetadata({ 
  title: "About Us | SafeOnSite",
  description: "Learn about SafeOnSite, our mission to modernize enterprises with elite SAP development, and our commitment to innovation."
});

export default function AboutPage() {
  return (
    <main className="relative bg-background overflow-hidden">
      <AboutHero />
      <CompanyStory />
      <ExpertiseShowcase />
      <WhyChooseUs />
      <StatsSection />
      <TeamCulture />
      <AboutCTA />
    </main>
  );
}
