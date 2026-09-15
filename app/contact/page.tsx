import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getGeneralWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "Contact New Benz Auto Parts" },
  description: "Contact New Benz Auto Parts by WhatsApp or email for Mercedes-Benz, BMW, and Audi parts inquiries.",
  openGraph: { title: "Contact New Benz Auto Parts", description: "Send vehicle details and required part information through WhatsApp." },
};

export default function ContactPage() {
  return (
    <main className="bg-[#F5F3EE]">
      <section>
        <div className="container-px mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88A5A]">Contact</p>
            <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#202321] md:text-5xl">Tell Us What Your Car Needs.</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#73766F]">Send your vehicle details and the part you are looking for. We will help you identify the category and confirm compatibility.</p>

            <div className="mt-6 grid gap-3">
              <Link href="mailto:info@newbenzautoparts.com" className="group flex items-center gap-3 border border-[#DDD9D0] bg-white p-4">
                <Mail className="h-4 w-4 text-[#A88A5A]" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#73766F]">Email</span>
                  <span className="text-sm font-semibold text-[#202321] group-hover:text-[#A88A5A]">info@newbenzautoparts.com</span>
                </span>
              </Link>
              <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 border border-[#DDD9D0] bg-white p-4">
                <Phone className="h-4 w-4 text-[#A88A5A]" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#73766F]">WhatsApp</span>
                  <span className="text-sm font-semibold text-[#202321] group-hover:text-[#A88A5A]">{whatsappDisplay}</span>
                </span>
              </Link>
            </div>

            <div className="mt-6 border border-[#DDD9D0] bg-[#151716] p-5 text-[#F5F3EE]">
              <MessageCircle className="mb-3 h-5 w-5 text-[#A88A5A]" />
              <h2 className="text-lg font-bold">WhatsApp inquiry first.</h2>
              <p className="mt-1.5 text-xs leading-5 text-[#C8C2B7]">The form prepares your message for WhatsApp. It does not pretend to send an email without a configured backend.</p>
              <div className="mt-4">
                <WhatsAppButton href={getGeneralWhatsAppUrl()} variant="outline" className="border-[#A88A5A] text-[#F5F3EE] hover:bg-[#F5F3EE] hover:text-[#202321]">Open WhatsApp</WhatsAppButton>
              </div>
            </div>
          </aside>

          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
