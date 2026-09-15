type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
<<<<<<< HEAD
      {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#A88A5A]">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-[#202321] md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-[#73766F] md:text-lg">{description}</p> : null}
=======
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-700">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-zinc-600">{description}</p> : null}
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
    </div>
  );
}
