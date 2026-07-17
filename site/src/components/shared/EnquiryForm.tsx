import { useState } from "react";
import { CheckCircle, Phone } from "lucide-react";
import { PHONE_HREF, PHONE } from "./constants";

interface Props {
  page: "adhd" | "asd" | "couples";
  heading: string;
  subtext: string;
}

const ENQUIRY_TYPES = [
  "Initial enquiry",
  "Assessment booking",
  "Ongoing therapy",
  "Not sure yet",
];

export default function EnquiryForm({ page, heading, subtext }: Props) {
  const [fields, setFields] = useState({
    first_name: "", last_name: "", email: "", phone: "",
    enquiry_type: "", message: "", consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string | boolean) => setFields(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.first_name.trim()) e.first_name = "Required";
    if (!fields.last_name.trim()) e.last_name = "Required";
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) e.email = "Valid email required";
    if (!fields.phone.trim()) e.phone = "Required";
    if (!fields.enquiry_type) e.enquiry_type = "Please select an option";
    if (!fields.consent) e.consent = "Consent required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
      const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from("landing_page_enquiries").insert({
          page,
          first_name: fields.first_name,
          last_name: fields.last_name,
          email: fields.email,
          phone: fields.phone,
          enquiry_type: fields.enquiry_type,
          message: fields.message || null,
          created_at: new Date().toISOString(),
        });
      } else {
        console.log("Form submission (no Supabase configured):", { page, ...fields });
      }
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-XXXXXXXXXX/XXXXXXXXXXXXXXXX",
        });
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Something went wrong. Please call us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = (field: string) =>
    `w-full rounded-lg border px-4 py-2.5 font-poppins text-sm text-[#071B27] focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors ${errors[field] ? "border-brand-pink" : "border-cp-rule"}`;

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-cp-rule relative overflow-hidden text-center" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ background: "linear-gradient(to bottom, #F2506A, #B67AEC, #27BBE9)" }} />
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-14 h-14 text-brand-purple" />
        </div>
        <h3 className="font-lora text-2xl font-bold text-[#071B27] mb-2">Thank you!</h3>
        <p className="font-poppins text-cp-body mb-6">We'll be in touch within one business day to confirm your enquiry.</p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 cp-gradient-bg text-white px-6 py-3 rounded-full font-poppins font-semibold text-sm hover:opacity-90 transition-opacity">
          <Phone className="w-4 h-4" />
          Call us now — {PHONE}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-cp-rule relative overflow-hidden" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ background: "linear-gradient(to bottom, #F2506A, #B67AEC, #27BBE9)" }} />
      <h2 className="font-lora text-2xl font-bold text-[#071B27] mb-2">{heading}</h2>
      <p className="font-poppins text-cp-muted text-sm mb-6">{subtext}</p>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold font-poppins text-[#071B27] mb-1">First name *</label>
            <input className={inputCls("first_name")} value={fields.first_name} onChange={e => set("first_name", e.target.value)} />
            {errors.first_name && <p className="text-brand-pink text-xs mt-1 font-poppins">{errors.first_name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold font-poppins text-[#071B27] mb-1">Last name *</label>
            <input className={inputCls("last_name")} value={fields.last_name} onChange={e => set("last_name", e.target.value)} />
            {errors.last_name && <p className="text-brand-pink text-xs mt-1 font-poppins">{errors.last_name}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold font-poppins text-[#071B27] mb-1">Email *</label>
            <input type="email" className={inputCls("email")} value={fields.email} onChange={e => set("email", e.target.value)} />
            {errors.email && <p className="text-brand-pink text-xs mt-1 font-poppins">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold font-poppins text-[#071B27] mb-1">Phone *</label>
            <input type="tel" className={inputCls("phone")} value={fields.phone} onChange={e => set("phone", e.target.value)} />
            {errors.phone && <p className="text-brand-pink text-xs mt-1 font-poppins">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold font-poppins text-[#071B27] mb-1">What are you looking for? *</label>
          <select className={inputCls("enquiry_type")} value={fields.enquiry_type} onChange={e => set("enquiry_type", e.target.value)}>
            <option value="">Select an option</option>
            {ENQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.enquiry_type && <p className="text-brand-pink text-xs mt-1 font-poppins">{errors.enquiry_type}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold font-poppins text-[#071B27] mb-1">Anything else you'd like us to know? <span className="font-normal text-cp-muted">(optional)</span></label>
          <textarea rows={3} className={inputCls("message")} value={fields.message} onChange={e => set("message", e.target.value)} />
        </div>
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-0.5 accent-brand-purple" checked={fields.consent} onChange={e => set("consent", e.target.checked)} />
            <span className="font-poppins text-sm text-cp-body">I consent to being contacted by Contemporary Psychology regarding my enquiry.</span>
          </label>
          {errors.consent && <p className="text-brand-pink text-xs mt-1 font-poppins">{errors.consent}</p>}
        </div>
        {errors.submit && <p className="text-brand-pink text-sm font-poppins">{errors.submit}</p>}
        <button type="submit" disabled={submitting} className="w-full cp-gradient-bg text-white py-3 rounded-full font-poppins font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60">
          {submitting ? "Sending…" : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
