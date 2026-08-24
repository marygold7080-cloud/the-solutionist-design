import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import { navLinks } from "@/data/site";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | The Solutionist Design"
        description="The page you were looking for could not be found. Explore our services, work and blog instead."
        path="/404"
      />
      <Section className="min-h-[70vh] place-content-center">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-7xl font-semibold text-gold-500/40 sm:text-8xl">404</span>
          <h1 className="mt-6 font-heading text-3xl font-semibold text-white sm:text-4xl">
            We couldn't find that page
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            The link may be out of date or mistyped. Use the links below to get back to what you were looking for.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/">Back to Home</ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Contact Us
            </ButtonLink>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 transition hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}