import Header from "@/components/adhd/Header";
import Hero from "@/components/adhd/Hero";
import GoldStandard from "@/components/adhd/GoldStandard";
import ADHDAssessment from "@/components/adhd/ADHDAssessment";
import ADHDCoaching from "@/components/adhd/ADHDCoaching";
import Team from "@/components/adhd/Team";
import ContactForm from "@/components/adhd/ContactForm";
import Footer from "@/components/adhd/Footer";

export default function ADHDHome() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAssessment = () => {
    document.querySelector("#assessment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookClick={scrollToContact} />
      <main>
        <Hero onBookClick={scrollToContact} onLearnMoreClick={scrollToAssessment} />
        <GoldStandard />
        <ADHDAssessment onBookClick={scrollToContact} />
        <ADHDCoaching onBookClick={scrollToContact} />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
