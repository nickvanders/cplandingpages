import LandingNav from "../../components/LandingNav";
import ParticleBackground from "../../components/shared/ParticleBackground";
import { AppointmentForm } from "../../components/shared/EnquiryForm";
import { FadeIn } from "../../components/shared/FadeIn";
import { GradientBullet } from "../../components/shared/GradientBullet";
import { Phone, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_HREF, BOOK_URL, EMAIL, ADDRESS } from "../../components/shared/constants";

const BADGE_COLOR = "#9B51E0";

const TRUST_BADGES = ["AHPRA-registered", "Medicare rebates available", "No referral required", "In-person + telehealth"];

const MAIN = "https://contemporarypsychology.com.au";

const SERVICE_AREAS = [
  { title: "Anxiety Disorders",               body: "Support for generalised anxiety, panic, social anxiety, phobias, and related presentations.",                          href: `${MAIN}/what-we-help-with/anxiety-disorders` },
  { title: "Depression",                      body: "Evidence-informed support for low mood, anhedonia, and depressive episodes.",                                          href: `${MAIN}/what-we-help-with/depression` },
  { title: "Trauma and Acute Stress",         body: "Trauma-informed psychological support for a range of distressing experiences.",                                        href: `${MAIN}/what-we-help-with/trauma-and-acute-stress` },
  { title: "Work Issues and Burnout",         body: "Support for workplace stress, burnout, occupational difficulties, and career transitions.",                            href: `${MAIN}/what-we-help-with/work-issues-burnout` },
  { title: "Disordered Eating and Body Image",body: "Compassionate, evidence-based support for eating difficulties and body image concerns.",                               href: `${MAIN}/what-we-help-with/disordered-eating-body-image` },
  { title: "Sleep Disturbance",               body: "Evidence-based psychological approaches to insomnia and sleep difficulties.",                                          href: `${MAIN}/what-we-help-with/sleep-disturbance` },
  { title: "LGBTIQA+ Counselling",            body: "Affirming psychological support for LGBTIQA+ individuals and their unique experiences.",                               href: `${MAIN}/what-we-help-with/lgbtiqa-counselling` },
  { title: "PMDD, PCOS and Menopause",        body: "Psychological support for the mental health dimensions of hormonal health conditions.",                                href: `${MAIN}/what-we-help-with/pmdd-pcos-menopause` },
  { title: "Postnatal Depression and Anxiety",body: "Support for new parents navigating the psychological challenges of early parenthood.",                                 href: `${MAIN}/what-we-help-with/postnatal-depression-anxiety` },
];

const WHY_CARDS = [
  { title: "Evidence-based approaches", body: "Our psychologists draw on CBT, ACT, Schema Therapy, and trauma-informed practice, matched to your goals and presentation." },
  { title: "No referral required", body: "You can book directly with us. No GP visit needed before starting individual therapy." },
  { title: "Medicare rebates with MHCP", body: "Reduce your out-of-pocket costs with a Mental Health Care Plan from your GP, providing rebates on up to 10 individual sessions per calendar year." },
  { title: "Telehealth available", body: "Individual sessions are available via secure video call for clients across Australia." },
];

const TEAM = [
  {
    name: "Claudia Hounslow", title: "Director & Psychologist", slug: "claudia-hounslow",
    photo: "/assets/claudia.png",
    tags: ["Executive Coaching", "Neuropsychology", "Women in Leadership"],
    bio: "Claudia is the director of Contemporary Psychology with over 18 years of experience as a psychologist. She draws on neuropsychology, executive coaching, and attachment theory.",
  },
  {
    name: "Rivkah Bendet", title: "Psychologist", slug: "rivkah-bendet",
    photo: "/assets/rivkah.jpg",
    tags: ["Anxiety", "Trauma", "Neurodivergent Adults"],
    bio: "Rivkah has experience working with adults and adolescents across anxiety, trauma, and neurodevelopmental presentations, drawing on evidence-based approaches.",
  },
  {
    name: "Avi Winner", title: "Psychologist", slug: "avi-winner",
    photo: "/assets/avi.jpg",
    tags: ["Depression", "Identity", "Neurodivergence"],
    bio: "Avi has experience working with adults across mood, identity, and neurodivergent presentations, and brings a collaborative, person-centred approach to individual therapy.",
  },
  {
    name: "David Bokan", title: "Psychologist", slug: "david-bokan",
    photo: "/assets/david.png",
    tags: ["Anxiety", "Stress", "Life Transitions"],
    bio: "David has experience supporting adults navigating anxiety, stress, and significant life transitions, drawing on practical, evidence-based psychological strategies.",
  },
  {
    name: "Bridget Kosmas", title: "Provisional Psychologist", slug: "bridget-kosmas",
    photo: "/assets/bridget.png",
    tags: ["Depression", "Wellbeing", "Young Adults"],
    bio: "Bridget has experience working with adults and young people on depression, low mood, and general wellbeing concerns, under the supervision of a registered psychologist.",
  },
  {
    name: "Lucy Adlard", title: "Psychologist", slug: "lucy-adlard",
    photo: "/assets/lucy.jpg",
    tags: ["Relationships", "Communication", "Adjustment"],
    bio: "Lucy has experience in individual and couples therapy, with a particular interest in relationship dynamics, communication, and adjustment across life transitions.",
  },
];

