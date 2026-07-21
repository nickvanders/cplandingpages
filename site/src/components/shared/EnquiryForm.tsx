import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, X, AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { getStoredAttribution, getSubmissionMeta } from "@/lib/attribution";
import { useCliniciansForService } from "@/hooks/useCliniciansForService";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

const SERVICES = [
  { value: "adhd-assessment",    label: "ADHD Assessment" },
  { value: "asd-assessment",     label: "ASD Assessment" },
  { value: "individual-therapy", label: "Individual Therapy" },
  { value: "couples",            label: "Couples Counselling" },
  { value: "coaching",           label: "Coaching" },
  { value: "workcover-tac",      label: "WorkCover & TAC" },
] as const;

const REFERRAL_OPTIONS = [
  "Google",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "GP or specialist referral",
  "Referral from friend or family",
  "Psychology Today",
  "Substack",
  "Other",
];

const SERVICE_GTM_EVENTS: Record<string, string> = {
  "adhd-assessment":    "conversion_adhd-assessment",
  "asd-assessment":     "conversion_asd-assessment",
  "individual-therapy": "conversion_individual-therapy",
  "couples":            "conversion_couples",
  "coaching":           "conversion_coaching",
  "workcover-tac":      "conversion_workcover-tac",
};

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  postcode: string;
  service_type: string;
  preferred_clinician: string;
  callback_time: string;
  referral_source: string;
  message: string;
}

type Errors = Partial<Record<keyof FormData | "form", string>>;

const EMPTY: FormData = {
  first_name: "", last_name: "", email: "", phone: "", postcode: "",
  service_type: "", preferred_clinician: "", callback_time: "",
  referral_source: "", message: "",
};

function MedicationDisclaimerModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-8 z-10">
        <button onClick={onCancel} className="absolute top-4 right-4 text-[#6B7280] hover:text-[#071B27] transition-colors" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FFF0F2] mb-5 mx-auto">
          <AlertCircle className="h-7 w-7 text-[#F2506A]" />
        </div>
        <h3 className="font-lora font-bold text-[#071B27] text-xl text-center mb-3">Please note before booking</h3>
        <p className="font-poppins text-sm text-[#374151] leading-relaxed text-center mb-4">
          Contemporary Psychology provides <strong className="text-[#071B27]">psychological assessment and support</strong> for ADHD. We do not prescribe or manage medication.
        </p>
        <p className="font-poppins text-sm text-[#6B7280] leading-relaxed text-center mb-7">
          If you are seeking a medication prescription or review, please speak with your GP or a psychiatrist. Our assessment report can support that process if required.
        </p>
        <div className="flex flex-col gap-3">
          <button onClick={onConfirm} className="w-full rounded-full text-white font-semibold font-poppins text-sm px-6 py-3 transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #F2506A 0%, #B67AEC 50%, #9B51E0 100%)" }}>
            I understand, continue
          </button>
          <button onClick={onCancel} className="w-full rounded-full border-2 border-[#E5E7EB] text-[#6B7280] font-semibold font-poppins text-sm px-6 py-3 hover:border-[#071B27] hover:text-[#071B27] transition-colors">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

const SOURCE_LABELS: Record<string, string> = {
  "adhd-assessment":    "adhd-landing-page",
  "asd-assessment":     "asd-landing-page",
  "couples":            "couples-landing-page",
  "individual-therapy": "individual-therapy-landing-page",
};

const MAIN = "https://contemporarypsychology.com.au";

const HELPFUL_LINKS = [
  { label: "Blog",               desc: "Articles and insights from our team",           href: `${MAIN}/blog` },
  { label: "Pricing & Rebates",  desc: "Understand your costs and Medicare options",     href: `${MAIN}/pricing-rebates` },
  { label: "Resources",          desc: "Tools, guides, and self-help materials",         href: `${MAIN}/resources` },
];

