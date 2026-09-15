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
    <form onSubmit={submit} className="border border-[#DDD9D0] bg-white p-5 md:p-6" noValidate>
      <div className="mb-5 border-b border-[#DDD9D0] pb-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88A5A]">Inquiry Form</p>
        <h2 className="mt-1.5 text-xl font-bold text-[#202321]">Vehicle details</h2>
      </div>

      {errors.length ? (
        <div className="mb-4 border border-[#A88A5A]/45 bg-[#F5F3EE] p-3 text-sm text-[#202321]" role="alert">
          {errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" value={values.fullName} onChange={(value) => update("fullName", value)} required />
        <Field label="Email" type="email" value={values.email} onChange={(value) => update("email", value)} />
        <Field label="Phone / WhatsApp" value={values.phone} onChange={(value) => update("phone", value)} required />
        <label className="grid gap-1.5 text-sm font-semibold text-[#202321]">
          Vehicle Brand
          <select value={values.brand} onChange={(event) => update("brand", event.target.value)} className="border border-[#DDD9D0] bg-[#F8F6F0] px-3 py-2.5 text-sm font-semibold outline-none transition focus:border-[#A88A5A]">
            <option>Mercedes-Benz</option>
            <option>BMW</option>
            <option>Audi</option>
          </select>
        </label>
        <Field label="Vehicle Model" value={values.model} onChange={(value) => update("model", value)} required />
        <Field label="Model Year" value={values.year} onChange={(value) => update("year", value)} required />
        <Field label="Required Part" value={values.part} onChange={(value) => update("part", value)} required className="md:col-span-2" />
        <label className="grid gap-1.5 text-sm font-semibold text-[#202321] md:col-span-2">
          Message
          <textarea value={values.message} onChange={(event) => update("message", event.target.value)} rows={4} className="border border-[#DDD9D0] bg-[#F8F6F0] px-3 py-2.5 text-sm font-semibold outline-none transition focus:border-[#A88A5A]" />
        </label>
      </div>
      <button type="submit" className="mt-4 w-full bg-[#202321] px-6 py-3 text-sm font-bold text-[#F5F3EE] transition hover:bg-[#151716]">
        Send Inquiry on WhatsApp
      </button>
      <p className="mt-3 text-xs leading-5 text-[#73766F]">This form opens WhatsApp with your inquiry details. You can also email info@newbenzautoparts.com.</p>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", required = false, className = "" }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean; className?: string }) {
  return (
    <label className={`grid gap-1.5 text-sm font-semibold text-[#202321] ${className}`}>
      {label}{required ? <span className="sr-only"> required</span> : null}
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="border border-[#DDD9D0] bg-[#F8F6F0] px-3 py-2.5 text-sm font-semibold outline-none transition focus:border-[#A88A5A]" />
    </label>
  );
}
