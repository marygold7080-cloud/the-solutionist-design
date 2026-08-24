import Seo from "@/components/Seo";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import PostCard from "@/components/sections/PostCard";
import CTASection from "@/components/sections/CTASection";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog | Insights on Web, AI & Branding | The Solutionist Design"
        description="Practical articles from The Solutionist Design on web performance and UX, AI automation, generative AI, branding and measurable digital marketing."
        path="/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          url: `${site.url}/blog`,
          name: `${site.name} Blog`,
          publisher: { "@type": "Organization", name: site.name, url: site.url, logo: site.logo },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            description: p.excerpt,
            url: `${site.url}/blog/${p.slug}`,
            author: { "@type": "Organization", name: site.name },
          })),
        }}
      />
      <PageHero
        eyebrow="Our Blog"
        title="News & insights"
        summary="Discover insights for shaping the future of digital solutions — written for business owners and teams making decisions about web, AI, branding and marketing."
        crumbs={[{ label: "Blog" }]}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
      <CTASection title="Prefer to discuss it directly?" />
    </>
  );
}