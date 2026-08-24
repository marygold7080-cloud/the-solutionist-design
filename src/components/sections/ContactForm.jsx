import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { services } from "@/data/services";
import { submitToHubSpot } from "@/lib/hubspot";

const budgets = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];
const timelines = ["As soon as possible", "1–3 months", "3–6 months", "Just exploring"];

const field =
  "w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-gold-500/60";
const labelCls = "block text-xs font-semibold uppercase tracking-wider text-slate-400";

export default function ContactForm({ defaultService = "" }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      if (base44?.entities?.ContactSubmission?.create) {
        await base44.entities.ContactSubmission.create({ ...data, source_page: pathname }).catch(() => {});
      }
      // Also push the enquiry to HubSpot if configured (non-blocking).
      await submitToHubSpot({ ...data, source_page: pathname }).catch(() => {});
      navigate("/thank-you");
    } catch (err) {
      // Fallback navigation to thank-you
      navigate("/thank-you");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="full_name">
          Full name *
        </label>
        <input id="full_name" name="full_name" required className={`${field} mt-2`} placeholder="Jane Doe" />
      </div>
      <div>
        <label className={labelCls} htmlFor="email">
          Email *
        </label>
        <input id="email" name="email" type="email" required className={`${field} mt-2`} placeholder="you@company.com" />
      </div>
      <div>
        <label className={labelCls} htmlFor="phone">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={`${field} mt-2`} placeholder="(555) 000-0000" />
      </div>
      <div>
        <label className={labelCls} htmlFor="company">
          Company
        </label>
        <input id="company" name="company" className={`${field} mt-2`} placeholder="Company name" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="service">
          Service you need
        </label>
        <select id="service" name="service" defaultValue={defaultService} className={`${field} mt-2`}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="budget">
          Budget (optional)
        </label>
        <select id="budget" name="budget" className={`${field} mt-2`}>
          <option value="">Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="timeline">
          Timeline (optional)
        </label>
        <select id="timeline" name="timeline" className={`${field} mt-2`}>
          <option value="">Select a timeline</option>
          {timelines.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} mt-2 resize-y`}
          placeholder="Tell us about your project, what you have now, and what success looks like."
        />
      </div>
      {error && <p className="sm:col-span-2 text-sm text-red-400">{error}</p>}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-3.5 text-sm font-semibold text-[#000000] transition hover:shadow-[0_0_34px_-8px_rgba(197,157,70,0.75)] disabled:opacity-60"
        >
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {busy ? "Sending..." : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}