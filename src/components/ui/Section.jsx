export function Section({
  id,
  className = "",
  children,
  ariaLabel,
  withAura = false,
  auraColor = "gold",
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative px-5 py-20 lg:px-8 lg:py-28 overflow-hidden ${className}`}
    >
      {withAura && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full blur-3xl opacity-20 ${
            auraColor === "cyan"
              ? "bg-cyan-500"
              : auraColor === "purple"
              ? "bg-purple-500"
              : "bg-gold-500"
          }`}
        />
      )}
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export default Section;