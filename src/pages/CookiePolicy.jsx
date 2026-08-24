import LegalLayout from "@/components/sections/LegalLayout";
import { site } from "@/data/site";

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      seoTitle="Cookie Policy | The Solutionist Design"
      description={`How ${site.name} uses cookies and similar technologies on this website, and how you can control them.`}
      path="/cookie-policy"
      updated="19 August 2026"
      blocks={[
        { type: "p", text: "Cookies are small text files placed on your device by a website. They allow a site to function correctly, remember preferences and understand how visitors use it." },
        { type: "h2", text: "Types of cookies this site may use" },
        {
          type: "list", items: [
            "Essential cookies: required for the site to load, navigate and submit forms securely. These cannot be switched off through the site.",
            "Preference cookies: remember choices such as display settings so you do not have to set them again.",
            "Analytics cookies: help us understand which pages are visited and how visitors move through the site, so we can improve content and performance.",
          ]
        },
        { type: "p", text: "We do not use cookies to sell personal information, and we do not use them to build advertising profiles beyond measuring the performance of our own campaigns." },
        { type: "h2", text: "Third-party cookies" },
        { type: "p", text: "Analytics and, where relevant, advertising measurement tools may set their own cookies. Those providers process the data under their own privacy terms, and we configure them to collect no more than we need for reporting." },
        { type: "h2", text: "Managing cookies" },
        {
          type: "list", items: [
            "Most browsers let you block or delete cookies in their privacy or security settings",
            "You can usually block third-party cookies while keeping essential ones enabled",
            "Blocking essential cookies may prevent parts of this website, including the contact form, from working correctly",
          ]
        },
        { type: "h2", text: "Do Not Track" },
        { type: "p", text: "Where your browser sends a recognised Do Not Track or global privacy control signal, we honour it for analytics purposes." },
        { type: "h2", text: "Updates" },
        { type: "p", text: `If we add or remove tools that use cookies, we will update this page. For anything unclear, contact us at ${site.email}.` },
      ]}
    />
  );
}
