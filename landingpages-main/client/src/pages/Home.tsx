import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import GoldStandard from "@/components/landing/GoldStandard";
import ADHDAssessment from "@/components/landing/ADHDAssessment";
import ADHDCoaching from "@/components/landing/ADHDCoaching";
import Team from "@/components/landing/Team";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAssessment = () => {
    const element = document.querySelector("#assessment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookClick={scrollToContact} />
      <main>
        <Hero 
          onBookClick={scrollToContact} 
          onLearnMoreClick={scrollToAssessment} 
        />
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
