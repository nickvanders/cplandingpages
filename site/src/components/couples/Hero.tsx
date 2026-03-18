import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

interface HeroProps {
  onBookClick?: () => void;
  onLearnMoreClick?: () => void;
}

export default function Hero({ onBookClick, onLearnMoreClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6 border border-primary/20">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm font-medium">Gottman Method Couples Therapy</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Couples Counselling
            <span className="block text-primary">Strengthen Your Relationship</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Evidence-based couples counselling to improve communication, rebuild trust,
            deepen connection and navigate conflict. In Melbourne and online Australia-wide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={onBookClick}
              className="px-9 py-4 text-base"
              data-testid="button-hero-book"
            >
              Book Your Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onLearnMoreClick}
              className="px-9 py-4 text-base"
              data-testid="button-hero-learn"
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm">Gottman Method</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">All Relationship Stages</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Safe &amp; Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
