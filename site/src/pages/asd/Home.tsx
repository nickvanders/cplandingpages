import Navbar from "../../components/shared/Navbar";
import ParticleBackground from "../../components/shared/ParticleBackground";
import EnquiryForm from "../../components/shared/EnquiryForm";
import { FadeIn } from "../../components/shared/FadeIn";
import { GradientBullet } from "../../components/shared/GradientBullet";
import { Phone, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_HREF, BOOK_URL, EMAIL, ADDRESS } from "../../components/shared/constants";

const BADGE_COLOR = "#B67AEC";

const TRUST_BADGES = ["AHPRA-registered", "Neuro-affirming", "No referral needed", "In-person + telehealth"];

const PROCESS_STEPS = [
  { n: "01", title: "Clinical interview + developmental history", body: "A detailed exploration of your developmental background, current presentation, and lived experience." },
  { n: "02", title: "Psychometric testing", body: "Standardised assessments measuring cognitive ability, adaptive behaviour, and social communication." },
  { n: "03", title: "Written report + feedback session", body: "A comprehensive diagnostic report and a 30-minute feedback appointment to discuss results and next steps." },
];

const WHY_CARDS = [
  { title: "Neuro-affirming approach", body: "We take a strengths-based, neuro-affirming approach that respects your identity and lived experience." },
  { title: "No referral required", body: "You can book directly with us. No GP visit needed before starting your assessment." },
  { title: "AHPRA-registered psychologists", body: "All assessments are conducted by registered psychologists with neurodevelopmental experience." },
  { title: "In-person + telehealth", body: "Attend in person at our St Kilda clinic, or access assessment services via secure video from anywhere in Australia." },
];

const TEAM = [
  { name: "Avi Winner", role: "Clinical Psychologist", specialties: "ADHD · ASD · Neurodevelopmental" },
  { name: "Rivkah Bendet", role: "Psychologist", specialties: "ADHD · ASD · Adult presentations" },
  { name: "David Bokan", role: "Psychologist", specialties: "ADHD · ASD · Cognitive assessment" },
];

