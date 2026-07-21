import LandingNav from "../../components/LandingNav";
import ParticleBackground from "../../components/shared/ParticleBackground";
import { AppointmentForm } from "../../components/shared/EnquiryForm";
import { FadeIn } from "../../components/shared/FadeIn";
import { GradientBullet } from "../../components/shared/GradientBullet";
import { Phone, CheckCircle, ChevronDown, AlertTriangle, MapPin, Video, Brain, Users, Lightbulb, Shield, Heart, TrendingUp, Sparkles, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_HREF, BOOK_URL, EMAIL, ADDRESS } from "../../components/shared/constants";

const BADGE_COLOR = "#27BBE9";

const TRUST_BADGES = ["AHPRA-registered", "2026 guidelines compliant", "No referral needed", "Telehealth available"];

const PROCESS_STEPS = [
  { n: "01", title: "Initial Booking", body: "Express your interest in an ADHD assessment. We book your initial appointment and send consent forms for completion." },
  { n: "02", title: "Appointment 1", body: "Your first clinical session with your psychologist covering your history, symptoms, and current concerns." },
  { n: "03", title: "Appointment 2", body: "Comprehensive psychometric assessment using evidence based tools to evaluate attention, executive function, and cognition." },
  { n: "04", title: "Further Sessions", body: "Additional assessment sessions as needed. Collateral information forms sent to nominated contacts for completion." },
  { n: "05", title: "Report Writing", body: "Following your final appointment, your psychologist completes your comprehensive diagnostic report." },
  { n: "06", title: "Feedback Session", body: "Meet with your psychologist to discuss your results, diagnosis, and personalised treatment recommendations." },
];

const WHAT_WE_ASSESS = [
  "Attention and concentration difficulties",
  "Hyperactivity and impulsivity symptoms",
  "Executive function challenges",
  "Co-occurring conditions such as anxiety and depression",
  "Impact on work, study, and relationships",
  "Childhood and developmental history",
];

const COACHING_STEPS = [
  { icon: ClipboardCheck, title: "Accurate ADHD Diagnosis", body: "In person assessment by a registered psychologist using evidence based clinical interviews and psychometric testing. We take a holistic approach considering brain, body and environment." },
  { icon: Sparkles, title: "Personalised Treatment Plan", body: "Your psychologist designs a treatment plan tailored to your lifestyle and goals. This includes psycho education, behavioural strategies, executive functioning support, and emotional regulation techniques." },
  { icon: Heart, title: "ADHD Coaching for Acceptance", body: "Learn how your brain works, recognise challenges, and connect with community supports. Build strengths rather than masking difficulties and set a foundation for long term personal growth." },
  { icon: TrendingUp, title: "Improved Daily Functioning", body: "Work toward better outcomes across work, study, relationships, daily tasks, and emotional wellbeing through the combination of assessment, intervention and coaching." },
];

const APPROACH_POINTS = [
  { icon: Brain, title: "Neuroscience Informed", body: "Evidence based assessment with current neuroscience research" },
  { icon: Users, title: "Holistic Understanding", body: "We consider mind, body and environment" },
  { icon: Lightbulb, title: "Individually Tailored", body: "No two ADHD experiences are the same" },
  { icon: Shield, title: "Collaborative Care", body: "Education, validation, and practical tools" },
];

const WHY_CARDS = [
  { title: "Gold-standard assessment", body: "Our assessments align with the 2026 World Psychiatry consensus guidelines, the most rigorous adult ADHD framework available." },
  { title: "No referral required", body: "You can book directly with us. No GP visit needed before starting your assessment." },
  { title: "AHPRA-registered psychologists", body: "All assessments are conducted by registered psychologists with neurodevelopmental experience." },
  { title: "Telehealth Australia-wide", body: "Access assessment and coaching from anywhere in Australia via secure video consultations." },
];

