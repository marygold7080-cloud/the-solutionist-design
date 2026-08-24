export function Eyebrow({ children, icon: Icon, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400 ${className}`}
    >
      {Icon && <Icon className="h-3 w-3" />}
      {children}
    </span>
  );
}

export default Eyebrow;