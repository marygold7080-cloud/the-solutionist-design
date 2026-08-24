import LegalLayout from "@/components/sections/LegalLayout";
import { site } from "@/data/site";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      seoTitle="Privacy Policy | The Solutionist Design"
      description={`How ${site.name} collects, uses and protects the personal information you share through this website.`}
      path="/privacy-policy"
      updated="19 August 2026"
      blocks={[
        { type: "p", text: `This policy explains what personal information ${site.name} collects through this website, why we collect it, how we use it and the choices you have.` },
        { type: "h2", text: "Information we collect" },
        {
          type: "list", items: [
            "Details you submit through our contact form: name, email address, phone number, company, service of interest, budget, timeline and your message",
            "Correspondence you send us by email or phone",
            "Basic technical and usage data such as pages visited, referring source, browser type and approximate location, collected through analytics",
          ]
        },
        { type: "h2", text: "How we use your information" },
        {
          type: "list", items: [
            "To respond to your enquiry and prepare a recommendation, scope or quote",
            "To deliver and support services you engage us for",
            "To improve the content and performance of this website",
            "To meet legal, accounting and record-keeping obligations",
          ]
        },
        { type: "p", text: "We do not sell your personal information, and we do not use enquiry details for unrelated marketing without your consent." },
        { type: "h2", text: "Legal basis" },
        { type: "p", text: "We process enquiry information because it is necessary to respond to a request you have made, and to pursue our legitimate interest in operating and improving our business. Analytics data is processed on the basis of consent where required in your jurisdiction." },
        { type: "h2", text: "Sharing and service providers" },
        { type: "p", text: "We share information only with service providers that help us operate — for example website hosting, email delivery and analytics providers — and only to the extent needed to perform that function. We may also disclose information where required by law." },
        { type: "h2", text: "Retention" },
        { type: "p", text: "Enquiry records are kept for as long as needed to respond and, where a project proceeds, for the duration of our working relationship plus any period required for legal and accounting purposes. You may ask us to delete records sooner." },
        { type: "h2", text: "Your rights" },
        {
          type: "list", items: [
            "Request a copy of the personal information we hold about you",
            "Ask us to correct information that is inaccurate",
            "Ask us to delete information we no longer need",
            "Object to or restrict certain processing, including analytics",
          ]
        },
        { type: "h2", text: "Security" },
        { type: "p", text: "We use reasonable technical and organisational measures to protect information, including access controls and encrypted transmission. No method of transmission over the internet is completely secure, so please avoid sending sensitive information through the contact form." },
        { type: "h2", text: "Cookies" },
        { type: "p", text: "This website may use cookies and similar technologies. Our Cookie Policy explains what they are used for and how to control them." },
        { type: "h2", text: "Changes to this policy" },
        { type: "p", text: "We may update this policy as our services or legal obligations change. The date at the top of this page shows when it was last revised." },
      ]}
    />
  );
}