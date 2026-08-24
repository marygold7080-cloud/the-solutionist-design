import Seo from "@/components/Seo";
import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowWeWork from "@/components/sections/HowWeWork";
import FeaturedWork from "@/components/sections/FeaturedWork";
import StatsBand from "@/components/sections/StatsBand";
import AiSpotlight from "@/components/sections/AiSpotlight";
import BrandingSpotlight from "@/components/sections/BrandingSpotlight";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/data/site";
import { services } from "@/data/services";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: site.logo,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: "US",
      },
      sameAs: site.social.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebPage",
      url: `${site.url}/`,
      name: `${site.name} | Digital Agency for Web, AI and Branding`,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
    ...services.map((s) => ({
      "@type": "Service",
      name: s.title,
      serviceType: s.title,
      description: s.summary,
      url: `${site.url}/services/${s.slug}`,
      provider: { "@id": `${site.url}/#organization` },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <Seo
        title="The Solutionist Design | Web Development, AI Automation & Branding Agency"
        description="The Solutionist Design is a one-stop digital partner delivering web and app development, AI automation, branding and digital marketing for growing businesses."
        path="/"
        schema={schema}
      />
      <Hero />
      <AboutIntro />
      <WhatWeDo />
      <WhyChooseUs />
      <HowWeWork />
      <FeaturedWork />
      <StatsBand />
      <AiSpotlight />
      <BrandingSpotlight />
      <BlogPreview />
      <CTASection />
      <ContactSection />
    </>
  );
}