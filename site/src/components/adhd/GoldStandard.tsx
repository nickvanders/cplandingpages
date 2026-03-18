import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Brain } from "lucide-react";

export default function GoldStandard() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex gap-3 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                  Gold Standard ADHD Assessment in Melbourne
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our ADHD assessments are conducted by registered psychologists using scientifically validated, 
                  empirically supported diagnostic methods. We follow the gold standard assessment protocol 
                  recommended by leading ADHD research institutions, combining comprehensive clinical interviews, 
                  psychometric testing, and collateral information gathering to ensure accurate diagnosis and 
                  personalised treatment recommendations for adults and adolescents across Melbourne and Australia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
