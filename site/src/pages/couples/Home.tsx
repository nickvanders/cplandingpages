import LandingNav from "../../components/LandingNav";
import ParticleBackground from "../../components/shared/ParticleBackground";
import { AppointmentForm } from "../../components/shared/EnquiryForm";
import { FadeIn } from "../../components/shared/FadeIn";
import { GradientBullet } from "../../components/shared/GradientBullet";
import { Phone, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_HREF, BOOK_URL, EMAIL, ADDRESS } from "../../components/shared/constants";

const BADGE_COLOR = "#F2506A";

const TRUST_BADGES = ["Gottman-informed", "AHPRA-registered", "Medicare rebates available", "In-person + telehealth"];

const WHY_CARDS = [
  { title: "Gottman Method", body: "Our psychologists use Gottman-informed therapy, an evidence-based approach built on 40+ years of research into what makes relationships succeed." },
  { title: "No referral required", body: "You can book directly with us. No GP visit needed before starting couples counselling." },
  { title: "Medicare rebates with MHCP", body: "Each partner may be eligible for Medicare rebates with a Mental Health Care Plan when individual sessions are clinically appropriate." },
  { title: "Telehealth available", body: "Couples sessions are available via secure video call for clients across Australia." },
];

const WHO_FOR = [
  "Addressing communication difficulties, such as challenges in expressing needs, listening to each other, or resolving conflicts.",
  "Seeking healthier ways to manage disagreements or reduce recurring arguments that lead to ongoing tension.",
  "Feeling emotionally disconnected or distant, resulting in a sense of isolation or misunderstanding.",
  "Coping with the aftermath of an affair or betrayal and working towards rebuilding trust.",
  "Navigating issues with physical or emotional intimacy that impact overall relationship satisfaction.",
];

const HOW_IT_WORKS = [
  { n: "01", title: "90-minute intake session", body: "Together, you and your partner explore your relationship history, current patterns, and shared concerns with your psychologist." },
  { n: "02", title: "Individual 30-minute session", body: "Each partner meets separately, providing space to reflect on personal history and individual goals for the relationship." },
  { n: "03", title: "Ongoing couples sessions", body: "Sessions are then scheduled according to a collaboratively developed plan agreed upon by the therapist and couple." },
];

const LUCY = {
  name: "Lucy Adlard", title: "Psychologist", slug: "lucy-adlard",
  photo: "/assets/lucy.jpg",
  tags: ["Couples Therapy", "Gottman Method Level 2"],
  bio: "Lucy has experience in couples therapy and has a particular interest in the Gottman Method. She is Gottman Method Level 2 trained and works with couples navigating communication difficulties, conflict, and relationship transitions.",
};

