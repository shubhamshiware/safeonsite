import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "Careers",
  description: "Join our team of expert SAP developers and consultants."
});

export default function CareersPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Careers</h1>
    </div>
  );
}
