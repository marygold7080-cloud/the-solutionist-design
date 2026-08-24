import Eyebrow from "@/components/ui/Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  description,
  as: Tag = "h2",
  align = "left",
  className = "",
}) {
  const text = intro || description;
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="mt-5 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Tag>
      {text && <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{text}</p>}
    </div>
  );
}

export default SectionHeading; 