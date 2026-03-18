import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Brain, Heart, Sparkles, Users } from "lucide-react";

export default function Team() {
  const teamFeatures = [
    {
      icon: Brain,
      title: "Neuroscience-Informed",
      description: "Our psychologists use evidence-based, neuroscience-focussed approaches to accurately diagnose and treat ADHD in adults and children.",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide a modern, welcoming environment with collaborative, non-judgmental care tailored to your unique needs.",
    },
    {
      icon: Sparkles,
      title: "10+ Years Experience",
      description: "Contemporary Psychology has been supporting clients across Melbourne and Australia-wide via telehealth for over a decade.",
    },
    {
      icon: Users,
      title: "Registered Psychologists",
      description: "Our team of registered psychologists have extensive experience in ADHD assessment, coaching, and support for co-occurring conditions.",
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
            Quality ADHD Care in Melbourne
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contemporary Psychology brings together accredited psychologists with extensive 
            experience in ADHD assessment, diagnosis, and evidence based treatment.
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
              <Badge variant="outline" className="text-sm py-1.5 px-4">Registered Psychologists</Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-4">AHPRA Accredited</Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-4">Medicare Rebates Available</Badge>
              <Badge variant="outline" className="text-sm py-1.5 px-4">No Referral Required</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
