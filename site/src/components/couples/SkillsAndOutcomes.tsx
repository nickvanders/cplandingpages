import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Heart, 
  Shield, 
  RefreshCw,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface SkillsAndOutcomesProps {
  onBookClick?: () => void;
}

export default function SkillsAndOutcomes({ onBookClick }: SkillsAndOutcomesProps) {
  const skillsWeDevelop = [
    {
      icon: MessageCircle,
      title: "Improving Communication",
      description: "Learn to express needs clearly and listen actively to understand your partner",
    },
    {
      icon: Heart,
      title: "Understanding Triggers",
      description: "Recognise emotional triggers and develop empathy for each other's experiences",
    },
    {
      icon: Shield,
      title: "Rebuilding Trust",
      description: "Work through breaches of trust with structured repair processes",
    },
    {
      icon: RefreshCw,
      title: "Healthier Conflict Patterns",
      description: "Develop skills to navigate disagreements without escalation",
    },
  ];

  const keyObjectives = [
    "Improving communication",
    "Learning to express needs clearly",
    "Understanding emotional triggers",
    "Strengthening empathy",
    "Rebuilding trust",
    "Increasing emotional and physical intimacy",
    "Developing healthier conflict patterns",
    "Repairing moments of disconnection",
    "Creating consistent habits that maintain closeness",
  ];

  const outcomes = [
    "Feeling more connected with your partner",
    "Greater confidence in communicating needs",
    "Navigating conflict without escalation",
    "Feeling understood in ways that may have been missing",
    "Restored safety, honesty and stability after trust damage",
    "Skills you continue to use outside of therapy",
  ];

  return (
    <>
      <section id="skills" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
              Skills Development
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What We Help Couples Develop
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We focus on building skills that support both immediate improvement and 
              long-term relationship strength.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillsWeDevelop.map((skill, index) => (
              <Card 
                key={index}
                className="hover-elevate overflow-visible"
                data-testid={`skill-card-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Key Objectives in Couples Counselling
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {keyObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{objective}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="outcomes" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
              Results
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Outcomes You Can Expect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our aim is to give you skills that you continue to use outside therapy 
              so that your relationship feels stronger, more resilient and more connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {outcomes.map((outcome, index) => (
              <Card 
                key={index}
                data-testid={`outcome-card-${index}`}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Rebuilding After Trust Has Been Damaged
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    When trust has been damaged we guide couples through a structured repair process 
                    that helps rebuild safety, honesty and stability. We also work with couples who 
                    are recovering from a breach of trust, including betrayal or secrecy.
                  </p>
                  <Button 
                    onClick={onBookClick}
                    data-testid="button-outcomes-book"
                  >
                    Start Your Journey Together
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
