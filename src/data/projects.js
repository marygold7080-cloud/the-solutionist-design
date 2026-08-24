// Portfolio items. Images are real project assets — swap the `image` URL to replace.
export const projects = [
  {
    slug: "crystal-clear-carpet-cleaning-website",
    title: "Crystal Clear Carpet Cleaning Website",
    category: "Web Development",
    image: "/projects/project-5.png",
    alt: "Crystal Clear Carpet cleaning service website design by The Solutionist Design",
    excerpt:
      "A service website for a carpet cleaning business, built around local search visibility and a single clear booking action.",
    serviceSlug: "web-development",
    scope: ["Website design", "Front-end development", "On-page SEO", "Enquiry form"],
    overview: [
      "Crystal Clear is a residential and commercial carpet cleaning service. The brief was a website that explains the service range quickly and makes requesting a quote the obvious next step on every screen.",
      "We designed a clean service-led layout with the quote action repeated at natural decision points, structured the pages around the services customers search for, and built it to load quickly on mobile connections.",
    ],
    approach: [
      "Service pages structured around real search intent for each cleaning type",
      "Quote request form placed in the header, hero and after every service block",
      "Photography-led layout so the quality of work carries the message",
      "Semantic markup and metadata for local search visibility",
    ],
  },
  {
    slug: "luxury-handbag-ecommerce-store",
    title: "Luxury Handbag E-Commerce Store",
    category: "E-Commerce",
    image: "/projects/project-7.png",
    alt: "Luxury handbag e-commerce store design by The Solutionist Design",
    excerpt:
      "An online store for a premium handbag range, with product presentation and a short checkout designed to hold buyer confidence.",
    serviceSlug: "e-commerce-development",
    scope: ["Store design", "Product templates", "Checkout flow", "Merchandising"],
    overview: [
      "Premium products need presentation that matches the price. The store was designed around large product imagery, generous white space and detail content that answers material and sizing questions before they become hesitation.",
      "The checkout was kept deliberately short, with trust signals and delivery information visible at the point of payment rather than buried in a policy page.",
    ],
    approach: [
      "Product pages built around large imagery and clear detail sections",
      "Collection filtering suited to a curated range rather than a huge catalogue",
      "Short checkout with delivery and returns information in view",
      "Merchandising blocks the team can update without a developer",
    ],
  },
  {
    slug: "logo-design-creative-campaign",
    title: "Logo Design Creative Set",
    category: "Branding & Identity",
    image: "/projects/project-6.png",
    alt: "Logo designing promotional creative by The Solutionist Design",
    excerpt:
      "Identity and promotional creative work, delivered as a reusable set of marks, colour rules and social templates.",
    serviceSlug: "logo-designs",
    scope: ["Logo design", "Colour & type system", "Social templates", "Guidelines"],
    overview: [
      "The work covered identity design and the promotional creative built on top of it, so the brand reads consistently from logo through to campaign assets.",
      "Beyond the marks themselves, we supplied the practical layer: export sets for every context, colour and type rules, and social templates the client's team uses to produce their own posts.",
    ],
    approach: [
      "Marks tested at small sizes and on light and dark backgrounds",
      "Colour and typography defined as a reusable system",
      "Editable social and promotional templates handed over",
      "Short guidelines document so new assets stay on brand",
    ],
  },
  {
    slug: "brand-campaign-design",
    title: "Brand Campaign Design",
    category: "Branding & Marketing",
    image: "/projects/project-8.png",
    alt: "Brand campaign design project by The Solutionist Design",
    excerpt:
      "A campaign design set carrying one visual idea consistently across digital placements and printed material.",
    serviceSlug: "digital-marketing",
    scope: ["Campaign concept", "Creative production", "Channel adaptation"],
    overview: [
      "A campaign only builds recognition if the same idea survives every format it appears in. We developed one visual concept and adapted it across the sizes and channels the campaign needed.",
      "Each placement was produced from a shared master layout, which kept the look consistent and made later variations quick to produce.",
    ],
    approach: [
      "Single visual concept adapted rather than redesigned per channel",
      "Master layouts sized for each placement in advance",
      "Copy hierarchy kept readable at small placement sizes",
      "Editable source files handed over for future variations",
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);