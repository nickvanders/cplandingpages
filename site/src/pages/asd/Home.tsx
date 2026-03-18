import Header from "@/components/asd/Header";
import Hero from "@/components/asd/Hero";
import GoldStandard from "@/components/asd/GoldStandard";
import ASDAssessment from "@/components/asd/ASDAssessment";
import Team from "@/components/asd/Team";
import ContactForm from "@/components/asd/ContactForm";
import Footer from "@/components/asd/Footer";

export default function ASDHome() {
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
        <ASDAssessment onBookClick={scrollToContact} />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
