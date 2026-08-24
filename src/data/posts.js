// Blog articles. Add an object here and the listing plus its own URL work automatically.
export const posts = [
  {
    slug: "how-ai-is-reshaping-business-efficiency",
    category: "AI Automation",
    title: "How AI is reshaping business efficiency and customer experiences",
    date: "2025-07-15",
    dateLabel: "July 15, 2025",
    excerpt:
      "Where AI genuinely reduces workload today, how to choose a first automation, and the guardrails worth putting in place before you start.",
    serviceSlug: "ai-automation",
    body: [
      { type: "p", text: "The useful applications of AI in a business are rarely the dramatic ones. They are the small repeated tasks that quietly consume a day: reading an invoice and typing its numbers somewhere else, deciding which inbox an enquiry belongs in, rebuilding the same weekly report." },
      { type: "h2", text: "Where AI reduces workload today" },
      { type: "p", text: "Three categories are dependable right now. Extraction turns unstructured documents into structured data. Classification routes incoming work to the right person or queue. Drafting produces a first version of routine written output that a human then edits." },
      { type: "p", text: "What these have in common is a clear input, a checkable output and a human able to spot a mistake quickly. That is the profile of a good first automation." },
      { type: "h2", text: "Choosing the first task to automate" },
      {
        type: "list", items: [
          "High volume — it happens many times a week, not occasionally",
          "Rule-based — a new starter could be taught it in a morning",
          "Checkable — a person can verify the output in seconds",
          "Low consequence — a mistake is annoying, not damaging",
        ]
      },
      { type: "h2", text: "Guardrails that matter" },
      { type: "p", text: "Log every automated action so you can answer what happened and when. Keep a human approval step on anything that leaves the business or moves money. Set confidence thresholds so uncertain cases go to a person instead of being guessed at. Measure time saved, so the automation earns its place." },
      { type: "h2", text: "What it means for customer experience" },
      { type: "p", text: "Customers do not care that AI is involved. They notice a reply in minutes instead of a day, an accurate order, and not having to repeat themselves. Automation improves experience when it removes waiting, not when it removes people from conversations that need them." },
    ],
  },
  {
    slug: "building-strong-brand-identities-online",
    category: "Branding",
    title: "Building strong brand identities in a fast-evolving online world",
    date: "2025-08-02",
    dateLabel: "August 02, 2025",
    excerpt:
      "Why consistency beats novelty, what a modern identity system needs to contain, and the practical assets that keep a brand intact as it scales.",
    serviceSlug: "branding-and-identity",
    body: [
      { type: "p", text: "Brands are not built by a single strong logo. They are built by repetition — the same colours, type, tone and treatment appearing everywhere a customer meets you, for long enough to become familiar." },
      { type: "h2", text: "Consistency outperforms novelty" },
      { type: "p", text: "Redesigning every campaign resets recognition. A brand that looks the same across its website, social channels and printed material accumulates memory instead of spending it, and looks considerably larger than one that changes appearance monthly." },
      { type: "h2", text: "What a modern identity system contains" },
      {
        type: "list", items: [
          "A logo set that works small, large, light and dark",
          "A defined colour palette with accessible contrast pairings",
          "A type system with a limited set of styles and sizes",
          "Layout and spacing rules that make new pages predictable",
          "Imagery direction so photography and graphics feel related",
          "Messaging: how the business describes itself in one, three and ten sentences",
        ]
      },
      { type: "h2", text: "Design for the places it will actually appear" },
      { type: "p", text: "Most brand assets are first seen as a small avatar, a favicon or a video thumbnail. An identity that only works at presentation size fails in the places that matter most, which is why marks should be tested at their smallest size before they are approved." },
      { type: "h2", text: "Make correct use the easy option" },
      { type: "p", text: "Guidelines are ignored when following them is slow. Templates fix that. When social posts, decks and documents start from on-brand files, consistency stops depending on anyone remembering the rules." },
    ],
  },
  {
    slug: "web-design-trends-driving-performance-and-ux",
    category: "UI / UX",
    title: "Modern trends driving performance, UX, and business growth",
    date: "2025-06-28",
    dateLabel: "June 28, 2025",
    excerpt:
      "The web design shifts that actually affect conversion — speed budgets, clarity over decoration, accessibility, and designing for one decision per screen.",
    serviceSlug: "web-development",
    body: [
      { type: "p", text: "Design trends come and go, but the ones that survive share a trait: they make a site easier or faster to use. The rest are decoration, and decoration rarely shows up in conversion data." },
      { type: "h2", text: "Speed is a design decision" },
      { type: "p", text: "Weight is added by choices — a hero video, four typefaces, an animation library used for one fade. Agreeing a performance budget during design, rather than optimising after launch, keeps those choices honest." },
      { type: "h2", text: "One decision per screen" },
      { type: "p", text: "Pages with a single obvious next action outperform pages offering five equal options. Decide what a visitor should do on each page, make that the most prominent element, and demote everything else." },
      { type: "h2", text: "Clarity over cleverness" },
      {
        type: "list", items: [
          "Headlines that state the offer instead of hinting at it",
          "Navigation labelled in the customer's words",
          "Legible body text with comfortable line length",
          "Forms that ask only for what you need to reply",
        ]
      },
      { type: "h2", text: "Accessibility as a baseline" },
      { type: "p", text: "Sufficient colour contrast, keyboard-operable controls, real semantic headings and descriptive alt text widen your audience and improve how search engines and AI systems read your content. It is the same work, benefiting both." },
      { type: "h2", text: "Measure, then change" },
      { type: "p", text: "Analytics on key actions turns redesign arguments into evidence. Without measurement, every change is opinion." },
    ],
  },
  {
    slug: "how-businesses-use-generative-ai",
    category: "AI Solutions",
    title: "How businesses use GenAI for content, automation, and innovation",
    date: "2025-07-30",
    dateLabel: "July 30, 2025",
    excerpt:
      "Practical generative AI patterns in production use — grounded answers, semantic search, drafting workflows — and how to evaluate quality and cost.",
    serviceSlug: "generative-ai-integration",
    body: [
      { type: "p", text: "Generative AI moved quickly from demonstration to daily tool, but the projects that stuck were narrow. They solved one clear problem inside an existing workflow rather than promising to transform everything." },
      { type: "h2", text: "Patterns that work in production" },
      {
        type: "list", items: [
          "Grounded answering: responses drawn from your own documents, with sources cited",
          "Semantic search: finding material by meaning rather than exact keywords",
          "Summarising: long documents and threads reduced to a checkable brief",
          "Drafting: a first version of routine content that a human edits",
          "Structuring: turning messy text into consistent fields and records",
        ]
      },
      { type: "h2", text: "Grounding matters more than model choice" },
      { type: "p", text: "Most accuracy complaints are retrieval problems, not model problems. If the right passage never reaches the model, no model will answer correctly. Content quality, chunking and retrieval design usually determine output quality." },
      { type: "h2", text: "Evaluate with a real test set" },
      { type: "p", text: "Before shipping an AI feature, write down thirty to fifty realistic inputs with expected outcomes. Score changes against that set. It turns a subjective sense that output feels better into something you can verify — and it catches regressions when prompts or models change." },
      { type: "h2", text: "Keep cost visible" },
      { type: "p", text: "Route simple requests to smaller models, cache repeated work, keep prompts lean, and monitor spend per feature. Cost control is an engineering task, not a surprise on the invoice." },
    ],
  },
  {
    slug: "tactics-to-boost-reach-engagement-conversions",
    category: "Strategies",
    title: "Effective tactics to boost reach, engagement, and conversions",
    date: "2025-08-12",
    dateLabel: "August 12, 2025",
    excerpt:
      "A practical marketing sequence: fix tracking, fix the landing page, then buy reach — plus the metrics worth reporting each month.",
    serviceSlug: "digital-marketing",
    body: [
      { type: "p", text: "Most marketing underperformance is a sequencing problem. Money goes into reach before the page that receives it converts, and before tracking can show which channel earned what." },
      { type: "h2", text: "Fix tracking first" },
      { type: "p", text: "If you cannot attribute an enquiry to a source, every later decision is guesswork. Define your conversions — form submissions, calls, purchases — and verify they record correctly before increasing spend." },
      { type: "h2", text: "Then fix the destination" },
      {
        type: "list", items: [
          "A headline that matches the ad or search intent that brought the visitor",
          "Proof near the request: work samples, specifics, credentials",
          "One primary action, repeated as the page gets longer",
          "A form short enough to complete on a phone",
        ]
      },
      { type: "h2", text: "Then buy reach" },
      { type: "p", text: "With measurement and a converting page in place, paid media becomes a controllable input: raise spend where cost per qualified enquiry is acceptable, cut it where it is not. Search and content compound more slowly but reduce the share of pipeline you have to rent." },
      { type: "h2", text: "Report on what decides budget" },
      { type: "p", text: "Impressions and followers rarely change a decision. Qualified enquiries, cost per enquiry, conversion rate by channel and revenue per channel do. Report those monthly and reallocate toward whatever holds up." },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);