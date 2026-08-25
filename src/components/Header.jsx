import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Bot,
  Palette,
  Sparkles,
  ArrowRight,
  Globe,
  Layers,
  Smartphone,
  Cpu,
  Megaphone,
} from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks } from "@/data/site";

// Categorized services metadata with custom icons and descriptions for the mega menu
const serviceGroups = [
  {
    category: "Web & App Engineering",
    icon: Code2,
    accentColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    description: "High-performance websites, CMS platforms, web apps, and mobile applications.",
    items: [
      {
        title: "Web Development",
        slug: "web-development",
        desc: "Custom fast, accessible, conversion-driven business websites",
        icon: Globe,
      },
      {
        title: "WordPress & CMS",
        slug: "wordpress-development",
        desc: "Custom WordPress themes and streamlined editing workflows",
        icon: Layers,
      },
      {
        title: "E-Commerce Stores",
        slug: "e-commerce-development",
        desc: "High-converting online stores, catalogues & checkout flows",
        icon: Code2,
      },
      {
        title: "Web Applications",
        slug: "web-application-development",
        desc: "Custom SaaS, internal portals, and operational dashboards",
        icon: Cpu,
      },
      {
        title: "Mobile App Development",
        slug: "mobile-app-development",
        desc: "Native & cross-platform iOS and Android mobile solutions",
        icon: Smartphone,
      },
    ],
  },
  {
    category: "AI & Workflow Automation",
    icon: Bot,
    accentColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    description: "Intelligent automation and AI integrations to remove manual repetition and scale operations.",
    items: [
      {
        title: "AI Automation",
        slug: "ai-automation",
        desc: "Automated document processing, data routing & workflows",
        icon: Cpu,
      },
      {
        title: "AI Chatbots & Agents",
        slug: "ai-chatbots-and-ai-agents",
        desc: "Knowledge-grounded assistants for support, sales & operations",
        icon: Bot,
      },
      {
        title: "Generative AI Integration",
        slug: "generative-ai-integration",
        desc: "Embed LLM capabilities, semantic search & drafting into your apps",
        icon: Sparkles,
      },
    ],
  },
  {
    category: "Branding & Growth",
    icon: Palette,
    accentColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    description: "Cohesive brand identities and data-driven marketing campaigns measured in revenue.",
    items: [
      {
        title: "Logo Designs",
        slug: "logo-designs",
        desc: "Custom vector marks, brand emblems, favicons & typography",
        icon: Palette,
      },
      {
        title: "Branding & Identity",
        slug: "branding-and-identity",
        desc: "Visual systems, positioning & full brand guidelines",
        icon: Layers,
      },
      {
        title: "Digital Marketing & SEO",
        slug: "digital-marketing",
        desc: "Search optimization, paid acquisition & social strategies",
        icon: Megaphone,
      },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? "text-gold-400" : "text-slate-300 hover:text-white"
    }`;

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-[#000000]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2 lg:px-8"
      >
        <Logo className="h-[125px] w-[125px]" />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => {
            if (l.to === "/services") {
              return (
                <li
                  key={l.to}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-1">
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `text-sm font-medium tracking-wide transition-colors ${
                          isActive || isServicesActive
                            ? "text-gold-400"
                            : "text-slate-300 hover:text-white"
                        }`
                      }
                      end
                    >
                      {l.label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={toggleServices}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-label="Toggle all services menu"
                      className={`inline-flex items-center justify-center p-1 rounded-md transition-transform duration-200 ${
                        servicesOpen
                          ? "text-gold-400 rotate-180"
                          : isServicesActive
                          ? "text-gold-400"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Mega Menu Dropdown */}
                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[880px] max-w-[90vw] animate-in fade-in-0 zoom-in-95 duration-200"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0c]/98 p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                          <div className="flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
                            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">
                              All Services & Capabilities
                            </h3>
                          </div>
                          <Link
                            to="/services"
                            onClick={() => setServicesOpen(false)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-gold-400 transition-colors"
                          >
                            Explore Full Services Hub
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        {/* Dropdown Categories Grid */}
                        <div className="grid grid-cols-3 gap-6">
                          {serviceGroups.map((group) => {
                            const CategoryIcon = group.icon;
                            return (
                              <div key={group.category} className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <div className={`p-1.5 rounded-lg border ${group.accentColor}`}>
                                    <CategoryIcon className="h-4 w-4" />
                                  </div>
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                                    {group.category}
                                  </h4>
                                </div>
                                <p className="text-[11px] leading-relaxed text-slate-400">
                                  {group.description}
                                </p>
                                <ul className="space-y-1 pt-1">
                                  {group.items.map((item) => {
                                    const ItemIcon = item.icon;
                                    const isCurrent = pathname === `/services/${item.slug}`;
                                    return (
                                      <li key={item.slug}>
                                        <Link
                                          to={`/services/${item.slug}`}
                                          onClick={() => setServicesOpen(false)}
                                          className={`group flex items-start gap-2.5 rounded-lg p-2 transition-all ${
                                            isCurrent
                                              ? "bg-gold-500/10 border border-gold-500/30 text-gold-400"
                                              : "hover:bg-white/5 text-slate-300 hover:text-white"
                                          }`}
                                        >
                                          <ItemIcon
                                            className={`h-4 w-4 mt-0.5 shrink-0 transition-colors ${
                                              isCurrent
                                                ? "text-gold-400"
                                                : "text-slate-400 group-hover:text-gold-400"
                                            }`}
                                          />
                                          <div className="min-w-0 flex-1">
                                            <div className="text-xs font-medium group-hover:text-gold-400 flex items-center justify-between">
                                              <span>{item.title}</span>
                                              <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-400" />
                                            </div>
                                            <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                              {item.desc}
                                            </p>
                                          </div>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>

                        {/* Dropdown Footer CTA */}
                        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
                              <Sparkles className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white">
                                Need custom consulting or a tailored project scope?
                              </p>
                              <p className="text-[11px] text-slate-400">
                                Talk with our strategy and digital engineering team.
                              </p>
                            </div>
                          </div>
                          <Link
                            to="/contact"
                            onClick={() => setServicesOpen(false)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-gold-500 hover:text-[#000000]"
                          >
                            Book a Call
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass} end={l.to === "/"}>
                  {l.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Contact CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-sm font-semibold text-[#000000] transition hover:shadow-[0_0_30px_-6px_rgba(197,157,70,0.7)]"
          >
            Work With Us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile navigation drawer */}
      {open && (
        <div className="border-t border-white/10 bg-[#000000]/98 lg:hidden max-h-[85vh] overflow-y-auto">
          <ul className="mx-auto max-w-7xl px-5 py-3 divide-y divide-white/5">
            {navLinks.map((l) => {
              if (l.to === "/services") {
                return (
                  <li key={l.to} className="py-2">
                    <div className="flex items-center justify-between py-2">
                      <NavLink
                        to="/services"
                        end
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `text-base font-medium ${
                            isActive || isServicesActive ? "text-gold-400" : "text-slate-200"
                          }`
                        }
                      >
                        {l.label}
                      </NavLink>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        aria-label="Toggle all services list"
                        className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white"
                      >
                        <span>All Services</span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-gold-400" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Services Accordion */}
                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm">
                        <Link
                          to="/services"
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold-400 hover:underline"
                        >
                          <span>Explore All Services Page</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        {serviceGroups.map((group) => {
                          const CategoryIcon = group.icon;
                          return (
                            <div key={group.category} className="space-y-2 pt-2 border-t border-white/5">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                                <CategoryIcon className="h-3.5 w-3.5 text-gold-400" />
                                <span>{group.category}</span>
                              </div>
                              <ul className="space-y-1 pl-4">
                                {group.items.map((item) => (
                                  <li key={item.slug}>
                                    <Link
                                      to={`/services/${item.slug}`}
                                      onClick={() => setOpen(false)}
                                      className={`block py-1.5 text-xs transition-colors ${
                                        pathname === `/services/${item.slug}`
                                          ? "text-gold-400 font-semibold"
                                          : "text-slate-300 hover:text-white"
                                      }`}
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={l.to} className="py-2">
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-base font-medium ${
                        isActive ? "text-gold-400" : "text-slate-200"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              );
            })}
            <li className="py-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-3 text-sm font-semibold text-[#000000]"
              >
                Work With Us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}