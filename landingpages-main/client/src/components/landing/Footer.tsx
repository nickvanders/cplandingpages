import { Phone, Mail, MapPin } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import logoImage from "@assets/Screenshot_2025-12-04_at_1.58.41_pm-removebg-preview_1764817148139.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "ADHD Assessment", href: "#assessment" },
    { label: "ADHD Coaching", href: "#coaching" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Contemporary Psychology" 
                className="h-12 w-12 object-contain"
                data-testid="footer-logo"
              />
              <div>
                <span className="font-heading font-semibold text-background text-lg">Contemporary</span>
                <span className="font-heading text-accent font-semibold text-lg ml-1">Psychology</span>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              Melbourne's trusted psychology clinic providing comprehensive ADHD assessment 
              and coaching services. In-person at St Kilda and telehealth Australia-wide.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    data-testid={`footer-link-${index}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-background/70 text-sm">03 9081 4270</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-background/70 text-sm">reception@contemporarypsychology.com.au</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-background/70 text-sm">
                  St Kilda<br />
                  Melbourne, Victoria
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              &copy; {currentYear} Contemporary Psychology. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-background/50 hover:text-background/70 transition-colors text-sm"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-background/50 hover:text-background/70 transition-colors text-sm"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-background/50 hover:text-background/70 transition-colors text-sm"
                data-testid="link-accessibility"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
