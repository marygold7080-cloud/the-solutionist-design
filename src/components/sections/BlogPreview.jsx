import Section from "@/components/ui/Section";
import SectionHeading from "@/components/sections/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import PostCard from "@/components/sections/PostCard";
import { posts } from "@/data/posts";

export default function BlogPreview({ limit = 3 }) {
  return (
    <Section ariaLabel="Latest articles" className="border-y border-white/5 bg-white/[0.02]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Our Blog"
          title="News & insights"
          intro="Practical writing on web performance, AI automation, branding and marketing measurement."
        />
        <ButtonLink to="/blog" variant="ghost" className="shrink-0">
          View More Blogs
        </ButtonLink>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {posts.slice(0, limit).map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </Section>
  );
}