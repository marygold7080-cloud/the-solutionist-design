import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{post.category}</span>
        <time dateTime={post.date} className="text-xs text-slate-500">
          {post.dateLabel}
        </time>
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold leading-snug text-white">
        <Link to={`/blog/${post.slug}`} className="transition hover:text-gold-400">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition hover:gap-3"
      >
        Read More <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}