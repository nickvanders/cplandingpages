import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ClipboardCheck, 
  Sparkles, 
  Heart, 
  TrendingUp,
  Brain,
  Users,
  Lightbulb,
  Shield,
  ArrowRight
} from "lucide-react";

interface ADHDCoachingProps {
  onBookClick?: () => void;
}

export default function ADHDCoaching({ onBookClick }: ADHDCoachingProps) {
  const programSteps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Accurate ADHD Diagnosis",
      description: "In person assessment by a registered psychologist using evidence based clinical interviews and psychometric testing. We take a holistic approach considering brain, body and environment.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Personalised Treatment Plan",
      description: "Your psychologist designs a treatment plan tailored to your lifestyle and goals. This includes psycho education, behavioural strategies, executive functioning support, and emotional regulation techniques.",
    },
    {
      number: "03",
      icon: Heart,
      title: "ADHD Coaching for Acceptance",
      description: "Learn how your brain works, recognise challenges, and connect with community supports. Build strengths rather than masking difficulties and set a foundation for long term personal growth.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Improved Daily Functioning",
      description: "Work toward better outcomes across work, study, relationships, daily tasks, and emotional wellbeing through the combination of assessment, intervention and coaching.",
    },
  ];

  const approachPoints = [
    {
      icon: Brain,
      title: "Neuroscience Informed",
      description: "Evidence based assessment with current neuroscience research",
    },
    {
      icon: Users,
      title: "Holistic Understanding",
      description: "We consider mind, body and environment",
    },
    {
      icon: Lightbulb,
      title: "Individually Tailored",
      description: "No two ADHD experiences are the same",
    },
    {
      icon: Shield,
      title: "Collaborative Care",
      description: "Education, validation, and practical tools",
    },
  ];

  return (
    <section id="coaching" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            ADHD Coaching Melbourne
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            ADHD Coaching and Intervention Program
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            ADHD is a lifelong neurodevelopmental condition affecting attention, impulse control, 
            energy regulation, executive functioning and emotional regulation. It presents differently 
            for everyone including inattention, hyperactivity, impulsivity, and difficulties with organisation.
          </p>
        </div>

        <Card className="mb-16 bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Why Get an ADHD Assessment in Melbourne?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              There remains significant misinformation and stigma around ADHD, often leading to missed 
              diagnoses and confusion. If you or someone you care about shows common signs of ADHD, 
              a comprehensive assessment is a vital first step toward clarity and improved wellbeing. 
              Medicare rebates are available for initial screening and coaching sessions.
            </p>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            How the ADHD Program Works
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {programSteps.map((step, index) => (
              <Card 
                key={index}
                className="hover-elevate"
                data-testid={`program-step-${index}`}
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
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Our ADHD Treatment Approach
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPoints.map((point, index) => (
              <Card 
                key={index}
                data-testid={`approach-point-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {point.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-accent/10 border-accent/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Collaborative ADHD Care in Melbourne
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our registered psychologists integrate evidence based assessment with a neuroscience informed perspective. 
                  We emphasise collaboration, supporting clients with education, validation, and practical tools 
                  rather than prescriptive or one size fits all methods.
                </p>
                <Button 
                  onClick={onBookClick}
                  data-testid="button-coaching-book"
                >
                  Start Your ADHD Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
