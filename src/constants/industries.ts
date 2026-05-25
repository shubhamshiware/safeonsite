import { Factory, HeartPulse, ShoppingBag, Truck, Landmark, Landmark as Bank, Droplets, Car, GraduationCap, Radio, Building2, Globe } from "lucide-react";

export const INDUSTRIES = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    challenges: "Disconnected supply chains and inefficient shop floor operations.",
    sapSolutions: "SAP Digital Manufacturing, S/4HANA Manufacturing, SAP IBP.",
    benefits: "30% increase in production efficiency, real-time shop floor visibility.",
    capabilities: "Smart Factory, Predictive Maintenance, Digital Twin.",
    image: "/industries/manufacturing.jpg",
    stats: { growth: "+25%", efficiency: "98%" }
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    challenges: "Fragmented patient data and complex regulatory compliance.",
    sapSolutions: "SAP Health, SAP Patient Management, SAP SuccessFactors.",
    benefits: "Enhanced patient outcomes, 40% reduction in administrative overhead.",
    capabilities: "Electronic Health Records, Personalized Medicine, Compliance Automation.",
    image: "/industries/healthcare.jpg",
    stats: { patients: "1M+", security: "100%" }
  },
  {
    id: "retail",
    title: "Retail",
    icon: ShoppingBag,
    challenges: "Inconsistent omni-channel experiences and inventory inaccuracies.",
    sapSolutions: "SAP Commerce Cloud, SAP Customer Checkout, SAP CAR.",
    benefits: "Seamless customer journeys, 20% improvement in stock turnover.",
    capabilities: "Omni-channel Commerce, Real-time Inventory, Customer Insights.",
    image: "/industries/retail.jpg",
    stats: { conversion: "+15%", loyalty: "85%" }
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: Truck,
    challenges: "Lack of real-time shipment visibility and high last-mile costs.",
    sapSolutions: "SAP Transportation Management, SAP EWM, SAP LBN.",
    benefits: "Global freight visibility, 15% reduction in transportation costs.",
    capabilities: "Real-time Tracking, Warehouse Automation, Fleet Management.",
    image: "/industries/logistics.jpg",
    stats: { speed: "2x", delivery: "99.9%" }
  },
  {
    id: "finance",
    title: "Finance",
    icon: Landmark,
    challenges: "Slow closing processes and lack of financial transparency.",
    sapSolutions: "SAP S/4HANA Finance, SAP Central Finance, SAP BPC.",
    benefits: "50% faster financial closing, automated regulatory reporting.",
    capabilities: "Automated Closing, Treasury Management, Financial Planning.",
    image: "/industries/finance.jpg",
    stats: { accuracy: "100%", audit: "0-days" }
  },
  {
    id: "banking",
    title: "Banking",
    icon: Bank,
    challenges: "Legacy core banking systems and evolving cybersecurity threats.",
    sapSolutions: "SAP for Banking, SAP Financial Services Data Management.",
    benefits: "Modernized core banking, enhanced security and compliance.",
    capabilities: "Digital Banking, Risk Management, Cybersecurity, Payments.",
    image: "/industries/banking.jpg",
    stats: { users: "5M+", uptime: "99.99%" }
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    icon: Droplets,
    challenges: "Volatile market prices and complex asset management.",
    sapSolutions: "SAP for Oil & Gas (Upstream/Downstream), SAP Asset Manager.",
    benefits: "Optimized asset lifecycle, 25% reduction in maintenance costs.",
    capabilities: "Upstream Operations, Hydrocarbon Management, Asset Health.",
    image: "/industries/oil-gas.jpg",
    stats: { output: "+12%", safety: "Zero-Incidents" }
  },
  {
    id: "automotive",
    title: "Automotive",
    icon: Car,
    challenges: "Rapid shift to EVs and complex global supplier networks.",
    sapSolutions: "SAP for Automotive, SAP Catena-X, SAP Product Lifecycle.",
    benefits: "Accelerated R&D cycles, resilient and transparent supply chains.",
    capabilities: "EV Transformation, Supplier Network, PLM, Connected Cars.",
    image: "/industries/automotive.jpg",
    stats: { innovation: "40%", time: "-30%" }
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    challenges: "Outdated student information systems and manual enrollment.",
    sapSolutions: "SAP Student Lifecycle Management, SAP SuccessFactors.",
    benefits: "Modernized student experience, 35% increase in enrollment efficiency.",
    capabilities: "Student Lifecycle, E-Learning, Campus Management.",
    image: "/industries/education.jpg",
    stats: { students: "500K+", digital: "100%" }
  },
  {
    id: "telecom",
    title: "Telecommunications",
    icon: Radio,
    challenges: "High churn rates and complex billing for 5G services.",
    sapSolutions: "SAP BRIM, SAP Customer Experience, SAP Field Service.",
    benefits: "Reduced churn by 20%, automated multi-tier billing models.",
    capabilities: "Subscription Billing, 5G Monetization, Field Service.",
    image: "/industries/telecom.jpg",
    stats: { churn: "-20%", revenue: "+18%" }
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: Building2,
    challenges: "Fragmented property data and inefficient lease management.",
    sapSolutions: "SAP RE-FX, SAP Cloud for Real Estate, SAP Asset Management.",
    benefits: "Optimized portfolio performance, 25% better space utilization.",
    capabilities: "Portfolio Management, Lease Accounting, Smart Buildings.",
    image: "/industries/real-estate.jpg",
    stats: { occupancy: "96%", roi: "220%" }
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: Globe,
    challenges: "Scaling for peak traffic and complex global order fulfillment.",
    sapSolutions: "SAP Commerce Cloud, SAP Emarsys, SAP Upscale Commerce.",
    benefits: "100% uptime during peaks, personalized shopping at scale.",
    capabilities: "AI-Personalization, Global Scale, Order Management.",
    image: "/industries/ecommerce.jpg",
    stats: { peak: "100x", personalization: "+30%" }
  }
];
