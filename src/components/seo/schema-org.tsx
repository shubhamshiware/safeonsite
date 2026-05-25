import { siteConfig } from "@/constants/site";

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "author": {
      "@type": "Organization",
      "name": "SafeOnSite",
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`
      },
      "sameAs": [
        siteConfig.links.twitter,
        siteConfig.links.linkedin,
        siteConfig.links.github
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
