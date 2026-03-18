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

interface ADHDAssessmentProps {
  onBookClick?: () => void;
}

export default function ADHDAssessment({ onBookClick }: ADHDAssessmentProps) {
  const assessmentStepsFirst = [
    {
      number: "01",
      icon: CalendarCheck,
      title: "Initial Booking",
      description: "Express your interest in an ADHD assessment. We book your initial appointment and send consent forms for completion.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Appointment 1",
      description: "Your first clinical session with your psychologist covering your history, symptoms, and current concerns.",
    },
    {
      number: "03",
      icon: Brain,
      title: "Appointment 2",
      description: "Comprehensive psychometric assessment using evidence based tools to evaluate attention, executive function, and cognition.",
    },
  ];

  const assessmentStepsSecond = [
    {
      number: "04",
      icon: Users,
      title: "Further Sessions",
      description: "Additional assessment sessions as needed. Collateral information forms sent to nominated contacts for completion.",
    },
    {
      number: "05",
      icon: FileText,
      title: "Report Writing",
      description: "Following your final appointment, your psychologist completes your comprehensive diagnostic report.",
    },
    {
      number: "06",
      icon: MessageCircle,
      title: "Feedback Session",
      description: "Meet with your psychologist to discuss your results, diagnosis, and personalised treatment recommendations.",
      highlight: true,
    },
  ];

  const whatWeAssess = [
    "Attention and concentration difficulties",
    "Hyperactivity and impulsivity symptoms",
    "Executive function challenges",
    "Co-occurring conditions such as anxiety and depression",
    "Impact on work, study, and relationships",
    "Childhood and developmental history",
  ];

  return (
    <section id="assessment" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            ADHD Testing Melbourne
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            ADHD Assessment Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive ADHD assessment provides clarity and understanding. 
            We use evidence based methods to accurately diagnose ADHD in adults and adolescents throughout Melbourne.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
            Your ADHD Assessment Journey
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
                    Book Your ADHD Assessment
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
                <span className="font-heading font-semibold">ADHD Diagnostic Report Released</span>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              No Referral Required for ADHD Assessment
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You can book your ADHD assessment directly with us without a GP referral. 
              Please note that Medicare rebates are available for the initial screening session 
              and coaching sessions, but not for the formal assessment appointments.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
