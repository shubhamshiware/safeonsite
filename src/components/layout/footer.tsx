import Link from "next/link";
import { siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            SAFEONSITE
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li><Link href="/services" className="hover:text-foreground">SAP UI5/Fiori</Link></li>
            <li><Link href="/services" className="hover:text-foreground">SAP Integration</Link></li>
            <li><Link href="/services" className="hover:text-foreground">Business Automation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Connect</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li><a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
            <li><a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} SafeOnSite. All rights reserved.</p>
      </div>
    </footer>
  );
}
