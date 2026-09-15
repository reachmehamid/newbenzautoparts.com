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
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-[#A88A5A]">Contact</p>
            <h1 className="font-display mt-5 max-w-xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] text-[#202321] md:text-8xl">Tell Us What Your Car Needs.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#73766F]">Send us your vehicle details and the part you are looking for. We'll help you identify the relevant category and confirm compatibility.</p>

            <div className="mt-10 grid gap-4">
              <Link href="mailto:info@newbenzautoparts.com" className="group flex items-center gap-4 border border-[#DDD9D0] bg-white p-5">
                <Mail className="h-5 w-5 text-[#A88A5A]" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#73766F]">Email</span>
                  <span className="font-semibold text-[#202321] group-hover:text-[#A88A5A]">info@newbenzautoparts.com</span>
                </span>
              </Link>
              <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border border-[#DDD9D0] bg-white p-5">
                <Phone className="h-5 w-5 text-[#A88A5A]" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#73766F]">WhatsApp</span>
                  <span className="font-semibold text-[#202321] group-hover:text-[#A88A5A]">{whatsappDisplay}</span>
                </span>
              </Link>
            </div>

            <div className="mt-8 border border-[#DDD9D0] bg-[#151716] p-6 text-[#F5F3EE]">
              <MessageCircle className="mb-5 h-7 w-7 text-[#A88A5A]" />
              <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">WhatsApp inquiry first.</h2>
              <p className="mt-3 text-sm leading-7 text-[#C8C2B7]">The form prepares your message for WhatsApp. It does not pretend to send an email without a configured backend.</p>
              <div className="mt-6">
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