const FAQS = [
  { q: "Do we both need to attend?", a: "Most sessions involve both partners. The intake process includes a joint 90-minute session followed by individual 30-minute sessions for each partner." },
  { q: "Is couples counselling covered by Medicare?", a: "Medicare doesn't cover couples sessions directly, but each partner can use a Mental Health Care Plan for individual sessions when clinically appropriate." },
  { q: "How many sessions will we need?", a: "This varies by couple. Many people notice meaningful change within 6–12 sessions, though this depends on the complexity of the concerns." },
  { q: "What is the Gottman Method?", a: "The Gottman Method is an evidence-based approach developed from over 40 years of research on what makes relationships succeed or fail. It builds friendship, manages conflict, and creates shared meaning." },
  { q: "Do we need a referral?", a: "No referral is required to book a couples counselling session." },
  { q: "Is telehealth available?", a: "Yes, couples sessions are available via secure video call for clients across Australia." },
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

export default function CouplesHome() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <LandingNav />

      {/* Hero */}
      <section className="relative min-h-[580px] bg-navy flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-poppins font-semibold mb-5" style={{ background: BADGE_COLOR }}>Couples Counselling · Melbourne</span>
            <h1 className="font-lora text-4xl sm:text-5xl font-bold text-[#071B27] leading-tight mb-5">
              Couples Counselling in Melbourne
            </h1>
            <p className="font-poppins text-cp-body text-lg mb-8 max-w-xl">
              Gottman-informed couples therapy to rebuild connection, improve communication, and resolve conflict. Delivered by AHPRA-registered psychologists in St Kilda and via telehealth.
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

      {/* What is couples counselling */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-6">What is couples counselling?</h2>
            <p className="font-poppins text-cp-body text-sm leading-relaxed mb-4">
              Couples counselling is a form of psychotherapy that supports partners in improving and strengthening their relationship. Through structured sessions with a trained psychologist, couples explore the patterns, emotions, and dynamics that shape their connection and lay the foundation for meaningful change.
            </p>
            <p className="font-poppins text-cp-body text-sm leading-relaxed">
              At Contemporary Psychology, our approach centres on building healthy communication, resolving conflicts, deepening emotional intimacy, and fostering mutual understanding. Our couples sessions are guided by the Gottman Method, a leading research-based approach with over 40 years of scientific foundation. Rather than simply addressing problems as they arise, we prioritise educating and empowering couples with practical, evidence-based tools focused on long-term relationship health.
            </p>
          </FadeIn>
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

      {/* Who is it for */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-4">Who is couples counselling for?</h2>
            <p className="font-poppins text-cp-body text-sm leading-relaxed mb-6">
              There are many different reasons why couples seek therapy. Couples at all stages of their relationship can benefit from counselling. There is no right or wrong time or circumstance. Some of the more common reasons include:
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <ul className="space-y-3 mb-6">
              {WHO_FOR.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GradientBullet />
                  <p className="font-poppins text-sm text-cp-body leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="font-poppins text-sm text-cp-body leading-relaxed">
              Contrary to popular belief, couples counselling is not exclusively for those experiencing difficulties. Many couples who are functioning well find it equally valuable, whether they are preparing for significant life transitions such as marriage, parenthood, or relocation, or simply wanting to strengthen their foundations and sustain long-term connection.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-10 text-center">How it works</h2>
          </FadeIn>
          <div className="space-y-6">
            {HOW_IT_WORKS.map((s, i) => (
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
          <FadeIn delay={400}>
            <p className="font-poppins text-xs text-cp-muted mt-8 leading-relaxed">
              More information can be emailed to you or explained by our reception team upon request.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-3 text-center">Meet your therapist</h2>
            <p className="font-poppins text-cp-muted text-center mb-10">AHPRA-registered psychologist with couples therapy experience.</p>
          </FadeIn>
          <FadeIn>
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col md:flex-row" style={{ boxShadow: "0 2px 16px 0 rgba(182,122,236,0.08)" }}>
              <div className="md:w-64 flex-shrink-0 bg-[#F5EEFF] overflow-hidden">
                <img src={LUCY.photo} alt={LUCY.name} className="w-full h-full object-cover object-top" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-lora font-bold text-[#071B27] text-2xl leading-tight">{LUCY.name}</h3>
                <p className="font-poppins text-sm text-[#6B7280] mt-1 mb-4">{LUCY.title}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {LUCY.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-poppins font-medium" style={{ background: "#F5EEFF", color: "#9B51E0" }}>{t}</span>
                  ))}
                </div>
                <p className="font-poppins text-sm text-[#374151] mb-4">{LUCY.bio}</p>
                <a href={`https://contemporarypsychology.com.au/our-team/${LUCY.slug}`} className="font-poppins text-sm font-medium hover:underline" style={{ color: "#B67AEC" }}>View profile →</a>
              </div>
            </div>
          </FadeIn>
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
          <h2 className="font-lora text-2xl font-bold text-[#071B27] mb-2">Book a couples session</h2>
          <p className="font-poppins text-cp-muted text-sm mb-8">No referral required. You can use a Mental Health Care Plan for individual Medicare rebates. Our admin team will be in touch to confirm your booking at your specified contact time.</p>
          <AppointmentForm defaultServiceType="couples" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <ParticleBackground density={30000} alphaMin={0.3} alphaMax={0.6} />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora text-3xl font-bold text-[#071B27] mb-4">Start your journey together</h2>
          <p className="font-poppins text-cp-body mb-8">Book a couples session today. No referral required.</p>
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
