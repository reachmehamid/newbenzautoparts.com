import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getGeneralWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact New Benz Auto Parts",
  description: "Contact New Benz Auto Parts by WhatsApp or email for Mercedes-Benz, BMW, and Audi parts inquiries.",
  openGraph: { title: "Contact New Benz Auto Parts", description: "Send vehicle details and required part information through WhatsApp." },
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-300">Contact Us</p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Send your vehicle details and required part.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-300">Looking for a specific Mercedes-Benz, BMW, or Audi part? Send us your vehicle details and the part you need. We'll help you identify the correct category and confirm fitment.</p>
          <div className="mt-8"><WhatsAppButton href={getGeneralWhatsAppUrl()} >Chat on WhatsApp</WhatsAppButton></div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <aside className="space-y-5">
            <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-zinc-950/5 ring-1 ring-zinc-200">
              <h2 className="text-2xl font-black text-zinc-950">Contact details</h2>
              <div className="mt-6 grid gap-4 text-zinc-700">
                <Link href="mailto:info@newbenzautoparts.com" className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-4 font-semibold"><Mail className="h-5 w-5 text-red-700" /> info@newbenzautoparts.com</Link>
                <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-4 font-semibold"><Phone className="h-5 w-5 text-red-700" /> {whatsappDisplay}</Link>
              </div>
            </div>
            <div className="rounded-[2rem] bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-950/10">
              <MessageCircle className="mb-4 h-8 w-8 text-red-300" />
              <h2 className="text-2xl font-black">WhatsApp is the primary inquiry channel.</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">The contact form creates a WhatsApp message. It does not send email because no backend or form service is configured.</p>
            </div>
          </aside>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
