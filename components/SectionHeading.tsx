type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A88A5A]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-[#202321] md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-[#73766F] md:text-base">{description}</p> : null}
    </div>
  );
}
