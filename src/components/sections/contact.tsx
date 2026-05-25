"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe, 
  Award,
  Calendar,
  Phone,
  ArrowRight
} from "lucide-react";

const trustIndicators = [
  { icon: ShieldCheck, label: "Enterprise Security", sub: "AES-256 Data Encryption" },
  { icon: Clock, label: "Fast Response", sub: "Under 4 hour turnaround" },
  { icon: Globe, label: "Global Reach", sub: "Supporting 20+ countries" },
  { icon: Award, label: "Expert Certified", sub: "SAP Gold Partner Team" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-brand-cyan/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-premium opacity-20" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info & CTAs */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <AnimatedHeading
                level="h2"
                tagline="Get in Touch"
                title="Ready to Elevate Your Enterprise?"
                subtitle="Connect with our experts to discuss your SAP challenges and explore how our intelligent solutions can transform your operations."
                align="left"
              />
            </div>

            {/* Fast Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard className="p-6 border-brand-blue/20 hover:border-brand-blue/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform">
                    <MessageCircle className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground mb-4">Instant support for urgent queries.</p>
                    <Button variant="link" className="p-0 h-auto text-brand-cyan flex items-center gap-1 group/btn">
                      Chat Now <ArrowRight className="size-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 border-brand-cyan/20 hover:border-brand-cyan/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                    <Calendar className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Calendly</h4>
                    <p className="text-sm text-muted-foreground mb-4">Book a 15-min strategy session.</p>
                    <Button variant="link" className="p-0 h-auto text-brand-cyan flex items-center gap-1 group/btn">
                      Schedule <ArrowRight className="size-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Office & Map */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="size-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium">Headquarters</p>
                  <p className="text-sm">123 Enterprise Plaza, Tech City, TC 54321</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5">
                  <Mail className="size-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email Us</p>
                  <p className="text-sm">solutions@safeonsite.io</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5">
                  <Phone className="size-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium">Call Us</p>
                  <p className="text-sm">+1 (800) SAFE-SAP</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-48 w-full rounded-2xl glass-morphism overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-brand-blue/30 blur-xl rounded-full animate-pulse" />
                    <MapPin className="size-8 text-brand-blue relative z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 gap-6">
                {trustIndicators.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <item.icon className="size-5 text-brand-cyan shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Gen Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              <GlassCard className="p-8 md:p-12 border-brand-blue/10 shadow-2xl relative overflow-hidden">
                {/* Decorative background for the card */}
                <div className="absolute -top-24 -right-24 size-48 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Project Inquiry</h3>
                    <p className="text-muted-foreground">Fill out the form below and we'll craft a custom solution for your business.</p>
                  </div>

                  <ContactForm />
                </div>
              </GlassCard>
              
              {/* Security Reassurance */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-4 text-brand-cyan" />
                Your data is secure and protected under our Enterprise Privacy Policy.
              </div>
            </motion.div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};
