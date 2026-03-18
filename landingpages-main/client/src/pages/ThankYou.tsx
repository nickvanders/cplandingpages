import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function ThankYou() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'form_submission',
      'formSource': 'adhd_landing_page',
      'conversionType': 'lead'
    });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <Card className="max-w-lg w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Thank You for Your Enquiry
            </h1>
            
            <p className="text-muted-foreground mb-6">
              We've received your details and a member of our team will be in touch 
              within 1 to 2 business days to discuss your ADHD assessment.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground mb-2">
                Need to speak with us sooner?
              </p>
              <a 
                href="tel:0390814270" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                data-testid="link-phone-thankyou"
              >
                <Phone className="w-4 h-4" />
                03 9081 4270
              </a>
            </div>
            
            <Link href="/">
              <Button variant="outline" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}
