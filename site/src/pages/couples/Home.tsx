import Header from "@/components/couples/Header";
import Hero from "@/components/couples/Hero";
import GoldStandard from "@/components/couples/GoldStandard";
import TherapeuticProcess from "@/components/couples/TherapeuticProcess";
import SkillsAndOutcomes from "@/components/couples/SkillsAndOutcomes";
import Team from "@/components/couples/Team";
import ContactForm from "@/components/couples/ContactForm";
import Footer from "@/components/couples/Footer";

export default function CouplesHome() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProcess = () => {
    document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookClick={scrollToContact} />
      <main>
        <Hero onBookClick={scrollToContact} onLearnMoreClick={scrollToProcess} />
        <GoldStandard />
        <TherapeuticProcess onBookClick={scrollToContact} />
        <SkillsAndOutcomes onBookClick={scrollToContact} />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
