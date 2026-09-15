import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { getGeneralWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "Contact Us" },
  description: "Contact New Benz Auto Parts via WhatsApp or email for Mercedes-Benz, BMW, and Audi parts inquiries.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F5F5F3]">
      <section className="py-10 lg:py-16">
        <div className="container-site mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8943E]">Contact</p>
            <h1 className="mt-2 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Get in Touch</h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#6B6B6B]">Send your vehicle details and the part you need. We will help you confirm availability and compatibility.</p>

            <div className="mt-6 grid gap-3">
              <Link href="mailto:info@newbenzautoparts.com" className="flex items-center gap-3 rounded-xl border border-[#E5E5E3] bg-white p-4 transition hover:shadow-md">
                <Mail className="h-4 w-4 text-[#B8943E]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B6B6B]">Email</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">info@newbenzautoparts.com</p>
                </div>
              </Link>
              <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-[#E5E5E3] bg-white p-4 transition hover:shadow-md">
                <Phone className="h-4 w-4 text-[#B8943E]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B6B6B]">WhatsApp</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{whatsappDisplay}</p>
                </div>
              </Link>
            </div>

            <div className="mt-6 rounded-2xl bg-[#111111] p-6 text-white">
              <MessageCircle className="mb-3 h-5 w-5 text-[#B8943E]" />
              <h2 className="text-lg font-bold">WhatsApp is the fastest way.</h2>
              <p className="mt-1.5 text-xs leading-5 text-white/50">We respond within minutes during business hours. Send your vehicle details and required part.</p>
              <Link
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#B8943E] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#A07E30]"
              >
                Open WhatsApp
              </Link>
            </div>
          </aside>

          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
