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
<<<<<<< HEAD
    <form onSubmit={submit} className="border border-[#DDD9D0] bg-white p-6 md:p-8" noValidate>
      <div className="mb-8 border-b border-[#DDD9D0] pb-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#A88A5A]">Inquiry Form</p>
        <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#202321]">Vehicle details</h2>
      </div>

      {errors.length ? (
        <div className="mb-6 border border-[#A88A5A]/45 bg-[#F5F3EE] p-4 text-sm font-semibold text-[#202321]" role="alert">
          {errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      ) : null}

=======
    <form onSubmit={submit} className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-zinc-950/10 ring-1 ring-zinc-200 sm:p-8" noValidate>
      {errors.length ? (
        <div className="mb-6 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-800" role="alert">
          {errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      ) : null}
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" value={values.fullName} onChange={(value) => update("fullName", value)} required />
        <Field label="Email" type="email" value={values.email} onChange={(value) => update("email", value)} />
        <Field label="Phone / WhatsApp" value={values.phone} onChange={(value) => update("phone", value)} required />
<<<<<<< HEAD
        <label className="grid gap-2 text-sm font-bold text-[#202321]">
          Vehicle Brand
          <select value={values.brand} onChange={(event) => update("brand", event.target.value)} className="border border-[#DDD9D0] bg-[#F8F6F0] px-4 py-3 font-semibold outline-none transition focus:border-[#A88A5A]">
=======
        <label className="grid gap-2 text-sm font-bold text-zinc-900">
          Vehicle Brand
          <select value={values.brand} onChange={(event) => update("brand", event.target.value)} className="rounded-2xl border border-zinc-200 px-4 py-3 font-medium outline-none ring-red-700/20 focus:border-red-700 focus:ring-4">
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
            <option>Mercedes-Benz</option>
            <option>BMW</option>
            <option>Audi</option>
          </select>
        </label>
        <Field label="Vehicle Model" value={values.model} onChange={(value) => update("model", value)} required />
        <Field label="Model Year" value={values.year} onChange={(value) => update("year", value)} required />
        <Field label="Required Part" value={values.part} onChange={(value) => update("part", value)} required className="md:col-span-2" />
<<<<<<< HEAD
        <label className="grid gap-2 text-sm font-bold text-[#202321] md:col-span-2">
          Message
          <textarea value={values.message} onChange={(event) => update("message", event.target.value)} rows={5} className="border border-[#DDD9D0] bg-[#F8F6F0] px-4 py-3 font-semibold outline-none transition focus:border-[#A88A5A]" />
        </label>
      </div>
      <button type="submit" className="mt-6 w-full rounded-full bg-[#202321] px-6 py-3.5 text-sm font-extrabold text-[#F5F3EE] transition hover:bg-[#151716]">
        Send Inquiry on WhatsApp
      </button>
      <p className="mt-4 text-sm leading-6 text-[#73766F]">This form opens WhatsApp with your inquiry details. It does not send email because no email backend is configured. You can also email info@newbenzautoparts.com.</p>
=======
        <label className="grid gap-2 text-sm font-bold text-zinc-900 md:col-span-2">
          Message
          <textarea value={values.message} onChange={(event) => update("message", event.target.value)} rows={5} className="rounded-2xl border border-zinc-200 px-4 py-3 font-medium outline-none ring-red-700/20 focus:border-red-700 focus:ring-4" />
        </label>
      </div>
      <button type="submit" className="mt-6 w-full rounded-full bg-red-700 px-6 py-4 text-sm font-black text-white shadow-lg shadow-red-950/20 transition hover:bg-red-600">
        Send Inquiry on WhatsApp
      </button>
      <p className="mt-4 text-sm leading-6 text-zinc-500">This form opens WhatsApp with your inquiry details. You can also email info@newbenzautoparts.com.</p>
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
    </form>
  );
}

function Field({ label, value, onChange, type = "text", required = false, className = "" }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean; className?: string }) {
  return (
<<<<<<< HEAD
    <label className={`grid gap-2 text-sm font-bold text-[#202321] ${className}`}>
      {label}{required ? <span className="sr-only"> required</span> : null}
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="border border-[#DDD9D0] bg-[#F8F6F0] px-4 py-3 font-semibold outline-none transition focus:border-[#A88A5A]" />
=======
    <label className={`grid gap-2 text-sm font-bold text-zinc-900 ${className}`}>
      {label}{required ? <span className="sr-only"> required</span> : null}
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="rounded-2xl border border-zinc-200 px-4 py-3 font-medium outline-none ring-red-700/20 focus:border-red-700 focus:ring-4" />
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
    </label>
  );
}