const TEAM = [
  {
    name: "Rivkah Bendet", title: "Psychologist", slug: "rivkah-bendet",
    photo: "/assets/rivkah.jpg",
    tags: ["ADHD & ASD Assessment", "Neuroaffirming"],
    bio: "Rivkah has experience in ADHD and ASD assessment for adults and adolescents, and has a particular interest in neuroaffirming practice.",
  },
  {
    name: "Avi Winner", title: "Psychologist", slug: "avi-winner",
    photo: "/assets/avi.jpg",
    tags: ["Assessments", "Neurodivergence"],
    bio: "Avi has experience in psychological assessments and has a particular interest in neurodivergence across the lifespan.",
  },
  {
    name: "David Bokan", title: "Psychologist", slug: "david-bokan",
    photo: "/assets/david.png",
    tags: ["ADHD Assessments", "Neuroaffirming"],
    bio: "David has experience in ADHD assessments and has a particular interest in neuroaffirming approaches to diagnosis and support.",
  },
  {
    name: "Bridget Kosmas", title: "Provisional Psychologist", slug: "bridget-kosmas",
    photo: "/assets/bridget.png",
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
      <LandingNav />

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
              Gold-standard ADHD diagnosis aligned with the 2026 World Psychiatry consensus guidelines, followed by personalised coaching and skills training. In person in St Kilda and via telehealth across Australia.
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-3 text-center">Your ADHD assessment journey</h2>
            <p className="font-poppins text-cp-muted text-center mb-10">Our comprehensive assessment provides clarity and understanding using evidence based methods.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-cp-rule relative overflow-hidden h-full" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
                  <span className="font-lora text-3xl font-bold cp-gradient-text block mb-3">{s.n}</span>
                  <h3 className="font-lora font-bold text-[#071B27] text-lg mb-2">{s.title}</h3>
                  <p className="font-poppins text-sm text-cp-body">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* What we assess + Flexible options */}
          <FadeIn>
            <div className="mt-8 rounded-2xl border border-cp-rule bg-white overflow-hidden" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
              <div className="h-1" style={{ background: "linear-gradient(90deg, #F2506A, #B67AEC, #27BBE9)" }} />
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-lora font-bold text-[#071B27] text-xl mb-5">What we assess</h3>
                    <ul className="space-y-3">
                      {WHAT_WE_ASSESS.map(item => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5" />
                          <span className="font-poppins text-sm text-cp-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-lora font-bold text-[#071B27] text-xl mb-5">Flexible options</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-brand-pink flex-shrink-0" />
                        <span className="font-poppins text-sm text-cp-body">In person at St Kilda, Melbourne</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Video className="w-5 h-5 text-brand-purple flex-shrink-0" />
                        <span className="font-poppins text-sm text-cp-body">Telehealth across Australia</span>
                      </div>
                    </div>
                    <div className="bg-[#F5EEFF] rounded-xl p-5">
                      <p className="font-poppins text-sm text-[#374151]">No referral required to book your ADHD assessment. Medicare rebates available for screening and coaching sessions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ADHD Coaching and Intervention */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-3 text-center">ADHD coaching and intervention program</h2>
            <p className="font-poppins text-cp-muted text-center mb-10 max-w-3xl mx-auto">ADHD is a lifelong neurodevelopmental condition affecting attention, impulse control, energy regulation, executive functioning and emotional regulation. It presents differently for everyone.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {COACHING_STEPS.map((step, i) => (
              <FadeIn key={step.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-cp-rule h-full" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(242,80,106,0.15), rgba(182,122,236,0.15))" }}>
                      <step.icon className="w-6 h-6 text-brand-pink" />
                    </div>
                    <div>
                      <h3 className="font-lora font-bold text-[#071B27] text-lg mb-2">{step.title}</h3>
                      <p className="font-poppins text-sm text-cp-body">{step.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <h3 className="font-lora text-2xl font-bold text-[#071B27] mb-8 text-center">Our ADHD treatment approach</h3>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {APPROACH_POINTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-cp-rule text-center" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, rgba(182,122,236,0.15), rgba(39,187,233,0.15))" }}>
                    <p.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h4 className="font-lora font-bold text-[#071B27] mb-2">{p.title}</h4>
                  <p className="font-poppins text-sm text-cp-body">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, #1A1A2E, #2D1B4E)" }}>
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #F2506A, #B67AEC)" }}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-lora text-xl font-bold text-white mb-2">Collaborative ADHD care in Melbourne</h3>
                  <p className="font-poppins text-sm text-white/70 mb-4">Our registered psychologists integrate evidence based assessment with a neuroscience informed perspective. We emphasise collaboration, supporting clients with education, validation, and practical tools rather than one size fits all methods.</p>
                  <a href={BOOK_URL} className="inline-block cp-gradient-bg text-white px-6 py-3 rounded-full font-poppins font-semibold text-sm hover:opacity-90 transition-opacity">
                    Start your ADHD journey
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
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

      {/* Pricing table */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-2 text-center">Fees</h2>
            <p className="font-poppins text-cp-muted text-center mb-10">Assessment fees are self-funded. Session fees may attract a Medicare rebate with a valid Mental Health Care Plan.</p>
          </FadeIn>

          {/* Assessment fee breakdown */}
          <FadeIn>
            <h3 className="font-lora font-bold text-[#071B27] text-lg mb-4">ADHD assessment fees</h3>
            <div className="rounded-2xl border border-cp-rule overflow-hidden mb-6">
              <table className="w-full text-sm font-poppins">
                <thead>
                  <tr className="bg-[#FAFAF9] border-b border-cp-rule">
                    <th className="text-left px-5 py-3 font-semibold text-[#071B27]">Component</th>
                    <th className="text-right px-5 py-3 font-semibold text-[#071B27] whitespace-nowrap">Cost</th>
                    <th className="text-left px-5 py-3 font-semibold text-[#071B27] hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cp-rule">
                  {[
                    { name: "Assessment sessions",               cost: "$260.30 per session", notes: "Minimum 3 sessions ($780.90). Additional sessions may be required." },
                    { name: "Written report + feedback session", cost: "$765",                notes: "Full written report and a 30-minute feedback appointment." },
                    { name: "ADHD assessment",                   cost: "From $1,545.90",      notes: "3 sessions ($780.90) + written report and feedback ($765)." },
                    { name: "Dual assessment (ADHD + ASD)",      cost: "From $2,576.50",      notes: "5 sessions ($1,301.50) + combined dual report and feedback ($1,275)." },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}>
                      <td className="px-5 py-3 text-[#071B27] font-medium">{r.name}</td>
                      <td className="px-5 py-3 text-right text-[#071B27] font-semibold whitespace-nowrap">{r.cost}</td>
                      <td className="px-5 py-3 text-cp-muted hidden sm:table-cell">{r.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-cp-muted font-poppins mb-8">Assessment fees are self-funded. Medicare rebates and Mental Health Care Plans cannot be applied to assessment costs.</p>
          </FadeIn>

          {/* No bulk billing */}
          <FadeIn>
            <div className="flex gap-4 items-start bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-[#374151] text-sm font-poppins leading-relaxed">
                <span className="font-semibold text-[#071B27]">We do not provide bulk billing.</span>{" "}
                A gap will always apply between the Medicare rebate and our session fee. If cost is a concern, please contact us and we can discuss your options.
              </p>
            </div>
          </FadeIn>

          {/* Session fees */}
          <FadeIn>
            <h3 className="font-lora font-bold text-[#071B27] text-lg mb-1">Session fees</h3>
            <p className="font-poppins text-sm text-cp-muted mb-4">Applicable to intake and follow-up sessions. All sessions are 50 minutes.</p>
            <div className="rounded-2xl border border-cp-rule overflow-hidden mb-3">
              <table className="w-full text-sm font-poppins">
                <thead>
                  <tr className="bg-[#FAFAF9] border-b border-cp-rule">
                    <th className="text-left px-5 py-3 font-semibold text-[#071B27]">Clinician</th>
                    <th className="text-right px-5 py-3 font-semibold text-[#071B27]">Session fee</th>
                    <th className="text-right px-5 py-3 font-semibold text-[#9B51E0]">Medicare rebate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cp-rule">
                  {[
                    { name: "Rivkah Bendet",  title: "Psychologist",             fee: "$260.30", rebate: "$101.55" },
                    { name: "Avi Winner",     title: "Psychologist",             fee: "$260.30", rebate: "$101.55" },
                    { name: "David Bokan",    title: "Psychologist",             fee: "$260.30", rebate: "$101.55" },
                    { name: "Bridget Kosmas", title: "Provisional Psychologist", fee: "$165",    rebate: "Not eligible" },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}>
                      <td className="px-5 py-3">
                        <span className="font-medium text-[#071B27]">{r.name}</span>
                        <span className="block text-xs text-cp-muted">{r.title}</span>
                      </td>
                      <td className="px-5 py-3 text-right font-semibold text-[#071B27]">{r.fee}</td>
                      <td className="px-5 py-3 text-right text-[#9B51E0] font-medium">{r.rebate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-cp-muted font-poppins mb-4">Medicare rebates require a valid Mental Health Care Plan from your GP. Up to 10 rebated sessions per calendar year.</p>
            <div className="bg-[#F5EEFF] rounded-xl border border-cp-rule p-5 text-center">
              <p className="font-poppins text-sm text-[#374151] mb-2">For full details on rebates and payment terms</p>
              <a href="https://contemporarypsychology.com.au/pricing-rebates" className="font-poppins text-sm font-semibold text-[#9B51E0] hover:text-[#B67AEC] transition-colors">
                View full pricing &amp; rebates →
              </a>
            </div>
          </FadeIn>
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

      {/* Enquiry Form */}
      <section className="py-16 border-t border-b border-[#C8E6F7]" style={{ background: "#EBF5FD" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora text-2xl font-bold text-[#071B27] mb-2">Book your ADHD assessment</h2>
          <p className="font-poppins text-cp-muted text-sm mb-8">No GP referral required. Appointments available within 1 to 2 weeks. Our admin team will confirm your booking within one business day.</p>
          <AppointmentForm defaultServiceType="adhd-assessment" />
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
