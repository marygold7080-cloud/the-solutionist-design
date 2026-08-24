import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import PostCard from "@/components/sections/PostCard";
import CTASection from "@/components/sections/CTASection";
import { getPost, posts } from "@/data/posts";
import { getService } from "@/data/services";
import { site } from "@/data/site";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/404" replace />;

  const service = getService(post.serviceSlug);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const path = `/blog/${post.slug}`;

  return (
    <>
      <Seo
        title={`${post.title} | ${site.name}`}
        description={post.excerpt}
        path={path}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              articleSection: post.category,
              url: `${site.url}${path}`,
              author: { "@type": "Organization", name: site.name, url: site.url },
              publisher: { "@type": "Organization", name: site.name, url: site.url, logo: site.logo },
              mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${path}` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
                { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}${path}` },
              ],
            },
          ],
        }}
      />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        summary={post.excerpt}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      />

      <Section>
        <article className="max-w-3xl">
          <time dateTime={post.date} className="text-sm text-slate-500">
            {post.dateLabel}
          </time>
          {post.body.map((b, i) =>
            b.type === "h2" ? (
              <h2 key={i} className="mt-10 font-heading text-2xl font-semibold text-white">
                {b.text}
              </h2>
            ) : b.type === "list" ? (
              <ul key={i} className="mt-5 space-y-3">
                {b.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={i} className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {b.text}
              </p>
            )
          )}

          {service && (
            <div className="mt-12 rounded-3xl border border-white/10 bg-[#0a0a0a] p-7">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400">Related service</span>
              <h2 className="mt-3 font-heading text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.summary}</p>
              <Link
                to={`/services/${service.slug}`}
                className="mt-5 inline-block text-sm font-medium text-gold-400 underline-offset-4 hover:underline"
              >
                Read more about our {service.title.toLowerCase()} service
              </Link>
            </div>
          )}
        </article>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02]">
        <SectionHeading eyebrow="Keep Reading" title="More insights" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {more.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}