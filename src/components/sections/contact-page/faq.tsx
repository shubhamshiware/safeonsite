"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What SAP modules do you specialize in?",
    answer: "We specialize in a wide range of SAP modules, including SAP S/4HANA, SAP Business Technology Platform (BTP), SAP UI5/Fiori, SAP SuccessFactors, and SAP Integration Suite. Our team is also expert in custom ABAP development and modern cloud-native extensions."
  },
  {
    question: "How long does a typical SAP Fiori implementation take?",
    answer: "Project timelines vary based on complexity, but a standard custom Fiori application implementation typically ranges from 4 to 8 weeks, including design, development, integration, and testing phases."
  },
  {
    question: "Do you offer post-implementation support?",
    answer: "Yes, we provide comprehensive 24/7 post-implementation support and maintenance services. This includes performance monitoring, bug fixes, system updates, and periodic optimization reviews."
  },
  {
    question: "Can you integrate 3rd-party platforms with our SAP system?",
    answer: "Absolutely. We are experts in SAP Integration Suite and can seamlessly connect your SAP environment with any 3rd-party CRM, ERP, eCommerce platform, or custom-built internal tools using secure API protocols."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={cn(
          "text-lg font-bold transition-colors duration-300",
          isOpen ? "text-brand-cyan" : "text-white group-hover:text-brand-blue"
        )}>
          {question}
        </span>
        <div className={cn(
          "size-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-brand-blue border-brand-blue rotate-180" : "group-hover:border-brand-blue"
        )}>
          {isOpen ? <Minus className="size-4 text-white" /> : <Plus className="size-4 text-white" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer className="py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
              <MessageCircleQuestion className="size-3" /> Common Inquiries
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Frequently Asked <span className="text-brand-blue">Questions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Can't find the answer you're looking for? Reach out to our team directly and we'll be happy to assist you.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-8">
          <div className="glass-morphism border-white/5 p-8 md:p-12">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
