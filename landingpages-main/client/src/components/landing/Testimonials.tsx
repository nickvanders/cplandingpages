import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Getting assessed at Contemporary Psychology was life-changing. For the first time, I understood why I struggled with certain things my whole life. The team was incredibly supportive throughout the entire process.",
      author: "Michael R.",
      relationship: "Adult Assessment Client",
      rating: 5,
    },
    {
      quote: "The coaching sessions have been transformative. Dr. Chen helped me develop practical strategies that actually work for my daily life. I'm more organized and productive than I've ever been.",
      author: "Jennifer L.",
      relationship: "Coaching Client",
      rating: 5,
    },
    {
      quote: "The comprehensive report was incredibly detailed and helpful. It gave me the documentation I needed and clear recommendations for moving forward. Highly recommend their services.",
      author: "David K.",
      relationship: "Assessment Client",
      rating: 5,
    },
    {
      quote: "From the initial consultation to the final feedback session, I felt heard and understood. The team's expertise in adult ADHD is evident in everything they do.",
      author: "Amanda S.",
      relationship: "Adult Assessment Client",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from individuals who have transformed their understanding of 
            ADHD through our assessment and coaching services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-elevate"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent/40 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.relationship}
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
