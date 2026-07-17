import { Phone, Menu } from "lucide-react";
import { PHONE, PHONE_HREF, BOOK_URL, MAIN_SITE } from "./constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-cp-rule">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={MAIN_SITE} className="flex items-center gap-3">
          <img src="/favicon.png" alt="Contemporary Psychology" className="h-8 w-8" />
          <span className="font-lora font-bold text-[#071B27] text-sm leading-tight">
            Contemporary<br />Psychology
          </span>
        </a>
        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-2 rounded-full border border-cp-rule text-[#071B27] font-poppins text-sm font-medium hover:border-brand-purple transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a href={BOOK_URL} className="hidden sm:flex cp-gradient-bg text-white px-4 py-2 rounded-full font-poppins text-sm font-medium hover:opacity-90 transition-opacity">
            Book Online
          </a>
          <a href={`${MAIN_SITE}/menu`} className="sm:hidden p-2 text-cp-body">
            <Menu className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
