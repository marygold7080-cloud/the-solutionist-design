import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const styles = {
  primary:
    "bg-gradient-to-r from-gold-500 to-gold-600 text-[#000000] hover:shadow-[0_0_34px_-8px_rgba(197,157,70,0.75)]",
  ghost:
    "border border-white/15 bg-white/5 text-white hover:border-gold-500/50 hover:text-gold-400",
};

export function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
}) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
}

export default ButtonLink;