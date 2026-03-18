import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

export default function Team() {
  const teamFeatures = [
    {
      icon: Heart,
      title: "Gottman Method Trained",
      description: "We use the Gottman Method, one of the most research-supported approaches to couples therapy available, backed by over 40 years of relationship research.",
    },
    {
      icon: Shield,
      title: "Safe & Neutral Space",
      description: "Our role is to provide a safe, neutral and structured space where both partners can be heard and work toward shared goals.",
    },
    {
      icon: Sparkles,
      title: "10+ Years Experience",
      description: "Contemporary Psychology has been supporting clients across Melbourne and online Australia-wide for over a decade.",
    },
    {
      icon: Users,
      title: "All Relationship Stages",
      description: "We work with couples at all stages of their relationship, from those wanting to strengthen healthy relationships to those navigating significant challenges.",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Professional Couples Counselling
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contemporary Psychology combines professional psychology expertise with evidence-based 
            couples therapy to help you strengthen your relationship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="hover-elevate overflow-visible"
              data-testid={`card-team-${index}`}
            >
              <CardContent className="p-8 flex gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6 flex flex-wrap items-center justify-center gap-6">
              <Badge variant="outline" className="text-sm py-1.5 px-4">Registered Psychologist</Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-4">AHPRA Accredited</Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-4">Online Australia-wide</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
