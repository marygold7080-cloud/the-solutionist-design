import LegalLayout from "@/components/sections/LegalLayout";
import { site } from "@/data/site";

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      seoTitle="Terms & Conditions | The Solutionist Design"
      description={`The terms that apply to your use of the ${site.name} website and to enquiries and engagements made through it.`}
      path="/terms-and-conditions"
      updated="19 August 2026"
      blocks={[
        { type: "p", text: `These terms apply to your use of this website and to enquiries submitted through it. By using the site you accept them. Individual projects are governed by a separate written proposal or agreement, which takes precedence over these terms where they differ.` },
        { type: "h2", text: "Use of this website" },
        {
          type: "list", items: [
            "Use the site lawfully and do not attempt to disrupt, probe or gain unauthorised access to it",
            "Do not scrape, copy or republish site content for commercial use without permission",
            "Do not submit unlawful, misleading or infringing material through our forms",
          ]
        },
        { type: "h2", text: "Website content" },
        { type: "p", text: "Content on this site is provided for general information about our services. It does not constitute a binding offer, a quote, or professional advice for your specific circumstances. We aim to keep information accurate and current but do not warrant that it is complete or error-free." },
        { type: "h2", text: "Enquiries and quotations" },
        { type: "p", text: "Submitting an enquiry does not create a contract. Any figures discussed before a formal proposal are indicative. Work begins once scope, fees and timelines are confirmed in a written proposal or agreement signed by both parties." },
        { type: "h2", text: "Intellectual property" },
        { type: "p", text: `The ${site.name} name, logo, site design, text and graphics are owned by us or our licensors. Ownership of deliverables produced for a client is set out in the relevant project agreement, and typically transfers on full payment.` },
        { type: "h2", text: "Third-party services and links" },
        { type: "p", text: "This site and our deliverables may reference or rely on third-party platforms and services. We are not responsible for the content, availability or terms of third-party services, which you use subject to their own agreements." },
        { type: "h2", text: "Limitation of liability" },
        { type: "p", text: "To the extent permitted by law, we are not liable for indirect or consequential loss, loss of profit, revenue or data arising from use of this website. Nothing in these terms limits liability that cannot lawfully be limited." },
        { type: "h2", text: "Governing law" },
        { type: "p", text: "These terms are governed by the laws applicable in the State of Indiana, United States, and disputes will be subject to the courts of that jurisdiction unless a project agreement states otherwise." },
        { type: "h2", text: "Changes" },
        { type: "p", text: "We may revise these terms from time to time. The version published on this page at the time you use the site is the version that applies." },
      ]}
    />
  );
}