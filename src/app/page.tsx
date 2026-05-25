import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Solutions } from "@/components/sections/solutions";
import { CaseStudies } from "@/components/sections/case-studies";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <Hero />
      <About />
      <Solutions />
      <Services />
      <CaseStudies />
      <ContactSection />
    </div>
  );
}