export function AppointmentForm({ defaultServiceType = "", source }: { defaultServiceType?: string; source?: string } = {}) {
  const [data, setData] = useState<FormData>({ ...EMPTY, service_type: defaultServiceType });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<{ first_name: string; callback_time: string } | null>(null);
  const [pendingService, setPendingService] = useState<string | null>(null);
  const hasStartedRef = useRef(false);

  const availableClinicians = useCliniciansForService(data.service_type || null);

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      (window as any).dataLayer?.push({ event: "form_start", form_id: "appointment_request" });
    }
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleServiceChange(value: string) {
    if (value === "adhd-assessment") {
      setPendingService(value);
    } else {
      set("service_type", value);
      set("preferred_clinician", "");
    }
  }

  function confirmDisclaimer() {
    if (pendingService) {
      set("service_type", pendingService);
      set("preferred_clinician", "");
    }
    setPendingService(null);
  }

  function validate(): boolean {
    const e: Errors = {};
    if (!data.first_name.trim()) e.first_name = "First name is required.";
    if (!data.last_name.trim()) e.last_name = "Last name is required.";
    if (!data.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = "Please enter a valid email.";
    }
    if (!data.phone.trim()) e.phone = "Phone is required.";
    if (!data.postcode.trim()) e.postcode = "Postcode is required.";
    if (!data.service_type) e.service_type = "Please select a service.";
    if (!data.callback_time.trim()) e.callback_time = "Please let us know when to contact you.";
    if (!data.referral_source) e.referral_source = "Please let us know how you heard about us.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setErrors({});

    try {
      const attribution = getStoredAttribution();
      const meta = getSubmissionMeta();

      if (supabase) {
        const { error: dbError } = await supabase
          .from("enquiries")
          .insert({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            enquiry_type: data.service_type,
            assigned_psych: data.preferred_clinician || null,
            enquiry_details: [
              data.message,
              data.callback_time ? `Best time to call: ${data.callback_time}` : null,
              data.referral_source ? `Heard about us via: ${data.referral_source}` : null,
              `Postcode: ${data.postcode}`,
            ].filter(Boolean).join("\n") || null,
            date_enquired: new Date().toISOString().split("T")[0],
            sync_source: "landing-page",
            source: source ?? SOURCE_LABELS[defaultServiceType] ?? "landing-page",
            lead_status: "new",
            gclid: attribution?.gclid ?? null,
          });
        if (dbError) throw dbError;
      } else {
        console.log("[EnquiryForm] No Supabase configured:", data);
      }

      (window as any).dataLayer?.push({
        event: "appointment_request_submitted",
        service_requested: data.service_type,
        referral_source: data.referral_source,
        is_out_of_hours: meta.is_out_of_hours,
        utm_source: attribution?.utm_source,
        utm_campaign: attribution?.utm_campaign,
        gclid: attribution?.gclid,
      });

      if (data.service_type && SERVICE_GTM_EVENTS[data.service_type]) {
        (window as any).dataLayer?.push({
          event: SERVICE_GTM_EVENTS[data.service_type],
          service_requested: data.service_type,
        });
      }

      setSubmitted({ first_name: data.first_name, callback_time: data.callback_time });
    } catch (err) {
      console.error("[AppointmentForm] Supabase insert failed:", err);
      setErrors({ form: "Something went wrong. Please call us directly or try again." });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-cp-rule p-8 text-center space-y-6" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
        <img src="/assets/logo.png" alt="Contemporary Psychology" className="h-14 w-auto mx-auto" />
        <div>
          <h3 className="font-lora font-bold text-[#071B27] text-2xl mb-2">Thanks, {submitted.first_name}!</h3>
          <p className="font-poppins text-cp-body text-sm leading-relaxed max-w-md mx-auto">
            Your enquiry has been received. Our admin team will be in touch to confirm your booking{submitted.callback_time ? ` at your specified contact time (${submitted.callback_time.toLowerCase()})` : " at your specified contact time"}.
          </p>
        </div>
        <div className="border-t border-cp-rule pt-6">
          <p className="font-poppins text-xs text-cp-muted mb-4 uppercase tracking-wider font-semibold">While you wait, explore</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {HELPFUL_LINKS.map(link => (
              <a key={link.label} href={link.href} className="block rounded-xl border border-cp-rule p-4 text-left hover:border-[#B67AEC] transition-colors group">
                <p className="font-poppins font-semibold text-sm text-[#071B27] group-hover:text-brand-purple transition-colors">{link.label}</p>
                <p className="font-poppins text-xs text-cp-muted mt-0.5 leading-relaxed">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
        <a href="tel:0390814270" className="inline-flex items-center gap-2 rounded-full border border-[#E2DCEF] text-[#3D3D5C] hover:border-[#F2506A] hover:text-[#F2506A] text-sm font-semibold px-5 py-2.5 transition-colors font-poppins">
          <Phone className="w-4 h-4" />
          03 9081 4270
        </a>
      </div>
    );
  }

  return (
    <>
      {pendingService === "adhd-assessment" && (
        <MedicationDisclaimerModal onConfirm={confirmDisclaimer} onCancel={() => setPendingService(null)} />
      )}
      <form onSubmit={handleSubmit} noValidate>
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">

          {/* 1. Personal details */}
          <motion.div variants={item} className="space-y-4">
            <p className="text-xs font-bold font-poppins text-cp-muted uppercase tracking-wider">Your details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="first_name" className="text-xs font-semibold font-poppins text-cp-body">First name <span className="text-brand-pink">*</span></Label>
                <Input id="first_name" value={data.first_name} onChange={(e) => set("first_name", e.target.value)} className={cn(errors.first_name && "border-red-400")} />
                {errors.first_name && <p className="text-xs text-red-600 font-poppins">{errors.first_name}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="last_name" className="text-xs font-semibold font-poppins text-cp-body">Last name <span className="text-brand-pink">*</span></Label>
                <Input id="last_name" value={data.last_name} onChange={(e) => set("last_name", e.target.value)} className={cn(errors.last_name && "border-red-400")} />
                {errors.last_name && <p className="text-xs text-red-600 font-poppins">{errors.last_name}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold font-poppins text-cp-body">Email <span className="text-brand-pink">*</span></Label>
                <Input id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} className={cn(errors.email && "border-red-400")} />
                <p className="text-[11px] text-cp-muted font-poppins">We'll send your confirmation here</p>
                {errors.email && <p className="text-xs text-red-600 font-poppins">{errors.email}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-semibold font-poppins text-cp-body">Phone <span className="text-brand-pink">*</span></Label>
                <Input id="phone" type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} className={cn(errors.phone && "border-red-400")} />
                {errors.phone && <p className="text-xs text-red-600 font-poppins">{errors.phone}</p>}
              </div>
            </div>
            <div className="sm:w-1/2 sm:pr-2 space-y-1.5">
              <Label htmlFor="postcode" className="text-xs font-semibold font-poppins text-cp-body">Postcode <span className="text-brand-pink">*</span></Label>
              <Input id="postcode" value={data.postcode} onChange={(e) => set("postcode", e.target.value)} className={cn(errors.postcode && "border-red-400")} />
              {errors.postcode && <p className="text-xs text-red-600 font-poppins">{errors.postcode}</p>}
            </div>
          </motion.div>

          {/* 2. Service */}
          <motion.div variants={item} className="space-y-3">
            <p className="text-xs font-bold font-poppins text-cp-muted uppercase tracking-wider">What are you looking for?</p>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold font-poppins text-cp-body">Service <span className="text-brand-pink">*</span></Label>
              <Select value={data.service_type} onValueChange={handleServiceChange}>
                <SelectTrigger className={cn(errors.service_type && "border-red-400")}>
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service_type && <p className="text-xs text-red-600 font-poppins">{errors.service_type}</p>}
            </div>
          </motion.div>

          {/* 3. Clinician preference */}
          {data.service_type && (
            <motion.div variants={item} initial="hidden" animate="show" className="space-y-3">
              <p className="text-xs font-bold font-poppins text-cp-muted uppercase tracking-wider">Clinician preference</p>
              <p className="text-xs text-cp-muted font-poppins">Select a clinician or leave on "no preference" and we'll match you.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <button type="button" onClick={() => set("preferred_clinician", "")} className={cn("rounded-xl border p-4 text-center transition-all", data.preferred_clinician === "" ? "border-brand-pink bg-surface-pink shadow-sm" : "border-cp-rule bg-white hover:border-brand-pink/50")}>
                  <div className="w-12 h-12 rounded-full bg-surface-purple flex items-center justify-center mb-3 mx-auto">
                    <span className="text-lg">✦</span>
                  </div>
                  <p className="text-sm font-semibold font-poppins text-[#071B27]">No preference</p>
                  <p className="text-xs text-cp-muted font-poppins mt-0.5">Help me be matched</p>
                </button>
                {availableClinicians.map((c) => (
                  <button key={c.id} type="button" onClick={() => set("preferred_clinician", c.name)} className={cn("rounded-xl border p-4 text-center transition-all", data.preferred_clinician === c.name ? "border-brand-pink bg-surface-pink shadow-sm" : "border-cp-rule bg-white hover:border-brand-pink/50")}>
                    <img src={c.photo_url} alt={c.name} className="w-12 h-12 rounded-full object-cover object-top mb-3 mx-auto" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=F2506A&color=fff&size=80`; }} />
                    <p className="text-sm font-semibold font-poppins text-[#071B27]">{c.name}</p>
                    <p className="text-[11px] text-cp-muted font-poppins">{c.title}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* 4. Follow-up preferences */}
          <motion.div variants={item} className="space-y-4">
            <p className="text-xs font-bold font-poppins text-cp-muted uppercase tracking-wider">Follow-up preferences</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="callback_time" className="text-xs font-semibold font-poppins text-cp-body">When can we contact you? <span className="text-brand-pink">*</span></Label>
                <Input id="callback_time" placeholder="e.g. Weekday mornings, after 3pm..." value={data.callback_time} onChange={(e) => set("callback_time", e.target.value)} className={cn(errors.callback_time && "border-red-400")} />
                {errors.callback_time && <p className="text-xs text-red-600 font-poppins">{errors.callback_time}</p>}
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold font-poppins text-cp-body">How did you hear about us? <span className="text-brand-pink">*</span></Label>
                <Select value={data.referral_source} onValueChange={(v) => set("referral_source", v)}>
                  <SelectTrigger className={cn(errors.referral_source && "border-red-400")}>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {REFERRAL_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.referral_source && <p className="text-xs text-red-600 font-poppins">{errors.referral_source}</p>}
              </div>
            </div>
          </motion.div>

          {/* 5. Additional details */}
          <motion.div variants={item} className="space-y-1.5">
            <Label htmlFor="message" className="text-xs font-semibold font-poppins text-cp-body">
              Anything else you'd like us to know? <span className="text-cp-muted font-normal">(optional)</span>
            </Label>
            <Textarea id="message" rows={3} placeholder="Anything else you'd like us to know before we call?" value={data.message} onChange={(e) => set("message", e.target.value)} className="resize-none" />
          </motion.div>

          {errors.form && (
            <motion.p variants={item} className="text-sm text-red-600 font-poppins bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {errors.form}
            </motion.p>
          )}

          {/* Submit */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-brand-pink hover:opacity-90 text-white font-semibold font-poppins text-sm px-7 py-3 h-auto disabled:opacity-60">
              {submitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending your request…
                </>
              ) : (
                <>Submit Enquiry <Send className="h-4 w-4" /></>
              )}
            </Button>
            <p className="text-xs text-cp-muted font-poppins leading-relaxed max-w-xs">
              By submitting you agree to our team contacting you to confirm. Your information is kept confidential.
            </p>
          </motion.div>

          <motion.p variants={item} className="text-xs text-cp-muted font-poppins border-t border-cp-rule pt-4">
            Please note: Contemporary Psychology does not prescribe medication. If you require a medication review or psychiatric assessment, please speak with your GP.
          </motion.p>

        </motion.div>
      </form>
    </>
  );
}
