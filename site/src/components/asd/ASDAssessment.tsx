import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CalendarCheck, 
  FileCheck, 
  ClipboardList,
  Brain, 
  Users,
  FileText, 
  MessageCircle,
  CheckCircle2,
  Video,
  MapPin
} from "lucide-react";

interface ASDAssessmentProps {
  onBookClick?: () => void;
}

export default function ASDAssessment({ onBookClick }: ASDAssessmentProps) {
  const assessmentStepsFirst = [
    {
      number: "01",
      icon: CalendarCheck,
      title: "Initial Screening",
      description: "Completion of questionnaires including CAT-Q, AQ, and SRS-2. We gather observations and book your initial appointment.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "History and Development",
      description: "Collateral forms and developmental history information. Additional assessments including ASRS, ACE, AUDIT, and PID-5 as needed.",
    },
    {
      number: "03",
      icon: Brain,
      title: "Functional Assessment",
      description: "ABAS-3 self-rated and other-rated assessments examining adaptive functioning to inform recommendations and support planning.",
    },
  ];

  const assessmentStepsSecond = [
    {
      number: "04",
      icon: Users,
      title: "Collateral Information",
      description: "Information gathered from someone who knew you during childhood and someone who has known you for at least six months in adulthood.",
    },
    {
      number: "05",
      icon: FileText,
      title: "Clinical Interview",
      description: "Comprehensive clinical interview based on DSM-5 criteria conducted by your psychologist in a sensory-friendly environment.",
    },
    {
      number: "06",
      icon: MessageCircle,
      title: "Feedback Session",
      description: "30-minute session to summarise results, discuss your diagnosis, and explore next steps including continued counselling options.",
      highlight: true,
    },
  ];

  const whatWeAssess = [
    "Deficits in social-emotional reciprocity",
    "Deficits in non-verbal communicative behaviour",
    "Deficits in developing and maintaining peer relationships",
    "Restricted, repetitive patterns of behaviour, interests or activities",
    "Hyper or hypo reactivity to sensory input",
    "Impact on work, study, and relationships",
  ];

  return (
    <section id="assessment" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            ASD Assessment Melbourne
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Autism Assessment Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive autism assessment provides clarity and understanding. 
            We use evidence-based methods to accurately assess autism in adults and adolescents throughout Melbourne.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
            Your Autism Assessment Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {assessmentStepsFirst.map((step, index) => (
              <Card 
                key={index}
                className="h-full"
                data-testid={`assessment-step-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-accent font-heading font-bold text-base block mb-1">
                        STEP {step.number}
                      </span>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    What We Assess
                  </h3>
                  <ul className="space-y-2">
                    {whatWeAssess.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-foreground">
                    Flexible Assessment Options
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>In person at St Kilda, Melbourne</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Video className="w-5 h-5 text-primary" />
                      <span>Telehealth across Australia</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full md:w-auto mt-4" 
                    size="lg"
                    onClick={onBookClick}
                    data-testid="button-assessment-book"
                  >
                    Book Your Autism Assessment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {assessmentStepsSecond.map((step, index) => (
              <Card 
                key={index}
                className={`h-full ${step.highlight ? 'bg-primary/5 border-primary/20' : ''}`}
                data-testid={`assessment-step-${index + 3}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${step.highlight ? 'bg-primary' : 'bg-primary/10'}`}>
                      <step.icon className={`w-6 h-6 ${step.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-accent font-heading font-bold text-base block mb-1">
                        STEP {step.number}
                      </span>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Card className="inline-block bg-primary text-primary-foreground">
              <CardContent className="p-4 flex items-center gap-3">
                <FileCheck className="w-5 h-5" />
                <span className="font-heading font-semibold">Autism Diagnostic Report Released</span>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Booking and Payment
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three sessions billed at $230-240 each. The third session involves feedback and can include a rebate from a Mental Health Care Plan. 
              The assessment report is $560 and will be released once all payments have been received and processed.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