const FAQS = [
  { q: "Can adults be diagnosed with autism?", a: "Yes, many people receive their ASD diagnosis as adults. A formal assessment by a registered psychologist is the appropriate pathway." },
  { q: "What does the ASD assessment involve?", a: "Typically 3+ sessions including a clinical interview, developmental history, psychometric testing, and a feedback appointment." },
  { q: "How long does the assessment take?", a: "The assessment spans multiple sessions over several weeks, with the written report provided after the final session." },
  { q: "Is telehealth available for ASD assessments?", a: "Some components can be completed via telehealth. Contact us to discuss which parts of your assessment can be conducted remotely." },
  { q: "What happens after the assessment?", a: "You'll receive a comprehensive written report and a feedback session. The report can be used to access supports, NDIS, or further referrals." },
  { q: "Do I need a referral?", a: "No referral is required to begin your ASD assessment at Contemporary Psychology." },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cp-rule">
      <button className="w-full flex items-center justify-between py-4 text-left font-poppins font-semibold text-[#071B27] text-sm hover:text-brand-purple transition-colors" onClick={() => setOpen(o => !o)}>
        {q}
        <ChevronDown className={`w-4 h-4 flex-shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 font-poppins text-sm text-cp-body">{a}</p>}
    </div>
  );
}

export default function ASDHome() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[580px] bg-navy flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-poppins font-semibold mb-5" style={{ background: BADGE_COLOR }}>ASD Assessment · Melbourne</span>
            <h1 className="font-lora text-4xl sm:text-5xl font-bold text-[#071B27] leading-tight mb-5">
              ASD Assessment in Melbourne
            </h1>
            <p className="font-poppins text-cp-body text-lg mb-8 max-w-xl">
              Comprehensive autism spectrum and cognitive assessments for adults and adolescents, delivered by AHPRA-registered psychologists with neurodevelopmental experience.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {TRUST_BADGES.map(b => (
                <span key={b} className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-poppins font-medium text-[#071B27]">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-sky" />{b}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="flex items-center gap-2 bg-white text-[#071B27] px-6 py-3 rounded-full font-poppins font-semibold text-sm hover:shadow-md transition-shadow">
                <Phone className="w-4 h-4" />{PHONE}
              </a>
              <a href={BOOK_URL} className="cp-gradient-bg text-white px-6 py-3 rounded-full font-poppins font-semibold text-sm hover:opacity-90 transition-opacity">
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <EnquiryForm
            page="asd"
            heading="Enquire about an ASD assessment"
            subtext="No GP referral required. Our psychologists have experience assessing across a wide range of presentations and ages. We'll respond within one business day."
          />
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-surface-warm py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-cp-rule bg-white p-6 flex flex-col sm:flex-row items-center gap-4" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
            <div className="flex-1">
              <p className="font-lora text-2xl font-bold text-[#071B27]">From $1,545.90</p>
              <p className="font-poppins text-sm text-cp-muted mt-1">Dual ADHD + ASD assessment from $2,576.50</p>
            </div>
            <a href={BOOK_URL} className="cp-gradient-bg text-white px-5 py-2.5 rounded-full font-poppins font-semibold text-sm whitespace-nowrap hover:opacity-90 transition-opacity">Book now</a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-10 text-center">Why choose Contemporary Psychology?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_CARDS.map((c, i) => (
              <FadeIn key={c.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-cp-rule relative overflow-hidden" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ background: "linear-gradient(to bottom, #F2506A, #B67AEC, #27BBE9)" }} />
                  <h3 className="font-lora font-bold text-[#071B27] text-lg mb-2">{c.title}</h3>
                  <p className="font-poppins text-sm text-cp-body">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-10 text-center">The assessment process</h2>
          </FadeIn>
          <div className="space-y-6">
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <span className="font-lora text-4xl font-bold cp-gradient-text flex-shrink-0 w-14">{s.n}</span>
                  <div className="pt-2">
                    <h3 className="font-lora font-bold text-[#071B27] text-xl mb-1">{s.title}</h3>
                    <p className="font-poppins text-sm text-cp-body">{s.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-10 text-center">Meet the team</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-cp-rule text-center" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
                  <div className="w-16 h-16 rounded-full cp-gradient-bg mx-auto mb-4 flex items-center justify-center text-white font-lora font-bold text-xl">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-lora font-bold text-[#071B27] text-lg">{m.name}</h3>
                  <p className="font-poppins text-xs text-cp-muted mt-1">{m.role}</p>
                  <p className="font-poppins text-xs text-cp-muted mt-2 border-t border-cp-rule pt-2">{m.specialties}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-surface-purple py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {TRUST_BADGES.map(b => (
              <div key={b} className="flex items-center gap-2 font-poppins text-sm font-medium text-cp-body">
                <GradientBullet />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-8 text-center">Frequently asked questions</h2>
          </FadeIn>
          <div>
            {FAQS.map(f => <FAQ key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <ParticleBackground density={30000} alphaMin={0.3} alphaMax={0.6} />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-4">Take the first step</h2>
          <p className="font-poppins text-cp-body mb-8">Enquire about your ASD assessment today. No referral required.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="flex items-center gap-2 bg-white text-[#071B27] px-6 py-3 rounded-full font-poppins font-semibold text-sm hover:shadow-md transition-shadow">
              <Phone className="w-4 h-4" />{PHONE}
            </a>
            <a href={BOOK_URL} className="cp-gradient-bg text-white px-6 py-3 rounded-full font-poppins font-semibold text-sm hover:opacity-90 transition-opacity">
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-cp-rule py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-6 text-sm font-poppins text-cp-body">
          <div>
            <p className="font-lora font-bold text-[#071B27] mb-2">Contemporary Psychology</p>
            <p>{ADDRESS}</p>
            <p className="mt-1"><a href={PHONE_HREF} className="hover:text-brand-purple transition-colors">{PHONE}</a></p>
            <p className="mt-1"><a href={`mailto:${EMAIL}`} className="hover:text-brand-purple transition-colors">{EMAIL}</a></p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="https://contemporarypsychology.com.au" className="hover:text-brand-purple transition-colors">Main site</a>
            <a href="https://contemporarypsychology.com.au/book-online" className="hover:text-brand-purple transition-colors">Book online</a>
            <a href="https://contemporarypsychology.com.au/privacy" className="hover:text-brand-purple transition-colors">Privacy policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
