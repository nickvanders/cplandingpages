import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  User,
  FileText,
  CheckCircle2,
  Video,
  MapPin
} from "lucide-react";

interface TherapeuticProcessProps {
  onBookClick?: () => void;
}

export default function TherapeuticProcess({ onBookClick }: TherapeuticProcessProps) {
  const processStages = [
    {
      number: "01",
      icon: Users,
      title: "Joint Intake Session",
      subtitle: "90 minutes",
      description: "A joint session where we explore your relationship history, current concerns and shared goals. This includes understanding your strengths as a couple and the patterns contributing to your challenges.",
    },
    {
      number: "02",
      icon: User,
      title: "Individual Consultations",
      subtitle: "Two separate sessions",
      description: "Each partner meets with the psychologist for a private session. These give you space to discuss your perspective, your emotional experience and any personal concerns shaping the relationship dynamic.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Collaborative Therapy Plan",
      subtitle: "Tailored to your needs",
      description: "After the intake process we outline the approach that will best support your goals. The number of sessions varies depending on your needs, from short-term communication skills work to longer-term trust rebuilding.",
    },
  ];

  const whoThisIsFor = [
    "Growing distance or repeated arguments",
    "Difficulty expressing needs or feeling heard",
    "Emotional or physical intimacy concerns",
    "Recovering from a breach of trust or betrayal",
    "Feeling disconnected from your partner",
    "Navigating major life transitions together",
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            The Therapeutic Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What to Expect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our couples counselling process has three clear stages designed to give your 
            psychologist a complete view of the relationship system as a whole.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
            Your Counselling Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {processStages.map((stage, index) => (
              <Card 
                key={index}
                className="h-full"
                data-testid={`process-stage-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <stage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-accent font-heading font-bold text-base block mb-1">
                        STAGE {stage.number}
                      </span>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {stage.title}
                      </h4>
                      <span className="text-primary text-sm font-medium block mb-2">
                        {stage.subtitle}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Who This Service Is For
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Many couples seek support when they notice signs such as:
                  </p>
                  <ul className="space-y-2">
                    {whoThisIsFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-foreground">
                    Flexible Consultation Options
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>In person at St Kilda, Melbourne</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Video className="w-5 h-5 text-primary" />
                      <span>Online Australia-wide</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full md:w-auto mt-4" 
                    size="lg"
                    onClick={onBookClick}
                    data-testid="button-process-book"
                  >
                    Book Your Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="p-8">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                We Work With Couples at All Stages
              </h3>
              <p className="text-muted-foreground">
                Some attend because they feel stuck in recurring patterns. Others want support during 
                major life transitions. Many attend proactively because they want to strengthen a 
                healthy relationship. Whatever brings you here, our approach is tailored to your 
                specific relationship needs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
