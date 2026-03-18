import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, Users, Brain, Target, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "ADHD Assessment",
      description: "Comprehensive diagnostic evaluation using evidence-based psychometric instruments",
      features: [
        "Clinical interviews with qualified ADHD psychologist",
        "Evidence-based psychometric assessment",
        "Assessment of co-occurring conditions",
        "Detailed diagnosis and treatment plan",
      ],
    },
    {
      icon: Users,
      title: "ADHD Coaching Program",
      description: "Personalized coaching to develop understanding, acceptance, and practical strategies",
      features: [
        "Individual ADHD counselling sessions",
        "Behavioral therapy and coping strategies",
        "Executive function skill building",
        "Support for work, relationships and daily life",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Brain,
      title: "Neuropsychological Testing",
      description: "Comprehensive cognitive and executive function assessments",
    },
    {
      icon: Target,
      title: "Treatment Planning",
      description: "Personalized recommendations and ongoing support coordination",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Comprehensive ADHD Support
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From initial assessment to ongoing coaching, we provide the complete support system 
            you need to understand and manage ADHD effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-elevate group"
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {additionalServices.map((service, index) => (
            <Card 
              key={index}
              className="hover-elevate"
              data-testid={`card-additional-service-${index}`}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
