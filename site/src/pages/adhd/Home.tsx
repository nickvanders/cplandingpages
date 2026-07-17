import Navbar from "../../components/shared/Navbar";
import ParticleBackground from "../../components/shared/ParticleBackground";
import EnquiryForm from "../../components/shared/EnquiryForm";
import { FadeIn } from "../../components/shared/FadeIn";
import { GradientBullet } from "../../components/shared/GradientBullet";
import { Phone, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_HREF, BOOK_URL, EMAIL, ADDRESS } from "../../components/shared/constants";

const BADGE_COLOR = "#27BBE9";

const TRUST_BADGES = ["AHPRA-registered", "2025 guidelines compliant", "No referral needed", "Telehealth available"];

const PROCESS_STEPS = [
  { n: "01", title: "Accurate diagnosis", body: "A thorough clinical assessment aligned with the 2025 World Psychiatry consensus guidelines for adult ADHD." },
  { n: "02", title: "Written report + recommendations", body: "A comprehensive diagnostic report suitable for GPs, employers, and NDIS providers, with personalised recommendations." },
  { n: "03", title: "Coaching and skills program", body: "Practical ADHD coaching and skills training to build systems, manage time, and improve daily functioning." },
];

const WHY_CARDS = [
  { title: "Gold-standard assessment", body: "Our assessments align with the 2025 World Psychiatry consensus guidelines — the most rigorous adult ADHD framework available." },
  { title: "No referral required", body: "You can book directly with us. No GP visit needed before starting your assessment." },
  { title: "AHPRA-registered psychologists", body: "All assessments are conducted by registered psychologists with neurodevelopmental experience." },
  { title: "Telehealth Australia-wide", body: "Access assessment and coaching from anywhere in Australia via secure video consultations." },
];

const TEAM = [
  {
    name: "Rivkah Bendet", title: "Psychologist", slug: "rivkah-bendet",
    photo: "https://contemporarypsychology.com.au/images/team/rivkah.jpg",
    tags: ["ADHD & ASD Assessment", "Neuroaffirming"],
    bio: "Rivkah has experience in ADHD and ASD assessment for adults and adolescents, and has a particular interest in neuroaffirming practice.",
  },
  {
    name: "Avi Winner", title: "Psychologist", slug: "avi-winner",
    photo: "https://contemporarypsychology.com.au/images/team/avi.jpg",
    tags: ["Assessments", "Neurodivergence"],
    bio: "Avi has experience in psychological assessments and has a particular interest in neurodivergence across the lifespan.",
  },
  {
    name: "David Bokan", title: "Psychologist", slug: "david-bokan",
    photo: "https://contemporarypsychology.com.au/images/team/david.png",
    tags: ["ADHD Assessments", "Neuroaffirming"],
    bio: "David has experience in ADHD assessments and has a particular interest in neuroaffirming approaches to diagnosis and support.",
  },
  {
    name: "Bridget Kosmas", title: "Provisional Psychologist", slug: "bridget-kosmas",
    photo: "https://contemporarypsychology.com.au/images/team/bridget.png",
    tags: ["Assessments", "Anxiety & Emotion Regulation"],
    bio: "Bridget has experience in psychological assessments and has a particular interest in anxiety and emotion regulation.",
  },
];

const FAQS = [
  { q: "Can adults be diagnosed with ADHD?", a: "Yes. ADHD is a lifelong neurodevelopmental condition and many adults receive their diagnosis later in life. A formal assessment is the only way to receive an accurate diagnosis." },
  { q: "What does the ADHD assessment involve?", a: "The assessment typically involves 3 sessions: a clinical interview covering your history and current symptoms, psychometric testing, and a feedback session to discuss results and recommendations." },
  { q: "How long does the assessment take?", a: "The assessment spans 3 or more sessions over several weeks, with the written report provided following the final session." },
  { q: "Can you prescribe ADHD medication?", a: "Psychologists are not able to prescribe medication. However, your diagnostic report will support a referral to a psychiatrist or GP who can discuss medication options." },
  { q: "Does Medicare cover the assessment?", a: "Medicare rebates are not available for formal ADHD assessment sessions. Some coaching sessions may attract a rebate with a Mental Health Care Plan." },
  { q: "Do I need a referral?", a: "No referral is required to begin your ADHD assessment at Contemporary Psychology." },
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

export default function ADHDHome() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[580px] bg-navy flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-poppins font-semibold mb-5" style={{ background: BADGE_COLOR }}>ADHD Assessment · Melbourne</span>
            <h1 className="font-lora text-4xl sm:text-5xl font-bold text-[#071B27] leading-tight mb-5">
              ADHD Assessment and Coaching<br className="hidden sm:block" /> in Melbourne
            </h1>
            <p className="font-poppins text-cp-body text-lg mb-8 max-w-xl">
              Gold-standard ADHD diagnosis aligned with the 2025 World Psychiatry consensus guidelines, followed by personalised coaching and skills training. In person in St Kilda and via telehealth across Australia.
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
            page="adhd"
            heading="Book your ADHD assessment"
            subtext="No GP referral required. Appointments available within 1–2 weeks. Our admin team will confirm your booking within one business day."
          />
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-surface-warm py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-cp-rule bg-white p-6 flex flex-col sm:flex-row items-center gap-4" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
            <div className="flex-1">
              <p className="font-lora text-2xl font-bold text-[#071B27]">From $1,545.90</p>
              <p className="font-poppins text-sm text-cp-muted mt-1">3 assessment sessions + written report + feedback session</p>
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
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-3 text-center">Meet the team</h2>
            <p className="font-poppins text-cp-muted text-center mb-10">AHPRA-registered psychologists with neurodevelopmental experience.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
                  <div className="aspect-[4/3] bg-[#F5EEFF] overflow-hidden">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-lora font-bold text-[#071B27] text-lg leading-tight">{m.name}</h3>
                    <p className="font-poppins text-sm text-[#6B7280] mt-0.5 mb-3">{m.title}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {m.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-xs font-poppins font-medium" style={{ background: "#F5EEFF", color: "#9B51E0" }}>{t}</span>
                      ))}
                    </div>
                    <p className="font-poppins text-sm text-[#374151] mb-3">{m.bio}</p>
                    <a href={`https://contemporarypsychology.com.au/our-team/${m.slug}`} className="font-poppins text-sm font-medium hover:underline" style={{ color: "#B67AEC" }}>View profile →</a>
                  </div>
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
          <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-4">Ready to get clarity?</h2>
          <p className="font-poppins text-cp-body mb-8">Book your ADHD assessment today. No referral required.</p>
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
