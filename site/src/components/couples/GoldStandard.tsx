import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield } from "lucide-react";

export default function GoldStandard() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex gap-3 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                  Evidence-Based Couples Counselling in Melbourne
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Contemporary Psychology we provide couples counselling for partners who want to improve 
                  communication, rebuild trust, deepen connection or navigate ongoing conflict. We work with 
                  couples at all stages of their relationship. We use the Gottman Method which is one of the 
                  most research-supported approaches to couples therapy available. Our role is to provide a 
                  safe, neutral and structured space where both partners can be heard.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
