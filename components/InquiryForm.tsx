"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  brand: "Mercedes-Benz",
  model: "",
  year: "",
  part: "",
  message: "",
};

export function InquiryForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<string[]>([]);

  function update(field: keyof typeof initialState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = [];
    if (!values.fullName.trim()) nextErrors.push("Full name is required.");
    if (!values.phone.trim()) nextErrors.push("Phone / WhatsApp is required.");
    if (!values.model.trim()) nextErrors.push("Vehicle model is required.");
    if (!values.year.trim()) nextErrors.push("Model year is required.");
    if (!values.part.trim()) nextErrors.push("Required part is required.");
    setErrors(nextErrors);
    if (nextErrors.length) return;

    const message = `Assalam o Alaikum, I would like to send an inquiry to New Benz Auto Parts.

Full Name: ${values.fullName}
Email: ${values.email || "Not provided"}
Phone / WhatsApp: ${values.phone}
Vehicle Brand: ${values.brand}
Vehicle Model: ${values.model}
Model Year: ${values.year}
Required Part: ${values.part}
Message: ${values.message || "Not provided"}

Please help me confirm availability, price, and compatibility.

Thank you.`;

    window.open(getGeneralWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-[#E5E5E3] bg-white p-6 md:p-8" noValidate>
      <div className="mb-6 border-b border-[#E5E5E3] pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8943E]">Inquiry Form</p>
        <h2 className="mt-1 text-xl font-bold text-[#1A1A1A]">Vehicle details</h2>
      </div>

      {errors.length ? (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          {errors.map((e) => <p key={e}>{e}</p>)}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Full Name" value={values.fullName} onChange={(v) => update("fullName", v)} required />
        <Input label="Email" type="email" value={values.email} onChange={(v) => update("email", v)} />
        <Input label="Phone / WhatsApp" value={values.phone} onChange={(v) => update("phone", v)} required />
        <Select label="Vehicle Brand" value={values.brand} onChange={(v) => update("brand", v)} options={["Mercedes-Benz", "BMW", "Audi"]} />
        <Input label="Vehicle Model" value={values.model} onChange={(v) => update("model", v)} required />
        <Input label="Model Year" value={values.year} onChange={(v) => update("year", v)} required />
        <Input label="Required Part" value={values.part} onChange={(v) => update("part", v)} required className="md:col-span-2" />
        <label className="grid gap-1.5 text-sm font-semibold text-[#1A1A1A] md:col-span-2">
          Message
          <textarea value={values.message} onChange={(e) => update("message", e.target.value)} rows={4} className="rounded-xl border border-[#E5E5E3] bg-[#F5F5F3] px-4 py-3 text-sm outline-none transition placeholder:text-[#999] focus:border-[#B8943E]" />
        </label>
      </div>

      <button type="submit" className="mt-5 w-full rounded-full bg-[#B8943E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#A07E30]">
        Send Inquiry on WhatsApp
      </button>
      <p className="mt-3 text-[12px] text-[#6B6B6B]">Opens WhatsApp with your details. You can also email info@newbenzautoparts.com.</p>
    </form>
  );
}

function Input({ label, value, onChange, type = "text", required = false, className = "" }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; className?: string }) {
  return (
    <label className={`grid gap-1.5 text-sm font-semibold text-[#1A1A1A] ${className}`}>
      {label}{required && <span className="text-red-500">*</span>}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="rounded-xl border border-[#E5E5E3] bg-[#F5F5F3] px-4 py-3 text-sm outline-none transition placeholder:text-[#999] focus:border-[#B8943E]" />
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="grid gap-1.5 text-sm font-semibold text-[#1A1A1A]">
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-xl border border-[#E5E5E3] bg-[#F5F5F3] px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#B8943E]">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