const FAQS = [
  { q: "Do I need a referral?", a: "No referral is required to book individual therapy at Contemporary Psychology." },
  { q: "Is therapy covered by Medicare?", a: "Medicare rebates are available with a Mental Health Care Plan (MHCP) from your GP, providing rebates on up to 10 individual sessions per calendar year." },
  { q: "How long are sessions?", a: "Individual sessions are 50 minutes." },
  { q: "How many sessions will I need?", a: "This varies by person and concern. Some people benefit from short-term focused work of 6 to 8 sessions, while others prefer longer-term support." },
  { q: "What approaches do you use?", a: "Our psychologists draw on Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), Schema Therapy, and trauma-informed approaches, depending on your goals and presentation." },
  { q: "Is telehealth available?", a: "Yes, individual sessions are available via secure video call for clients across Australia." },
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

export default function TherapyHome() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <LandingNav />

      {/* Hero */}
      <section className="relative min-h-[580px] bg-navy flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-poppins font-semibold mb-5" style={{ background: BADGE_COLOR }}>Individual Therapy · Melbourne</span>
            <h1 className="font-lora text-4xl sm:text-5xl font-bold text-[#071B27] leading-tight mb-5">
              Individual Psychology in Melbourne
            </h1>
            <p className="font-poppins text-cp-body text-lg mb-8 max-w-xl">
              Evidence-based individual therapy for anxiety, depression, trauma, and life transitions. Delivered by AHPRA-registered psychologists in St Kilda and via telehealth Australia-wide.
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
              <p className="font-lora text-2xl font-bold text-[#071B27]">From $260.30 per session</p>
              <p className="font-poppins text-sm text-cp-muted mt-1">Medicare rebate $101.55 with a Mental Health Care Plan</p>
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

      {/* What we help with */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-10 text-center">What we help with</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_AREAS.map((s, i) => (
              <FadeIn key={s.title} delay={i * 60}>
                <a href={s.href} className="group block bg-white rounded-2xl p-5 border border-cp-rule relative overflow-hidden hover:border-[#B67AEC] transition-colors h-full" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.06)" }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: "linear-gradient(to bottom, #F2506A, #B67AEC, #27BBE9)" }} />
                  <h3 className="font-lora font-bold text-[#071B27] text-base mb-1.5 group-hover:text-brand-purple transition-colors">{s.title}</h3>
                  <p className="font-poppins text-xs text-cp-body leading-relaxed">{s.body}</p>
                  <p className="font-poppins text-xs font-medium mt-3" style={{ color: "#B67AEC" }}>Learn more →</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-surface-warm py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-3 text-center">Meet the team</h2>
            <p className="font-poppins text-cp-muted text-center mb-10">AHPRA-registered psychologists available for individual therapy.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col h-full" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
                  <div className="aspect-square bg-[#F5EEFF] overflow-hidden flex-shrink-0">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-lora font-bold text-[#071B27] text-lg leading-tight">{m.name}</h3>
                    <p className="font-poppins text-sm text-[#6B7280] mt-0.5 mb-3">{m.title}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {m.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-xs font-poppins font-medium" style={{ background: "#F5EEFF", color: "#9B51E0" }}>{t}</span>
                      ))}
                    </div>
                    <p className="font-poppins text-xs text-[#374151] leading-relaxed flex-1 mb-4">{m.bio}</p>
                    <a href={`https://contemporarypsychology.com.au/our-team/${m.slug}`} className="font-poppins text-xs font-medium hover:underline" style={{ color: "#B67AEC" }}>View profile →</a>
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
      <section id="faq" className="bg-white py-16">
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
      <section id="contact" className="py-16 border-t border-b border-[#C8E6F7]" style={{ background: "#EBF5FD" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora text-2xl font-bold text-[#071B27] mb-2">Book an individual therapy session</h2>
          <p className="font-poppins text-cp-muted text-sm mb-8">Sessions are 50 minutes. No referral required. Medicare rebates available with a Mental Health Care Plan. Our team will respond within one business day.</p>
          <AppointmentForm defaultServiceType="individual-therapy" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <ParticleBackground density={30000} alphaMin={0.3} alphaMax={0.6} />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-4">Take the first step</h2>
          <p className="font-poppins text-cp-body mb-8">Book an individual therapy session today. No referral required.</p>
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
