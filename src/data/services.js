// All 10 service pages live here. Edit copy freely — pages render from this data.
export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    category: "Web Development",
    seoTitle: "Web Development Services | The Solutionist Design",
    metaDescription:
      "Custom website design and development for businesses — fast, accessible, search-friendly sites built to convert. Talk to The Solutionist Design.",
    tagline: "Websites engineered for speed, clarity and conversion",
    summary:
      "Web development at The Solutionist Design covers the design and engineering of business websites — from information architecture and interface design through to build, launch and ongoing improvement.",
    intro: [
      "A business website is the first thing most customers judge you on. We design and build sites that load quickly, read clearly on any screen, and guide visitors toward a single obvious next step.",
      "Every project starts with the commercial goal — enquiries, bookings, sign-ups or sales — then works backwards into structure, content and interface. The result is a site your team can actually maintain, not a template you outgrow in a year.",
    ],
    forWho:
      "Businesses replacing a dated or slow website, teams launching a new brand, and companies whose current site looks acceptable but generates very few enquiries.",
    problems: [
      "Slow pages and poor Core Web Vitals losing traffic before it converts",
      "A site that looks broken on phones and tablets",
      "No clear path from landing page to enquiry",
      "Content nobody on the team can update without a developer",
    ],
    capabilities: [
      { title: "UX & information architecture", desc: "Page structure, user journeys and wireframes mapped to how your customers actually decide." },
      { title: "Interface design", desc: "Custom visual design built on your brand — type, colour, spacing and components, documented for reuse." },
      { title: "Front-end engineering", desc: "Semantic, accessible HTML with responsive layouts and measured performance budgets." },
      { title: "CMS integration", desc: "Editable content areas so marketing can publish without touching code." },
      { title: "Technical SEO foundations", desc: "Clean URLs, metadata, structured data, sitemaps and crawlable markup from day one." },
      { title: "Analytics & tracking", desc: "Goal and event tracking so you can see which pages earn enquiries." },
    ],
    benefits: [
      "Faster load times and better Core Web Vitals",
      "Consistent experience across desktop, tablet and mobile",
      "Search-ready structure and metadata on every page",
      "Design system your team can extend",
      "Clear conversion paths on every template",
    ],
    process: [
      { title: "Discovery", desc: "We learn your offer, audience and goals, then audit the current site and competitors." },
      { title: "Architecture", desc: "Sitemap, page structure and wireframes agreed before any visual design begins." },
      { title: "Design", desc: "Key templates designed to your brand, reviewed on real device widths." },
      { title: "Build", desc: "Front-end engineering, CMS wiring, accessibility and performance checks." },
      { title: "Launch & iterate", desc: "Go live with analytics in place, then improve based on real behaviour." },
    ],
    faqs: [
      { q: "How long does a business website take?", a: "Most marketing sites run four to eight weeks end to end, depending on page count and how quickly content and feedback arrive." },
      { q: "Can we edit the site ourselves after launch?", a: "Yes. Content areas are wired to a CMS and we hand over a short walkthrough so your team can publish independently." },
    ],
    related: ["wordpress-development", "e-commerce-development", "web-application-development"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    category: "Web Development",
    seoTitle: "WordPress & CMS Development Services | The Solutionist Design",
    metaDescription:
      "Custom WordPress theme development, CMS solutions, speed optimisation and maintenance for business websites by The Solutionist Design.",
    tagline: "Custom WordPress builds, not bloated page builders",
    summary:
      "We build and maintain WordPress websites with custom themes, structured editing experiences and the performance discipline that off-the-shelf builder sites usually lack.",
    intro: [
      "WordPress powers a huge share of the web, and most of it is slower and harder to edit than it needs to be. We build clean custom themes with clearly defined blocks, so editors get flexibility without being able to break the design.",
      "We also take over existing installs — cleaning up plugin sprawl, fixing speed problems, hardening security and making the editing experience make sense again.",
    ],
    forWho:
      "Marketing teams that publish often, businesses on a bloated builder theme, and owners of a WordPress site that has become slow, fragile or impossible to update.",
    problems: [
      "Plugin overload causing conflicts and slow admin",
      "Page builder layouts that break whenever content changes",
      "No staging environment, so every change is a risk",
      "Security and update neglect",
    ],
    capabilities: [
      { title: "Custom theme development", desc: "Purpose-built themes with reusable blocks mapped to your design system." },
      { title: "Block editor configuration", desc: "Locked patterns and content models that keep pages on-brand." },
      { title: "Migration & rebuilds", desc: "Moving from builders or legacy themes without losing URLs or rankings." },
      { title: "Performance tuning", desc: "Caching, image handling, asset trimming and database cleanup." },
      { title: "Security & maintenance", desc: "Update routines, backups, monitoring and staging workflows." },
      { title: "WooCommerce & integrations", desc: "Commerce, CRM and form integrations wired into your stack." },
    ],
    benefits: [
      "Editing that is fast and predictable for non-technical staff",
      "Fewer plugins, fewer conflicts, less risk",
      "Measurably faster pages",
      "Safe deployments through staging",
      "Rankings preserved through migrations",
    ],
    process: [
      { title: "Audit", desc: "Review of theme, plugins, performance, security and content model." },
      { title: "Content modelling", desc: "Define post types, fields and blocks around how you publish." },
      { title: "Theme build", desc: "Custom theme engineered to your design, block by block." },
      { title: "Migration", desc: "Content moved, redirects mapped, staging reviewed before go-live." },
      { title: "Care plan", desc: "Ongoing updates, backups and monitoring." },
    ],
    faqs: [
      { q: "Do you work with existing WordPress sites?", a: "Yes — audits, rescues, speed work and feature development on existing installs are a large part of what we do." },
      { q: "Will migrating hurt our SEO?", a: "Not when redirects, metadata and URL structure are mapped properly. That mapping is part of every migration we run." },
    ],
    related: ["web-development", "e-commerce-development", "digital-marketing"],
  },
  {
    slug: "e-commerce-development",
    title: "E-Commerce Development",
    category: "Web Development",
    seoTitle: "E-Commerce Development Services | The Solutionist Design",
    metaDescription:
      "Online store design and development — catalogue, checkout, payments and integrations built to increase conversion. The Solutionist Design.",
    tagline: "Stores built around the buying decision",
    summary:
      "E-commerce development covers the design and build of online stores: catalogue structure, product pages, cart and checkout, payments, and the integrations that keep stock and orders in sync.",
    intro: [
      "Most online stores lose revenue in the same three places: product pages that do not answer questions, a checkout with too much friction, and search or filtering that hides the catalogue.",
      "We design and build stores that fix those specific problems, then connect the back office so orders, stock and fulfilment do not need manual attention.",
    ],
    forWho:
      "Retailers and brands selling physical or digital products, businesses moving from marketplaces to their own store, and stores with traffic but weak conversion.",
    problems: [
      "High cart abandonment from a long or confusing checkout",
      "Product pages that leave buyers unsure",
      "Stock and order data living in disconnected systems",
      "Slow category pages on mobile",
    ],
    capabilities: [
      { title: "Store design", desc: "Category, product, cart and checkout templates designed for clarity and trust." },
      { title: "Catalogue architecture", desc: "Variants, collections, filtering and on-site search that scale with your range." },
      { title: "Checkout & payments", desc: "Streamlined checkout with the payment and tax setup your market needs." },
      { title: "Back-office integration", desc: "Inventory, ERP, shipping and accounting connections." },
      { title: "Merchandising tools", desc: "Promotions, bundles, coupons and upsell placements." },
      { title: "Conversion optimisation", desc: "Funnel measurement and iterative improvements after launch." },
    ],
    benefits: [
      "Shorter path from product to purchase",
      "Fewer abandoned carts",
      "Accurate stock without manual updates",
      "Merchandising your team controls",
      "Reliable performance during peak campaigns",
    ],
    process: [
      { title: "Commercial review", desc: "Catalogue, margins, fulfilment and current funnel data." },
      { title: "Platform decision", desc: "Choosing the right platform for range, complexity and team skills." },
      { title: "Design", desc: "Templates designed against real product data, not placeholders." },
      { title: "Build & integrate", desc: "Store build, payments, shipping and back-office wiring." },
      { title: "Launch & optimise", desc: "Soft launch, funnel measurement, then targeted improvements." },
    ],
    faqs: [
      { q: "Which platform do you recommend?", a: "It depends on catalogue complexity and who maintains the store. We recommend after reviewing your products, fulfilment and team, rather than defaulting to one platform." },
      { q: "Can you migrate an existing store?", a: "Yes, including products, customers, orders and URL redirects." },
    ],
    related: ["wordpress-development", "web-development", "digital-marketing"],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    category: "Web Development",
    seoTitle: "Web Application Development Services | The Solutionist Design",
    metaDescription:
      "Custom web apps, dashboards, portals and internal tools designed and engineered by The Solutionist Design.",
    tagline: "Software that replaces the spreadsheet",
    summary:
      "Web application development covers custom software delivered in the browser — client portals, internal tools, dashboards and platforms with real user roles, data and workflow.",
    intro: [
      "When a business outgrows spreadsheets and shared inboxes, the fix is usually a focused application rather than another subscription. We design and build tools around the way your team already works.",
      "We start small on purpose: the core workflow first, in production, used by real people — then extend once it is proven.",
    ],
    forWho:
      "Operations teams juggling spreadsheets, service businesses needing client portals, and companies whose process is too specific for off-the-shelf software.",
    problems: [
      "Critical data spread across spreadsheets with no single source of truth",
      "Manual handoffs that stall work and hide errors",
      "No visibility into pipeline, capacity or status",
      "Tools that do not match how the team actually works",
    ],
    capabilities: [
      { title: "Product discovery", desc: "Mapping workflows, roles and data before committing to a build." },
      { title: "UX for complex data", desc: "Tables, forms, filters and dashboards designed for daily heavy use." },
      { title: "Application engineering", desc: "Front end, data model, business logic and secure APIs." },
      { title: "Authentication & permissions", desc: "Roles and record-level access so people see only what they should." },
      { title: "Third-party integrations", desc: "Connecting CRM, accounting, payments and internal systems." },
      { title: "Reporting", desc: "Live dashboards and exports that replace manual reporting." },
    ],
    benefits: [
      "One reliable source of truth",
      "Manual steps removed from daily operations",
      "Clear visibility for managers",
      "Access control appropriate to each role",
      "A foundation you can extend feature by feature",
    ],
    process: [
      { title: "Workflow mapping", desc: "Sessions with the people doing the work to document the real process." },
      { title: "Prototype", desc: "Clickable screens to validate the flow before engineering." },
      { title: "Core build", desc: "The primary workflow built, tested and shipped to a pilot group." },
      { title: "Rollout", desc: "Data migration, training and full team adoption." },
      { title: "Iteration", desc: "Prioritised improvements based on usage." },
    ],
    faqs: [
      { q: "Can we start with a small version?", a: "That is our default. One core workflow in production beats a large specification that takes months to see daylight." },
      { q: "Do you integrate with our existing systems?", a: "Yes, wherever they expose an API or export. Integration scope is agreed during discovery." },
    ],
    related: ["mobile-app-development", "ai-automation", "web-development"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Web Development",
    seoTitle: "Mobile App Development Services | The Solutionist Design",
    metaDescription:
      "iOS and Android app design and development — from concept and prototype to store launch. The Solutionist Design.",
    tagline: "Apps people keep on the home screen",
    summary:
      "Mobile app development covers product design and engineering for iOS and Android, including store submission and post-launch iteration.",
    intro: [
      "A mobile app earns its place when it does something the web cannot do as well — repeat use, notifications, offline access, or a device capability like the camera or location.",
      "We help decide whether an app is genuinely the right answer, then design and build it around a small number of things it must do exceptionally well.",
    ],
    forWho:
      "Businesses with a service customers use repeatedly, teams needing apps for field staff, and founders validating a product idea.",
    problems: [
      "Mobile experiences that feel like a shrunken website",
      "No way to reach customers between visits",
      "Field teams without offline access to their tools",
      "Store rejections and stalled releases",
    ],
    capabilities: [
      { title: "Concept & scoping", desc: "Defining the core job of the app and what to leave out of version one." },
      { title: "Mobile UX & UI", desc: "Native patterns, thumb-friendly layouts and clear onboarding." },
      { title: "Cross-platform build", desc: "One codebase for iOS and Android where it makes commercial sense." },
      { title: "APIs & sync", desc: "Backends, offline handling and reliable data sync." },
      { title: "Push notifications", desc: "Messaging that supports retention without becoming noise." },
      { title: "Store launch", desc: "Assets, listings, review preparation and release management." },
    ],
    benefits: [
      "A focused version one you can ship and learn from",
      "Consistent experience across both platforms",
      "Direct channel to your customers",
      "Offline capability where the job needs it",
      "Smoother store review and release cycles",
    ],
    process: [
      { title: "Definition", desc: "Audience, core job, platforms and success measures." },
      { title: "Prototype", desc: "Interactive flows tested on a device before build." },
      { title: "Build", desc: "App and API engineering in reviewable increments." },
      { title: "Beta", desc: "TestFlight and Play testing with a real user group." },
      { title: "Launch & iterate", desc: "Store release, then improvements based on analytics and reviews." },
    ],
    faqs: [
      { q: "Do we need native or cross-platform?", a: "Cross-platform suits most business apps. Native makes sense for heavy device or performance demands — we advise during scoping." },
      { q: "Do you handle store submission?", a: "Yes, including listing assets, metadata and review responses." },
    ],
    related: ["web-application-development", "web-development", "branding-and-identity"],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "Automation with AI",
    seoTitle: "AI Automation & Workflow Services | The Solutionist Design",
    metaDescription:
      "AI workflow automation that removes repetitive work — document handling, routing, data entry and reporting. The Solutionist Design.",
    tagline: "Remove the repetitive work, keep the judgement",
    summary:
      "AI automation applies language models and workflow tooling to the repetitive parts of a business process — reading documents, classifying requests, moving data between systems and drafting routine output.",
    intro: [
      "Most teams lose hours a week to work that is necessary but mechanical: retyping invoice data, sorting enquiries, chasing statuses, assembling the same report.",
      "We identify those tasks, automate the mechanical steps, and leave humans reviewing and deciding. Every automation is built with logging and a fallback so nothing disappears silently.",
    ],
    forWho:
      "Operations, finance, support and admin teams handling repeated high-volume tasks, and businesses whose growth currently means hiring for manual work.",
    problems: [
      "Manual data entry between systems that do not talk",
      "Enquiries and tickets sitting unrouted",
      "Documents and invoices processed by hand",
      "Reports rebuilt manually every week",
    ],
    capabilities: [
      { title: "Process discovery", desc: "Mapping tasks by volume and effort to find automation worth building." },
      { title: "Document processing", desc: "Extracting structured data from invoices, forms, contracts and emails." },
      { title: "Workflow orchestration", desc: "Multi-step automations with branching, approvals and retries." },
      { title: "System integration", desc: "Connecting CRM, accounting, storage, email and internal tools." },
      { title: "Human-in-the-loop review", desc: "Approval steps and confidence thresholds on anything consequential." },
      { title: "Monitoring", desc: "Logs, alerts and reporting on what ran, what failed and time saved." },
    ],
    benefits: [
      "Hours returned to the team each week",
      "Fewer transcription and routing errors",
      "Faster response and turnaround times",
      "Volume growth without proportional headcount",
      "An audit trail for every automated action",
    ],
    process: [
      { title: "Audit", desc: "Shadow the process, measure volume and time, shortlist candidates." },
      { title: "Pilot", desc: "Automate one task end to end and measure the result." },
      { title: "Harden", desc: "Add error handling, review steps, logging and alerts." },
      { title: "Expand", desc: "Roll the pattern out to adjacent tasks." },
      { title: "Maintain", desc: "Monitor accuracy and adjust as the process changes." },
    ],
    faqs: [
      { q: "What should we automate first?", a: "The task that is highest volume, most rule-based and least sensitive. We shortlist candidates in the audit rather than guessing." },
      { q: "Does AI make decisions on its own?", a: "Only where the risk is low. Consequential steps keep a human approval point by design." },
    ],
    related: ["ai-chatbots-and-ai-agents", "generative-ai-integration", "web-application-development"],
  },
  {
    slug: "ai-chatbots-and-ai-agents",
    title: "AI Chatbots & AI Agents",
    category: "Automation with AI",
    seoTitle: "AI Chatbots & AI Agents Development | The Solutionist Design",
    metaDescription:
      "Custom AI chatbots and AI agents grounded in your own content — support, qualification and internal assistants by The Solutionist Design.",
    tagline: "Assistants that answer from your knowledge, not guesswork",
    summary:
      "We build AI chatbots and agents grounded in your own documentation and data — customer support assistants, lead qualification bots and internal knowledge assistants that can also take action in your systems.",
    intro: [
      "A chatbot is only useful if it is accurate. We ground assistants in your real content — help articles, product data, policies — so answers come from your material with sources, not from invention.",
      "Agents go a step further: alongside answering, they can check an order, book a slot, create a ticket or update a record, within permissions you define.",
    ],
    forWho:
      "Support teams with repetitive question volume, sales teams qualifying inbound enquiries, and internal teams whose knowledge is scattered across documents.",
    problems: [
      "The same questions answered manually every day",
      "Slow first response outside business hours",
      "Enquiries qualified late or not at all",
      "Staff unable to find internal answers quickly",
    ],
    capabilities: [
      { title: "Knowledge grounding", desc: "Your documents and data indexed so answers cite real sources." },
      { title: "Website & app chat", desc: "On-brand chat widgets embedded in your site or product." },
      { title: "Messaging channels", desc: "Deployment to WhatsApp, Messenger, Slack and email where relevant." },
      { title: "Agent tools & actions", desc: "Permissioned actions such as lookups, bookings and ticket creation." },
      { title: "Escalation to humans", desc: "Clean handoff with full conversation context when confidence drops." },
      { title: "Transcript analytics", desc: "Reporting on volume, resolution and unanswered questions." },
    ],
    benefits: [
      "Instant answers at any hour",
      "Deflection of routine support volume",
      "Leads qualified while intent is high",
      "Answers traceable to your own content",
      "Insight into what customers actually ask",
    ],
    process: [
      { title: "Scope", desc: "Decide which questions and actions are in scope, and what is not." },
      { title: "Knowledge base", desc: "Gather, clean and index the source content." },
      { title: "Build", desc: "Assistant behaviour, tone, tools and escalation rules." },
      { title: "Evaluate", desc: "Test against a question set and tune before release." },
      { title: "Launch & improve", desc: "Deploy, review transcripts weekly, close knowledge gaps." },
    ],
    faqs: [
      { q: "How do you stop it inventing answers?", a: "Responses are grounded in your indexed content, and the assistant is instructed to escalate rather than guess when it lacks a source." },
      { q: "What is the difference between a chatbot and an agent?", a: "A chatbot answers questions. An agent also performs permitted actions in your systems, such as looking up an order or creating a ticket." },
    ],
    related: ["ai-automation", "generative-ai-integration", "web-application-development"],
  },
  {
    slug: "generative-ai-integration",
    title: "Generative AI Integration",
    category: "Automation with AI",
    seoTitle: "Generative AI Integration Services | The Solutionist Design",
    metaDescription:
      "Integrate generative AI into your product or operations — drafting, summarising, search and content workflows by The Solutionist Design.",
    tagline: "AI built into the product, not bolted beside it",
    summary:
      "Generative AI integration means embedding model capabilities — drafting, summarising, classifying, semantic search — directly into your existing product, website or internal tools.",
    intro: [
      "The value of generative AI usually shows up inside an existing workflow: a summary where someone used to read forty pages, a first draft where someone used to start from a blank page, a search that understands meaning rather than keywords.",
      "We integrate those capabilities into software you already run, with attention to cost, latency, evaluation and privacy.",
    ],
    forWho:
      "Software teams adding AI features, content and marketing teams producing at volume, and businesses sitting on large amounts of unstructured text.",
    problems: [
      "Staff spending hours reading and summarising documents",
      "Content production bottlenecked at the first draft",
      "Keyword search that misses relevant material",
      "AI experiments that never reach production",
    ],
    capabilities: [
      { title: "Use-case selection", desc: "Identifying where generation genuinely beats the current method." },
      { title: "Model integration", desc: "Provider selection, prompt design and API integration into your stack." },
      { title: "Retrieval-augmented generation", desc: "Grounding output in your own documents and data." },
      { title: "Semantic search", desc: "Meaning-based search and recommendations across your content." },
      { title: "Evaluation & guardrails", desc: "Test sets, quality scoring, review steps and safety limits." },
      { title: "Cost & latency control", desc: "Model routing, caching and prompt efficiency to keep spend predictable." },
    ],
    benefits: [
      "Drafting and summarising time cut sharply",
      "Search that surfaces the right material",
      "Measured output quality rather than vibes",
      "Predictable running costs",
      "Features shipped to production, not stuck in demos",
    ],
    process: [
      { title: "Opportunity mapping", desc: "Workshop to rank candidate use cases by value and feasibility." },
      { title: "Prototype", desc: "One use case built against your real data." },
      { title: "Evaluation", desc: "Quality measured against a defined test set." },
      { title: "Integration", desc: "Shipped into the product with monitoring and guardrails." },
      { title: "Optimisation", desc: "Tuning quality, latency and cost after launch." },
    ],
    faqs: [
      { q: "Will our data be used to train models?", a: "We use configurations and providers that exclude your data from training, and we agree data handling in writing before any integration." },
      { q: "How do you keep AI costs under control?", a: "Through model routing, caching, prompt efficiency and monitoring per-feature spend from the start." },
    ],
    related: ["ai-chatbots-and-ai-agents", "ai-automation", "web-application-development"],
  },
  {
    slug: "branding-and-identity",
    title: "Branding & Identity",
    category: "Branding & Marketing",
    seoTitle: "Branding, Identity & Graphic Design Services | The Solutionist Design",
    metaDescription:
      "Brand strategy, logo and identity design, graphic design and brand guidelines from The Solutionist Design.",
    tagline: "A brand that looks the same everywhere it appears",
    summary:
      "Branding and identity covers positioning, naming support, logo and identity systems, graphic design and the guidelines that keep everything consistent across web, print and social.",
    intro: [
      "Brand is not just a logo — it is the repeated impression left by your visuals, words and behaviour. When those drift, the business looks smaller and less certain than it is.",
      "We define the positioning, build a complete identity system around it, and document it so every future asset stays on brand whoever produces it.",
    ],
    forWho:
      "New businesses establishing an identity, companies whose brand no longer matches what they sell, and teams producing inconsistent materials across channels.",
    problems: [
      "Visuals that differ between website, social and print",
      "A logo that fails at small sizes or on dark backgrounds",
      "No agreed messaging, so everyone describes the business differently",
      "Design decisions restarted from scratch for every asset",
    ],
    capabilities: [
      { title: "Brand strategy", desc: "Positioning, audience, value proposition and messaging framework." },
      { title: "Logo & identity design", desc: "Primary and secondary marks, lockups and full asset export set." },
      { title: "Visual system", desc: "Colour, typography, layout, iconography and imagery direction." },
      { title: "Graphic design", desc: "Social templates, decks, brochures, packaging and campaign creative." },
      { title: "Brand guidelines", desc: "Clear rules and examples so anyone can apply the brand correctly." },
      { title: "Rollout", desc: "Applying the identity across web, print, social and internal materials." },
    ],
    benefits: [
      "Instant recognition across every channel",
      "Faster design production from ready templates",
      "Consistent messaging from the whole team",
      "A more credible presence in your market",
      "Assets that work at any size or background",
    ],
    process: [
      { title: "Immersion", desc: "Stakeholder interviews, market review and audit of current assets." },
      { title: "Strategy", desc: "Positioning and messaging agreed before design starts." },
      { title: "Identity design", desc: "Concept routes, refinement and a complete visual system." },
      { title: "Guidelines", desc: "Documentation, templates and asset library handover." },
      { title: "Rollout", desc: "Applying the new identity across your channels." },
    ],
    faqs: [
      { q: "Do you offer logo design on its own?", a: "Yes, though a logo works best delivered with at least a minimal system — colour, type and usage rules — so it stays consistent." },
      { q: "Can you refresh a brand without starting over?", a: "Often, yes. An evolution keeps recognition while fixing what no longer works." },
    ],
    related: ["digital-marketing", "web-development", "mobile-app-development"],
  },
  {
    slug: "logo-designs",
    title: "Logo Designs",
    category: "Branding & Marketing",
    seoTitle: "Custom Logo Design & Vector Mark Services | The Solutionist Design",
    metaDescription:
      "Custom, professional logo design, icon systems, vector marks, and brand assets crafted to make your business memorable. The Solutionist Design.",
    tagline: "Distinctive, scalable logos that define your brand identity",
    summary:
      "Logo design at The Solutionist Design covers the complete creation of unique, memorable brand marks, emblems, typography lockups, and icon systems tailored to make your business stand out across print and digital media.",
    intro: [
      "A logo is the single most recognizable visual signature of your business. We design custom logos that distill your brand promise into a clean, enduring mark that looks exceptional whether scaled onto a favicon, mobile screen, storefront, or billboard.",
      "Every logo design project is grounded in your market positioning, target audience, and competitive landscape. We deliver complete vector source files, color variations, monochrome treatments, and clear usage rules.",
    ],
    forWho:
      "New businesses establishing their identity, established companies rebranding for growth, and businesses looking for modern, high-precision vector logos and marks.",
    problems: [
      "Generic template logos that blend into competitors",
      "Low-resolution pixelated files that blur when scaled",
      "Marks that fail on dark backgrounds or mobile screens",
      "Inconsistent lockups and missing source vector files",
    ],
    capabilities: [
      { title: "Custom Concept Exploration", desc: "Multiple unique design directions developed from thorough brand research." },
      { title: "Vector Marks & Emblems", desc: "Mathematically balanced, infinite-resolution vector artwork in SVG, EPS, AI, and PDF." },
      { title: "Typography & Wordmarks", desc: "Custom-crafted letterforms, font pairing, and wordmark kerning." },
      { title: "Icon & Favicon Systems", desc: "App icons, favicons, social avatars, and simplified marks for small displays." },
      { title: "Color & Monochrome Variations", desc: "Light, dark, full-color, gold metallic, single-color, and inverted variations." },
      { title: "Export Kits & Brand Sheet", desc: "Organized asset packs with print (CMYK) and digital (RGB) files ready for immediate use." },
    ],
    benefits: [
      "Instantly recognizable and distinctive brand presence",
      "Pixel-perfect scaling from 16px favicons to building signage",
      "Full ownership of all vector source files and copyright",
      "Versatile assets for web, social media, print, packaging, and merchandise",
      "Future-proof design that does not go out of style",
    ],
    process: [
      { title: "Discovery & Brief", desc: "We understand your vision, market positioning, target audience, and design preferences." },
      { title: "Concept Design", desc: "Our design team crafts distinct concept routes exploring different metaphors and styles." },
      { title: "Refinement", desc: "We refine the chosen direction with precision grid alignment, kerning, and color testing." },
      { title: "Testing Across Media", desc: "We test the mark on light/dark backgrounds, digital screens, and print mockups." },
      { title: "Handover & Asset Kit", desc: "Delivery of the complete vector suite, raster exports, color codes, and quick-use guide." },
    ],
    faqs: [
      { q: "What files will I receive with my logo design?", a: "You receive industry-standard vector files (AI, EPS, SVG, PDF) and high-res raster files (PNG with transparent backgrounds, JPG) in RGB for screen and CMYK for print." },
      { q: "How many logo concepts do you present?", a: "We typically present 3 to 5 distinct conceptual directions during the initial review, and iterate until the final mark is perfect." },
      { q: "Do I get full copyright and commercial ownership?", a: "Yes. Once the final logo files are delivered, 100% full commercial copyright and ownership belong to you." },
    ],
    related: ["branding-and-identity", "digital-marketing", "web-development"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Branding & Marketing",
    seoTitle: "Digital Marketing & Social Media Services | The Solutionist Design",
    metaDescription:
      "SEO, paid media, content and social media strategy built around measurable enquiries and sales. The Solutionist Design.",
    tagline: "Marketing measured in enquiries, not impressions",
    summary:
      "Digital marketing covers search optimisation, paid media, content, email and social media strategy — planned and reported against enquiries and revenue rather than vanity metrics.",
    intro: [
      "Marketing works when it is joined up: the channel that creates demand, the page that receives it, and the tracking that proves which of the two earned the enquiry.",
      "We build that loop. Fewer channels done properly, measured honestly, adjusted monthly on what the data shows.",
    ],
    forWho:
      "Businesses relying entirely on referrals, teams running ads without clear return, and companies publishing content that generates no measurable pipeline.",
    problems: [
      "No visibility into which channels produce enquiries",
      "Ad spend without a tracked cost per lead",
      "Content published with no search demand behind it",
      "Social activity that never converts",
    ],
    capabilities: [
      { title: "Search optimisation", desc: "Technical SEO, keyword and intent mapping, on-page work and internal linking." },
      { title: "Paid media", desc: "Search and social campaigns with conversion tracking and clear cost per lead." },
      { title: "Content strategy", desc: "Topic clusters built on real search demand, plus production support." },
      { title: "Social media strategy", desc: "Channel selection, content pillars, calendar and on-brand templates." },
      { title: "Email & retention", desc: "Nurture sequences and campaigns for existing lists." },
      { title: "Analytics & reporting", desc: "Goal tracking and plain-English monthly reporting." },
    ],
    benefits: [
      "Clear picture of what each channel returns",
      "Lower cost per qualified enquiry over time",
      "Content that earns search traffic",
      "Consistent, on-brand social presence",
      "Decisions based on tracked data",
    ],
    process: [
      { title: "Baseline", desc: "Audit analytics, search visibility, current campaigns and tracking gaps." },
      { title: "Strategy", desc: "Channel mix, targets and measurement plan agreed." },
      { title: "Setup", desc: "Tracking, conversions and reporting built before spend increases." },
      { title: "Execution", desc: "Campaigns, content and social delivered to the calendar." },
      { title: "Review", desc: "Monthly reporting and reallocation toward what performs." },
    ],
    faqs: [
      { q: "How soon do results appear?", a: "Paid media can produce data within weeks. SEO and content typically take three to six months to compound, which we set expectations around up front." },
      { q: "Do you need a new website first?", a: "Not always, but if landing pages convert poorly, fixing them usually returns more than extra spend." },
    ],
    related: ["branding-and-identity", "logo-designs", "e-commerce-development", "web-development"],
  },
];

export const getService = (slug) => {
  if (slug === "logo-design") return services.find((s) => s.slug === "logo-designs");
  return services.find((s) => s.slug === slug);
};

// "What We Do" — clickable services mapped to the service pages.
export const serviceCategories = [
  {
    name: "Web Development",
    description:
      "We create stunning, high-performing websites tailored to your business goals and user experience needs.",
    items: [
      { label: "Website Design & Development", slug: "web-development" },
      { label: "WordPress & CMS Solutions", slug: "wordpress-development" },
      { label: "E-Commerce Development", slug: "e-commerce-development" },
      { label: "Web Application Development", slug: "web-application-development" },
      { label: "Mobile App Development", slug: "mobile-app-development" },
    ],
  },
  {
    name: "Automation with AI",
    description:
      "We build intelligent AI automations that streamline workflows, boost efficiency, and improve experiences.",
    items: [
      { label: "GenAI Integration", slug: "generative-ai-integration" },
      { label: "AI Chatbots", slug: "ai-chatbots-and-ai-agents" },
      { label: "AI Agents", slug: "ai-chatbots-and-ai-agents" },
      { label: "AI Workflows", slug: "ai-automation" },
      { label: "AI Automation", slug: "ai-automation" },
    ],
  },
  {
    name: "Branding & Marketing",
    description:
      "We craft strategic branding, memorable logos and marketing that strengthen visibility and drive growth.",
    items: [
      { label: "Logo Designs", slug: "logo-designs" },
      { label: "Branding", slug: "branding-and-identity" },
      { label: "Graphic Designing", slug: "branding-and-identity" },
      { label: "Identity Design", slug: "branding-and-identity" },
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Social Media Strategies", slug: "digital-marketing" },
    ],
  },
];