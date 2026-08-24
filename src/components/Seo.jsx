import { useEffect } from "react";
import { site } from "@/data/site";

const setTag = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.tag || "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => k !== "tag" && v && el.setAttribute(k, v));
  return el;
};

export default function Seo({ title, description, path = "/", image, schema }) {
  const fullTitle = title || `${site.name} | ${site.tagline}`;
  const canonical = `${site.url}${path === "/" ? "/" : path}`;
  const ogImage = image || site.logo;

  useEffect(() => {
    document.title = fullTitle;
    setTag('meta[name="description"]', { name: "description", content: description || site.description });
    setTag('link[rel="canonical"]', { tag: "link", rel: "canonical", href: canonical });
    setTag('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    setTag('meta[property="og:description"]', { property: "og:description", content: description || site.description });
    setTag('meta[property="og:url"]', { property: "og:url", content: canonical });
    setTag('meta[property="og:type"]', { property: "og:type", content: "website" });
    setTag('meta[property="og:site_name"]', { property: "og:site_name", content: site.name });
    setTag('meta[property="og:image"]', { property: "og:image", content: ogImage });
    setTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setTag('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    setTag('meta[name="twitter:description"]', { name: "twitter:description", content: description || site.description });
    setTag('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    let ld = document.getElementById("page-jsonld");
    if (schema) {
      if (!ld) {
        ld = document.createElement("script");
        ld.type = "application/ld+json";
        ld.id = "page-jsonld";
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(schema);
    } else if (ld) {
      ld.remove();
    }
  }, [fullTitle, description, canonical, ogImage, schema]);

  return null;
}