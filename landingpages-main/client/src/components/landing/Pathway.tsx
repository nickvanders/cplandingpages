import { Phone, ClipboardList, FileText, Sparkles } from "lucide-react";

export default function Pathway() {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Free Intake Call",
      description: "Book a free intake call with our admin team who will match you with the right ADHD psychologist.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "ADHD Assessment",
      description: "Comprehensive evaluation using clinical interviews and evidence-based psychometric instruments.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Diagnosis & Plan",
      description: "Receive your diagnosis with a personalized treatment plan and recommendations.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Coaching Program",
      description: "Begin the ADHD Coaching Program for understanding, acceptance, and practical skill building.",
    },
  ];

  return (
    <section id="pathway" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Your Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            The Path to Understanding
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our structured approach ensures a thorough, supportive experience from your first 
            inquiry through to ongoing care.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative"
                data-testid={`pathway-step-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <span className="text-accent font-heading font-bold text-sm mb-2">
                    Step {step.number}
                  </span>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
