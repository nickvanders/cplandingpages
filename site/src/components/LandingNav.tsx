import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const MAIN = "https://contemporarypsychology.com.au";
const PHONE = "03 9081 4270";
const BOOK_URL = `${MAIN}/book-online`;

const navLinks = [
  { label: "Services",          href: `${MAIN}/services` },
  { label: "Our Team",          href: `${MAIN}/our-team` },
  { label: "Pricing & Rebates", href: `${MAIN}/pricing-rebates` },
  { label: "FAQ",               href: `${MAIN}/faq` },
  { label: "Contact",           href: `${MAIN}/contact` },
];

export default function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-[#E2DCEF] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href={MAIN} className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/favicon.png"
              alt="Contemporary Psychology"
              className="h-10 w-auto"
            />
            <span className="hidden sm:block font-bold text-[#1A1A2E] text-sm leading-tight font-lora">
              Contemporary<br />Psychology
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-md text-sm font-medium text-[#3D3D5C] hover:text-[#1A1A2E] hover:bg-[#F8F7FD] transition-colors font-poppins"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#E2DCEF] text-[#3D3D5C] hover:border-[#F2506A] hover:text-[#F2506A] text-sm font-semibold px-4 py-2 transition-colors font-poppins"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
            <a
              href={BOOK_URL}
              className="hidden md:inline-flex items-center rounded-full text-white text-sm font-semibold px-5 py-2 transition-opacity hover:opacity-90 font-poppins"
              style={{ background: "linear-gradient(135deg, #F2506A 0%, #B67AEC 50%, #9B51E0 100%)" }}
            >
              Book Online
            </a>
            <button
              className="lg:hidden p-2 rounded-md text-[#3D3D5C] hover:bg-[#F8F7FD] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E2DCEF] bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-[#3D3D5C] hover:text-[#1A1A2E] hover:bg-[#F8F7FD] transition-colors font-poppins"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E2DCEF] flex flex-col gap-2">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-full text-white text-sm font-semibold px-5 py-2.5 font-poppins"
              style={{ background: "linear-gradient(135deg, #F2506A 0%, #B67AEC 50%, #9B51E0 100%)" }}
            >
              <Phone className="h-4 w-4" />
              Call {PHONE}
            </a>
            <a
              href={BOOK_URL}
              className="block text-center rounded-full text-sm font-semibold px-5 py-2.5 border-2 border-[#1A1A2E] text-[#1A1A2E] font-poppins"
            >
              Book Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
