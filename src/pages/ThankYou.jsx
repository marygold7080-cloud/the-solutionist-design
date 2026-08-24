import { CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/data/site";

export default function ThankYou() {
  return (
    <>
      <Seo
        title="Thank You | The Solutionist Design"
        description="Your enquiry has been received by The Solutionist Design. We will reply shortly with next steps."
        path="/thank-you"
      />
      <Section className="min-h-[70vh] place-content-center text-center">
        <div className="mx-auto max-w-2xl">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gold-500/10 text-gold-400">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h1 className="mt-8 font-heading text-4xl font-semibold text-white sm:text-5xl">Thank you</h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            Your enquiry has reached us. A member of the team will review the details and reply with a clear
            recommendation, scope and timeline. If it is urgent, call us on{" "}
            <a href={site.phoneHref} className="text-gold-400 underline-offset-4 hover:underline">
              {site.phone}
            </a>
            .
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/">Back to Home</ButtonLink>
            <ButtonLink to="/our-work" variant="ghost">
              Browse Our Work
            </ButtonLink>
            <ButtonLink to="/blog" variant="ghost">
              Read the Blog
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}